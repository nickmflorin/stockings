/* eslint-disable no-console */
import { db } from "~/database/prisma";
import { logger } from "~/internal/logger";

import { client } from "~/integrations/lie-nielsen";

import { getScriptContext } from "~/scripts/context";

import { parseBooleanFlagCliArgument } from "./cli";

logger.modify({ includeContext: false, level: "info" });

async function main() {
  const productSlug = process.argv.slice(2)[0];
  if (!productSlug) {
    console.error("A valid product slug must be provided as the first positional argument.");
    return;
  }
  const response = await client.scrapeProduct(productSlug, { strict: true });
  const processed = response.process();
  if (!processed.isValid) {
    return console.error(processed.enumeratedErrors);
  }
  const shouldSync = parseBooleanFlagCliArgument("sync");
  if (shouldSync) {
    const product = await db.product.findUniqueOrThrow({ where: { slug: productSlug } });
    const { user } = await getScriptContext({ upsertUser: true });
    await processed.syncProduct(db, product, { user });
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
