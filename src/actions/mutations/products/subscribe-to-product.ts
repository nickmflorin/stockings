"use server";
import { uniq } from "lodash-es";
import { type z } from "zod";

import { getAuthedUser } from "~/application/auth/server";
import { db } from "~/database";
import { ProductStatus, enhance, type ApiProductSubscription } from "~/database/model";

import { type MutationActionResponse } from "~/actions";
import { ProductSubscriptionSchema } from "~/actions/schemas";

import { ApiClientGlobalError, ApiClientFormError } from "~/api";

export const subscribeToProduct = async (
  productId: string,
  data: z.infer<typeof ProductSubscriptionSchema>,
): Promise<MutationActionResponse<ApiProductSubscription | null>> => {
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
        message: "The user is already subscribed to this product.",
      }).json,
    };
  }

  const product = await enhanced.product.findUnique({ where: { id: productId } });
  if (!product) {
    return { error: ApiClientGlobalError.NotFound({}).json };
  }

  const parsed = ProductSubscriptionSchema.safeParse(data);
  if (!parsed.success) {
    return {
      error: ApiClientFormError.fromZodError({ error: parsed.error }).json,
    };
  }
  const { statusChange, priceChange, enabled } = parsed.data;

  // Do not create a subscription if nothing is enabled.
  if (!enabled || (!statusChange.enabled && !priceChange.enabled)) {
    return { data: null };
  }

  // Sanity checks
  if (priceChange.enabled && priceChange.conditions.length === 0) {
    throw new Error(
      "Detected empty array of price change conditions for an enabled price change " +
        "subscription!  This should be prevented by the schema validation.",
    );
  } else if (statusChange.enabled && statusChange.conditions.length === 0) {
    throw new Error(
      "Detected empty array of status change conditions for an enabled status change " +
        "subscription!  This should be prevented by the schema validation.",
    );
  }

  const result: ApiProductSubscription = await enhanced.productSubscription.create({
    include: { priceChange: true, statusChange: { include: { conditions: true } } },
    data: {
      enabled: true,
      productId: product.id,
      createdById: user.id,
      updatedById: user.id,
      userId: user.id,
      statusChange: statusChange.enabled
        ? {
            create: {
              enabled: true,
              conditions: {
                createMany: {
                  data: statusChange.conditions.map(condition => {
                    if (condition.id !== undefined) {
                      throw new Error("");
                    }
                    return {
                      anyFromStatus:
                        condition.anyFromStatus ||
                        Object.values(ProductStatus).length === uniq(condition.fromStatus).length,
                      anyToStatus:
                        condition.anyToStatus ||
                        Object.values(ProductStatus).length === uniq(condition.toStatus).length,
                      /* Uniqueness should be guaranteed by the schema, but we still ensure
                       uniqueness here just in case. */
                      fromStatus: uniq(condition.fromStatus),
                      /* Uniqueness should be guaranteed by the schema, but we still ensure
                       uniqueness here just in case. */
                      toStatus: uniq(condition.toStatus),
                    };
                  }),
                },
              },
            },
          }
        : undefined,
      priceChange: priceChange.enabled
        ? {
            create: {
              enabled: true,
              /* Uniqueness should be guaranteed by the schema, but we still ensure uniqueness
                 here just in case. */
              conditions: uniq(priceChange.conditions),
            },
          }
        : undefined,
    },
  });
  return { data: result };
};
