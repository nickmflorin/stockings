import { db } from "~/database";
import { logger } from "~/internal/logger";
import { LogLevel } from "~/internal/loggers/constants";

import { getScriptContext } from "../context";

import { seedProducts } from "./seed-products";

logger.level = LogLevel.INFO;

async function main() {
  logger.info("Seeding Products...");
  const ctx = await getScriptContext({ upsertUser: true });
  await db.$transaction(
    async tx => {
      await seedProducts(tx, ctx);
    },
    { timeout: 50000 },
  );
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
