import { DateTime } from "luxon";

import { db } from "~/database";
import { enhance } from "~/database/model";
import {
  type PriceChangeSubscription,
  type StatusChangeSubscription,
  PriceChangeCondition,
  type Product,
  ProductStatus,
} from "~/database/model";

import { MinMax, randomBoolean, selectAtRandom } from "~/lib/random";

import { type ScriptContext } from "../context";

import { TimeHorizon } from "./seed-records";

const DisabledFrequency = 0.1;
const ConditionsPerStatusChangeEvent = MinMax(1, 4);
const StatusesPerCondition = MinMax(1, Object.values(ProductStatus).length);
const ConditionsPerPriceChangeEvent = MinMax(1, Object.values(PriceChangeCondition).length);
const PriceChangeEventFrequency = 0.5;
const StatusChangeEventFrequency = 0.5;

export const seedSubscription = async (
  product: Product,
  { user }: ScriptContext,
): Promise<[StatusChangeSubscription | null, PriceChangeSubscription | null]> => {
  const enhanced = enhance(db, { user }, { kinds: ["delegate"] });

  const timestamp = DateTime.fromJSDate(new Date())
    .minus({ days: TimeHorizon.random() })
    .toJSDate();

  let statusChange: StatusChangeSubscription | null = null;
  let priceChange: PriceChangeSubscription | null = null;

  if (randomBoolean({ positiveFrequency: StatusChangeEventFrequency })) {
    statusChange = await enhanced.statusChangeSubscription.create({
      data: {
        enabled: !randomBoolean({ positiveFrequency: DisabledFrequency }),
        createdAt: timestamp,
        updatedAt: timestamp,
        createdById: user.id,
        updatedById: user.id,
        userId: user.id,
        productId: product.id,
        conditions: {
          createMany: {
            data: Array.from({ length: ConditionsPerStatusChangeEvent.random() }).map(() => ({
              toStatus: selectAtRandom(Object.values(ProductStatus), {
                length: StatusesPerCondition,
                unique: true,
              }),
              fromStatus: selectAtRandom(Object.values(ProductStatus), {
                length: StatusesPerCondition,
                unique: true,
              }),
            })),
          },
        },
      },
    });
  }
  if (randomBoolean({ positiveFrequency: PriceChangeEventFrequency })) {
    priceChange = await enhanced.priceChangeSubscription.create({
      data: {
        enabled: !randomBoolean({ positiveFrequency: DisabledFrequency }),
        createdAt: timestamp,
        updatedAt: timestamp,
        createdById: user.id,
        updatedById: user.id,
        userId: user.id,
        productId: product.id,
        conditions: selectAtRandom(Object.values(PriceChangeCondition), {
          unique: true,
          length: ConditionsPerPriceChangeEvent,
        }),
      },
    });
  }
  return [statusChange, priceChange];
};
