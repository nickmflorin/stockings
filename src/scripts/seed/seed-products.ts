import { chunk } from "lodash-es";

import { fixtures } from "~/database/fixtures";
import {
  type Product,
  type PriceChangeSubscription,
  type StatusChangeSubscription,
  type ApiProductSubscription,
} from "~/database/model";
import { db } from "~/database/prisma";

import { randomBoolean } from "~/lib/random";

import { cli } from "~/scripts";
import { seedSubscription } from "~/scripts/common/seed-subscription";

const BATCH_SIZE = 50;
const SubscriptionFrequency = 0.4;

const seedProductBatch = async (
  jsonProducts: (typeof fixtures.products)[number][],
  ctx: cli.ScriptContext,
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
  const users = await db.user.findMany({});
  return [
    products,
    (
      await Promise.all(
        products.reduce(
          (prev, product) =>
            users.reduce((acc, user) => {
              if (!randomBoolean({ positiveFrequency: SubscriptionFrequency })) {
                return acc;
              }
              return [...acc, seedSubscription({ product, user }, ctx)];
            }, prev),
          [] as Promise<[StatusChangeSubscription | null, PriceChangeSubscription | null]>[],
        ),
      )
    )
      .flat()
      .filter((sub): sub is ApiProductSubscription => sub !== null),
  ];
};

export const seedProducts = async (ctx: cli.ScriptContext) => {
  const batches = chunk(fixtures.products, BATCH_SIZE);
  for (let i = 0; i < batches.length; i++) {
    const [products, subscriptions] = await seedProductBatch(batches[i], ctx);
    cli.info(
      `Created '${products.length}' products and ` +
        `'${subscriptions.length}' subscriptions in batch '${i + 1}/${batches.length}'...`,
    );
  }
};
