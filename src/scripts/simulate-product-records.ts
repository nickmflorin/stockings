/* eslint-disable no-console */
import { chunk } from "lodash-es";

import { db } from "~/database/prisma";
import { logger } from "~/internal/logger";
import { LogLevel } from "~/internal/loggers/constants";

import { isUuid } from "~/lib/typeguards";

import { getScriptContext } from "~/scripts/context";
import { seedRecords } from "~/scripts/seed/seed-records";

logger.level = LogLevel.INFO;

const RECORDS_BATCH_SIZE = 200;

async function main() {
  const productIdentifier = process.argv.slice(2)[0];
  if (!productIdentifier) {
    return console.error(
      "A valid product slug or ID must be provided as the first positional argument.",
    );
  }
  const product = await db.product.findUnique({
    where: isUuid(productIdentifier) ? { id: productIdentifier } : { slug: productIdentifier },
  });
  if (!product) {
    if (isUuid(productIdentifier)) {
      return console.error(`A product with the ID '${productIdentifier}' does not exist!`);
    }
    return console.error(`A product with the slug '${productIdentifier}' does not exist!`);
  }
  const ctx = await getScriptContext({ upsertUser: true });
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
