import { chunk } from "lodash-es";

import { db } from "~/database";
import { fixtures } from "~/database/fixtures";
import {
  type Product,
  type PriceChangeSubscription,
  type StatusChangeSubscription,
} from "~/database/model";
/* eslint-disable-next-line no-restricted-imports */
import type { GetBatchResult } from "~/database/model/generated/runtime/library";
import { logger } from "~/internal/logger";

import { randomBoolean } from "~/lib/random";

import { type ScriptContext } from "../context";

import { seedRecords, type RecordDatum } from "./seed-records";
import { seedSubscription } from "./seed-subscriptions";

const BATCH_SIZE = 20;

const SubscriptionFrequency = 0.4;

const seedProductBatch = async (
  jsonProducts: (typeof fixtures.products)[number][],
  ctx: ScriptContext,
): Promise<[Product[], GetBatchResult, (StatusChangeSubscription | PriceChangeSubscription)[]]> => {
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
    await db.productRecord.createMany({
      data: products.reduce(
        (prev: (Omit<RecordDatum, "createdAt"> & { createdAt: Date })[], product: Product) => {
          const recs = seedRecords(product, ctx);
          logger.info(`Creating '${recs.length}' records for product '${product.slug}'...`);
          return [...prev, ...recs.map(r => ({ ...r, createdAt: r.createdAt.toJSDate() }))];
        },
        [],
      ),
    }),
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
      .filter((sub): sub is StatusChangeSubscription | PriceChangeSubscription => sub !== null),
  ];
};

export const seedProducts = async (ctx: ScriptContext) => {
  const batches = chunk(fixtures.products, BATCH_SIZE);
  for (let i = 0; i < batches.length; i++) {
    const [products, records, subscriptions] = await seedProductBatch(batches[i], ctx);
    logger.info(
      `Created '${products.length}' products, '${records.count}' records and ` +
        `'${subscriptions.length}' subscriptions in batch '${i + 1}/${batches.length}'...`,
    );
  }
};
