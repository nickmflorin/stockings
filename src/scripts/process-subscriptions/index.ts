/* eslint-disable no-console */
import { db } from "~/database/prisma";
import { logger } from "~/internal/logger";
import { LogLevel } from "~/internal/loggers/constants";

import { isUuid } from "~/lib/typeguards";

import { getScriptContext } from "~/scripts/context";

import { processProductSubscriptions } from "./process-product-subscriptions";
import { processSubscriptions } from "./process-subscriptions";

logger.level = LogLevel.INFO;

async function main() {
  const ctx = await getScriptContext({ upsertUser: true });

  const productIdentifier = process.argv.slice(2)[0];
  if (!productIdentifier) {
    return await processSubscriptions(ctx);
  }
  const product = await db.product.findUnique({
    where: isUuid(productIdentifier) ? { id: productIdentifier } : { slug: productIdentifier },
    include: { records: { orderBy: [{ timestamp: "desc" }], include: { processedRecords: true } } },
  });
  if (!product) {
    if (isUuid(productIdentifier)) {
      return console.error(`A product with the ID '${productIdentifier}' does not exist!`);
    }
    return console.error(`A product with the slug '${productIdentifier}' does not exist!`);
  }
  await processProductSubscriptions(product, ctx);
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async e => {
    /* eslint-disable-next-line no-console */
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
