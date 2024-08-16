import type { ScriptContext } from "~/scripts/context";

import { db } from "~/database";
import { enhance } from "~/database/model";
import { logger } from "~/internal/logger";

import { processRecord } from "./process-record";

export const processSubscriptions = async (ctx: ScriptContext) => {
  const enhanced = enhance(db, { user: ctx.user }, { kinds: ["delegate"] });

  const subscriptions = [
    ...(await enhanced.statusChangeSubscription.findMany({
      where: { enabled: true },
      include: { conditions: true },
    })),
    ...(await enhanced.priceChangeSubscription.findMany({ where: { enabled: true } })),
  ];

  const products = await enhanced.product.findMany({
    where: { id: { in: subscriptions.map(sub => sub.productId) } },
    include: { records: { orderBy: [{ timestamp: "desc" }], include: { processedRecords: true } } },
  });

  if (subscriptions.length === 0) {
    logger.info("No subscriptions to process.");
    return;
  }

  for (let i = 0; i < subscriptions.length; i++) {
    logger.info(`Processing subscription ${i + 1} out of ${subscriptions.length}.`);
    const subscription = subscriptions[i];
    const product = products.find(product => product.id === subscription.productId);
    if (!product) {
      throw new Error(
        "Could not find a product for associated subscription.  This should not happen, as the " +
          "products were queried based on the product FK's on the subscriptions!",
      );
    }

    const recordShouldProcess = (record: (typeof products)[number]["records"][number]) =>
      // Do not process the record for the user if it has already been processed for the user.
      !record.processedRecords.map(processed => processed.userId).includes(subscription.userId) &&
      record.timestamp >= subscription.createdAt &&
      (record.price !== null || record.status);

    const toProcess = product.records.filter(recordShouldProcess);
    if (toProcess.length === 0) {
      logger.info(`There are no records to process for subscription '${subscription.id}'.`);
      continue;
    }
    let processed = 0;
    for (let i = 1; i < product.records.length; i++) {
      const record = product.records[i];
      if (recordShouldProcess(record)) {
        const previousRecords = product.records.slice(0, i);
        logger.info(`--> Processing record '${processed + 1}' out of ${toProcess.length}.`);
        await processRecord({ record, previousRecords, subscription }, ctx);
        processed += 1;
      }
    }
  }
};
