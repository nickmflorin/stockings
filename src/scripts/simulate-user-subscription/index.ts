import { ProductSubscriptionType, type User } from "~/database/model";
import { db } from "~/database/prisma";

import { cli } from "~/scripts";
import { seedSubscription } from "~/scripts/common";

const userAbbreviatedName = (user: User): string => {
  if (user.firstName.length !== 0) {
    return `${user.firstName[0]}. ${user.lastName}`;
  }
  return user.lastName;
};

const script: cli.Script = async context => {
  const product = await cli.getProductPositionalArgument({ required: true });
  const user = await cli.getUserNamedArgument({ required: true });

  const subscriptions = await db.productSubscription.findMany({
    where: { userId: user.id, productId: product.id },
  });

  const clean = cli.getBooleanCliArgument("clean", { defaultValue: false });
  if (clean) {
    if (subscriptions.length !== 0) {
      cli.info(
        `The user ${userAbbreviatedName(user)} has ${subscriptions.length} existing subscriptions ` +
          `for the product '${product.slug}'.  Removing those subscriptions due to the presence ` +
          "of the --clean flag...",
      );
      await db.productSubscription.deleteMany({
        where: { id: { in: subscriptions.map(sub => sub.id) } },
      });
    } else {
      cli.info(
        `The user ${userAbbreviatedName(user)} has no existing subscriptions ` +
          `for the product '${product.slug}'. No subscriptions to remove due to the presence ` +
          "of the --clean flag...",
      );
    }
  } else if (subscriptions.length !== 0) {
    return cli.error(
      `The user ${userAbbreviatedName(user)} is already subscribed to product.  Nothing ` +
        "will be done.  If you want to remove existing subscriptions and then simulate " +
        "new ones, specify the --clean flag.",
    );
  }

  const seeded = await seedSubscription({ user, product, atLeastOne: true }, context);
  const filtered = seeded.filter(s => s !== null);
  if (
    filtered.map(s => s.subscriptionType === ProductSubscriptionType.StatusChangeSubscription)
      .length !== 0
  ) {
    cli.info(`Created 1 status change subscription for user ${userAbbreviatedName(user)}`);
  }
  if (
    filtered.map(s => s.subscriptionType === ProductSubscriptionType.PriceChangeSubscription)
      .length !== 0
  ) {
    cli.info(`Created 1 price change subscription for user ${userAbbreviatedName(user)}`);
  }
};

cli.runScript(script, { devOnly: true, upsertUser: true });
