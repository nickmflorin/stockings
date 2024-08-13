import { db } from "~/database";
import { logger } from "~/internal/logger";
import { LogLevel } from "~/internal/loggers/constants";

import { getScriptContext } from "~/scripts/context";

import { processNotifications } from "./process-notifications";

logger.level = LogLevel.INFO;

async function main() {
  const ctx = await getScriptContext({ upsertUser: true });
  await processNotifications(ctx);
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
