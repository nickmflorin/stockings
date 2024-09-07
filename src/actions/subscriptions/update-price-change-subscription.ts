"use server";
import { uniq } from "lodash-es";
import { type z } from "zod";

import { getAuthedUser } from "~/application/auth/server";
import { enhance, type PriceChangeSubscription } from "~/database/model";
import { db } from "~/database/prisma";

import { type MutationActionResponse } from "~/actions";
import { PriceChangeSubscriptionSchema } from "~/actions/schemas";

import { convertToPlainObject, ApiClientGlobalError, ApiClientFormError } from "~/api";

export const updatePriceChangeSubscription = async (
  subscriptionId: string,
  data: z.infer<typeof PriceChangeSubscriptionSchema>,
): Promise<MutationActionResponse<PriceChangeSubscription>> => {
  const { user, error, isAdmin } = await getAuthedUser();
  if (error) {
    return { error: error.json };
  }

  const enhanced = enhance(db, { user }, { kinds: ["delegate"] });

  const subscription = await enhanced.priceChangeSubscription.findUnique({
    where: { id: subscriptionId },
  });
  if (!subscription) {
    return { error: ApiClientGlobalError.NotFound({}).json };
  } else if (subscription.userId !== user.id && !isAdmin) {
    return {
      error: ApiClientGlobalError.Forbidden({
        message: "You do not have permission to access to this subscription.",
      }).json,
    };
  }

  const parsed = PriceChangeSubscriptionSchema.safeParse(data);
  if (!parsed.success) {
    return {
      error: ApiClientFormError.fromZodError({ error: parsed.error }).json,
    };
  }
  const { enabled, conditions } = parsed.data;

  // Sanity checks
  if (enabled && conditions.length === 0) {
    throw new Error(
      "Detected empty array of price change conditions for an enabled price change " +
        "subscription!  This should be prevented by the schema validation.",
    );
  }

  const result = await enhanced.priceChangeSubscription.update({
    where: { id: subscription.id },
    data: {
      enabled,
      updatedById: user.id,
      conditions: uniq(conditions),
    },
  });
  return { data: convertToPlainObject(result) };
};
