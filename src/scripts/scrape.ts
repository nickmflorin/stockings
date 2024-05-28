import { prisma } from "~/prisma/client";
import { LogLevels } from "~/environment";
import { integration } from "~/lie-nielsen";
import { logger } from "~/application/logger";
import { getScriptContext } from "~/scripts/context";

logger.level = LogLevels.INFO;

async function main() {
  await prisma.$transaction(
    async tx => {
      const { user } = await getScriptContext(tx, { upsertUser: true });
      await integration.updateProductRecords("hand-tools", { batchSize: 10, tx, user });
    },
    { timeout: 500000 },
  );
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
