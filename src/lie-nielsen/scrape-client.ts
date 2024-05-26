import * as cheerio from "cheerio";

import type { ILieNielsenClient } from "./client";

import { api, models } from "~/dom";

import { LieNielsenClient } from "./client";
import * as paths from "./paths";

interface ILieNielsenScrapeClient {
  scrapeProduct(slug: string): Promise<models.ScrapedProduct>;
}

const processor = (html: string) => api.DomApi(cheerio.load(html));

const client = new LieNielsenClient({ processor });

export class LieNielsenScrapeClient implements ILieNielsenScrapeClient {
  private readonly client: ILieNielsenClient<typeof processor>;

  constructor(client: ILieNielsenClient<typeof processor>) {
    this.client = client;
  }

  public async scrapeProduct(slug: string): Promise<models.ScrapedProduct> {
    const sel = await this.client.fetchProduct(slug);
    return new models.ScrapedProduct(sel);
  }

  public async fetchProductsPageThumbnails<P extends paths.ProductsPageId>(
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

  public async fetchSubProductsPageThumbnails<
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

  public async fetchProductAndSubProductsPageThumbnails<P extends paths.ProductsPageId>(page: P) {
    const promises = [
      this.fetchProductsPageThumbnails(page, { process: false }),
      ...paths.ProductsPages.getModel(page).subPages.values.map(subPage =>
        this.fetchSubProductsPageThumbnails(page, subPage as paths.ProductsSubPageId<P>, {
          process: false,
        }),
      ),
    ];
    const thumbnails = await Promise.all(promises);
    return models.ScrapedThumbnail.processScrapedThumbnails(thumbnails);
  }
}

export const scraper = new LieNielsenScrapeClient(client);
