import { client } from "~/lie-nielsen";
import type { IScrapedProduct } from "~/lie-nielsen/scraped-product";

async function main() {
  const thumbnails = await client.fetchAllProductsPageThumbnails("hand-tools");

  let promises: Promise<IScrapedProduct>[] = [];
  for (const thumb of thumbnails) {
    promises = [...promises, client.fetchProduct(thumb.slug)];
  }
  console.log("MAKING PRODUCT REQUESTS");
  const products = await Promise.all(promises.slice(0, 15));
  console.log(products);
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
