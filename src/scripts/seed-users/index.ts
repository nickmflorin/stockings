import { cli } from "~/scripts";
import { seedUsers } from "~/scripts/common";

const script: cli.Script = async context => {
  await seedUsers(context);
};

cli.runScript(script, { devOnly: true, upsertUser: true });
