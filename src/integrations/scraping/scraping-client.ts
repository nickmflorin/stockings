import { HttpClient, type HttpClientResponseProcessor } from "~/integrations/http";

import * as errors from "./errors/http-errors";

export type RequestOptions = {
  readonly paginated?: boolean;
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

const clientProcessor: HttpClientResponseProcessor<
  string,
  errors.ScrapingSerializationError
> = async (response, params) => {
  try {
    return { data: await response.text() };
  } catch (e) {
    return { error: new errors.ScrapingSerializationError(params) };
  }
};

export abstract class ScrapingHttpClient<D extends RequestDataProcessor> extends HttpClient<
  errors.ScrapingClientError,
  errors.ScrapingNetworkError,
  errors.ScrapingSerializationError,
  typeof clientProcessor
> {
  private readonly processor: D;
  private readonly paginator: RequestPaginator;

  constructor({ processor, paginator }: { processor: D; paginator: RequestPaginator }) {
    super({
      processor: clientProcessor,
      NetworkErrorClass: errors.ScrapingNetworkError,
      ClientErrorClass: errors.ScrapingClientError,
      SerializationErrorClass: errors.ScrapingSerializationError,
    });
    this.processor = processor;
    this.paginator = paginator;
  }

  protected async fetchContent<O extends RequestOptions>(
    url: string,
    options?: O,
  ): Promise<RequestRT<D, O>> {
    if (options?.paginated) {
      let paginatedData: ProcessedRequestData<D>[] = [await this.fetchContent(url)];
      let page = 2;
      while (true) {
        const paginatedUrl = this.paginator(url, page);
        let data: ProcessedRequestData<D>;
        try {
          data = await this.fetchContent(paginatedUrl);
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
    const html = await this.get(url, undefined, { processed: true, strict: true });
    return this.processor(html) as RequestRT<D, O>;
  }
}
