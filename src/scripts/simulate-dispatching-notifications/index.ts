import { NotificationState } from "~/database/model";
import { db } from "~/database/prisma";

import { MinMax, randomBoolean } from "~/lib/random";

import { cli } from "~/scripts";
import { parseBooleanFlagCliArgument } from "~/scripts/cli";
import { getProductScriptContext } from "~/scripts/context";

const FailedRate = MinMax(0.01, 0.1);
const SentRate = MinMax(0.6, 0.7);

type ToModify = {
  fail: string[];
  send: string[];
};

async function main() {
  if (process.env.NODE_ENV !== "development") {
    return cli.error("Script can only be run in development mode!");
  }

  const { product, ...ctx } = await getProductScriptContext({ upsertUser: false });

  const clean = parseBooleanFlagCliArgument("clean");
  if (clean) {
    cli.info(`Resetting previously sent & failed notifications for product '${product.slug}'...`);
    await db.productNotification.updateMany({
      where: {
        productId: product.id,
        // TODO: Revisit whether or not we want to simulate across all users...
        userId: ctx.user.id,
        state: { in: [NotificationState.Failed, NotificationState.Sent] },
      },
      data: { state: NotificationState.Pending, stateAsOf: new Date(), updatedById: ctx.user.id },
    });
  }

  const failRate = FailedRate.random();
  const sendRate = SentRate.random();

  const notifications = await db.productNotification.findMany({
    where: {
      productId: product.id,
      state: NotificationState.Pending,
      // TODO: Revisit whether or not we want to simulate across all users...
      updatedById: ctx.user.id,
      userId: ctx.user.id,
    },
    select: { id: true },
  });
  if (notifications.length === 0) {
    return cli.warn(`No pending notifications found for product '${product.slug}'!`);
  }

  const toModify: ToModify = notifications.reduce(
    (acc, curr) => {
      const shouldFail = randomBoolean({ positiveFrequency: failRate });
      if (shouldFail) {
        return { ...acc, fail: [...acc.fail, curr.id] };
      }
      const shouldSend = randomBoolean({ positiveFrequency: sendRate });
      if (shouldSend) {
        return { ...acc, send: [...acc.send, curr.id] };
      }
      return acc;
    },
    {
      send: [],
      fail: [],
    } as ToModify,
  );

  if (toModify.fail.length !== 0) {
    cli.info(`Failing ${toModify.fail.length} notifications...`);
    await db.productNotification.updateMany({
      where: { id: { in: toModify.fail } },
      data: {
        state: NotificationState.Failed,
        updatedById: ctx.user.id,
        failedAt: new Date(),
        stateAsOf: new Date(),
      },
    });
  }
  if (toModify.send.length !== 0) {
    cli.info(`Sending ${toModify.send.length} notifications...`);
    await db.productNotification.updateMany({
      where: { id: { in: toModify.send } },
      data: {
        state: NotificationState.Sent,
        updatedById: ctx.user.id,
        sentAt: new Date(),
        stateAsOf: new Date(),
      },
    });
  }
}

cli.runScript(main);
