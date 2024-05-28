import type * as paths from "./paths";

import { type Transaction } from "~/prisma/client";
import {
  type ProductRecord,
  type Product,
  ProductRecordType,
  type ProductRecordedRecord,
  type User,
} from "~/prisma/model";
import type { ScrapedThumbnailProduct } from "~/dom/scraped-models";
import { logger } from "~/application/logger";

import { scraper } from "./scrape-client";

type UpdateProductRecordsContext = {
  readonly tx: Transaction;
  readonly limit?: number;
  readonly batchSize?: number;
  readonly user: User;
};

type ProductRecordedRecords = { [key in string]: ProductRecordedRecord[] };

const createProductRecordedRecord = async <P extends paths.ProductsPageId = paths.ProductsPageId>(
  product: Product,
  scrapedProduct: ScrapedThumbnailProduct<P>,
  { tx, user }: Pick<UpdateProductRecordsContext, "user" | "tx">,
): Promise<ProductRecord> => {
  const recorded = await tx.productRecordedRecord.create({
    data: {
      price: scrapedProduct.price,
      rawPrice: scrapedProduct.rawPrice,
      status: scrapedProduct.status,
      wasManuallyCreated: false,
    },
  });
  return tx.productRecord.create({
    data: {
      product: { connect: { id: product.id } },
      createdBy: { connect: { id: user.id } },
      updatedBy: { connect: { id: user.id } },
      recordType: ProductRecordType.RECORDED,
      recordId: recorded.id,
    },
  });
};

const syncExistingProduct = async <P extends paths.ProductsPageId = paths.ProductsPageId>(
  product: Product,
  scrapedProduct: ScrapedThumbnailProduct<P>,
  records: ProductRecordedRecord[],
  { tx, user }: Pick<UpdateProductRecordsContext, "user" | "tx">,
): Promise<ProductRecord | null> => {
  if (product.name !== scrapedProduct.name) {
    // Eventually, we may not want to throw this as a hard error.
    throw new Error(
      `Product '${product.id}' matches the slug for a scraped product, '${product.slug}', but ` +
        `the product name '${product.name}' differs from the scraped name, '${scrapedProduct.name}'!`,
    );
  } else if (product.code !== scrapedProduct.code) {
    // Eventually, we may not want to throw this as a hard error.
    throw new Error(
      `Product '${product.id}' matches the slug for scraped product, '${product.slug}', but ` +
        `the product code '${product.code}' differs from the scraped code, '${scrapedProduct.code}'!`,
    );
  } else if (product.imageSrc !== scrapedProduct.imageSrc) {
    await tx.product.update({
      where: { id: product.id },
      data: { imageSrc: scrapedProduct.imageSrc },
    });
  }
  /* A product should always have at least 1 record, but it may have been an error record,
     in which case there will be no recorded records. */
  if (records.length === 0) {
    return await createProductRecordedRecord(product, scrapedProduct, { tx, user });
  }
  const latestRecord = records[0];
  const differences = scrapedProduct.compareRecord(latestRecord);
  if (differences.hasDifferences) {
    return await createProductRecordedRecord(product, scrapedProduct, { tx, user });
  }
  return null;
};

const syncNewProduct = async <P extends paths.ProductsPageId = paths.ProductsPageId>(
  scrapedProduct: ScrapedThumbnailProduct<P>,
  { tx, user }: Pick<UpdateProductRecordsContext, "user" | "tx">,
): Promise<ProductRecord | null> => {
  const product = await tx.product.create({
    data: {
      name: scrapedProduct.name,
      code: scrapedProduct.code,
      slug: scrapedProduct.slug,
      imageSrc: scrapedProduct.imageSrc,
      createdBy: { connect: { id: user.id } },
      updatedBy: { connect: { id: user.id } },
    },
  });
  return await createProductRecordedRecord(product, scrapedProduct, { tx, user });
};

export class LieNielsenIntegration {
  public async updateProductRecords<P extends paths.ProductsPageId>(
    page: P,
    { tx, limit, user, batchSize = 10 }: UpdateProductRecordsContext,
  ) {
    const scrapedProducts = await scraper.scrapeThumbnailProducts(page, { limit, batchSize });
    const products = await tx.product.findMany({
      include: { records: { orderBy: { timestamp: "desc" } } },
    });
    const productRecords = await tx.productRecord.findMany({
      where: { recordType: ProductRecordType.RECORDED },
      orderBy: { timestamp: "desc" },
    });
    const recordedRecords = await tx.productRecordedRecord.findMany({
      where: { id: { in: productRecords.map(r => r.recordId) } },
    });

    const productRecordedRecords: ProductRecordedRecords = products.reduce(
      (prev: ProductRecordedRecords, curr: Product) => {
        const recs = productRecords.filter(rec => rec.productId === curr.id);
        return {
          ...prev,
          [curr.id]: recordedRecords.filter(r => recs.some(rec => rec.recordId === r.id)),
        };
      },
      {} as ProductRecordedRecords,
    );

    let tracked: { newProducts: string[]; existingProducts: { id: string; slug: string }[] } = {
      existingProducts: [],
      newProducts: [],
    };
    const promises = scrapedProducts.map(scrapedProduct => {
      if (scrapedProduct.isComposite) {
        throw new Error("Unexpectedly encountered composite product!");
      }
      const existing = products.find(p => p.slug === scrapedProduct.slug);
      if (existing) {
        tracked = {
          ...tracked,
          existingProducts: [
            ...tracked.existingProducts,
            { slug: scrapedProduct.slug, id: existing.id },
          ],
        };
        return syncExistingProduct(existing, scrapedProduct, productRecordedRecords[existing.id], {
          tx,
          user,
        });
      }
      tracked = { ...tracked, newProducts: [...tracked.newProducts, scrapedProduct.slug] };
      return syncNewProduct(scrapedProduct, { tx, user });
    });

    if (tracked.existingProducts.length !== 0) {
      logger.info(`Adding new records for ${tracked.existingProducts.length} existing products...`);
    }
    if (tracked.newProducts.length !== 0) {
      logger.info(`Adding ${tracked.newProducts.length} new products...`);
    }
    if (tracked.existingProducts.length === 0 && tracked.newProducts.length === 0) {
      logger.info("No new products to create or new records to add. ");
    }
    const results = await Promise.all(promises);
    return results.filter(r => r !== null);
  }
}

export const integration = new LieNielsenIntegration();
