import { client } from "~/lie-nielsen";

async function main() {
  const thumbnails = await client.fetchProductPageThumbnails("hand-tools");
}

main()
  .then(async () => {
    // await prisma.$disconnect();
  })
  .catch(async e => {
    /* eslint-disable-next-line no-console */
    console.error(e);
    // await prisma.$disconnect();
    process.exit(1);
  });
