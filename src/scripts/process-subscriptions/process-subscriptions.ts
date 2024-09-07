import { enhance, type User } from "~/database/model";
import { db } from "~/database/prisma";

import { cli } from "~/scripts";

import { processSubscription } from "./process-subscription";

interface ProcessSubscriptionsParams {
  readonly user?: User | null;
  readonly maximumLookback?: number | null;
  readonly maximumRecords?: number | null;
}

export const processSubscriptions = async (
  params: ProcessSubscriptionsParams,
  ctx: cli.ScriptContext,
) => {
  const enhanced = enhance(db, { user: ctx.user }, { kinds: ["delegate"] });

  const subscriptions = [
    ...(await enhanced.statusChangeSubscription.findMany({
      where: { enabled: true, userId: params.user?.id },
      include: { conditions: true, product: true },
    })),
    ...(await enhanced.priceChangeSubscription.findMany({
      where: { enabled: true, userId: params.user?.id },
      include: { product: true },
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
    await processSubscription({ ...params, subscription, product: subscription.product }, ctx);
  }
};
