import type { ScriptContext } from "~/scripts/context";

import { enhance } from "~/database/model";
import { db } from "~/database/prisma";
import { logger } from "~/internal/logger";

import { processSubscription } from "./process-subscription";

export const processSubscriptions = async (ctx: ScriptContext) => {
  const enhanced = enhance(db, { user: ctx.user }, { kinds: ["delegate"] });

  const subscriptions = [
    ...(await enhanced.statusChangeSubscription.findMany({
      where: { enabled: true },
      include: { conditions: true },
    })),
    ...(await enhanced.priceChangeSubscription.findMany({ where: { enabled: true } })),
  ];

  if (subscriptions.length === 0) {
    logger.info("No subscriptions to process.");
    return;
  }

  const products = await enhanced.product.findMany({
    where: { id: { in: subscriptions.map(sub => sub.productId) } },
    include: { records: { orderBy: [{ timestamp: "desc" }], include: { processedRecords: true } } },
  });

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
    await processSubscription(subscription, product, ctx);
  }
};
