import { prisma } from "~/prisma/client";
import type { ScrapedProduct } from "~/dom/scraped-models";
import { scraper } from "~/lie-nielsen";

async function main() {
  const thumbnails = await scraper.fetchProductAndSubProductsPageThumbnails("hand-tools");
  console.log(thumbnails);
  /* let promises: Promise<ScrapedProduct>[] = [];
     for (const thumb of thumbnails.slice(0, 10)) {
       promises = [...promises, client.fetchProduct(thumb.slug)];
     }
     const products = await (await Promise.all(promises)).map(p => p.data); */
  // await prisma.test.create({ data: { name: "Test" } });
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
