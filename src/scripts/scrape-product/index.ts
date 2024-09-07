import { db } from "~/database/prisma";

import { client } from "~/integrations/lie-nielsen";

import { cli } from "~/scripts";

const script: cli.Script = async context => {
  const product = await cli.getProductPositionalArgument({ required: true });

  const response = await client.scrapeProduct(product.slug, { strict: true });
  const processed = response.process();
  if (!processed.isValid) {
    return cli.error("The processed response is not valid!");
  }
  const shouldSync = cli.getBooleanCliArgument("sync", { defaultValue: false });
  if (shouldSync) {
    await processed.syncProduct(db, product, context);
  }
};

cli.runScript(script, { upsertUser: false });
