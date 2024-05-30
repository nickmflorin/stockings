import * as cheerio from "cheerio";
import chunk from "lodash.chunk";

import type { ILieNielsenClient } from "./client";

import { logger } from "~/application/logger";
import { api } from "~/scraping/dom";

import { LieNielsenClient } from "./client";
import * as paths from "./paths";
import { ScrapedThumbnail, ScrapedProduct, ScrapedThumbnailProduct } from "./scraped-models";

const processor = (html: string) => api.DomApi(cheerio.load(html));

const client = new LieNielsenClient({ processor });

interface ScrapeThumbnailProductsContext {
  readonly limit?: number;
  readonly batchSize?: number;
}

export class LieNielsenScrapeClient {
  private readonly client: ILieNielsenClient<typeof processor>;

  constructor(client: ILieNielsenClient<typeof processor>) {
    this.client = client;
  }

  public async scrapeProduct(slug: string): Promise<ScrapedProduct> {
    const sel = await this.client.fetchProduct(slug);
    return new ScrapedProduct(sel);
  }

  public async scrapeThumbnailProduct<
    P extends paths.ProductsPageId,
    S extends paths.ProductsSubPageId<P>,
  >(thumbnail: ScrapedThumbnail<P, S>): Promise<ScrapedThumbnailProduct<P, S>> {
    const sel = await this.client.fetchProduct(thumbnail.slug);
    return new ScrapedThumbnailProduct<P, S>(sel, thumbnail);
  }

  public async scrapeThumbnailProducts<P extends paths.ProductsPageId>(
    page: P,
    { limit, batchSize = 10 }: ScrapeThumbnailProductsContext,
  ) {
    /* Note: Ideally, we would incorporate the limit into the scraping of the thumbnails in order to
       avoid unnecessary requests - but we cannot do that due to the concurrent nature of how the
       requests are made with Promise.all() - at least not easily, or right now. */
    const thumbnails = await this.scrapeProductAndSubProductsPageThumbnails(page);
    const limited = limit ? thumbnails.slice(0, limit) : thumbnails;

    const chunks = chunk(limited, batchSize);

    let scrapedProducts: ScrapedThumbnailProduct<P>[] = [];
    for (let i = 0; i < chunks.length; i++) {
      logger.info(
        `Processing Product Thumbnail Chunk ${i + 1}/${chunks.length} of ` +
          `Size ${chunks[i].length} for Page ${page}.`,
      );
      const promises: Promise<ScrapedThumbnailProduct<P>>[] = chunks[i].map(thumb =>
        this.scrapeThumbnailProduct(thumb),
      );
      scrapedProducts = [...scrapedProducts, ...(await Promise.all(promises))];
    }
    return ScrapedThumbnailProduct.processScrapedProducts(scrapedProducts);
  }

  public async scrapeProductsPageThumbnails<P extends paths.ProductsPageId>(
    page: P,
    options?: { process: boolean },
  ) {
    const data = await this.client.fetchProductsPage(page, { paginated: true });
    const thumbnails = data.flatMap(d => {
      const elements = d(".product-list > .product-list-item > .thumbnail", { multiple: true });
      return elements.map(e => new ScrapedThumbnail<P>(e, { page }));
    });
    if (options?.process !== false) {
      return ScrapedThumbnail.processScrapedThumbnails(thumbnails);
    }
    return thumbnails;
  }

  public async scrapeSubProductsPageThumbnails<
    P extends paths.ProductsPageId,
    S extends paths.ProductsSubPageId<P>,
  >(page: P, subPage: S, options?: { process: boolean }) {
    const data = await this.client.fetchProductsPage(page, { paginated: true });
    const thumbnails = data.flatMap(d => {
      const elements = d(".product-list > .product-list-item > .thumbnail", { multiple: true });
      return elements.map(e => new ScrapedThumbnail<P, S>(e, { page, subPage }));
    });
    if (options?.process !== false) {
      return ScrapedThumbnail.processScrapedThumbnails(thumbnails);
    }
    return thumbnails;
  }

  public async scrapeProductAndSubProductsPageThumbnails<P extends paths.ProductsPageId>(page: P) {
    const promises = [
      this.scrapeProductsPageThumbnails(page, { process: false }),
      ...paths.ProductsPages.getModel(page).subPages.values.map(subPage =>
        this.scrapeSubProductsPageThumbnails(page, subPage as paths.ProductsSubPageId<P>, {
          process: false,
        }),
      ),
    ];
    const thumbnails = await Promise.all(promises);
    return ScrapedThumbnail.processScrapedThumbnails(thumbnails);
  }
}

export const scraper = new LieNielsenScrapeClient(client);
