import { db } from "~/database/prisma";
import { logger } from "~/internal/logger";
import { LogLevels } from "~/environment/constants";

import { getScriptContext } from "../context";

import { seedProducts } from "./seed-products";

logger.modify({ includeContext: false, level: "info" });

async function main() {
  logger.info("Seeding Products...");
  const ctx = await getScriptContext({ upsertUser: true });
  await seedProducts(ctx);
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async e => {
    /* eslint-disable-next-line no-console */
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
