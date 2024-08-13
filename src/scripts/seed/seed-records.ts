import { DateTime } from "luxon";

import { type Product, type ProductRecord, ProductStatus } from "~/database/model";
import { logger } from "~/internal/logger";

import { randomInt, randomBoolean, selectAtRandomFrequency } from "~/lib/random";

import { type ScriptContext } from "../context";

const MIN_DAYS_LOOKBACK = 100;
const MAX_DAYS_LOOKBACK = 200;

const MIN_RECORDS_PER_HOUR = 10;
const MAX_RECORDS_PER_HOUR = 20;

const MINUTES_IN_DAY = 24 * 60;

const getIterations = () => {
  const recordsPerHour = randomInt(MIN_RECORDS_PER_HOUR, MAX_RECORDS_PER_HOUR);
  const recordsPerDay = recordsPerHour * 24;
  const deltaMinutes = Math.floor(MINUTES_IN_DAY / recordsPerDay);
  if (deltaMinutes < 1) {
    throw new Error(`Configuration resulted in an invalid minutes delta of '${deltaMinutes}'!`);
  }
  const daysLookback = randomInt(MIN_DAYS_LOOKBACK, MAX_DAYS_LOOKBACK);
  return [daysLookback * recordsPerDay, { minutes: deltaMinutes }] as const;
};

const MIN_PRICE = 100;
const MAX_PRICE = 750;

const MIN_PRICE_DELTA_PCT = 2;
const MAX_PRICE_DELTA_PCT = 5;

const modifyPrice = (runningData: RecordDatum): RecordDatum => {
  const shouldModify = randomBoolean({ positiveFrequency: 0.1 });
  if (!shouldModify) {
    return runningData;
  }
  const p = runningData.price ?? randomInt(MIN_PRICE, MAX_PRICE);
  if (randomBoolean({ positiveFrequency: 0.5 })) {
    return {
      ...runningData,
      price:
        p +
        parseInt(((randomInt(MIN_PRICE_DELTA_PCT, MAX_PRICE_DELTA_PCT) / 100.0) * p).toFixed(0)),
    };
  }
  return {
    ...runningData,
    price: Math.max(
      0,
      p - parseInt(((randomInt(MIN_PRICE_DELTA_PCT, MAX_PRICE_DELTA_PCT) / 100.0) * p).toFixed(0)),
    ),
  };
};

const modifyStatus = (runningData: RecordDatum): RecordDatum => {
  const shouldModify = randomBoolean({ positiveFrequency: 0.1 });
  if (!shouldModify) {
    return runningData;
  }
  return {
    ...runningData,
    status: selectAtRandomFrequency(
      [
        { value: ProductStatus.AvailableForBackorder, frequency: 0.05 },
        { value: ProductStatus.InStock, frequency: 0.4 },
        { value: ProductStatus.NotListed, frequency: 0.05 },
        { value: ProductStatus.OutOfStock, frequency: 0.5 },
      ].filter(({ value }) => value !== runningData.status),
    ),
  };
};

const modifyDatum = (runningData: RecordDatum, delta: { minutes: number }): RecordDatum => ({
  ...modifyStatus(modifyPrice(runningData)),
  createdAt: runningData.createdAt.minus(delta),
});

export type RecordDatum = Pick<
  ProductRecord,
  "status" | "price" | "productId" | "createdById" | "updatedById"
> & {
  readonly createdAt: DateTime;
};

export const seedRecords = (product: Product, { user }: ScriptContext): RecordDatum[] => {
  const initialDatum: RecordDatum = {
    createdAt: DateTime.fromJSDate(product.createdAt),
    price: product.price,
    status: product.status,
    productId: product.id,
    createdById: user.id,
    updatedById: user.id,
  };

  const [numIterations, delta] = getIterations();
  logger.info(
    `Iterating '${numIterations}' times, with a delta of ${delta.minutes} minute(s) for ` +
      `record generation of product '${product.slug}'!`,
  );

  return Array.from({
    length: numIterations,
  }).reduce((prev: RecordDatum[]) => {
    const last = prev.length === 0 ? { ...initialDatum } : prev[prev.length - 1];
    const modified = modifyDatum(last, delta);
    if (modified.status !== last.status || modified.price !== last.price) {
      return [
        ...prev,
        {
          ...last,
          ...modified,
        },
      ];
    }
    return prev;
  }, [] as RecordDatum[]);
};
