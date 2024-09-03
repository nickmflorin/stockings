import { db } from "~/database/prisma";

import { client } from "~/integrations/lie-nielsen";

import { cli } from "~/scripts";
import { getScriptContext } from "~/scripts/context";

import { parseBooleanFlagCliArgument } from "./cli";

async function main() {
  const productSlug = process.argv.slice(2)[0];
  if (!productSlug) {
    return cli.error("A valid product slug must be provided as the first positional argument.");
  }
  const response = await client.scrapeProduct(productSlug, { strict: true });
  const processed = response.process();
  if (!processed.isValid) {
    return cli.error("The processed response is not valid!");
  }
  const shouldSync = parseBooleanFlagCliArgument("sync");
  if (shouldSync) {
    const product = await db.product.findUniqueOrThrow({ where: { slug: productSlug } });
    const { user } = await getScriptContext({ upsertUser: true });
    await processed.syncProduct(db, product, { user });
  }
}

cli.runScript(main);
