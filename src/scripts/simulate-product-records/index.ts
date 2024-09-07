import { chunk } from "lodash-es";

import { db } from "~/database/prisma";

import { cli } from "~/scripts";

import { simulateProductRecordsData } from "./simulate-product-records-data";

const RECORDS_BATCH_SIZE = 200;

const script: cli.Script = async context => {
  const product = await cli.getProductPositionalArgument({ required: true });

  const clean = cli.getBooleanCliArgument("clean", { defaultValue: false });
  if (clean) {
    cli.info(`Deleting previously processed notifications for product '${product.slug}'...`);
    await db.productNotification.deleteMany({
      where: { productId: product.id },
    });
    cli.info(`Deleting product records for product '${product.slug}'...`);
    await db.productRecord.deleteMany({ where: { productId: product.id } });
  }

  const recs = simulateProductRecordsData(product, context);
  const batches = chunk(recs, RECORDS_BATCH_SIZE);
  for (let b = 0; b < batches.length; b++) {
    cli.info(
      `Creating '${batches[b].length}' records for product '${product.slug}' in batch ` +
        `'${b + 1}/${batches.length}'...`,
    );
    await db.productRecord.createMany({
      data: batches[b].map(r => ({ ...r, createdAt: r.createdAt.toJSDate() })),
    });
  }
};

cli.runScript(script, { devOnly: true, upsertUser: true });
