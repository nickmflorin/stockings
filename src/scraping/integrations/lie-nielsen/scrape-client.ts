import * as cheerio from "cheerio";
import { chunk } from "lodash-es";

import type { ILieNielsenClient } from "../../http/lie-nielsen-client";

import { logger } from "~/internal/logger";

import { DomApi } from "~/scraping/dom";
import type { DomApiType } from "~/scraping/dom/api";
import { type ScrapingError } from "~/scraping/errors";
import { isScrapingHttpError } from "~/scraping/errors";

import { LieNielsenClient } from "../../http/lie-nielsen-client";

import * as paths from "./paths";
import { ScrapedThumbnail, ScrapedProduct, type ProcessedScrapedThumbnail } from "./scraped-models";

const processor = (html: string) => DomApi(cheerio.load(html));

const client = new LieNielsenClient({ processor });

interface ScrapeThumbnailProductsContext {
  readonly limit?: number;
  readonly batchSize?: number;
}

type ScrapeProductOptions = {
  readonly strict?: boolean;
};

type ScrapedProductRT<O extends ScrapeProductOptions> = O extends { strict: true }
  ? ScrapedProduct
  : ScrapingError | ScrapedProduct;

export class LieNielsenScrapeClient {
  private readonly client: ILieNielsenClient<typeof processor>;

  constructor(client: ILieNielsenClient<typeof processor>) {
    this.client = client;
  }

  /* public async scrapeProduct(slug: string): Promise<ScrapedProduct> {
       const sel = await this.client.fetchProduct(slug);
       return new ScrapedProduct(sel);
     } */

  public async scrapeProduct<O extends ScrapeProductOptions>(
    thumbnail: ProcessedScrapedThumbnail,
    options: O,
  ): Promise<ScrapedProductRT<O>> {
    if (!thumbnail.isValid) {
      throw new Error("Cannot scrape a product with an invalid thumbnail!");
    }
    let domApi: DomApiType;
    try {
      domApi = await this.client.fetchProduct(thumbnail.validatedData.slug);
    } catch (e) {
      if (isScrapingHttpError(e) && options.strict !== true) {
        return e as ScrapedProductRT<O>;
      }
      throw e;
    }
    return new ScrapedProduct(domApi, { thumbnail });
  }

  public async scrapeProducts<P extends paths.ProductsPageId>(
    page: P,
    { limit, batchSize = 10 }: ScrapeThumbnailProductsContext,
  ) {
    /* Note: Ideally, we would incorporate the limit into the scraping of the thumbnails in order to
       avoid unnecessary requests - but we cannot do that due to the concurrent nature of how the
       requests are made with Promise.all() - at least not easily, or right now. */
    const thumbnails = await this.scrapeProductAndSubProductsPageThumbnails(page);
    const limited = limit ? thumbnails.slice(0, limit) : thumbnails;

    const chunks = chunk(limited, batchSize);

    let scrapedProducts: ScrapedProduct[] = [];
    for (let i = 0; i < chunks.length; i++) {
      logger.info(
        `Processing Product Thumbnail Chunk ${i + 1}/${chunks.length} of ` +
          `Size ${chunks[i].length} for Page ${page}.`,
      );
      const promises: Promise<ScrapedProduct>[] = chunks[i].map(thumb =>
        this.scrapeProduct(thumb, { strict: true }),
      );
      scrapedProducts = [...scrapedProducts, ...(await Promise.all(promises))];
    }
    return ScrapedProduct.processScrapedProducts(scrapedProducts);
  }

  public async scrapeProductsPageThumbnails<P extends paths.ProductsPageId>(
    page: P,
    options?: { process: boolean },
  ) {
    const data = await this.client.fetchProductsPage(page, { paginated: true });
    const thumbnails = data.flatMap(d => {
      const elements = d(".product-list > .product-list-item > .thumbnail", { multiple: true });
      return elements.map(e => new ScrapedThumbnail(e, { page }));
    });
    /* if (options?.process !== false) {
         return ScrapedThumbnail.processScrapedThumbnails(thumbnails);
       } */
    return thumbnails;
  }

  public async scrapeSubProductsPageThumbnails<
    P extends paths.ProductsPageId,
    S extends paths.ProductsSubPageId<P>,
  >(page: P, subPage: S, options?: { process: boolean }) {
    const data = await this.client.fetchProductsPage(page, { paginated: true });
    const thumbnails = data.flatMap(d => {
      const elements = d(".product-list > .product-list-item > .thumbnail", { multiple: true });
      return elements.map(e => new ScrapedThumbnail(e, { page, subPage }));
    });
    /* if (options?.process !== false) {
         return ScrapedThumbnail.processScrapedThumbnails(thumbnails);
       } */
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
