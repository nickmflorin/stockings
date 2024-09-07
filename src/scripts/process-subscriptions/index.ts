import { db } from "~/database/prisma";

import { cli } from "~/scripts";

import { processProductSubscriptions } from "./process-product-subscriptions";
import { processSubscriptions } from "./process-subscriptions";

const script: cli.Script = async ctx => {
  const _product = await cli.getProductPositionalArgument({ required: false });

  const maximumLookback = cli.getIntegerCliArgument("max-lookback", {});
  if (maximumLookback !== undefined && process.env.NODE_ENV !== "development") {
    return cli.error("Can only specify a maximum lookback in development mode!");
  }

  const maximumRecords = cli.getIntegerCliArgument("max-records", {});
  if (maximumRecords !== undefined && process.env.NODE_ENV !== "development") {
    return cli.error("Can only specify a maximum records in development mode!");
  }

  const clean = cli.getBooleanCliArgument("clean", { defaultValue: false });
  if (clean && process.env.NODE_ENV !== "development") {
    return cli.error("Can only clean subscriptions in development mode!");
  }

  if (!_product) {
    return await processSubscriptions({ maximumLookback, maximumRecords }, ctx);
  }
  const product = await db.product.findUniqueOrThrow({
    where: { id: _product.id },
    include: { records: { orderBy: [{ timestamp: "desc" }] } },
  });
  await processProductSubscriptions({ product, clean, maximumLookback, maximumRecords }, ctx);
};

cli.runScript(script);
