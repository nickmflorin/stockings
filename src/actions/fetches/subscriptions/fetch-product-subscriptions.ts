import { cache } from "react";

import { getAuthedUser } from "~/application/auth/server";
import { db } from "~/database";
import type { FullProductSubscription, User } from "~/database/model";
import { enhance, SubscriptionType } from "~/database/model";
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
} from "~/actions";

import { type SubscriptionsTableControls } from "~/features/subscriptions";

const filtersClause = (filters: Partial<SubscriptionsTableControls["filters"]>) =>
  conditionalFilters([
    filters.search ? { product: constructTableSearchClause("product", filters.search) } : undefined,
    filters.types && filters.types.length !== 0
      ? { subscriptionType: { in: filters.types } }
      : undefined,
  ] as const);

const whereClause = ({
  filters,
  user,
}: Pick<SubscriptionsTableControls, "filters"> & { readonly user: User }) => {
  const clause = filtersClause(filters);
  if (clause.length !== 0) {
    return { AND: [...clause, { userId: user.id }] };
  }
  return { userId: user.id };
};

export const fetchProductSubscriptionsPagination = cache(
  async <C extends FetchActionContext>(
    { filters, page: _page }: Pick<SubscriptionsTableControls, "filters" | "page">,
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
    params: Pick<SubscriptionsTableControls, "filters" | "page">,
    context: C,
  ): Promise<FetchActionResponse<ServerSidePaginationParams, C>>;
};

const _fetchProductSubscriptions = async <C extends FetchActionContext>(
  { filters, page: _page, ordering }: SubscriptionsTableControls,
  context: C,
): Promise<FetchActionResponse<FullProductSubscription[], C>> => {
  const { user, error } = await getAuthedUser();
  if (error) {
    return errorInFetchContext(error, context);
  }

  const {
    data: { page, pageSize },
  } = await fetchProductSubscriptionsPagination({ filters, page: _page }, { strict: true });

  const enhanced = enhance(db, { user }, { kinds: ["delegate"] });
  const data = await enhanced.productSubscription.findMany({
    where: whereClause({ filters, user }),
    orderBy: [{ [ordering.field]: ordering.order }],
    skip: pageSize * (page - 1),
    take: pageSize,
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
