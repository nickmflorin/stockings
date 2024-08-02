import type * as paths from "./paths";
import type { ProcessedScrapedProduct, IScrapedProductData } from "./scraped-models";

import { logger } from "~/internal/logger";
import { prisma, type Transaction } from "~/prisma/client";
import {
  type ProductRecord,
  type Product,
  ScrapingErrorCode,
  type User,
  ProductRecordDataField,
} from "~/prisma/model";

import { Differences } from "~/lib/differences";
import { humanizeList } from "~/lib/formatters";
import { type ScrapingDomError } from "~/scraping/errors";
import type { ScrapedModelField } from "~/scraping/models";

import { scraper } from "./scrape-client";

type UpdateProductRecordsContext = {
  readonly limit?: number;
  readonly batchSize?: number;
  readonly user: User;
};

type ProductRecords = { [key in string]: ProductRecord[] };

/* Note: In both cases, both when the Product exists and when the Product does not exist, we are
   always creating a new ProductRecord.  The 'updated' and 'created' here refer to whether or not
   the Product itself was updated with a new ProductRecord or created and then updated with a new
   ProductRecord.

   These are just used to determine what to log after the promises are concurrently resolved. */
type UpdatedProduct = { updated: ProductRecord; created?: never };
type CreatedProduct = { created: ProductRecord | null; updated?: never };

const ProductRecordDataFieldMap: {
  [key in Extract<
    ScrapedModelField<IScrapedProductData>,
    "price" | "rawPrice" | "status"
  >]: ProductRecordDataField;
} = {
  price: ProductRecordDataField.PRICE,
  status: ProductRecordDataField.STATUS,
  rawPrice: ProductRecordDataField.RAW_PRICE,
};

type ErrorDataToCreate<F extends ProductRecordDataField = ProductRecordDataField> = {
  field: F;
  errorId: string;
  message: string;
  errorCode: ScrapingErrorCode;
};

const createProductRecord = async (
  tx: Transaction,
  product: Product,
  scrapedProduct: ProcessedScrapedProduct,
  { user }: Pick<UpdateProductRecordsContext, "user">,
): Promise<ProductRecord> => {
  const createErrorData = async <F extends ProductRecordDataField>(
    field: F,
    error: ScrapingDomError,
  ): Promise<ErrorDataToCreate<F>> => {
    switch (error.errorCode) {
      case ScrapingErrorCode.MISSING_ELEMENT: {
        const created = await tx.missingElementErrorData.create({ data: error.errorData });
        return { field, errorId: created.id, errorCode: error.errorCode, message: error.message };
      }
      case ScrapingErrorCode.MISSING_TEXT: {
        const created = await tx.missingTextErrorData.create({ data: error.errorData });
        return { field, errorId: created.id, errorCode: error.errorCode, message: error.message };
      }
      case ScrapingErrorCode.NONUNIQUE_ELEMENT: {
        const created = await tx.nonUniqueElementErrorData.create({ data: error.errorData });
        return { field, errorId: created.id, errorCode: error.errorCode, message: error.message };
      }
      case ScrapingErrorCode.INVALID_ATTRIBUTE: {
        const created = await tx.invalidAttributeErrorData.create({ data: error.errorData });
        return { field, errorId: created.id, errorCode: error.errorCode, message: error.message };
      }
      case ScrapingErrorCode.INVALID_TEXT: {
        const created = await tx.invalidTextErrorData.create({ data: error.errorData });
        return { field, errorId: created.id, errorCode: error.errorCode, message: error.message };
      }
      case ScrapingErrorCode.MISSING_ATTRIBUTE: {
        const created = await tx.missingAttributeErrorData.create({ data: error.errorData });
        return { field, errorId: created.id, errorCode: error.errorCode, message: error.message };
      }
      case ScrapingErrorCode.NONUNIQUE_TEXT: {
        const created = await tx.nonUniqueTextErrorData.create({ data: error.errorData });
        return { field, errorId: created.id, errorCode: error.errorCode, message: error.message };
      }
    }
  };

  const errors = await Promise.all(
    Object.entries(scrapedProduct.errors).reduce(
      (curr: Promise<ErrorDataToCreate>[], [field, error]) => {
        const fieldName =
          ProductRecordDataFieldMap[field as keyof typeof ProductRecordDataFieldMap];
        if (fieldName) {
          return [...curr, createErrorData(fieldName, error)];
        }
        return curr;
      },
      [] as Promise<ErrorDataToCreate>[],
    ),
  );

  return await tx.productRecord.create({
    data: {
      product: { connect: { id: product.id } },
      createdBy: { connect: { id: user.id } },
      updatedBy: { connect: { id: user.id } },
      wasManuallyCreated: false,
      price: scrapedProduct.data.price.value,
      rawPrice: scrapedProduct.data.rawPrice.value,
      status: scrapedProduct.data.status.value,
      errors: {
        createMany: { data: errors },
      },
    },
  });
};

const syncExistingProduct = async (
  tx: Transaction,
  product: Product,
  scrapedProduct: ProcessedScrapedProduct,
  records: ProductRecord[],
  { user }: Pick<UpdateProductRecordsContext, "user">,
): Promise<UpdatedProduct | null> => {
  let updateData: Partial<Pick<Product, "code" | "name" | "imageSrc">> = {};
  /* The 'name' associated with the scraped product might not be present if there was an error
     parsing the name from the HTML. */
  const name = scrapedProduct.data.name.value ?? null;
  if (name !== null && product.name !== name) {
    logger.warn(
      `Product '${product.id}' has the same slug as the scraped product, '${product.slug}', but ` +
        `the product name '${product.name}' differs from the scraped name, '${name}'!`,
      { scrapedName: name, product },
    );
    updateData = { ...updateData, name };
  }
  /* The 'code' associated with the scraped product might not be present if there was an error
     parsing the code from the HTML. */
  const code = scrapedProduct.data.code.value ?? null;
  if (code !== null && product.code !== code) {
    logger.warn(
      `Product '${product.id}' has the same slug as the scraped product, '${product.slug}', but ` +
        `the product code '${product.code}' differs from the scraped code, '${code}'!`,
      { scrapedCode: code, product },
    );
    updateData = { ...updateData, code };
  }
  /* The 'code' associated with the scraped product might not be present if there was an error
     parsing the code from the HTML. */
  const imageSrc = scrapedProduct.data.imageSrc.value ?? null;
  if (imageSrc !== null && product.imageSrc !== imageSrc) {
    logger.warn(
      `Product '${product.id}' has the same slug as the scraped product, '${product.slug}', but ` +
        `the product image '${product.imageSrc}' differs from the scraped image, '${imageSrc}'!`,
      { scrapedImageSrc: imageSrc, product },
    );
    updateData = { ...updateData, imageSrc };
  }
  if (Object.keys(updateData).length !== 0) {
    const humanized = humanizeList(Object.keys(updateData), { formatter: v => `'${v}'` });
    logger.info(
      `Updating field(s) ${humanized} for product '${product.id}' (slug = '${product.slug}').`,
      {
        id: product.id,
        slug: product.slug,
        updateData,
      },
    );
    await tx.product.update({
      where: { id: product.id },
      data: { ...updateData, updatedById: user.id },
    });
  }
  /* A product should always have at least 1 record, but it may have been an error record,
     in which case there will be no recorded records. */
  if (records.length === 0) {
    logger.info(
      `Creating a new recorded record for product '${product.slug}' because there are recorded ` +
        "records for the product.",
    );
    return { updated: await createProductRecord(tx, product, scrapedProduct, { user }) };
  }
  const latestRecord = records[0];

  /* Note: If the latest record had errors, there will be undefined values for at least one of
     the fields.  This is okay though - because if a previous value was undefined due to an error,
     and the error was resolved, we want to add a new record with the resolved value.  Similarly,
     if the previous value is not undefined, and the new value is undefined - there was an error,
     and we want to add a new record to indicate that the field is now undefined due to the
     error. */
  const differences = Differences(
    [scrapedProduct.data, latestRecord],
    ["price", "rawPrice", "status"],
  );
  // const differences = scrapedProduct.compareRecord(latestRecord);
  if (differences.hasDifferences) {
    logger.info(
      `Detected differences ${differences.toString()} for product '${product.id}' ` +
        `(slug = '${product.slug}') compared to the last recorded record. ` +
        "Adding a recorded record to history.",
    );
    return { updated: await createProductRecord(tx, product, scrapedProduct, { user }) };
  }
  return null;
};

const syncNewProduct = async (
  tx: Transaction,
  scrapedProduct: ProcessedScrapedProduct,
  { user }: Pick<UpdateProductRecordsContext, "user">,
): Promise<CreatedProduct> => {
  const product = await tx.product.create({
    data: {
      name: scrapedProduct.data.name.value ?? null,
      code: scrapedProduct.data.code.value ?? null,
      slug: scrapedProduct.slug,
      imageSrc: scrapedProduct.data.imageSrc.value ?? null,
      createdBy: { connect: { id: user.id } },
      updatedBy: { connect: { id: user.id } },
    },
  });
  return { created: await createProductRecord(tx, product, scrapedProduct, { user }) };
};

export class LieNielsenIntegration {
  public async updateProductRecords<P extends paths.ProductsPageId>(
    page: P,
    { limit, user, batchSize = 10 }: UpdateProductRecordsContext,
  ) {
    const scrapedProducts = await scraper.scrapeProducts(page, { limit, batchSize });

    const products = await prisma.product.findMany({
      include: { records: { orderBy: { timestamp: "desc" } } },
    });
    const allProductRecords = await prisma.productRecord.findMany({
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

    const results = await prisma.$transaction(async tx => {
      const promises = scrapedProducts.map(scrapedProduct => {
        if (scrapedProduct.thumbnail.data.isComposite) {
          throw new Error("Unexpectedly encountered product with composite thumbnail!");
        }
        const existing = products.find(p => p.slug === scrapedProduct.slug);
        if (existing) {
          return syncExistingProduct(tx, existing, scrapedProduct, productRecords[existing.id], {
            user,
          });
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
