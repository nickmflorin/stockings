import { chunk } from "lodash-es";

import { fixtures } from "~/database/fixtures";
import {
  type Product,
  type PriceChangeSubscription,
  type StatusChangeSubscription,
  type ApiProductSubscription,
} from "~/database/model";
import { db } from "~/database/prisma";
import { logger } from "~/internal/logger";

import { randomBoolean } from "~/lib/random";

import { type ScriptContext } from "../context";

import { seedSubscription } from "./seed-subscriptions";

const BATCH_SIZE = 50;

const SubscriptionFrequency = 0.4;

const seedProductBatch = async (
  jsonProducts: (typeof fixtures.products)[number][],
  ctx: ScriptContext,
): Promise<[Product[], ApiProductSubscription[]]> => {
  const products = await Promise.all(
    jsonProducts.map(jsonProduct =>
      db.product.create({
        data: {
          ...jsonProduct,
          createdById: ctx.user.id,
          updatedById: ctx.user.id,
        },
      }),
    ),
  );

  return [
    products,
    (
      await Promise.all(
        products.reduce(
          (prev, product) => {
            if (!randomBoolean({ positiveFrequency: SubscriptionFrequency })) {
              return prev;
            }
            return [...prev, seedSubscription(product, ctx)];
          },
          [] as Promise<[StatusChangeSubscription | null, PriceChangeSubscription | null]>[],
        ),
      )
    )
      .flat()
      .filter((sub): sub is ApiProductSubscription => sub !== null),
  ];
};

export const seedProducts = async (ctx: ScriptContext) => {
  const batches = chunk(fixtures.products, BATCH_SIZE);
  for (let i = 0; i < batches.length; i++) {
    const [products, subscriptions] = await seedProductBatch(batches[i], ctx);
    logger.info(
      `Created '${products.length}' products and ` +
        `'${subscriptions.length}' subscriptions in batch '${i + 1}/${batches.length}'...`,
    );
  }
};
