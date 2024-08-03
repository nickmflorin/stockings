import type * as paths from "./paths";
import type { ProcessedScrapedProduct } from "./scraped-product";

import { db, type Transaction } from "~/database";
import { type ProductRecord, type Product, type User } from "~/database/model";
import { logger } from "~/internal/logger";

import { client } from "./lie-nielsen-client";

type UpdateProductRecordsContext = {
  readonly limit?: number;
  readonly batchSize?: number;
  readonly user: User;
  readonly page?: paths.ProductsPageId;
};

type ProductRecords = { [key in string]: ProductRecord[] };

export class LieNielsenIntegration {
  private async syncNewProduct(
    tx: Transaction,
    scrapedProduct: ProcessedScrapedProduct,
    { user }: Pick<UpdateProductRecordsContext, "user">,
  ): Promise<ProductRecord> {
    const product = await scrapedProduct.createProduct(tx, { user });
    return await scrapedProduct.createProductRecord(tx, product, { user });
  }

  private async syncExistingProduct(
    tx: Transaction,
    product: Product,
    scrapedProduct: ProcessedScrapedProduct,
    records: ProductRecord[],
    { user }: Pick<UpdateProductRecordsContext, "user">,
  ): Promise<ProductRecord | null> {
    await scrapedProduct.syncProduct(tx, product, { user });

    /* A product should always have at least 1 record, but it may have been an error record,
       in which case there will be no recorded records. */
    if (records.length === 0) {
      logger.info(
        `Creating a new recorded record for product '${product.slug}' because there are recorded ` +
          "records for the product.",
      );
      return await scrapedProduct.createProductRecord(tx, product, { user });
    }
    const latestRecord = records[0];

    /* Note: If the latest record had errors, there will be undefined values for at least one of
       the fields.  This is okay though - because if a previous value was undefined due to an error,
       and the error was resolved, we want to add a new record with the resolved value.  Similarly,
       if the previous value is not undefined, and the new value is undefined - there was an error,
       and we want to add a new record to indicate that the field is now undefined due to the
       error. */
    const differences = scrapedProduct.compareToRecord(latestRecord);
    if (differences.hasDifferences) {
      logger.info(
        `Detected differences ${differences.toString()} for product '${product.id}' ` +
          `(slug = '${product.slug}') compared to the last recorded record. ` +
          "Adding a recorded record to history.",
      );
      return await scrapedProduct.createProductRecord(tx, product, { user });
    }
    return null;
  }

  public async updateProducts({ limit, user, batchSize = 10, page }: UpdateProductRecordsContext) {
    const scrapedProducts = await client.scrapeProducts({ page, limit, batchSize });

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
          return (async () => ({
            state: "updated" as const,
            record: await this.syncExistingProduct(
              tx,
              existing,
              scrapedProduct,
              productRecords[existing.id],
              {
                user,
              },
            ),
          }))();
        }
        return (async () => ({
          record: await this.syncNewProduct(tx, scrapedProduct, { user }),
          state: "created" as const,
        }))();
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

export const integration = new LieNielsenIntegration();
