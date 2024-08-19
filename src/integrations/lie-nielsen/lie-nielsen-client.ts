import * as cheerio from "cheerio";
import { chunk } from "lodash-es";

import { type ProductRecord, type User, type Product } from "~/database/model";
import { db } from "~/database/prisma";
import { logger } from "~/internal/logger";

import {
  ScrapingHttpClient,
  type RequestRT,
  type ProcessedRequestData,
  type ScrapingError,
  type DomApiType,
  DomApi,
  isScrapingHttpError,
} from "~/integrations/scraping";

import * as paths from "./paths";
import { ScrapedProduct } from "./scraped-product";
import { ScrapedThumbnail, type ProcessedScrapedThumbnail } from "./scraped-thumbnail";

type UpdateProductRecordsContext = {
  readonly limit?: number;
  readonly batchSize?: number;
  readonly user: User;
  readonly page?: paths.ProductsPageId;
};

type ProductRecords = { [key in string]: ProductRecord[] };

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

export type LieNielsenRequestOptions = {
  readonly paginated?: boolean;
  readonly errorIsExpected?: (e: Error) => boolean;
};

const processor = (html: string) => DomApi(cheerio.load(html));

export interface ILieNielsenClient {
  fetchProduct(slug: string): Promise<ProcessedRequestData<typeof processor>>;
  fetchProductsPage<O extends Omit<LieNielsenRequestOptions, "errorIsExpected">>(
    page: paths.ProductsPageId,
    options?: O,
  ): Promise<RequestRT<typeof processor, O>>;
  fetchSubProductsPage<O extends Omit<LieNielsenRequestOptions, "errorIsExpected">>(
    subPage: paths.ProductsSubPageId,
    options?: O,
  ): Promise<RequestRT<typeof processor, O>>;
}

export class LieNielsenClient
  extends ScrapingHttpClient<typeof processor>
  implements ILieNielsenClient
{
  constructor() {
    super({ processor, paginator: (url, page) => paths.paginatePathOrUrl(url, page) });
  }

  public async fetchProduct(slug: string): Promise<ProcessedRequestData<typeof processor>> {
    const url = paths.getProductDetailPageUrl(slug);
    return await this.fetchContent(url);
  }

  public async fetchProductsPage<
    O extends Omit<LieNielsenRequestOptions, "errorIsExpected">,
    P extends paths.ProductsPageId,
  >(page: P, options?: O): Promise<RequestRT<typeof processor, O>> {
    const url = paths.getProductsPageUrl(page);
    return await this.fetchContent(url, options);
  }

  public async fetchSubProductsPage<O extends Omit<LieNielsenRequestOptions, "errorIsExpected">>(
    subPage: paths.ProductsSubPageId,
    options?: O,
  ): Promise<RequestRT<typeof processor, O>> {
    const url = paths.getProductsSubPageUrl(subPage);
    return await this.fetchContent(url, options);
  }

  private async scrapeProductsPageThumbnails(page: paths.ProductsPageId) {
    const data = await this.fetchProductsPage(page, { paginated: true });
    return data.flatMap(d => {
      const elements = d(".product-list > .product-list-item > .thumbnail", { multiple: true });
      return elements.map(e => new ScrapedThumbnail(e, { page }));
    });
  }

  private async scrapeSubProductsPageThumbnails(
    page: paths.ProductsPageId,
    subPage: paths.ProductsSubPageId,
  ) {
    const data = await this.fetchSubProductsPage(subPage, { paginated: true });
    return data.flatMap(d => {
      const elements = d(".product-list > .product-list-item > .thumbnail", { multiple: true });
      return elements.map(e => new ScrapedThumbnail(e, { page, subPage }));
    });
  }

  private getThumbnailPromises(page?: paths.ProductsPageId): Promise<ScrapedThumbnail[]>[] {
    if (page) {
      return [
        this.scrapeProductsPageThumbnails(page),
        ...paths.ProductsSubPages.models
          .filter(p => p.parent === page)
          .map(({ value: subPage }) => this.scrapeSubProductsPageThumbnails(page, subPage)),
      ];
    }
    return paths.ProductsPages.models.flatMap(({ value: page }) => this.getThumbnailPromises(page));
  }

  public async scrapeThumbnails(options?: { page?: paths.ProductsPageId }) {
    const promises = this.getThumbnailPromises(options?.page);
    const thumbnails = await Promise.all(promises);
    return ScrapedThumbnail.processScrapedThumbnails(thumbnails);
  }

  public async scrapeProduct<O extends ScrapeProductOptions>(
    thumbnail: ProcessedScrapedThumbnail,
    options: O,
  ): Promise<ScrapedProductRT<O>> {
    if (!thumbnail.isValid) {
      throw new Error("Cannot scrape a product with an invalid thumbnail!");
    }
    let domApi: DomApiType;
    try {
      domApi = await this.fetchProduct(thumbnail.validatedData.slug);
    } catch (e) {
      if (isScrapingHttpError(e) && options.strict !== true) {
        return e as ScrapedProductRT<O>;
      }
      throw e;
    }
    return new ScrapedProduct(domApi, { thumbnail });
  }

  public async scrapeProducts({
    limit,
    batchSize = 10,
    page,
  }: ScrapeThumbnailProductsContext & { readonly page?: paths.ProductsPageId }) {
    /* Note: Ideally, we would incorporate the limit into the scraping of the thumbnails in order to
       avoid unnecessary requests - but we cannot do that due to the concurrent nature of how the
       requests are made with Promise.all() - at least not easily, or right now. */
    const thumbnails = await this.scrapeThumbnails({ page });
    const limited = limit ? thumbnails.slice(0, limit) : thumbnails;

    const chunks = chunk(limited, batchSize);

    let scrapedProducts: ScrapedProduct[] = [];
    for (let i = 0; i < chunks.length; i++) {
      logger.info(
        `Processing Product Thumbnail Chunk ${i + 1}/${chunks.length} of ` +
          `Size ${chunks[i].length}.`,
      );
      const promises: Promise<ScrapedProduct>[] = chunks[i].map(thumb =>
        this.scrapeProduct(thumb, { strict: true }),
      );
      scrapedProducts = [...scrapedProducts, ...(await Promise.all(promises))];
    }
    return ScrapedProduct.processScrapedProducts(scrapedProducts);
  }

  public async updateProducts({ limit, user, batchSize = 10, page }: UpdateProductRecordsContext) {
    const scrapedProducts = await this.scrapeProducts({ page, limit, batchSize });

    const products = await db.product.findMany({
      include: { records: { orderBy: { timestamp: "desc" } } },
    });
    const allProductRecords = await db.productRecord.findMany({
      where: { productId: { in: products.map(p => p.id) } },
      orderBy: { timestamp: "desc" },
    });
    const productRecords: ProductRecords = products.reduce(
      (prev: ProductRecords, curr: Product) => ({
        ...prev,
        [curr.id]: allProductRecords.filter(rec => rec.productId === curr.id),
      }),
      {} as ProductRecords,
    );

    type ProductRecordPromise = Promise<{
      record: ProductRecord | null;
      state: "updated" | "created";
    }>;

    const results = await db.$transaction(async tx => {
      const promises = scrapedProducts.map((scrapedProduct): ProductRecordPromise => {
        if (scrapedProduct.thumbnail.validatedData.isComposite) {
          throw new Error("Unexpectedly encountered product with composite thumbnail!");
        }
        const existing = products.find(p => p.slug === scrapedProduct.slug);
        if (existing) {
          return (async () => {
            const [_, record] = await scrapedProduct.syncProduct(
              tx,
              existing,
              productRecords[existing.id],
              { user },
            );
            return {
              state: "updated" as const,
              record: record,
            };
          })();
        }
        return (async () => {
          const [_, record] = await scrapedProduct.createProduct(tx, { user });
          return {
            record,
            state: "created" as const,
          };
        })();
      });
      return await Promise.all(promises);
    });

    const updatedProducts = results
      .filter(
        (r): r is { record: ProductRecord; state: "updated" } =>
          r.record !== null && r.state === "updated",
      )
      .map(r => r.record);

    const createdProducts = results
      .filter(
        (r): r is { record: ProductRecord; state: "created" } =>
          r.record !== null && r.state === "created",
      )
      .map(r => r.record);

    if (updatedProducts.length === 0 && createdProducts.length === 0) {
      logger.info("There are no new products to add and no existing products to add records for.");
    } else {
      if (updatedProducts.length !== 0) {
        logger.info(`Added records for ${updatedProducts.length} existing product(s)...`);
      }
      if (createdProducts.length !== 0) {
        logger.info(
          `Created ${createdProducts.length} new product(s) and added a record for each...`,
        );
      }
    }
    return { updated: updatedProducts, created: createdProducts };
  }
}

export const client = new LieNielsenClient();
