import { logger } from "~/application/logger";

import * as errors from "./errors";
import * as paths from "./paths";

export type RequestOptions = {
  readonly paginated?: boolean;
  readonly errorIsExpected?: (e: Error) => boolean;
};

export type RequestDataProcessor<T = unknown> = (data: string) => T;

export type RequestRT<D extends RequestDataProcessor, O extends RequestOptions> = O extends {
  paginated: true;
}
  ? ProcessedData<D>[]
  : ProcessedData<D>;

type ProcessedData<D extends RequestDataProcessor> = D extends (data: string) => infer R
  ? R
  : never;

export interface ILieNielsenClient<D extends RequestDataProcessor> {
  fetchProduct(slug: string): Promise<ProcessedData<D>>;
  fetchProductsPage<
    O extends Omit<RequestOptions, "errorIsExpected">,
    P extends paths.ProductsPageId,
  >(
    page: P,
    options?: O,
  ): Promise<RequestRT<D, O>>;
  fetchSubProductsPage<
    O extends Omit<RequestOptions, "errorIsExpected">,
    P extends paths.ProductsPageId,
    S extends paths.ProductsSubPageId<P>,
  >(
    page: P,
    subPage: S,
    options?: O,
  ): Promise<RequestRT<D, O>>;
}

export class LieNielsenClient<D extends RequestDataProcessor> implements ILieNielsenClient<D> {
  private readonly processor: D;

  constructor({ processor }: { processor: D }) {
    this.processor = processor;
  }

  private async request<O extends RequestOptions>(
    url: string,
    options?: O,
  ): Promise<RequestRT<D, O>> {
    if (options?.paginated) {
      let paginatedData: ProcessedData<D>[] = [await this.request(url)];
      let page = 2;
      while (true) {
        const paginatedUrl = paths.paginatePathOrUrl(url, page);
        let data: ProcessedData<D>;
        try {
          data = await this.request(paginatedUrl, {
            errorIsExpected: e => e instanceof errors.LieNielsenClientError && e.status === 404,
          });
        } catch (e) {
          // TBD: Should we break on other errors as well?  Maybe rate limiting?
          if (e instanceof errors.LieNielsenClientError && e.status === 404) {
            break;
          }
          throw e;
        }
        paginatedData = [...paginatedData, data];
        page += 1;
      }
      return paginatedData as RequestRT<D, O>;
    }
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
    return this.processor(html) as RequestRT<D, O>;
  }

  public async fetchProduct(slug: string): Promise<ProcessedData<D>> {
    const url = paths.getProductDetailPageUrl(slug);
    return await this.request(url);
  }

  public async fetchProductsPage<
    O extends Omit<RequestOptions, "errorIsExpected">,
    P extends paths.ProductsPageId,
  >(page: P, options?: O): Promise<RequestRT<D, O>> {
    const url = paths.getProductsPageUrl(page);
    return await this.request(url, options);
  }

  public async fetchSubProductsPage<
    O extends Omit<RequestOptions, "errorIsExpected">,
    P extends paths.ProductsPageId,
    S extends paths.ProductsSubPageId<P>,
  >(page: P, subPage: S, options?: O): Promise<RequestRT<D, O>> {
    const url = paths.getProductsSubPageUrl(page, subPage);
    return await this.request(url, options);
  }
}
