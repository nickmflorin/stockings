"use server";
import { uniq } from "lodash-es";
import { type z } from "zod";

import { getAuthedUser } from "~/application/auth/server";
import { db } from "~/database";
import {
  type ApiProductSubscription,
  enhance,
  type StatusChangeEventCondition,
} from "~/database/model";

import { type MutationActionResponse } from "~/actions";
import { ProductSubscriptionSchema } from "~/actions/schemas";

import { convertToPlainObject, ApiClientGlobalError, ApiClientFormError } from "~/api";

export const updateProductSubscription = async (
  subscriptionId: string,
  data: z.infer<typeof ProductSubscriptionSchema>,
): Promise<MutationActionResponse<ApiProductSubscription | null>> => {
  const { user, error } = await getAuthedUser();
  if (error) {
    return { error: error.json };
  }

  const enhanced = enhance(db, { user }, { kinds: ["delegate"] });

  const subscription = await enhanced.productSubscription.findUnique({
    where: { id: subscriptionId },
    include: { priceChange: true, statusChange: { include: { conditions: true } } },
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

  const parsed = ProductSubscriptionSchema.safeParse(data);
  if (!parsed.success) {
    return {
      error: ApiClientFormError.fromZodError({ error: parsed.error }).json,
    };
  }
  const { statusChange, priceChange, enabled } = parsed.data;

  const conditionsToUpdate = statusChange.conditions.filter(
    (condition): condition is Omit<typeof condition, "id"> & { id: string } =>
      condition.id !== undefined,
  );

  const conditionToData = (
    condition: Pick<StatusChangeEventCondition, "fromStatus" | "toStatus">,
  ) => ({
    /* Uniqueness should be guaranteed by the schema, but we still ensure
     uniqueness here just in case. */
    fromStatus: uniq(condition.fromStatus),
    /* Uniqueness should be guaranteed by the schema, but we still ensure
     uniqueness here just in case. */
    toStatus: uniq(condition.toStatus),
  });

  const result = await enhanced.productSubscription.update({
    where: { id: subscription.id },
    include: { priceChange: true, statusChange: { include: { conditions: true } } },
    data: {
      enabled,
      updatedById: user.id,
      priceChange: enabled
        ? {
            upsert: {
              update: { enabled: priceChange.enabled, conditions: uniq(priceChange.conditions) },
              create: { enabled: priceChange.enabled, conditions: uniq(priceChange.conditions) },
            },
          }
        : undefined,
      statusChange: enabled
        ? {
            upsert: {
              update: {
                enabled: statusChange.enabled,
                conditions: {
                  deleteMany: {
                    id: { notIn: conditionsToUpdate.map(condition => condition.id) },
                  },
                  createMany: {
                    data: statusChange.conditions
                      .filter(condition => condition.id === undefined)
                      .map(conditionToData),
                  },
                  updateMany: conditionsToUpdate.map(condition => ({
                    where: { id: condition.id },
                    data: conditionToData(condition),
                  })),
                },
              },
              create: {
                enabled: statusChange.enabled,
                conditions: {
                  createMany: {
                    data: statusChange.conditions
                      .filter(condition => condition.id === undefined)
                      .map(conditionToData),
                  },
                },
              },
            },
          }
        : undefined,
    },
  });
  return { data: convertToPlainObject(result) };
};
