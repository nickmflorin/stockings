import { cache } from "react";

import { type Optional } from "utility-types";

import { getAuthedUser } from "~/application/auth/server";
import type {
  ProductNotificationIncludes,
  User,
  Product,
  ApiProductNotification,
} from "~/database/model";
import { enhance, fieldIsIncluded } from "~/database/model";
import { db } from "~/database/prisma";
import { conditionalFilters, constructOrSearch } from "~/database/util";

import type { Order } from "~/lib/ordering";

import {
  PAGE_SIZES,
  type FetchActionContext,
  type FetchActionResponse,
  type ServerSidePaginationParams,
  errorInFetchContext,
  dataInFetchContext,
  clampPagination,
  type ProductNotificationsControls,
  type ProductNotificationOrderableField,
} from "~/actions";

const filtersClause = (filters: Partial<ProductNotificationsControls["filters"]>) =>
  conditionalFilters([
    filters.search
      ? { product: constructOrSearch(filters.search, ["name", "code", "slug"]) }
      : undefined,
    filters.states && filters.states.length !== 0 ? { state: { in: filters.states } } : undefined,
    filters.types && filters.types.length !== 0
      ? { notificationType: { in: filters.types } }
      : undefined,
    filters.products && filters.products.length !== 0
      ? { product: { id: { in: filters.products } } }
      : undefined,
  ] as const);

const whereClause = ({
  filters,
  user,
}: {
  readonly filters?: Partial<ProductNotificationsControls["filters"]>;
  readonly user: User;
}) => {
  const clause = filtersClause(filters ?? {});
  if (clause.length !== 0) {
    return {
      AND: [...clause, { userId: user.id }],
    };
  }
  return {
    userId: user.id,
  };
};

export const fetchProductNotificationsCount = cache(
  async <C extends FetchActionContext>(
    { filters }: { filters: Partial<ProductNotificationsControls["filters"]> },
    context: C,
  ): Promise<FetchActionResponse<{ count: number }, C>> => {
    const { user, error } = await getAuthedUser();
    if (error) {
      return errorInFetchContext(error, context);
    }
    const count = await db.productNotification.count({
      where: whereClause({ filters, user }),
    });
    return dataInFetchContext({ count }, context);
  },
) as {
  <C extends FetchActionContext>(
    params: { filters: Partial<ProductNotificationsControls["filters"]> },
    context: C,
  ): Promise<FetchActionResponse<{ count: number }, C>>;
};

export const fetchProductNotificationsPagination = cache(
  async <C extends FetchActionContext>(
    {
      filters,
      page: _page,
    }: Pick<ProductNotificationsControls, "page"> & {
      readonly filters?: Partial<ProductNotificationsControls["filters"]>;
    },
    context: C,
  ): Promise<FetchActionResponse<ServerSidePaginationParams, C>> => {
    const { user, error } = await getAuthedUser();
    if (error) {
      return errorInFetchContext(error, context);
    }
    const count = await db.productNotification.count({
      where: whereClause({ filters, user }),
    });
    return dataInFetchContext(
      clampPagination({ count, page: _page, pageSize: PAGE_SIZES.notification }),
      context,
    );
  },
) as {
  <C extends FetchActionContext>(
    params: Pick<ProductNotificationsControls, "page"> & {
      readonly filters?: Partial<ProductNotificationsControls["filters"]>;
    },
    context: C,
  ): Promise<FetchActionResponse<ServerSidePaginationParams, C>>;
};

export const fetchProductNotifications = cache(
  async <C extends FetchActionContext, I extends ProductNotificationIncludes>(
    {
      filters,
      ordering,
      page: _page,
      limit,
      includes,
    }: Omit<Optional<ProductNotificationsControls<I>, "page" | "limit">, "filters"> & {
      readonly filters?: Partial<ProductNotificationsControls["filters"]>;
    },
    context: C,
  ): Promise<FetchActionResponse<ApiProductNotification<I>[], C>> => {
    const { user, error } = await getAuthedUser({ strict: true });
    if (error) {
      return errorInFetchContext(error, context);
    }

    const enhanced = enhance(db, { user }, { kinds: ["delegate"] });

    let pagination: Omit<ServerSidePaginationParams, "count"> | null = null;
    if (_page !== undefined) {
      ({ data: pagination } = await fetchProductNotificationsPagination(
        { filters, page: _page },
        { strict: true },
      ));
    }

    const orderingMap = {
      state: order => ({ stateAsOf: order }) as const,
      product: order => ({ product: { name: order } }) as const,
    } as const satisfies { [key in ProductNotificationOrderableField]: (order: Order) => unknown };

    const notifications = await enhanced.productNotification.findMany({
      where: whereClause({ filters, user }),
      orderBy: [
        orderingMap[ordering.orderBy](ordering.order),
        { stateAsOf: "desc" },
        { createdAt: "desc" },
        { id: "desc" },
      ],
      skip: pagination ? pagination.pageSize * (pagination.page - 1) : undefined,
      take: pagination
        ? pagination.pageSize
        : limit !== undefined && limit !== 0
          ? limit
          : undefined,
    });

    let products: { [key in string]: Product } | null = null;
    if (fieldIsIncluded("product", includes)) {
      /* The status change subscription is unique on the user and product, so this should only ever
         yield at most 1 result per product. */
      const productRecords = await enhanced.productRecord.findMany({
        where: { id: { in: notifications.map(notification => notification.productRecordId) } },
        include: { product: true },
      });
      products = productRecords.reduce(
        (prev: { [key in string]: Product }, record) => ({ ...prev, [record.id]: record.product }),
        {} as { [key in string]: Product },
      );
    }

    if (products) {
      const data = notifications.map((notification): ApiProductNotification<I> => {
        const n = notification as ApiProductNotification<I>;
        return { ...n, product: products[n.productRecordId] };
      });
      return dataInFetchContext(data, context);
    }
    return dataInFetchContext(notifications as ApiProductNotification<I>[], context);
  },
) as {
  <C extends FetchActionContext, I extends ProductNotificationIncludes>(
    params: Omit<Optional<ProductNotificationsControls<I>, "page" | "limit">, "filters"> & {
      readonly filters?: Partial<ProductNotificationsControls["filters"]>;
    },
    context: C,
  ): Promise<FetchActionResponse<ApiProductNotification<I>[], C>>;
};
