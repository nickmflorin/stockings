"use server";
import { getAuthedUser } from "~/application/auth/server";
import { UnreachableCaseError } from "~/application/errors";
import { enhance, ProductSubscriptionType } from "~/database/model";
import { db } from "~/database/prisma";

import { type MutationActionResponse } from "~/actions";

import { ApiClientGlobalError } from "~/api";

export const deleteProductSubscription = async (
  id: string,
): Promise<MutationActionResponse<{ message: string }>> => {
  const { user, error, isAdmin } = await getAuthedUser();
  if (error) {
    return { error: error.json };
  }

  const enhanced = enhance(db, { user }, { kinds: ["delegate"] });

  const subscription = await enhanced.productSubscription.findUnique({
    where: { id },
  });
  if (!subscription) {
    return { error: ApiClientGlobalError.NotFound({}).json };
  } else if (subscription.userId !== user.id && !isAdmin) {
    return {
      error: ApiClientGlobalError.Forbidden({
        message: "You do not have permission to modify this subscription.",
      }).json,
    };
  }
  return enhanced.$transaction(async tx => {
    if (subscription.subscriptionType === ProductSubscriptionType.PriceChangeSubscription) {
      await tx.priceChangeNotification.deleteMany({
        where: { subscriptionId: subscription.id },
      });
      await tx.productSubscription.delete({ where: { id: subscription.id } });
    } else if (subscription.subscriptionType === ProductSubscriptionType.StatusChangeSubscription) {
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
