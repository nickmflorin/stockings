import { chunk } from "lodash-es";

import { db } from "~/database/prisma";

import { cli } from "~/scripts";
import { parseBooleanFlagCliArgument } from "~/scripts/cli";
import { getProductScriptContext } from "~/scripts/context";

import { simulateProductRecordsData } from "./simulate-product-records-data";

const RECORDS_BATCH_SIZE = 200;

async function main() {
  if (process.env.NODE_ENV !== "development") {
    return cli.error("Script can only be run in development mode!");
  }

  const { product, ...ctx } = await getProductScriptContext({ upsertUser: false });

  const clean = parseBooleanFlagCliArgument("clean");
  if (clean) {
    cli.info(`Deleting previously processed notifications for product '${product.slug}'...`);
    await db.productNotification.deleteMany({
      where: { productId: product.id },
    });

    cli.info(`Deleting product records for product '${product.slug}'...`);
    await db.productRecord.deleteMany({ where: { productId: product.id } });
  }

  const recs = simulateProductRecordsData(product, ctx);
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
}

cli.runScript(main);
