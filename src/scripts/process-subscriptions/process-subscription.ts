import type { ScriptContext } from "~/scripts/context";

import { type ApiProductSubscription, type Product } from "~/database/model";
import { db } from "~/database/prisma";
import { logger } from "~/internal/logger";

import { processRecord } from "./process-record";

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
          processedRecords: { none: { userId: subscription.userId } },
          timestamp: { gte: subscription.createdAt },
        },
        { OR: [{ price: { not: null } }, { status: { not: null } }] },
      ],
    },
    include: { processedRecords: true },
  });
  if (records.length === 0) {
    logger.info(`There are no records to process for subscription '${subscription.id}'.`);
    return;
  }
  logger.info(
    `There are ${records.length} records to process for subscription '${subscription.id}'.`,
  );
  for (let i = 1; i < records.length; i++) {
    const record = records[i];
    await processRecord({ product, record, subscription }, ctx);
  }
};
