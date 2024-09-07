import { DateTime } from "luxon";

import {
  ProductSubscriptionTypes,
  type ApiProductSubscription,
  type Product,
} from "~/database/model";
import { db } from "~/database/prisma";

import { maxDate } from "~/lib/dates";

import { cli } from "~/scripts";

import { processRecord } from "./process-record";

interface ProcessSubscriptionParams {
  readonly subscription: ApiProductSubscription<["conditions"]>;
  readonly product: Product;
  readonly maximumLookback?: number | null;
  readonly maximumRecords?: number | null;
}

export const processSubscription = async (
  { product, subscription, maximumLookback, maximumRecords }: ProcessSubscriptionParams,
  ctx: cli.ScriptContext,
) => {
  if (
    (maximumLookback !== undefined || maximumLookback !== null) &&
    process.env.NODE_ENV !== "development"
  ) {
    throw new cli.CommandLineDevOnlyError("Can only specify maximum lookback in development mode!");
  } else if (
    (maximumRecords !== undefined || maximumRecords !== null) &&
    process.env.NODE_ENV !== "development"
  ) {
    throw new cli.CommandLineDevOnlyError("Can only specify maximum records in development mode!");
  }
  const timestamp =
    maximumLookback !== null && maximumLookback !== undefined
      ? new Date(maxDate(DateTime.local().minus({ days: maximumLookback }), subscription.createdAt))
      : subscription.createdAt;

  const records = await db.productRecord.findMany({
    take: maximumRecords ?? undefined,
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
    return cli.info(
      `There are no records to process for subscription '${subscription.id}' ` +
        `(type = '${subscription.subscriptionType}').`,
    );
  }
  cli.info(
    `There are ${records.length} records to process for subscription '${subscription.id}'` +
      `(type = '${subscription.subscriptionType}'.`,
  );
  for (let i = 0; i < records.length; i++) {
    const record = records[i];
    await processRecord({ product, record, subscription }, ctx);
  }
};
