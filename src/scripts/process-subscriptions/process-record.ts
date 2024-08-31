import type { ScriptContext } from "~/scripts/context";

import { UnreachableCaseError } from "~/application/errors";
import {
  type ProductRecord,
  PriceChangeCondition,
  type PriceChangeSubscription,
  type ApiStatusChangeSubscription,
  NotificationState,
  ProductSubscriptionType,
  type ApiProductSubscription,
  enhance,
  type Product,
  type ProductStatus,
} from "~/database/model";
import { db } from "~/database/prisma";
import { logger } from "~/internal/logger";

interface ProcessRecordParams {
  readonly product: Product;
  readonly subscription: ApiProductSubscription;
  readonly record: ProductRecord;
}

export const processRecord = async (
  { product, record, subscription }: ProcessRecordParams,
  ctx: ScriptContext,
) => {
  if (!record.price && !record.status) {
    throw new Error("Cannot process a record without price or status information on the record!");
  }
  const enhanced = enhance(db, { user: ctx.user }, { kinds: ["delegate"] });

  type Transaction = Parameters<Parameters<typeof enhanced.$transaction>[0]>[0];

  const processPriceChange = async (
    tx: Transaction,
    sub: PriceChangeSubscription,
    prices: { previous: number; current: number },
  ) => {
    if (!sub.enabled) {
      return logger.info(
        `Not processing price change for subscription '${sub.id}' because it is disabled.`,
      );
    } else if (
      prices.previous > prices.current &&
      !sub.conditions.includes(PriceChangeCondition.PriceDecrease)
    ) {
      return logger.info(
        `Not processing price change for subscription '${sub.id}' because the the price ` +
          "decrease condition is not included in the subscription.",
        { previousPrice: prices.previous, currentPrice: prices.current },
      );
    } else if (
      prices.previous < prices.current &&
      !sub.conditions.includes(PriceChangeCondition.PriceIncrease)
    ) {
      return logger.info(
        `Not processing price change for subscription '${sub.id}' because the the price ` +
          "increase condition is not included in the subscription.",
        { previousPrice: prices.previous, currentPrice: prices.current },
      );
    }
    logger.info(`Creating price change notification for subscription '${sub.id}'.`, {
      previousPrice: prices.previous,
      currentPrice: prices.current,
    });
    return await tx.priceChangeNotification.create({
      data: {
        createdBy: { connect: { id: ctx.user.id } },
        updatedBy: { connect: { id: ctx.user.id } },
        user: { connect: { id: subscription.userId } },
        productRecord: { connect: { id: record.id } },
        subscription: { connect: { id: sub.id } },
        state: NotificationState.Pending,
        stateAsOf: new Date(),
        product: { connect: { id: product.id } },
        condition:
          prices.previous > prices.current
            ? PriceChangeCondition.PriceDecrease
            : PriceChangeCondition.PriceIncrease,
        previousPrice: prices.previous,
        newPrice: prices.current,
      },
    });
  };

  const processStatusChange = async (
    tx: Transaction,
    sub: ApiStatusChangeSubscription,
    statuses: { previous: ProductStatus; current: ProductStatus },
  ) => {
    if (
      sub.enabled &&
      statuses.previous !== statuses.current &&
      sub.conditions.some(
        condition =>
          condition.fromStatus.includes(statuses.previous) &&
          condition.toStatus.includes(statuses.current),
      )
    ) {
      await tx.statusChangeNotification.create({
        data: {
          createdBy: { connect: { id: ctx.user.id } },
          updatedBy: { connect: { id: ctx.user.id } },
          user: { connect: { id: subscription.userId } },
          productRecord: { connect: { id: record.id } },
          product: { connect: { id: product.id } },
          subscription: { connect: { id: sub.id } },
          state: NotificationState.Pending,
          stateAsOf: new Date(),
          previousStatus: statuses.previous,
          newStatus: statuses.current,
        },
      });
    }
  };

  await enhanced.$transaction(async tx => {
    if (record.timestamp >= subscription.createdAt) {
      if (subscription.subscriptionType === ProductSubscriptionType.PriceChangeSubscription) {
        if (record.price) {
          const previousRecordsWithPrices = await tx.productRecord.findMany({
            where: {
              productId: product.id,
              price: { not: null },
              timestamp: { lt: record.timestamp },
            },
            orderBy: [{ timestamp: "desc" }],
            take: 1,
          });
          const prevRecordWithPrice =
            previousRecordsWithPrices.length === 0 ? null : previousRecordsWithPrices[0];
          if (!prevRecordWithPrice) {
            /* Note: This can only happen if a user subscribes to a product when there are no
             historical successfully scraped product records yet - it may happen in development, but
             should never happen in production, as long as we wait a sufficient amount of time
             before first users sign up (allowing the data to accumulate) - it is an edge case. */
            logger.info(
              "Encountered a record with a price but no previous records with a price exist. " +
                "Price notifications will not be issued for this record.",
            );
          } else if (prevRecordWithPrice.price === null) {
            throw new Error(
              "Unexpected Condition: The record should have a price based on the Prisma query!",
            );
          } else {
            await processPriceChange(tx, subscription as PriceChangeSubscription, {
              previous: prevRecordWithPrice.price,
              current: record.price,
            });
          }
        } else {
          logger.info(
            "Encountered a record without a price - cannot process price change subscription.",
          );
        }
      } else if (
        subscription.subscriptionType === ProductSubscriptionType.StatusChangeSubscription
      ) {
        if (record.status) {
          const previousRecordsWithStatuses = await tx.productRecord.findMany({
            where: {
              productId: product.id,
              status: { not: null },
              timestamp: { lt: record.timestamp },
            },
            orderBy: [{ timestamp: "desc" }],
            take: 1,
          });
          const prevRecordWithStatus =
            previousRecordsWithStatuses.length === 0 ? null : previousRecordsWithStatuses[0];
          if (!prevRecordWithStatus) {
            /* Note: This can only happen if a user subscribes to a product when there are no
               historical successfully scraped product records yet - it may happen in development,
               but should never happen in production, as long as we wait a sufficient amount of time
               before first users sign up (allowing the data to accumulate) - it is an edge case. */
            logger.info(
              "Encountered a record with a status but no previous records with a status exist. " +
                "Status notifications will not be issued for this record.",
            );
          } else if (prevRecordWithStatus.status === null) {
            throw new Error(
              "Unexpected Condition: The record should have a status based on the Prisma query!",
            );
          } else {
            await processStatusChange(tx, subscription as ApiStatusChangeSubscription, {
              previous: prevRecordWithStatus.status,
              current: record.status,
            });
          }
        } else {
          logger.info(
            "Encountered a record without a status - cannot process status change subscription.",
          );
        }
      } else {
        throw new UnreachableCaseError(
          `Unexpected Condition: Invalid subscription type '${subscription.subscriptionType}'.`,
        );
      }
    }
  });
};
