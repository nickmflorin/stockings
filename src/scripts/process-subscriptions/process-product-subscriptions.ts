import type { ScriptContext } from "~/scripts/context";

import { enhance, type ApiProduct } from "~/database/model";
import { db } from "~/database/prisma";
import { logger } from "~/internal/logger";

import { processSubscription } from "./process-subscription";

export const processProductSubscriptions = async (
  product: ApiProduct<["records"], ["processedRecords"]>,
  ctx: ScriptContext,
) => {
  const enhanced = enhance(db, { user: ctx.user }, { kinds: ["delegate"] });

  const subscriptions = [
    ...(await enhanced.statusChangeSubscription.findMany({
      where: { enabled: true, productId: product.id },
      include: { conditions: true },
    })),
    ...(await enhanced.priceChangeSubscription.findMany({
      where: { enabled: true, productId: product.id },
    })),
  ];

  if (subscriptions.length === 0) {
    logger.info("No subscriptions to process.");
    return;
  }

  for (let i = 0; i < subscriptions.length; i++) {
    logger.info(`Processing subscription ${i + 1} out of ${subscriptions.length}.`);
    const subscription = subscriptions[i];
    await processSubscription(subscription, product, ctx);
  }
};
