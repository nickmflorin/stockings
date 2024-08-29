"use server";
import { uniq } from "lodash-es";
import { type z } from "zod";

import { getAuthedUser } from "~/application/auth/server";
import {
  enhance,
  type ApiStatusChangeSubscription,
  ProductSubscriptionType,
} from "~/database/model";
import { db } from "~/database/prisma";

import { type MutationActionResponse } from "~/actions";
import { StatusChangeSubscriptionSchema } from "~/actions/schemas";

import { ApiClientGlobalError, ApiClientFormError, convertToPlainObject } from "~/api";

export const subscribeToStatusChanges = async (
  productId: string,
  data: z.infer<typeof StatusChangeSubscriptionSchema>,
): Promise<MutationActionResponse<ApiStatusChangeSubscription>> => {
  const { user, error } = await getAuthedUser();
  if (error) {
    return { error: error.json };
  }

  const enhanced = enhance(db, { user }, { kinds: ["delegate"] });

  const subscription = await enhanced.productSubscription.findFirst({
    where: {
      productId,
      userId: user.id,
      subscriptionType: ProductSubscriptionType.StatusChangeSubscription,
    },
  });
  if (subscription) {
    return {
      error: ApiClientGlobalError.BadRequest({
        message: "The user is already subscribed to this product.",
      }).json,
    };
  }

  const product = await enhanced.product.findUnique({ where: { id: productId } });
  if (!product) {
    return { error: ApiClientGlobalError.NotFound({}).json };
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

  return convertToPlainObject({
    data: await enhanced.statusChangeSubscription.create({
      include: { conditions: true },
      data: {
        enabled,
        productId: product.id,
        createdById: user.id,
        updatedById: user.id,
        userId: user.id,
        conditions: {
          createMany: {
            data: conditions.map(condition => {
              if (condition.id !== undefined) {
                throw new Error(
                  "Unexpectedly encountered condition with an ID when the subscription " +
                    "does not yet exist!",
                );
              }
              return {
                /* Uniqueness should be guaranteed by the schema, but we still ensure uniqueness
                   here just in case. */
                fromStatus: uniq(condition.fromStatus),
                /* Uniqueness should be guaranteed by the schema, but we still ensure uniqueness
                   here just in case. */
                toStatus: uniq(condition.toStatus),
              };
            }),
          },
        },
      },
    }),
  });
};
