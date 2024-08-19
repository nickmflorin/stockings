import { db } from "~/database/prisma";
import { logger } from "~/internal/logger";
import { LogLevel } from "~/internal/loggers/constants";

import { client } from "~/integrations/lie-nielsen";

import { getScriptContext } from "~/scripts/context";

logger.level = LogLevel.INFO;

async function main() {
  const { user } = await getScriptContext({ upsertUser: true });
  await client.updateProducts({ batchSize: 10, user });
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
