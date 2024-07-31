import { logger } from "~/internal/logger";
import { LogLevel } from "~/internal/loggers/constants";
import { prisma } from "~/prisma/client";

import { integration } from "~/scraping/integrations/lie-nielsen";

import { getScriptContext } from "~/scripts/context";

logger.level = LogLevel.INFO;

async function main() {
  const { user } = await getScriptContext({ upsertUser: true });
  await integration.updateProductRecords("hand-tools", { batchSize: 10, user });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    /* eslint-disable-next-line no-console */
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
