import type { ScriptContext } from "~/scripts/context";

import {
  ProductSubscriptionTypes,
  type ApiProductSubscription,
  type Product,
} from "~/database/model";
import { db } from "~/database/prisma";
import { logger } from "~/internal/logger";

import { processRecord } from "./process-record";

logger.modify({ includeContext: false, level: "info" });

export const processSubscription = async (
  subscription: ApiProductSubscription,
  product: Product,
  ctx: ScriptContext,
) => {
  const records = await db.productRecord.findMany({
    where: {
      AND: [
        {
          productId: product.id,
          timestamp: { gte: subscription.createdAt },
          notifications: {
            none: {
              userId: subscription.userId,
              notificationType: ProductSubscriptionTypes.getModel(subscription.subscriptionType)
                .notificationType,
            },
          },
        },
        { OR: [{ price: { not: null } }, { status: { not: null } }] },
      ],
    },
  });
  if (records.length === 0) {
    logger.info(
      `There are no records to process for subscription '${subscription.id}' ` +
        `(type = '${subscription.subscriptionType}').`,
    );
    return;
  }
  logger.info(
    `There are ${records.length} records to process for subscription '${subscription.id}'` +
      `(type = '${subscription.subscriptionType}'.`,
  );
  for (let i = 0; i < records.length; i++) {
    const record = records[i];
    await processRecord({ product, record, subscription }, ctx);
  }
};
