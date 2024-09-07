import clerk from "@clerk/clerk-sdk-node";

import { getTransformedClerkData, updateUserFromClerk } from "~/database/model/auth";
import { db } from "~/database/prisma";

import { cli } from "~/scripts";
import { type ScriptContext } from "~/scripts/context";

export const seedUsers = cli.inDevRestrictedEnv(async ({ clerkUser }: ScriptContext) => {
  const users = (await clerk.users.getUserList({})).filter(u => u.id !== clerkUser.id);

  const existingUsers = await db.user.findMany({
    where: { clerkId: { notIn: [clerkUser.id] } },
  });

  const usersToAdd = users.filter(u => !existingUsers.map(eu => eu.clerkId).includes(u.id));
  if (usersToAdd.length === 0) {
    cli.info("No additional development users to add.");
  } else {
    cli.info(`Creating ${usersToAdd.length} new development users.`);
    await db.user.createMany({
      data: usersToAdd.map(u => ({
        ...getTransformedClerkData(u),
        clerkId: u.id,
      })),
    });
  }

  const usersToUpdate = users.filter(u => existingUsers.map(eu => eu.clerkId).includes(u.id));
  if (usersToUpdate.length === 0) {
    cli.info("No users to update.");
  } else {
    cli.info(`Updating ${usersToUpdate.length} development users.`);
    await Promise.all(usersToUpdate.map(u => updateUserFromClerk(db, u)));
  }
});
