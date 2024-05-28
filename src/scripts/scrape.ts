import { prisma } from "~/prisma/client";
import { LogLevels } from "~/environment";
import { integration } from "~/lie-nielsen";
import { logger } from "~/application/logger";

logger.level = LogLevels.INFO;

async function main() {
  await prisma.productRecord.deleteMany();
  await prisma.product.deleteMany();
  await prisma.user.deleteMany();

  const user = await prisma.user.create({
    data: { clerkId: "foobar", emailAddress: "fobar@gmail.com", firstName: "foo", lastName: "bar" },
  });
  const records = await prisma.$transaction(
    async tx =>
      await integration.updateProductRecords("hand-tools", { batchSize: 2, limit: 10, tx, user }),
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
