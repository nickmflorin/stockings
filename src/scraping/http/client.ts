import { logger } from "~/internal/logger";

import * as errors from "./errors";

export type RequestOptions = {
  readonly paginated?: boolean;
  readonly errorIsExpected?: (e: Error) => boolean;
};

export type RequestDataProcessor<T = unknown> = (data: string) => T;

export type RequestPaginator = (url: string, page: number) => string;

export type RequestRT<D extends RequestDataProcessor, O extends RequestOptions> = O extends {
  paginated: true;
}
  ? ProcessedRequestData<D>[]
  : ProcessedRequestData<D>;

export type ProcessedRequestData<D extends RequestDataProcessor> = D extends (
  data: string,
) => infer R
  ? R
  : never;

export abstract class ScrapingHttpClient<D extends RequestDataProcessor> {
  private readonly processor: D;
  private readonly paginator: RequestPaginator;

  constructor({ processor, paginator }: { processor: D; paginator: RequestPaginator }) {
    this.processor = processor;
    this.paginator = paginator;
  }

  protected async request<O extends RequestOptions>(
    url: string,
    options?: O,
  ): Promise<RequestRT<D, O>> {
    if (options?.paginated) {
      let paginatedData: ProcessedRequestData<D>[] = [await this.request(url)];
      let page = 2;
      while (true) {
        const paginatedUrl = this.paginator(url, page);
        let data: ProcessedRequestData<D>;
        try {
          data = await this.request(paginatedUrl, {
            errorIsExpected: e => e instanceof errors.ScrapingClientError && e.status === 404,
          });
        } catch (e) {
          // TBD: Should we break on other errors as well?  Maybe rate limiting?
          if (e instanceof errors.ScrapingClientError && e.status === 404) {
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
      throw new errors.ScrapingNetworkError(url, e);
    }
    if (!response.ok) {
      const e = new errors.ScrapingClientError(url, response.status);
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
      throw new errors.ScrapingSerializationError(url, e);
    }
    return this.processor(html) as RequestRT<D, O>;
  }
}
