import { db } from "~/database";
import { logger } from "~/internal/logger";
import { LogLevel } from "~/internal/loggers/constants";

logger.level = LogLevel.INFO;

async function main() {
  /* eslint-disable-next-line no-console */
  console.log("Need to include seeding script!");
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
