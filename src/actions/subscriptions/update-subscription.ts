"use server";
import { type z } from "zod";

import { getAuthedUser } from "~/application/auth/server";
import { enhance, type ProductSubscription } from "~/database/model";
import { db } from "~/database/prisma";

import { type MutationActionResponse } from "~/actions";
import { BaseSubscriptionSchema } from "~/actions/schemas";

import { convertToPlainObject, ApiClientGlobalError, ApiClientFormError } from "~/api";

const Schema = BaseSubscriptionSchema.partial();

export const updateSubscription = async (
  id: string,
  data: z.infer<typeof Schema>,
): Promise<MutationActionResponse<ProductSubscription>> => {
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

  const parsed = Schema.safeParse(data);
  if (!parsed.success) {
    return {
      error: ApiClientFormError.fromZodError({ error: parsed.error }).json,
    };
  }
  /* Note: Since we only have access to the base polymorphic model context here, we shouldn't really
     validate whether or not the conditions have non-zero length before allowing the subscription
     to be enabled.  This is because this action is called from places where the user is only
     "enabling" or "disabling" the subscription.  We might want to revisit the non-zero length
     conditions requirement in the future, and possible relax it. */
  const { enabled } = parsed.data;

  const result = await enhanced.productSubscription.update({
    where: { id: subscription.id },
    data: {
      enabled,
      updatedById: user.id,
    },
  });
  return { data: convertToPlainObject(result) };
};
