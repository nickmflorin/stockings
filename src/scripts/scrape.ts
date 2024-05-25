import type { ScrapedProduct } from "~/dom/scraped-models";
import { client } from "~/lie-nielsen";

async function main() {
  const thumbnails = await client.fetchAllProductsPageThumbnails("hand-tools", { limit: 10 });

  let promises: Promise<ScrapedProduct>[] = [];
  for (const thumb of thumbnails.slice(0, 10)) {
    promises = [...promises, client.fetchProduct(thumb.slug)];
  }
  console.log("MAKING PRODUCT REQUESTS");
  const products = await (await Promise.all(promises)).map(p => p.data);
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
