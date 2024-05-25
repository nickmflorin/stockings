import * as cheerio from "cheerio";

import { api, models } from "~/dom";
import { logger } from "~/application/logger";

import * as errors from "./errors";
import * as paths from "./paths";

type RequestOptions = {
  readonly errorIsExpected?: (e: Error) => boolean;
};

export class LieNielsenClient {
  private async request(url: string, options?: RequestOptions): Promise<api.DomApiType> {
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
      const e = new errors.LieNielsenClientError(url, response.status);
      if (options?.errorIsExpected?.(e) !== true) {
        logger.error(`There was a ${response.status} client error making a request to ${url}.`, {
          response,
        });
      }
      throw e;
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
    return api.DomApi(cheerio.load(html));
  }

  private async collectPaginatedResults<T>(
    url: string,
    config: {
      readonly processData: (selector: api.DomApiType, curr?: T) => T;
    },
  ): Promise<T> {
    const selector = await this.request(url, {
      errorIsExpected: e => e instanceof errors.LieNielsenClientError && e.status === 404,
    });
    let data = config.processData(selector);

    let page = 2;
    while (true) {
      const paginatedUrl = paths.paginatePathOrUrl(url, page);
      let sel: api.DomApiType;
      try {
        sel = await this.request(paginatedUrl, {
          errorIsExpected: e => e instanceof errors.LieNielsenClientError && e.status === 404,
        });
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

  public async fetchProduct(slug: string): Promise<models.ScrapedProduct> {
    const url = paths.getProductDetailPageUrl(slug);
    const sel = await this.request(url);
    return new models.ScrapedProduct(sel);
  }

  public async fetchProductsPageThumbnails<
    P extends paths.ProductsPageId,
    S extends paths.ProductsSubPageId<P>,
  >(page: P, subPage?: S) {
    const url = subPage
      ? paths.getProductsSubPageUrl(page, subPage)
      : paths.getProductsPageUrl(page);

    const results = await this.collectPaginatedResults(url, {
      processData: (api, curr?: models.ScrapedThumbnail<P, S>[]) => {
        const existing = curr ?? [];
        const elements = api(".product-list > .product-list-item > .thumbnail", { multiple: true });
        return [
          ...existing,
          ...elements.map(e => new models.ScrapedThumbnail<P, S>(e, { page, subPage })),
        ];
      },
    });
    return models.ScrapedThumbnail.processScrapedThumbnails(results);
  }

  public async fetchAllProductsPageThumbnails<P extends paths.ProductsPageId>(
    page: P,
    options?: { limit?: number },
  ) {
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

    const promises = pairs.slice(0, options?.limit ?? pairs.length).map(({ url, subPage }) =>
      this.collectPaginatedResults(url, {
        processData: (api, curr?: models.ScrapedThumbnail<P, paths.ProductsSubPageId<P>>[]) => {
          const existing = curr ?? [];
          const elements = api(".product-list > .product-list-item > .thumbnail", {
            multiple: true,
          });
          return [
            ...existing,
            ...elements.map(
              e => new models.ScrapedThumbnail<P, paths.ProductsSubPageId<P>>(e, { page, subPage }),
            ),
          ];
        },
      }),
    );

    const results = await Promise.all(promises);
    return models.ScrapedThumbnail.processScrapedThumbnails(results);
  }
}

export const client = new LieNielsenClient();
