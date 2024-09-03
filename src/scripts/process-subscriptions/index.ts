/* eslint-disable no-console */
import { db } from "~/database/prisma";
import { logger } from "~/internal/logger";

import { isUuid } from "~/lib/typeguards";

import { cli } from "~/scripts";
import { getScriptContext } from "~/scripts/context";

import { processProductSubscriptions } from "./process-product-subscriptions";
import { processSubscriptions } from "./process-subscriptions";

logger.modify({ includeContext: false, level: "info" });

async function main() {
  const ctx = await getScriptContext({ upsertUser: false });
  const productIdentifier = process.argv.slice(2)[0];

  const maximumLookback = cli.parseIntegerCliArgument("max-lookback");
  if (maximumLookback !== null && process.env.NODE_ENV !== "development") {
    throw new Error("Can only clean subscriptions in development mode!");
  }

  if (!productIdentifier) {
    return await processSubscriptions({ maximumLookback }, ctx);
  }
  const product = await db.product.findUnique({
    where: isUuid(productIdentifier) ? { id: productIdentifier } : { slug: productIdentifier },
    include: { records: { orderBy: [{ timestamp: "desc" }] } },
  });
  if (!product) {
    if (isUuid(productIdentifier)) {
      return console.error(`A product with the ID '${productIdentifier}' does not exist!`);
    }
    return console.error(`A product with the slug '${productIdentifier}' does not exist!`);
  }
  const clean = cli.parseBooleanFlagCliArgument("clean");
  if (clean && process.env.NODE_ENV !== "development") {
    throw new Error("Can only clean subscriptions in development mode!");
  }
  await processProductSubscriptions({ product, clean, maximumLookback }, ctx);
}

cli.runScript(main);
