"use server";
import { difference, uniq } from "lodash-es";

import { getAuthedUser } from "~/application/auth/server";
import { enhance, SubscriptionType } from "~/database/model";
import { db } from "~/database/prisma";
import { logger } from "~/internal/logger";

import { humanizeList } from "~/lib/formatters";

import { type MutationActionResponse } from "~/actions";

import { ApiClientGlobalError } from "~/api";

export const deleteSubscriptions = async (
  _ids: string[],
): Promise<MutationActionResponse<{ message: string }>> => {
  const { user, error } = await getAuthedUser();
  if (error) {
    return { error: error.json };
  }

  const enhanced = enhance(db, { user }, { kinds: ["delegate"] });

  const ids = uniq(_ids);
  const subscriptions = await enhanced.productSubscription.findMany({
    where: { id: { in: ids }, subscriptionType: { not: SubscriptionType.NewProductSubscription } },
  });
  const invalidIds = difference(
    ids,
    subscriptions.map(s => s.id),
  );
  if (invalidIds.length !== 0) {
    const humanized = humanizeList(invalidIds, { conjunction: "and", formatter: v => `'${v}'` });
    logger.error(
      `Encountered invalid subscription ID(s) when deleting subscriptions: ${humanized}.`,
      { ids, invalidIds },
    );
    const err = ApiClientGlobalError.BadRequest({
      message: "Request contained subscription ID(s) that do not exist.",
    });
    return { error: err.json };
  } else if (subscriptions.filter(sub => sub.userId !== user.id).length !== 0) {
    logger.error(
      "Encountered subscription ID(s) associated with subscriptions that the user does not " +
        "have access to.",
      { ids, userId: user.id },
    );
    return {
      error: ApiClientGlobalError.Forbidden({
        message: "The request contained subscription ID(s) that the user does not have access to.",
      }).json,
    };
  }

  return enhanced.$transaction(async tx => {
    await tx.priceChangeNotification.deleteMany({
      where: {
        subscriptionId: {
          in: subscriptions.reduce(
            (prev, sub) =>
              sub.subscriptionType === SubscriptionType.PriceChangeSubscription
                ? [...prev, sub.id]
                : prev,
            [] as string[],
          ),
        },
      },
    });
    await tx.statusChangeSubscriptionCondition.deleteMany({
      where: {
        subscriptionId: {
          in: subscriptions.reduce(
            (prev, sub) =>
              sub.subscriptionType === SubscriptionType.StatusChangeSubscription
                ? [...prev, sub.id]
                : prev,
            [] as string[],
          ),
        },
      },
    });
    await tx.statusChangeNotification.deleteMany({
      where: {
        subscriptionId: {
          in: subscriptions.reduce(
            (prev, sub) =>
              sub.subscriptionType === SubscriptionType.StatusChangeSubscription
                ? [...prev, sub.id]
                : prev,
            [] as string[],
          ),
        },
      },
    });
    await tx.productSubscription.deleteMany({
      where: {
        id: { in: subscriptions.map(sub => sub.id) },
      },
    });
    return { data: { message: "Success" } };
  });
};
