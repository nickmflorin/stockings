"use server";
import { uniq } from "lodash-es";
import { type z } from "zod";

import { getAuthedUser } from "~/application/auth/server";
import { enhance } from "~/database/model";
import { db } from "~/database/prisma";

import { type MutationActionResponse } from "~/actions";
import { SubscribeToProductSchema } from "~/actions/schemas";

import { ApiClientGlobalError, ApiClientFormError } from "~/api";

export const subscribeToProduct = async (
  productId: string,
  data: z.infer<typeof SubscribeToProductSchema>,
): Promise<MutationActionResponse<{ success: true }>> => {
  const { user, error } = await getAuthedUser();
  if (error) {
    return { error: error.json };
  }

  const enhanced = enhance(db, { user }, { kinds: ["delegate"] });

  const subscription = await enhanced.productSubscription.findFirst({
    where: { productId, userId: user.id },
  });
  if (subscription) {
    return {
      error: ApiClientGlobalError.BadRequest({
        message: "The user already subscribed to this product.",
      }).json,
    };
  }

  const product = await enhanced.product.findUnique({ where: { id: productId } });
  if (!product) {
    return { error: ApiClientGlobalError.NotFound({}).json };
  }

  const parsed = SubscribeToProductSchema.safeParse(data);
  if (!parsed.success) {
    return {
      error: ApiClientFormError.fromZodError({ error: parsed.error }).json,
    };
  }
  const { priceChangeConditions, statusChangeConditions } = parsed.data;
  if (priceChangeConditions.length === 0 && statusChangeConditions.length === 0) {
    return {
      error: ApiClientGlobalError.BadRequest({
        message: "At least one type of subscription condition must be provided.",
      }).json,
    };
  }

  return await enhanced.$transaction(async tx => {
    if (priceChangeConditions.length !== 0) {
      await tx.priceChangeSubscription.create({
        data: {
          enabled: true,
          productId: product.id,
          createdById: user.id,
          updatedById: user.id,
          userId: user.id,
          /* Uniqueness should be guaranteed by the schema, but we still ensure uniqueness
             here just in case. */
          conditions: uniq(priceChangeConditions),
        },
      });
    }
    if (statusChangeConditions.length !== 0) {
      await tx.statusChangeSubscription.create({
        include: { conditions: true },
        data: {
          enabled: true,
          productId: product.id,
          createdById: user.id,
          updatedById: user.id,
          userId: user.id,
          conditions: {
            createMany: {
              data: statusChangeConditions.map(condition => {
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
      });
    }
    return { data: { success: true } };
  });
};
