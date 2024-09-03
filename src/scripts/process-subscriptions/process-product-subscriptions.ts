import { chunk } from "lodash-es";

import type { ScriptContext } from "~/scripts/context";

import { enhance, type ApiProduct } from "~/database/model";
import { db } from "~/database/prisma";

import { cli } from "~/scripts";

import { processSubscription } from "./process-subscription";

const DELETE_NOTIFICATIONS_BATCH_SIZE = 100;

interface ProcessProductSubscriptionParams {
  readonly maximumLookback?: number | null;
  readonly maximumRecords?: number | null;
  readonly clean?: boolean;
  readonly product: ApiProduct<["records"]>;
}

export const processProductSubscriptions = async (
  { product, clean, maximumLookback, maximumRecords }: ProcessProductSubscriptionParams,
  ctx: ScriptContext,
) => {
  const enhanced = enhance(db, { user: ctx.user }, { kinds: ["delegate"] });

  if (clean) {
    if (process.env.NODE_ENV !== "development") {
      return cli.error("Can only clean subscriptions in development mode!");
    }
    cli.info("Deleting all product notifications so they can be regenerated.");

    const ids = await enhanced.productNotification.findMany({
      where: { productId: product.id },
      select: { id: true },
    });
    /* We have to chunk out the delete of the product notifications because we occasionally get
       transaction timeout errors due to the number of deletes that are occurring when we try to
       delete all notifications at once. */
    const chunks = chunk(
      ids.map(({ id }) => id),
      DELETE_NOTIFICATIONS_BATCH_SIZE,
    );
    for (const chunk of chunks) {
      await enhanced.productNotification.deleteMany({
        where: { id: { in: chunk } },
      });
    }
  }

  const subscriptions = [
    ...(await enhanced.statusChangeSubscription.findMany({
      where: { enabled: true, productId: product.id },
      include: { conditions: true },
    })),
    ...(await enhanced.priceChangeSubscription.findMany({
      where: { enabled: true, productId: product.id },
    })),
  ];

  if (subscriptions.length === 0) {
    return cli.info("No subscriptions to process.");
  }

  for (let i = 0; i < subscriptions.length; i++) {
    const subscription = subscriptions[i];
    cli.info(
      `Processing subscription ${i + 1} out of ${subscriptions.length} ` +
        `(type = ${subscription.subscriptionType}).`,
    );
    await processSubscription({ subscription, product, maximumLookback, maximumRecords }, ctx);
  }
};
