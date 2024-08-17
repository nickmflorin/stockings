"use server";
import { getAuthedUser } from "~/application/auth/server";
import { UnreachableCaseError } from "~/application/errors";
import { db } from "~/database";
import { enhance, SubscriptionType } from "~/database/model";

import { type MutationActionResponse } from "~/actions";

import { ApiClientGlobalError } from "~/api";

export const deleteSubscription = async (
  id: string,
): Promise<MutationActionResponse<{ message: string }>> => {
  const { user, error } = await getAuthedUser();
  if (error) {
    return { error: error.json };
  }

  const enhanced = enhance(db, { user }, { kinds: ["delegate"] });

  const subscription = await enhanced.productSubscription.findUnique({
    where: { id },
  });
  if (!subscription) {
    return { error: ApiClientGlobalError.NotFound({}).json };
  } else if (subscription.userId !== user.id) {
    return {
      error: ApiClientGlobalError.Forbidden({
        message: "You do not have permission to modify this subscription.",
      }).json,
    };
  }

  return enhanced.$transaction(async tx => {
    if (subscription.subscriptionType === SubscriptionType.PriceChangeSubscription) {
      await tx.priceChangeNotification.deleteMany({
        where: { subscriptionId: subscription.id },
      });
      await tx.productSubscription.delete({ where: { id: subscription.id } });
    } else if (subscription.subscriptionType === SubscriptionType.StatusChangeSubscription) {
      await tx.statusChangeSubscriptionCondition.deleteMany({
        where: { subscriptionId: subscription.id },
      });
      await tx.statusChangeNotification.deleteMany({
        where: { subscriptionId: subscription.id },
      });
      await tx.statusChangeSubscription.delete({ where: { id: subscription.id } });
    } else {
      throw new UnreachableCaseError("Invalid subscription!");
    }
    return { data: { message: "Success" } };
  });
};
