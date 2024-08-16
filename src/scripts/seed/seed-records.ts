import { DateTime } from "luxon";

import { type Product, type ProductRecord, ProductStatus } from "~/database/model";
import { logger } from "~/internal/logger";

import { MinMax, randomBoolean, selectAtRandom } from "~/lib/random";

import { type ScriptContext } from "../context";

/* The minimum/maximum number of days to look backwards when determining the time horizon over which
   the the records will be generated.  For each product, a lookback horizon will be randomly chosen
   between these two bounds, and records will be generated for each day in the time horizon dictated
   by the randomly chosen lookback period. */
export const TimeHorizon = MinMax(100, 200);

const RecordsPerHour = MinMax(10, 20);
const Price = MinMax(100, 750);
/* The minimum/maximum percentage changes that the price can change by when a given record is
   generated. */
const PriceDelta = MinMax(0.1, 1.2);

/* The frequency at which the price of a record should change when iterating, expressed as a
   decimal. */
const PriceChangeFrequency = 0.1;

/* The frequency at which the status of a record should change when iterating, expressed as a
   decimal. */
const StatusChangeFrequency = 0.1;

const MINUTES_IN_DAY = 24 * 60;

const getIterations = () => {
  const recordsPerDay = 24 * RecordsPerHour.random();
  /* The number of minutes that should separate each record that is generated in order to achieve
     the randomly chosen (but bounded) number of records per day. */
  const deltaMinutes = Math.floor(MINUTES_IN_DAY / recordsPerDay);
  if (deltaMinutes < 1) {
    throw new Error(`Configuration resulted in an invalid minutes delta of '${deltaMinutes}'!`);
  }
  const horizon = TimeHorizon.random();
  return [horizon * recordsPerDay, { minutes: deltaMinutes }] as const;
};

const modifyPrice = (runningData: RecordDatum): RecordDatum => {
  // Only modify the price approximately 10% of the time.
  const shouldModify = randomBoolean({ positiveFrequency: PriceChangeFrequency });
  if (!shouldModify) {
    return runningData;
  }
  // There may not have been an established price if there were no previous records with a price.
  const p = runningData.price ?? Price.random();
  if (randomBoolean({ positiveFrequency: 0.5 })) {
    return {
      ...runningData,
      price: p + parseInt(((PriceDelta.random() / 100.0) * p).toFixed(0)),
    };
  }
  return {
    ...runningData,
    price: Math.max(0, p - parseInt(((PriceDelta.random() / 100.0) * p).toFixed(0))),
  };
};

const modifyStatus = (runningData: RecordDatum): RecordDatum => {
  // Only modify the status approximately 10% of the time.
  const shouldModify = randomBoolean({ positiveFrequency: StatusChangeFrequency });
  if (!shouldModify) {
    return runningData;
  }
  return {
    ...runningData,
    status: selectAtRandom(
      [
        { value: ProductStatus.AvailableForBackorder, frequency: 0.05 },
        { value: ProductStatus.InStock, frequency: 0.4 },
        { value: ProductStatus.NotListed, frequency: 0.05 },
        { value: ProductStatus.OutOfStock, frequency: 0.5 },
      ].filter(({ value }) => value !== runningData.status),
      { withFrequencies: true },
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
