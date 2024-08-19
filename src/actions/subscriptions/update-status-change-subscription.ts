"use server";
import { uniq } from "lodash-es";
import { type z } from "zod";

import { getAuthedUser } from "~/application/auth/server";
import {
  type ApiStatusChangeSubscription,
  enhance,
  type StatusChangeSubscriptionCondition,
} from "~/database/model";
import { db } from "~/database/prisma";

import { type MutationActionResponse } from "~/actions";
import { StatusChangeSubscriptionSchema } from "~/actions/schemas";

import { convertToPlainObject, ApiClientGlobalError, ApiClientFormError } from "~/api";

export const updateStatusChangeSubscription = async (
  subscriptionId: string,
  data: z.infer<typeof StatusChangeSubscriptionSchema>,
): Promise<MutationActionResponse<ApiStatusChangeSubscription>> => {
  const { user, error } = await getAuthedUser();
  if (error) {
    return { error: error.json };
  }

  const enhanced = enhance(db, { user }, { kinds: ["delegate"] });

  const subscription = await enhanced.statusChangeSubscription.findUnique({
    where: { id: subscriptionId },
    include: { conditions: true },
  });
  if (!subscription) {
    return { error: ApiClientGlobalError.NotFound({}).json };
  } else if (subscription.userId !== user.id) {
    return {
      error: ApiClientGlobalError.Forbidden({
        message: "You do not have permission to access to this subscription.",
      }).json,
    };
  }

  const parsed = StatusChangeSubscriptionSchema.safeParse(data);
  if (!parsed.success) {
    return {
      error: ApiClientFormError.fromZodError({ error: parsed.error }).json,
    };
  }
  const { enabled, conditions } = parsed.data;

  // Sanity checks
  if (enabled && conditions.length === 0) {
    throw new Error(
      "Detected empty array of status change conditions for an enabled status change " +
        "subscription!  This should be prevented by the schema validation.",
    );
  }

  const conditionsToUpdate = conditions.filter(
    (condition): condition is Omit<typeof condition, "id"> & { id: string } =>
      condition.id !== undefined,
  );

  const conditionToData = (
    condition: Pick<StatusChangeSubscriptionCondition, "fromStatus" | "toStatus">,
  ) => ({
    /* Uniqueness should be guaranteed by the schema, but we still ensure
       uniqueness here just in case. */
    fromStatus: uniq(condition.fromStatus),
    /* Uniqueness should be guaranteed by the schema, but we still ensure
       uniqueness here just in case. */
    toStatus: uniq(condition.toStatus),
  });

  const result = await enhanced.statusChangeSubscription.update({
    where: { id: subscription.id },
    include: { conditions: true },
    data: {
      enabled,
      updatedById: user.id,
      conditions: {
        deleteMany: {
          id: { notIn: conditionsToUpdate.map(condition => condition.id) },
        },
        createMany: {
          data: conditions.filter(condition => condition.id === undefined).map(conditionToData),
        },
        updateMany: conditionsToUpdate.map(condition => ({
          where: { id: condition.id },
          data: conditionToData(condition),
        })),
      },
    },
  });
  return { data: convertToPlainObject(result) };
};
