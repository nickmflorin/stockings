import * as cheerio from "cheerio";
import chunk from "lodash.chunk";

import type { ILieNielsenClient } from "./client";

import { api, models } from "~/dom";
import type { ScrapedThumbnail } from "~/dom/scraped-models";
import { logger } from "~/application/logger";

import { LieNielsenClient } from "./client";
import * as paths from "./paths";

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

  public async scrapeProduct(slug: string): Promise<models.ScrapedProduct> {
    const sel = await this.client.fetchProduct(slug);
    return new models.ScrapedProduct(sel);
  }

  public async scrapeThumbnailProduct<
    P extends paths.ProductsPageId,
    S extends paths.ProductsSubPageId<P>,
  >(thumbnail: ScrapedThumbnail<P, S>): Promise<models.ScrapedThumbnailProduct<P, S>> {
    const sel = await this.client.fetchProduct(thumbnail.slug);
    return new models.ScrapedThumbnailProduct<P, S>(sel, thumbnail);
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

    let scrapedProducts: models.ScrapedThumbnailProduct<P>[] = [];
    for (let i = 0; i < chunks.length; i++) {
      logger.info(
        `Processing Product Thumbnail Chunk ${i + 1}/${chunks.length} of ` +
          `Size ${chunks[i].length} for Page ${page}.`,
      );
      const promises: Promise<models.ScrapedThumbnailProduct<P>>[] = chunks[i].map(thumb =>
        this.scrapeThumbnailProduct(thumb),
      );
      scrapedProducts = [...scrapedProducts, ...(await Promise.all(promises))];
    }
    return models.ScrapedThumbnailProduct.processScrapedProducts(scrapedProducts);
  }

  public async scrapeProductsPageThumbnails<P extends paths.ProductsPageId>(
    page: P,
    options?: { process: boolean },
  ) {
    const data = await this.client.fetchProductsPage(page, { paginated: true });
    const thumbnails = data.flatMap(d => {
      const elements = d(".product-list > .product-list-item > .thumbnail", { multiple: true });
      return elements.map(e => new models.ScrapedThumbnail<P>(e, { page }));
    });
    if (options?.process !== false) {
      return models.ScrapedThumbnail.processScrapedThumbnails(thumbnails);
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
      return elements.map(e => new models.ScrapedThumbnail<P, S>(e, { page, subPage }));
    });
    if (options?.process !== false) {
      return models.ScrapedThumbnail.processScrapedThumbnails(thumbnails);
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
    return models.ScrapedThumbnail.processScrapedThumbnails(thumbnails);
  }
}

export const scraper = new LieNielsenScrapeClient(client);
