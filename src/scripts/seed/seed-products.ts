import { chunk } from "lodash-es";

import { db } from "~/database";
import { fixtures } from "~/database/fixtures";
import { type Product } from "~/database/model";
/* eslint-disable-next-line no-restricted-imports */
import type { GetBatchResult } from "~/database/model/generated/runtime/library";
import { logger } from "~/internal/logger";

import { type ScriptContext } from "../context";

import { seedRecords, type RecordDatum } from "./seed-records";

const BATCH_SIZE = 20;

const seedProductBatch = async (
  jsonProducts: (typeof fixtures.products)[number][],
  ctx: ScriptContext,
): Promise<[Product[], GetBatchResult]> =>
  await db.$transaction(
    async tx => {
      const products = await Promise.all(
        jsonProducts.map(product =>
          tx.product.create({
            data: {
              ...product,
              createdBy: { connect: { id: ctx.user.id } },
              updatedBy: { connect: { id: ctx.user.id } },
            },
          }),
        ),
      );
      const recordsData = products.reduce((prev: RecordDatum[], product: Product) => {
        const recs = seedRecords(product, ctx);
        logger.info(`Creating '${recs.length}' records for product '${product.slug}'...`);
        return [...prev, ...recs];
      }, []);
      const records = await tx.productRecord.createMany({
        data: recordsData.map(r => ({ ...r, createdAt: r.createdAt.toJSDate() })),
      });
      return [products, records];
    },
    { timeout: 100000 },
  );

export const seedProducts = async (ctx: ScriptContext) => {
  const batches = chunk(fixtures.products, BATCH_SIZE);
  for (let i = 0; i < batches.length; i++) {
    const [products, records] = await seedProductBatch(batches[i], ctx);
    logger.info(
      `Created '${products.length}' products and '${records.count}' records in batch '${i + 1}/${batches.length}'...`,
    );
  }
};
