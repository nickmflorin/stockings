import { DateTime } from "luxon";

import {
  enhance,
  NotificationMedium,
  type User,
  type PriceChangeSubscription,
  type StatusChangeSubscription,
  PriceChangeCondition,
  type Product,
  ProductStatus,
} from "~/database/model";
import { db } from "~/database/prisma";

import { MinMax, randomBoolean, selectAtRandom } from "~/lib/random";

import { type cli } from "~/scripts";

/* The minimum/maximum number of days to look backwards when determining the time horizon over which
   the the records will be generated.  For each product, a lookback horizon will be randomly chosen
   between these two bounds, and records will be generated for each day in the time horizon dictated
   by the randomly chosen lookback period. */
const TimeHorizon = MinMax(100, 200);

const DisabledFrequency = 0.1;
const ConditionsPerStatusChangeEvent = MinMax(1, 4);
const StatusesPerCondition = MinMax(1, Object.values(ProductStatus).length);
const ConditionsPerPriceChangeEvent = MinMax(1, Object.values(PriceChangeCondition).length);
const PriceChangeEventFrequency = 0.5;
const StatusChangeEventFrequency = 0.5;

export interface SeedSubscriptionParmas {
  readonly product: Product;
  readonly user: User;
}

export const seedSubscription = async (
  { user, product }: SeedSubscriptionParmas,
  context: cli.ScriptContext,
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
        createdById: context.user.id,
        updatedById: context.user.id,
        userId: user.id,
        productId: product.id,
        mediums: selectAtRandom(Object.values(NotificationMedium), {
          length: MinMax(1, 3),
          unique: true,
        }),
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
        createdById: context.user.id,
        updatedById: context.user.id,
        userId: user.id,
        productId: product.id,
        mediums: selectAtRandom(Object.values(NotificationMedium), {
          length: MinMax(1, 3),
          unique: true,
        }),
        conditions: selectAtRandom(Object.values(PriceChangeCondition), {
          unique: true,
          length: ConditionsPerPriceChangeEvent,
        }),
      },
    });
  }
  return [statusChange, priceChange];
};
