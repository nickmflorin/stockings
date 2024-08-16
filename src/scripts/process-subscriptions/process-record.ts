import type { ScriptContext } from "~/scripts/context";

import { db } from "~/database";
import {
  type ProductRecord,
  type ModelWithNonNullField,
  PriceChangeSubscriptionCondition,
  type PriceChangeSubscription,
  type ApiStatusChangeSubscription,
  NotificationState,
  SubscriptionType,
  type ApiProductSubscription,
  enhance,
} from "~/database/model";
import { logger } from "~/internal/logger";

import { walkBackwardsUntil } from "~/lib/arrays";

interface ProcessRecordParams {
  readonly subscription: ApiProductSubscription;
  readonly previousRecords: ProductRecord[];
  readonly record: ProductRecord;
}

export const processRecord = async (
  { record, subscription, previousRecords }: ProcessRecordParams,
  ctx: ScriptContext,
) => {
  if (!record.price && !record.status) {
    throw new Error("Cannot process a record without price or status information on the record!");
  }
  const enhanced = enhance(db, { user: ctx.user }, { kinds: ["delegate"] });

  type Transaction = Parameters<Parameters<typeof enhanced.$transaction>[0]>[0];

  const processPriceChange = async (tx: Transaction, event: PriceChangeSubscription) => {
    if (record.price) {
      const previousRecordWithPrice = walkBackwardsUntil(
        previousRecords,
        (r): r is ModelWithNonNullField<typeof record, "price"> => r.price !== null,
      );
      /* If there is not a previous record with a price, we treat it the same way as if the
         record is the first in the product's history - we do not issue notifications. */
      if (previousRecordWithPrice) {
        /* Note: It is possible that two consecutive records have the same price.  Even though we
           do not add records to the database unless there is a notable difference in the price
           or status, it is possible that the sequential records were created due to a change in
           status, but the price remained the same. */
        if (
          previousRecordWithPrice.price !== record.price &&
          event.conditions.includes(PriceChangeSubscriptionCondition.PriceDecrease) &&
          event.enabled
        ) {
          await tx.priceChangeNotification.create({
            data: {
              createdBy: { connect: { id: ctx.user.id } },
              updatedBy: { connect: { id: ctx.user.id } },
              user: { connect: { id: subscription.userId } },
              productRecord: { connect: { id: record.id } },
              state: NotificationState.Pending,
              stateAsOf: new Date(),
              condition:
                previousRecordWithPrice.price > record.price
                  ? PriceChangeSubscriptionCondition.PriceDecrease
                  : PriceChangeSubscriptionCondition.PriceIncrease,
              previousPrice: previousRecordWithPrice.price,
              newPrice: record.price,
            },
          });
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
  };

  const processStatusChange = async (tx: Transaction, event: ApiStatusChangeSubscription) => {
    const status = record.status;
    if (status) {
      const previousRecordWithStatus = walkBackwardsUntil(
        previousRecords,
        (r): r is ModelWithNonNullField<typeof record, "status"> => r.status !== null,
      );
      /* If there is not a previous record with a status, we treat it the same way as if the
         record is the first in the product's history - we do not issue notifications. */
      if (previousRecordWithStatus) {
        /* Note: It is possible that two consecutive records have the same status.  Even though we
           do not add records to the database unless there is a notable difference in the price
           or status, it is possible that the sequential records were created due to a change in
           price, but the status remained the same. */
        if (
          previousRecordWithStatus.status != status &&
          event.enabled &&
          event.conditions.some(
            condition =>
              condition.fromStatus.includes(previousRecordWithStatus.status) &&
              condition.toStatus.includes(status),
          )
        ) {
          await tx.statusChangeNotification.create({
            data: {
              createdBy: { connect: { id: ctx.user.id } },
              updatedBy: { connect: { id: ctx.user.id } },
              user: { connect: { id: subscription.userId } },
              productRecord: { connect: { id: record.id } },
              state: NotificationState.Pending,
              stateAsOf: new Date(),
              previousStatus: previousRecordWithStatus.status,
              newStatus: status,
            },
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
  };

  await enhanced.$transaction(async tx => {
    if (record.timestamp >= subscription.createdAt) {
      if (subscription.subscriptionType === SubscriptionType.PriceChangeSubscription) {
        await processPriceChange(tx, subscription as PriceChangeSubscription);
      } else if (subscription.subscriptionType === SubscriptionType.StatusChangeSubscription) {
        await processStatusChange(tx, subscription as ApiStatusChangeSubscription);
      }
    }
    await tx.processedProductRecord.create({
      data: {
        recordId: record.id,
        updatedById: ctx.user.id,
        createdById: ctx.user.id,
        userId: subscription.userId,
      },
    });
  });
};
