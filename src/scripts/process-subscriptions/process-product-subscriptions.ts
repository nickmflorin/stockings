import type { ScriptContext } from "~/scripts/context";

import { enhance, type ApiProduct } from "~/database/model";
import { db } from "~/database/prisma";
import { logger } from "~/internal/logger";

import { processSubscription } from "./process-subscription";

export const processProductSubscriptions = async (
  product: ApiProduct<["records"], ["processedRecords"]>,
  { reprocess, ...ctx }: ScriptContext & { readonly reprocess?: boolean },
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

  if (reprocess) {
    logger.info("Deleting previously processed records so they can be reprocessed.");
    await enhanced.processedProductRecord.deleteMany({
      where: { record: { productId: product.id } },
    });
  }

  for (let i = 0; i < subscriptions.length; i++) {
    const subscription = subscriptions[i];
    logger.info(
      `Processing subscription ${i + 1} out of ${subscriptions.length} ` +
        `(type = ${subscription.subscriptionType}).`,
    );
    await processSubscription(subscription, product, ctx);
  }
};
