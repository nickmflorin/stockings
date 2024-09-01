import { chunk } from "lodash-es";

import type { ScriptContext } from "~/scripts/context";

import { enhance, type ApiProduct } from "~/database/model";
import { db } from "~/database/prisma";
import { logger } from "~/internal/logger";

import { processSubscription } from "./process-subscription";

logger.modify({ includeContext: false, level: "info" });

const DELETE_NOTIFICATIONS_BATCH_SIZE = 100;

export const processProductSubscriptions = async (
  product: ApiProduct<["records"]>,
  { clean, ...ctx }: ScriptContext & { readonly clean?: boolean },
) => {
  const enhanced = enhance(db, { user: ctx.user }, { kinds: ["delegate"] });

  if (clean) {
    if (process.env.NODE_ENV !== "development") {
      throw new Error("Can only clean subscriptions in development mode!");
    }
    logger.info("Deleting all product notifications so they can be regenerated.");

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
    logger.info("No subscriptions to process.");
    return;
  }

  for (let i = 0; i < subscriptions.length; i++) {
    const subscription = subscriptions[i];
    logger.info(
      `Processing subscription ${i + 1} out of ${subscriptions.length} ` +
        `(type = ${subscription.subscriptionType}).`,
    );
    await processSubscription(subscription, product, ctx);
  }
};
