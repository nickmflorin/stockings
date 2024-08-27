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

import { seedRecords, type RecordDatum } from "./seed-records";
import { seedSubscription } from "./seed-subscriptions";

const BATCH_SIZE = 50;
const RECORDS_BATCH_SIZE = 500;

const SubscriptionFrequency = 0.4;

const seedRecordsBatch = async (records: RecordDatum[]) => {
  const result = await db.productRecord.createMany({
    data: records.map(r => ({ ...r, createdAt: r.createdAt.toJSDate() })),
  });
  return result.count;
};

const seedProductBatch = async (
  jsonProducts: (typeof fixtures.products)[number][],
  ctx: ScriptContext,
): Promise<[Product[], number, ApiProductSubscription[]]> => {
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

  let totalRecordsCount = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const recs = seedRecords(product, ctx);
    const batches = chunk(recs, RECORDS_BATCH_SIZE);
    for (let b = 0; b < batches.length; b++) {
      logger.info(
        `Creating '${recs.length}' records for product '${product.slug}' in batch ` +
          `'${b + 1}/${batches.length}'...`,
      );
      totalRecordsCount += await seedRecordsBatch(batches[b]);
    }
  }

  return [
    products,
    totalRecordsCount,
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
    const [products, records, subscriptions] = await seedProductBatch(batches[i], ctx);
    logger.info(
      `Created '${products.length}' products, '${records}' records and ` +
        `'${subscriptions.length}' subscriptions in batch '${i + 1}/${batches.length}'...`,
    );
  }
};
