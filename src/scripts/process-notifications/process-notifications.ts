import type { ScriptContext } from "~/scripts/context";

import { db } from "~/database";
import { PriceChangeEventCondition, enhance, NotificationState } from "~/database/model";
import { logger } from "~/internal/logger";

import { type Equals } from "~/lib/types";

type NonNullField<T extends Record<string, unknown>, K extends keyof T> = {
  [key in keyof T]: Equals<key, K, Exclude<T[key], null>, T[key]>;
};

const walkBackwardsUntil = <T, S extends T>(data: T[], condition: (d: T) => d is S): S | null => {
  for (let i = data.length - 1; i >= 0; i--) {
    const datum = data[i];
    if (condition(datum)) {
      return datum;
    }
  }
  return null;
};

export const processNotifications = async (ctx: ScriptContext) => {
  const enhanced = enhance(db, { user: ctx.user }, { kinds: ["delegate"] });

  const products = await enhanced.product.findMany({});

  for (const product of products) {
    const records = await enhanced.productRecord.findMany({
      where: { productId: product.id },
      orderBy: [{ timestamp: "asc" }],
    });

    // TODO: Should we be issuing notifications for the first record?  What about new products?
    for (let i = 1; i < records.length; i++) {
      const record = records[i];
      if (!record.isProcessed && (record.price || record.status)) {
        const previousRecords = records.slice(0, i);
        await enhanced.$transaction(async tx => {
          if (record.price) {
            const previousRecordWithPrice = walkBackwardsUntil(
              previousRecords,
              (r): r is NonNullField<typeof record, "price"> => r.price !== null,
            );
            /* If there is not a previous record with a price, we treat it the same way as if the
             record is the first in the product's history - we do not issue notifications. */
            if (previousRecordWithPrice) {
              if (previousRecordWithPrice.price > record.price) {
                const subscriptions = await enhanced.productSubscription.findMany({
                  where: {
                    productId: product.id,
                    priceChange: { conditions: { has: PriceChangeEventCondition.PriceDecrease } },
                  },
                });
                await tx.priceChangeNotification.createMany({
                  data: subscriptions.map(subscription => ({
                    subscriptionId: subscription.id,
                    productRecordId: record.id,
                    createdById: ctx.user.id,
                    updatedById: ctx.user.id,
                    userId: subscription.userId,
                    state: NotificationState.Pending,
                    condition: PriceChangeEventCondition.PriceDecrease,
                  })),
                });
              } else if (previousRecordWithPrice.price < record.price) {
                const subscriptions = await enhanced.productSubscription.findMany({
                  where: {
                    productId: product.id,
                    priceChange: { conditions: { has: PriceChangeEventCondition.PriceIncrease } },
                  },
                });
                await tx.priceChangeNotification.createMany({
                  data: subscriptions.map(subscription => ({
                    subscriptionId: subscription.id,
                    productRecordId: record.id,
                    createdById: ctx.user.id,
                    updatedById: ctx.user.id,
                    userId: subscription.userId,
                    state: NotificationState.Pending,
                    condition: PriceChangeEventCondition.PriceIncrease,
                  })),
                });
              } else {
                logger.error(
                  "Encountered two consecutive records with the same price. " +
                    "This should not happen!",
                );
              }
            } else {
              logger.info(
                "Encountered a record with a price but no previous records with a price exist. " +
                  "Price notifications will not be issued for this record.",
              );
            }
          } else {
            logger.info(
              "Encountered a record without a price - most likely due to an error scraping. " +
                "Price notifications will not be issued for this record.",
            );
          }
          if (record.status) {
            const previousRecordWithStatus = walkBackwardsUntil(
              previousRecords,
              (r): r is NonNullField<typeof record, "status"> => r.status !== null,
            );
            /* If there is not a previous record with a price, we treat it the same way as if the
             record is the first in the product's history - we do not issue notifications. */
            if (previousRecordWithStatus) {
              if (previousRecordWithStatus.status != record.price) {
                const subscriptions = await enhanced.productSubscription.findMany({
                  where: {
                    productId: product.id,
                    priceChange: { conditions: { has: PriceChangeEventCondition.PriceDecrease } },
                  },
                });
                // TODO: We have to wrap this stuff in a transaction
                await tx.priceChangeNotification.createMany({
                  data: subscriptions.map(subscription => ({
                    subscriptionId: subscription.id,
                    productRecordId: record.id,
                    createdById: ctx.user.id,
                    updatedById: ctx.user.id,
                    userId: subscription.userId,
                    state: NotificationState.Pending,
                    condition: PriceChangeEventCondition.PriceDecrease,
                  })),
                });
              }
            } else {
              logger.info(
                "Encountered a record with a status but no previous records with a status exist. " +
                  "Status notifications will not be issued for this record.",
              );
            }
          } else {
            logger.info(
              "Encountered a record without a status - most likely due to an error scraping. " +
                "Status notifications will not be issued for this record.",
            );
          }
        });
      }
    }

    /* const subscriptions = await enhanced.productSubscription.findMany({
         where: { productId: product.id },
         include: {
           statusChange: { include: { conditions: { orderBy: [{ createdAt: "desc" }] } } },
           priceChange: true,
         },
       });
       for (const subscription of subscriptions) {
       } */
  }
};
