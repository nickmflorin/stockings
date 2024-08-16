import { cache } from "react";

import { getAuthedUser } from "~/application/auth/server";
import { db } from "~/database";
import type { FullProductSubscription, User } from "~/database/model";
import { enhance, SubscriptionType } from "~/database/model";
import { conditionalFilters } from "~/database/util";

import { PAGE_SIZES } from "~/actions";

import { type SubscriptionsTableControls } from "~/features/subscriptions";

import { convertToPlainObject } from "~/api/serialization";

const filtersClause = (filters: Partial<SubscriptionsTableControls["filters"]>) =>
  conditionalFilters([
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

export const fetchProductSubscriptionsCount = cache(
  async ({ filters }: Pick<SubscriptionsTableControls, "filters">) => {
    const { user } = await getAuthedUser({ strict: true });
    return await db.productSubscription.count({
      where: whereClause({ filters, user }),
    });
  },
);

export const fetchProductSubscriptions = cache(
  async ({ filters, page }: SubscriptionsTableControls): Promise<FullProductSubscription[]> => {
    const { user } = await getAuthedUser({ strict: true });
    const enhanced = enhance(db, { user }, { kinds: ["delegate"] });
    const data = await enhanced.productSubscription.findMany({
      where: whereClause({ filters, user }),
      // orderBy: [{ [ordering.field]: ordering.order }],
      skip: PAGE_SIZES.productSubscription * (Math.max(1, page) - 1),
      take: PAGE_SIZES.productSubscription,
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

    const getCount = (subscriptionId: string) =>
      (priceChangeCounts.find(ct => ct.subscriptionId === subscriptionId)?._count.id ?? 0) +
      (statusChangeCounts.find(ct => ct.subscriptionId === subscriptionId)?._count.id ?? 0);

    return data.map((subscription): FullProductSubscription => {
      if (subscription.subscriptionType === SubscriptionType.StatusChangeSubscription) {
        return convertToPlainObject({
          ...subscription,
          notificationsCount: getCount(subscription.id),
          conditions: conditions.filter(c => c.subscriptionId === subscription.id),
        } as FullProductSubscription);
      }
      return convertToPlainObject({
        ...subscription,
        notificationsCount: getCount(subscription.id),
      } as FullProductSubscription);
    });
  },
);
