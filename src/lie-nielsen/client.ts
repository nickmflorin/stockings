import * as cheerio from "cheerio";

import { logger } from "~/application/logger";

import * as errors from "./errors";
import * as paths from "./paths";
import { Thumbnail, type IThumbnail } from "./thumbnail";

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
  private async request(url: string): Promise<string> {
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
    let text: string;
    try {
      text = await response.text();
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
    return text;
  }

  private async collectPaginatedResults<T>(
    url: string,
    config: {
      readonly processData: (selector: cheerio.CheerioAPI, curr?: T) => T;
    },
  ): Promise<T> {
    const firstPageHtml = await this.request(url);
    const selector = cheerio.load(firstPageHtml);
    let data = config.processData(selector);

    let page = 2;
    while (true) {
      const paginatedUrl = paths.paginatePathOrUrl(url, page);
      let html: string;
      try {
        html = await this.request(paginatedUrl);
      } catch (e) {
        // TBD: Should we break on other errors as well?  Maybe rate limiting?
        if (e instanceof errors.LieNielsenClientError && e.status === 404) {
          break;
        }
        throw e;
      }
      const paginatedSelector = cheerio.load(html);
      data = config.processData(paginatedSelector, data);
      page += 1;
    }
    return data;
  }

  public async fetchProductsPageThumbnails<
    P extends paths.ProductsPageId,
    S extends paths.ProductsSubPageId<P>,
  >(page: P, subPage?: S) {
    const url = subPage
      ? paths.getProductsSubPageUrl(page, subPage)
      : paths.getProductsPageUrl(page);

    return this.collectPaginatedResults(url, {
      processData: (selector, curr?: IThumbnail[]) => {
        const existing = curr ?? [];
        const elements = [
          ...selector(".product-list > .product-list-item > .thumbnail").map((i, el) => el),
        ];
        return [...existing, ...elements.map(e => Thumbnail(e, { page, subPage }))];
      },
    });
  }

  /* public async fetchProductPage(id: paths.ProductPageId, path: string) {
       const url = paths.getProductPageUrl(id); */

  /*   return this.collectPaginatedResults(url, {
         processData: (selector, curr?: Thumbnail[]) => {
           const existing = curr ?? [];
           const elements = [
             ...selector(".product-list > .product-list-item > .thumbnail").map((i, el) => el),
           ];
           return [...existing, ...elements.map(e => parseThumbnail(e))];
         },
       });
     } */
}

export const client = new LieNielsenClient();
