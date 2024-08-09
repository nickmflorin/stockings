import { DateTime } from "luxon";

import { type Transaction } from "~/database";
import { type Product, type ProductRecord, ProductStatus } from "~/database/model";
import { logger } from "~/internal/logger";

import { randomInt, randomBoolean, selectAtRandomFrequency } from "~/lib/random";

import { type SeedContext } from "../context";

const MAX_ITERATIONS = 2000;
const MIN_ITERATIONS = 500;

const MIN_TIME_DELTA_MINUTES = 1;
const MAX_TIME_DELTA_MINUTES = 5;

const MIN_PRICE = 100;
const MAX_PRICE = 750;

const MIN_PRICE_DELTA_PCT = 0.02;
const MAX_PRICE_DELTA_PCT = 0.05;

const modifyPrice = (price: number | null) => {
  const p = price ?? randomInt(MIN_PRICE, MAX_PRICE);
  const positiveChange = randomBoolean({ positiveFrequency: 0.5 });
  const pctChange = randomInt(MIN_PRICE_DELTA_PCT, MAX_PRICE_DELTA_PCT) * p;
  if (positiveChange) {
    return p + pctChange;
  }
  return p - pctChange;
};

type RunningData = { createdAt: DateTime; price: number | null; status: ProductStatus | null };

export const seedRecords = async (tx: Transaction, product: Product, { user }: SeedContext) => {
  const numIterations = randomInt(MIN_ITERATIONS, MAX_ITERATIONS);

  const runningData = {
    createdAt: DateTime.fromJSDate(product.createdAt),
    price: product.price,
    status: product.status,
  };

  const dataToCreate: Pick<ProductRecord, "status" | "price" | "createdAt">[] = [];

  logger.info(
    `Iterating '${numIterations}' times for record generation of product '${product.slug}'!`,
  );
  for (let i = 0; i < numIterations; i++) {
    const newRunningData: RunningData = {} as RunningData;

    newRunningData.createdAt = runningData.createdAt.minus({
      minutes: randomInt(MIN_TIME_DELTA_MINUTES, MAX_TIME_DELTA_MINUTES),
    });
    const fieldChanges = {
      price: randomBoolean({ positiveFrequency: 0.1 }),
      status: randomBoolean({ positiveFrequency: 0.1 }),
    };

    if (fieldChanges.price) {
      newRunningData.price = modifyPrice(runningData.price);
    } else {
      newRunningData.price = product.price;
    }

    if (fieldChanges.status) {
      newRunningData.status = selectAtRandomFrequency(
        [
          { value: ProductStatus.AvailableForBackorder, frequency: 0.05 },
          { value: ProductStatus.InStock, frequency: 0.4 },
          { value: ProductStatus.NotListed, frequency: 0.05 },
          { value: ProductStatus.OutOfStock, frequency: 0.5 },
        ].filter(({ value }) => value !== runningData.status),
      );
    } else {
      newRunningData.status = product.status;
    }

    if (product.status !== newRunningData.status || product.price !== newRunningData.price) {
      dataToCreate.push({
        ...newRunningData,
        createdAt: newRunningData.createdAt.toJSDate(),
      });
    }
  }
  logger.info(`Creating '${dataToCreate.length}' records for product '${product.slug}'...`);
  return await tx.productRecord.createMany({
    data: dataToCreate.map(data => ({
      ...data,
      productId: product.id,
      createdById: user.id,
      updatedById: user.id,
    })),
  });
};
