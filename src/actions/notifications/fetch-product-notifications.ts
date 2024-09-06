import { cache } from "react";

import { type Required } from "utility-types";

import { getAuthedUser } from "~/application/auth/server";
import type { ProductNotificationIncludes, User, ApiProductNotification } from "~/database/model";
import { enhance, fieldIsIncluded } from "~/database/model";
import { db } from "~/database/prisma";
import { conditionalFilters, constructOrSearch } from "~/database/util";

import { filtersHaveField } from "~/lib/filters";

import {
  type ActionVisibility,
  visibilityIsAdmin,
  ProductNotificationsOrderingMap,
  ProductNotificationsFiltersOptions,
  PAGE_SIZES,
  type FetchActionContext,
  type FetchActionResponse,
  type ServerSidePaginationParams,
  errorInFetchContext,
  dataInFetchContext,
  clampPagination,
  type ProductNotificationsControls,
} from "~/actions";

import { ApiClientGlobalError } from "~/api";

const filtersClause = (filters: ProductNotificationsControls["filters"]) =>
  conditionalFilters([
    filters.search
      ? { product: constructOrSearch(filters.search, ["name", "code", "slug"]) }
      : undefined,
    filters.states && filters.states.length !== 0 ? { state: { in: filters.states } } : undefined,
    filters.types && filters.types.length !== 0
      ? { notificationType: { in: filters.types } }
      : undefined,
    filters.mediums && filters.mediums.length !== 0
      ? { mediums: { hasSome: filters.mediums } }
      : undefined,
    filters.products && filters.products.length !== 0
      ? { product: { id: { in: filters.products } } }
      : undefined,
    filters.users && filters.users.length !== 0
      ? { user: { id: { in: filters.users } } }
      : undefined,
  ] as const);

const whereClause = ({
  filters,
  user,
  visibility,
}: {
  readonly filters?: ProductNotificationsControls["filters"];
  readonly user: User;
  readonly visibility: ActionVisibility;
}) => {
  const clause = filters ? filtersClause(filters) : [];
  if (visibilityIsAdmin(visibility)) {
    return { AND: clause };
  }
  if (clause.length !== 0) {
    return { AND: [...clause, { userId: user.id }] };
  }
  return { userId: user.id };
};

export const fetchProductNotificationsCount = cache(
  async <C extends FetchActionContext>(
    {
      filters,
      visibility,
    }: {
      readonly filters: ProductNotificationsControls["filters"];
      readonly visibility: ActionVisibility;
    },
    context: C,
  ): Promise<FetchActionResponse<{ count: number }, C>> => {
    const { user, error, isAdmin } = await getAuthedUser();
    if (error) {
      return errorInFetchContext(error, context);
    } else if (visibilityIsAdmin(visibility) && !isAdmin) {
      const error = ApiClientGlobalError.Forbidden({
        message: "The user does not have permission to access this data.",
      });
      return errorInFetchContext(error, context);
    }
    const count = await db.productNotification.count({
      where: whereClause({ filters, user, visibility }),
    });
    return dataInFetchContext({ count }, context);
  },
) as {
  <C extends FetchActionContext>(
    params: {
      readonly filters: ProductNotificationsControls["filters"];
      readonly visibility: ActionVisibility;
    },
    context: C,
  ): Promise<FetchActionResponse<{ count: number }, C>>;
};

export const fetchProductNotificationsPagination = cache(
  async <C extends FetchActionContext>(
    {
      filters,
      visibility,
      page,
    }: Required<
      Pick<ProductNotificationsControls, "page" | "filters" | "visibility">,
      "page" | "visibility"
    >,
    context: C,
  ): Promise<FetchActionResponse<ServerSidePaginationParams, C>> => {
    const { user, isAdmin, error } = await getAuthedUser({ strict: true });
    if (error) {
      return errorInFetchContext(error, context);
    } else if (visibilityIsAdmin(visibility) && !isAdmin) {
      const error = ApiClientGlobalError.Forbidden({
        message: "The user does not have permission to access this data.",
      });
      return errorInFetchContext(error, context);
    } else if (
      !visibilityIsAdmin(visibility) &&
      filtersHaveField("users", filters, ProductNotificationsFiltersOptions)
    ) {
      const error = ApiClientGlobalError.Forbidden({
        message: "The user does not have permission to access this data.",
      });
      return errorInFetchContext(error, context);
    }
    const count = await db.productNotification.count({
      where: whereClause({ filters, user, visibility }),
    });
    return dataInFetchContext(
      clampPagination({ count, page, pageSize: PAGE_SIZES.notification }),
      context,
    );
  },
) as {
  <C extends FetchActionContext>(
    params: Required<
      Pick<ProductNotificationsControls, "page" | "filters" | "visibility">,
      "page" | "visibility"
    >,
    context: C,
  ): Promise<FetchActionResponse<ServerSidePaginationParams, C>>;
};

export const fetchProductNotifications = cache(
  async <C extends FetchActionContext, I extends ProductNotificationIncludes>(
    {
      filters,
      page,
      limit,
      ordering,
      includes,
      visibility = "public",
    }: ProductNotificationsControls<I>,
    context: C,
  ): Promise<FetchActionResponse<ApiProductNotification<I>[], C>> => {
    const { user, isAdmin, error } = await getAuthedUser({ strict: true });
    if (error) {
      return errorInFetchContext(error, context);
    } else if (visibilityIsAdmin(visibility) && !isAdmin) {
      const error = ApiClientGlobalError.Forbidden({
        message: "The user does not have permission to access this data.",
      });
      return errorInFetchContext(error, context);
    } else if (
      !visibilityIsAdmin(visibility) &&
      (fieldIsIncluded("user", includes) ||
        filtersHaveField("users", filters, ProductNotificationsFiltersOptions))
    ) {
      const error = ApiClientGlobalError.Forbidden({
        message: "The user does not have permission to access this data.",
      });
      return errorInFetchContext(error, context);
    }

    const enhanced = enhance(db, { user }, { kinds: ["delegate"] });

    let pagination: Pick<ServerSidePaginationParams, "page" | "pageSize"> | null = null;
    if (page) {
      /* Note: The reason that this is strict is because the checks that would otherwise throw an
         error have already been performed in this method above, so we can be confident that they
         will not throw (or at least, should not throw) in the 'fetchProductSubscriptionsPagination'
         method. */
      ({ data: pagination } = await fetchProductNotificationsPagination(
        { filters, page, visibility },
        { strict: true },
      ));
    }

    const data = await enhanced.productNotification.findMany({
      where: whereClause({ filters, user, visibility }),
      include: {
        user: isAdmin && fieldIsIncluded("user", includes),
        product: fieldIsIncluded("product", includes),
      },
      orderBy: [
        ...ProductNotificationsOrderingMap[ordering.orderBy](ordering.order),
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

    const notifications = data as ApiProductNotification<[]>[] as ApiProductNotification<I>[];
    return dataInFetchContext(notifications, context);
  },
) as {
  <C extends FetchActionContext, I extends ProductNotificationIncludes>(
    params: ProductNotificationsControls<I>,
    context: C,
  ): Promise<FetchActionResponse<ApiProductNotification<I>[], C>>;
};
