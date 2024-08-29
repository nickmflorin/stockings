import type { ScriptContext } from "~/scripts/context";

import {
  type ApiProduct,
  type ApiProductRecord,
  type ApiProductSubscription,
} from "~/database/model";
import { logger } from "~/internal/logger";

import { processRecord } from "./process-record";

const recordShouldProcess = (
  subscription: ApiProductSubscription,
  record: ApiProductRecord<["processedRecords"]>,
) =>
  // Do not process the record for the user if it has already been processed for the user.
  !record.processedRecords.map(processed => processed.userId).includes(subscription.userId) &&
  record.timestamp >= subscription.createdAt &&
  (record.price !== null || record.status);

export const processSubscription = async (
  subscription: ApiProductSubscription,
  product: ApiProduct<["records"], ["processedRecords"]>,
  ctx: ScriptContext,
) => {
  const toProcess = product.records.filter((record: ApiProductRecord<["processedRecords"]>) =>
    recordShouldProcess(subscription, record),
  );
  if (toProcess.length === 0) {
    logger.info(`There are no records to process for subscription '${subscription.id}'.`);
    return;
  }
  for (let i = 1; i < product.records.length; i++) {
    const record = product.records[i];
    if (recordShouldProcess(subscription, record)) {
      const previousRecords = product.records.slice(0, i);
      await processRecord({ product, record, previousRecords, subscription }, ctx);
    }
  }
};
