import { DateTime } from "luxon";

import type { ScriptContext } from "~/scripts/context";

import {
  ProductSubscriptionTypes,
  type ApiProductSubscription,
  type Product,
} from "~/database/model";
import { db } from "~/database/prisma";
import { logger } from "~/internal/logger";

import { maxDate } from "~/lib/dates";

import { processRecord } from "./process-record";

logger.modify({ includeContext: false, level: "info" });

interface ProcessSubscriptionParams {
  readonly subscription: ApiProductSubscription;
  readonly product: Product;
  readonly maximumLookback?: number | null;
}

export const processSubscription = async (
  { product, subscription, maximumLookback }: ProcessSubscriptionParams,
  ctx: ScriptContext,
) => {
  if (
    (maximumLookback !== undefined || maximumLookback !== null) &&
    process.env.NODE_ENV !== "development"
  ) {
    throw new Error("Can only specify maximum lookback in development mode!");
  }
  const timestamp =
    maximumLookback !== null && maximumLookback !== undefined
      ? new Date(maxDate(DateTime.local().minus({ days: maximumLookback }), subscription.createdAt))
      : subscription.createdAt;

  const records = await db.productRecord.findMany({
    where: {
      AND: [
        {
          productId: product.id,
          timestamp: { gte: timestamp },
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
