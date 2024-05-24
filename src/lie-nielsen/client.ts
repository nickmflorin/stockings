import * as cheerio from "cheerio";

import { logger } from "~/application/logger";

import * as errors from "./errors";
import * as paths from "./paths";
import { type IScrapedProduct, ScrapedProduct } from "./scraped-product";
import {
  ScrapedThumbnail,
  type IScrapedThumbnail,
  processScrapedThumbnails,
} from "./scraped-thumbnail";

/**
 *
 * @param element
 *
 * ```html
 * <div class="thumbnail">
 *   <a><img /></a>
 *   <div class="caption">
 *     <h5 class="center">
 *       <a></a>
 *     </h5>
 *     <h6>$285.00</h6>
 *   </div>
 * </div>
 * ```
 */

export class LieNielsenClient {
  private async request(url: string): Promise<cheerio.CheerioAPI> {
    logger.info(`Making request to ${url}.`);
    let response: Response;
    try {
      response = await fetch(url);
    } catch (e) {
      logger.error(`There was a network error making a request to ${url}:\n${e}`);
      if (!(e instanceof Error)) {
        throw new TypeError("Fetch unexpectedly threw non-error object.");
      }
      throw new errors.LieNielsenNetworkError(url, e);
    }
    if (!response.ok) {
      logger.error(`There was a ${response.status} client error making a request to ${url}.`, {
        response,
      });
      throw new errors.LieNielsenClientError(url, response.status);
    }
    let html: string;
    try {
      html = await response.text();
    } catch (e) {
      logger.error(
        `There was an error deserializing the response from the request to ${url}:\n${e}`,
        { response },
      );
      if (!(e instanceof Error)) {
        throw new TypeError("Fetch unexpectedly threw non-error object.");
      }
      throw new errors.LieNielsenSerializationError(url, e);
    }
    return cheerio.load(html);
  }

  private async collectPaginatedResults<T>(
    url: string,
    config: {
      readonly processData: (selector: cheerio.CheerioAPI, curr?: T) => T;
    },
  ): Promise<T> {
    const selector = await this.request(url);
    let data = config.processData(selector);

    let page = 2;
    while (true) {
      const paginatedUrl = paths.paginatePathOrUrl(url, page);
      let sel: cheerio.CheerioAPI;
      try {
        sel = await this.request(paginatedUrl);
      } catch (e) {
        // TBD: Should we break on other errors as well?  Maybe rate limiting?
        if (e instanceof errors.LieNielsenClientError && e.status === 404) {
          break;
        }
        throw e;
      }
      data = config.processData(sel, data);
      page += 1;
    }
    return data;
  }

  public async fetchProduct(slug: string): Promise<IScrapedProduct> {
    const url = paths.getProductDetailPageUrl(slug);
    const sel = await this.request(url);
    return ScrapedProduct(sel);
  }

  public async fetchProductsPageThumbnails<
    P extends paths.ProductsPageId,
    S extends paths.ProductsSubPageId<P>,
  >(page: P, subPage?: S) {
    const url = subPage
      ? paths.getProductsSubPageUrl(page, subPage)
      : paths.getProductsPageUrl(page);

    const results = await this.collectPaginatedResults(url, {
      processData: (selector, curr?: IScrapedThumbnail[]) => {
        const existing = curr ?? [];
        const elements = [
          ...selector(".product-list > .product-list-item > .thumbnail").map((i, el) => el),
        ];
        return [...existing, ...elements.map(e => ScrapedThumbnail(e, { page, subPage }))];
      },
    });
    return processScrapedThumbnails(results);
  }

  public async fetchAllProductsPageThumbnails<P extends paths.ProductsPageId>(page: P) {
    const pairs: { url: string; subPage?: paths.ProductsSubPageId<P> }[] =
      paths.ProductsPages.getModel(page).subPages.values.reduce(
        (acc, curr) => [
          ...acc,
          {
            url: paths.getProductsSubPageUrl(page, curr as paths.ProductsSubPageId<P>),
            subPage: curr as paths.ProductsSubPageId<P>,
          },
        ],
        [{ url: paths.getProductsPageUrl(page) }] as {
          url: string;
          subPage?: paths.ProductsSubPageId<P>;
        }[],
      );

    const promises = pairs.map(({ url, subPage }) =>
      this.collectPaginatedResults(url, {
        processData: (selector, curr?: IScrapedThumbnail[]) => {
          const existing = curr ?? [];
          const elements = [
            ...selector(".product-list > .product-list-item > .thumbnail").map((i, el) => el),
          ];
          return [...existing, ...elements.map(e => ScrapedThumbnail(e, { page, subPage }))];
        },
      }),
    );

    const results = await Promise.all(promises);
    return processScrapedThumbnails(results);
  }
}

export const client = new LieNielsenClient();
