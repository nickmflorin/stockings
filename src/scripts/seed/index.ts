import { cli } from "~/scripts";
import { seedUsers } from "~/scripts/common";

import { seedProducts } from "./seed-products";

const script: cli.Script = async ctx => {
  await seedUsers(ctx);
  await seedProducts(ctx);
};

cli.runScript(script, { upsertUser: true, devOnly: true });
