import type * as paths from "./paths";
import type { ScrapedThumbnailProduct } from "./scraped-models";

import { logger } from "~/internal/logger";
import { prisma, type Transaction } from "~/prisma/client";
import {
  type ProductRecord,
  type Product,
  ProductRecordType,
  type ProductRecordedRecord,
  type User,
} from "~/prisma/model";

import { scraper } from "./scrape-client";

type UpdateProductRecordsContext = {
  readonly limit?: number;
  readonly batchSize?: number;
  readonly user: User;
};

type ProductRecordedRecords = { [key in string]: ProductRecordedRecord[] };

/* Note: In both cases, both when the Product exists and when the Product does not exist, we are
   always creating a new ProductRecordedRecord.  The 'updated' and 'created' here refer to whether
   or not the Product itself was updated with a new ProductRecordedRecord or created and then
   updated with a new ProductRecordedRecord.

   These are just used to determine what to log after the promises are concurrently resolved. */
type UpdatedProduct = { updated: ProductRecord; created?: never };
type CreatedProduct = { created: ProductRecord; updated?: never };

const createProductRecordedRecord = async <P extends paths.ProductsPageId = paths.ProductsPageId>(
  tx: Transaction,
  product: Product,
  scrapedProduct: ScrapedThumbnailProduct<P>,
  { user }: Pick<UpdateProductRecordsContext, "user">,
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
  tx: Transaction,
  product: Product,
  scrapedProduct: ScrapedThumbnailProduct<P>,
  records: ProductRecordedRecord[],
  { user }: Pick<UpdateProductRecordsContext, "user">,
): Promise<UpdatedProduct | null> => {
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
    logger.info(
      `Updating image source for product '${product.id}' (slug = '${product.slug}' from ` +
        `'${product.imageSrc}' to '${scrapedProduct.imageSrc}'.`,
      {
        id: product.id,
        slug: product.slug,
        imageSrc: product.imageSrc,
        newImageSrc: scrapedProduct.imageSrc,
      },
    );
    await tx.product.update({
      where: { id: product.id },
      data: { imageSrc: scrapedProduct.imageSrc, updatedById: user.id },
    });
  }
  /* A product should always have at least 1 record, but it may have been an error record,
     in which case there will be no recorded records. */
  if (records.length === 0) {
    logger.info(
      `Creating a new recorded record for product '${product.slug}' because there are recorded ` +
        "records for the product.",
    );
    return { updated: await createProductRecordedRecord(tx, product, scrapedProduct, { user }) };
  }
  const latestRecord = records[0];
  const differences = scrapedProduct.compareRecord(latestRecord);
  if (differences.hasDifferences) {
    logger.info(
      `Detected differences ${differences.toString()} for product '${product.id}' ` +
        `(slug = '${product.slug}') compared to the last recorded record. ` +
        "Adding a recorded record to history.",
    );
    return { updated: await createProductRecordedRecord(tx, product, scrapedProduct, { user }) };
  }
  return null;
};

const syncNewProduct = async <P extends paths.ProductsPageId = paths.ProductsPageId>(
  tx: Transaction,
  scrapedProduct: ScrapedThumbnailProduct<P>,
  { user }: Pick<UpdateProductRecordsContext, "user">,
): Promise<CreatedProduct> => {
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
  return { created: await createProductRecordedRecord(tx, product, scrapedProduct, { user }) };
};

export class LieNielsenIntegration {
  public async updateProductRecords<P extends paths.ProductsPageId>(
    page: P,
    { limit, user, batchSize = 10 }: UpdateProductRecordsContext,
  ) {
    const scrapedProducts = await scraper.scrapeThumbnailProducts(page, { limit, batchSize });

    const products = await prisma.product.findMany({
      include: { records: { orderBy: { timestamp: "desc" } } },
    });
    const productRecords = await prisma.productRecord.findMany({
      where: { recordType: ProductRecordType.RECORDED },
      orderBy: { timestamp: "desc" },
    });
    const recordedRecords = await prisma.productRecordedRecord.findMany({
      where: { id: { in: productRecords.map(r => r.recordId) } },
    });
    const productRecordedRecords: ProductRecordedRecords = products.reduce(
      (prev: ProductRecordedRecords, curr: Product) => {
        const recs = productRecords.filter(rec => rec.productId === curr.id);
        return {
          ...prev,
          /* It is important to map over the 'recs' variable because the 'recs' are ordered by
             timestamp. */
          [curr.id]: recs.map(rec => {
            const recorded = recordedRecords.find(r => r.id === rec.recordId);
            if (!recorded) {
              throw new Error(
                `Unexpected Condition: No recorded record found for product record '${rec.id}'!`,
              );
            }
            return recorded;
          }),
        };
      },
      {} as ProductRecordedRecords,
    );

    const results = await prisma.$transaction(async tx => {
      const promises = scrapedProducts.map(scrapedProduct => {
        if (scrapedProduct.thumbnail.isComposite) {
          throw new Error("Unexpectedly encountered product with composite thumbnail!");
        }
        const existing = products.find(p => p.slug === scrapedProduct.slug);
        if (existing) {
          return syncExistingProduct(
            tx,
            existing,
            scrapedProduct,
            productRecordedRecords[existing.id],
            {
              user,
            },
          );
        }
        return syncNewProduct(tx, scrapedProduct, { user });
      });
      return await Promise.all(promises);
    });
    const updatedProducts = results
      .filter((r): r is UpdatedProduct => r !== null && r.updated !== undefined)
      .map(r => r.updated);

    const createdProducts = results
      .filter((r): r is CreatedProduct => r !== null && r.created !== undefined)
      .map(r => r.created);

    if (updatedProducts.length === 0 && createdProducts.length === 0) {
      logger.info("There are no new products to add and no existing products to add records for.");
    } else {
      if (updatedProducts.length !== 0) {
        logger.info(`Added records for ${updatedProducts.length} existing product(S)...`);
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
