import { cache } from "react";

import { getAuthedUser } from "~/application/auth/server";
import type { FullProductSubscription, User } from "~/database/model";
import { enhance, SubscriptionType } from "~/database/model";
import { db } from "~/database/prisma";
import { conditionalFilters } from "~/database/util";

import {
  constructTableSearchClause,
  PAGE_SIZES,
  type FetchActionContext,
  type FetchActionResponse,
  errorInFetchContext,
  dataInFetchContext,
  type ServerSidePaginationParams,
  clampPagination,
  type SubscriptionsControls,
} from "~/actions";

const filtersClause = (filters: Partial<SubscriptionsControls["filters"]>) =>
  conditionalFilters([
    filters.search ? { product: constructTableSearchClause("product", filters.search) } : undefined,
    filters.products && filters.products.length !== 0
      ? { productId: { in: filters.products } }
      : undefined,
    filters.types && filters.types.length !== 0
      ? { subscriptionType: { in: filters.types } }
      : undefined,
  ] as const);

const whereClause = ({
  filters,
  user,
}: {
  readonly filters?: Partial<SubscriptionsControls["filters"]>;
  readonly user: User;
}) => {
  const clause = filters ? filtersClause(filters) : [];
  if (clause.length !== 0) {
    return { AND: [...clause, { userId: user.id }] };
  }
  return { userId: user.id };
};

export const fetchProductSubscriptionsPagination = cache(
  async <C extends FetchActionContext>(
    {
      filters,
      page: _page,
    }: { page: SubscriptionsControls["page"]; filters?: Partial<SubscriptionsControls["filters"]> },
    context: C,
  ): Promise<FetchActionResponse<ServerSidePaginationParams, C>> => {
    const { user, error } = await getAuthedUser();
    if (error) {
      return errorInFetchContext(error, context);
    }
    const count = await db.productSubscription.count({
      where: whereClause({ filters, user }),
    });
    return dataInFetchContext(
      clampPagination({ count, page: _page, pageSize: PAGE_SIZES.productSubscription }),
      context,
    );
  },
) as {
  <C extends FetchActionContext>(
    params: {
      page: SubscriptionsControls["page"];
      filters?: Partial<SubscriptionsControls["filters"]>;
    },
    context: C,
  ): Promise<FetchActionResponse<ServerSidePaginationParams, C>>;
};

const _fetchProductSubscriptions = async <C extends FetchActionContext>(
  {
    filters,
    page,
    ordering,
  }: {
    ordering?: SubscriptionsControls["ordering"];
    filters?: Partial<SubscriptionsControls["filters"]>;
    page?: number;
  },
  context: C,
): Promise<FetchActionResponse<FullProductSubscription[], C>> => {
  const { user, error } = await getAuthedUser();
  if (error) {
    return errorInFetchContext(error, context);
  }

  let pagination: Pick<ServerSidePaginationParams, "page" | "pageSize"> | null = null;
  if (page) {
    ({ data: pagination } = await fetchProductSubscriptionsPagination(
      { filters, page },
      { strict: true },
    ));
  }

  const enhanced = enhance(db, { user }, { kinds: ["delegate"] });
  const data = await enhanced.productSubscription.findMany({
    where: whereClause({ filters, user }),
    orderBy: ordering
      ? ordering.orderBy === "product"
        ? [{ product: { name: ordering.order } }, { id: "asc" }]
        : [{ [ordering.orderBy]: ordering.order }, { id: "asc" }]
      : undefined,
    skip: pagination ? pagination.pageSize * (pagination.page - 1) : undefined,
    take: pagination ? pagination.pageSize : undefined,
    include: { product: true },
  });
  const conditions = await enhanced.statusChangeSubscriptionCondition.findMany({
    where: {
      subscriptionId: {
        in: data
          .filter(d => d.subscriptionType === SubscriptionType.StatusChangeSubscription)
          .map(d => d.id),
      },
    },
  });
  const priceChangeCounts = await enhanced.priceChangeNotification.groupBy({
    by: ["subscriptionId"],
    _count: { id: true },
  });
  const statusChangeCounts = await enhanced.statusChangeNotification.groupBy({
    by: ["subscriptionId"],
    _count: { id: true },
  });

  const getNotificationsCount = (subscriptionId: string) =>
    (priceChangeCounts.find(ct => ct.subscriptionId === subscriptionId)?._count.id ?? 0) +
    (statusChangeCounts.find(ct => ct.subscriptionId === subscriptionId)?._count.id ?? 0);

  return dataInFetchContext(
    data.map((subscription): FullProductSubscription => {
      if (subscription.subscriptionType === SubscriptionType.StatusChangeSubscription) {
        return {
          ...subscription,
          notificationsCount: getNotificationsCount(subscription.id),
          conditions: conditions.filter(c => c.subscriptionId === subscription.id),
        } as FullProductSubscription;
      }
      return {
        ...subscription,
        notificationsCount: getNotificationsCount(subscription.id),
      } as FullProductSubscription;
    }),
    context,
  );
};

export const fetchProductSubscriptions = cache(
  _fetchProductSubscriptions,
) as typeof _fetchProductSubscriptions;
