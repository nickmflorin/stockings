/* eslint-disable no-console */
import { chunk } from "lodash-es";

import { db } from "~/database/prisma";
import { logger } from "~/internal/logger";

import { parseBooleanFlagCliArgument } from "~/scripts/cli";
import { getProductScriptContext } from "~/scripts/context";
import { seedRecords } from "~/scripts/seed/seed-records";

logger.modify({ includeContext: false, level: "info" });

const RECORDS_BATCH_SIZE = 200;

async function main() {
  if (process.env.NODE_ENV !== "development") {
    throw new Error("Script can only be run in development mode!");
  }

  const { product, ...ctx } = await getProductScriptContext({ upsertUser: false });

  const clean = parseBooleanFlagCliArgument("clean");
  if (clean) {
    logger.info(`Deleting previously processed notifications for product '${product.slug}'...`);
    await db.productNotification.deleteMany({
      where: { productId: product.id },
    });

    logger.info(`Deleting product records for product '${product.slug}'...`);
    await db.productRecord.deleteMany({ where: { productId: product.id } });
  }

  const recs = seedRecords(product, ctx);
  const batches = chunk(recs, RECORDS_BATCH_SIZE);
  for (let b = 0; b < batches.length; b++) {
    console.info(
      `Creating '${batches[b].length}' records for product '${product.slug}' in batch ` +
        `'${b + 1}/${batches.length}'...`,
    );
    await db.productRecord.createMany({
      data: batches[b].map(r => ({ ...r, createdAt: r.createdAt.toJSDate() })),
    });
  }
}

main()
  .then(async () => {
    console.info("Script Finished - Disconnecting from DB...");
    await db.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
