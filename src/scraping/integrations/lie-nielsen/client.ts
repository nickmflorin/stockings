import {
  ScrapingHttpClient,
  type RequestRT,
  type RequestDataProcessor,
  type ProcessedRequestData,
} from "~/scraping/http";

import * as paths from "./paths";

export type RequestOptions = {
  readonly paginated?: boolean;
  readonly errorIsExpected?: (e: Error) => boolean;
};

export interface ILieNielsenClient<D extends RequestDataProcessor> {
  fetchProduct(slug: string): Promise<ProcessedRequestData<D>>;
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

export class LieNielsenClient<D extends RequestDataProcessor>
  extends ScrapingHttpClient<D>
  implements ILieNielsenClient<D>
{
  constructor({ processor }: { processor: D }) {
    super({ processor, paginator: (url, page) => paths.paginatePathOrUrl(url, page) });
  }

  public async fetchProduct(slug: string): Promise<ProcessedRequestData<D>> {
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
