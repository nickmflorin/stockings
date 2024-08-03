import type * as paths from "./paths";
import type { ProcessedScrapedProduct, IScrapedProductData } from "./scraped-product";

import { db, type Transaction } from "~/database";
import {
  type ProductRecord,
  type Product,
  type User,
  ProductRecordDataField,
  createScrapingErrorData,
  type ScrapingErrorData,
} from "~/database/model";
import { logger } from "~/internal/logger";

import { type ScrapingDomError, type ScrapedModelField } from "~/integrations/scraping";
import { humanizeList } from "~/lib/formatters";

import { client } from "./lie-nielsen-client";

type UpdateProductRecordsContext = {
  readonly limit?: number;
  readonly batchSize?: number;
  readonly user: User;
};

type ProductRecords = { [key in string]: ProductRecord[] };

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

const createProductRecord = async (
  tx: Transaction,
  product: Product,
  scrapedProduct: ProcessedScrapedProduct,
  { user }: Pick<UpdateProductRecordsContext, "user">,
): Promise<ProductRecord> => {
  const _createScrapingErrorData = async (
    field: ProductRecordDataField,
    error: ScrapingDomError,
  ) => {
    const data = await createScrapingErrorData(tx, error);
    return { data, error, field };
  };

  const errors = await Promise.all(
    Object.entries(scrapedProduct.errors).reduce(
      (
        curr: Promise<{
          data: ScrapingErrorData;
          error: ScrapingDomError;
          field: ProductRecordDataField;
        }>[],
        [field, error],
      ) => {
        const fieldName =
          ProductRecordDataFieldMap[field as keyof typeof ProductRecordDataFieldMap];
        if (fieldName) {
          return [...curr, _createScrapingErrorData(fieldName, error)];
        }
        return curr;
      },
      [] as Promise<{
        data: ScrapingErrorData;
        error: ScrapingDomError;
        field: ProductRecordDataField;
      }>[],
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
        createMany: {
          data: errors.map(({ data, error, field }) => ({
            errorId: data.id,
            errorCode: error.errorCode,
            message: error.message,
            field,
          })),
        },
      },
    },
  });
};

const arraysHaveSameElements = <T>(a: T[], b: T[]): boolean =>
  a.length === b.length && a.every(v => b.includes(v));

export class LieNielsenIntegration {
  private async syncNewProduct(
    tx: Transaction,
    scrapedProduct: ProcessedScrapedProduct,
    { user }: Pick<UpdateProductRecordsContext, "user">,
  ): Promise<ProductRecord> {
    const product = await tx.product.create({
      data: {
        name: scrapedProduct.data.name.value ?? null,
        code: scrapedProduct.data.code.value ?? null,
        slug: scrapedProduct.slug,
        status: scrapedProduct.data.status.value ?? null,
        price: scrapedProduct.data.price.value ?? null,
        imageSrc: scrapedProduct.data.imageSrc.value ?? null,
        subCategories: scrapedProduct.subCategories,
        category: scrapedProduct.category,
        createdBy: { connect: { id: user.id } },
        updatedBy: { connect: { id: user.id } },
      },
    });
    return await createProductRecord(tx, product, scrapedProduct, { user });
  }

  private async syncExistingProduct(
    tx: Transaction,
    product: Product,
    scrapedProduct: ProcessedScrapedProduct,
    records: ProductRecord[],
    { user }: Pick<UpdateProductRecordsContext, "user">,
  ): Promise<ProductRecord | null> {
    let updateData: Partial<
      Pick<
        Product,
        "code" | "name" | "imageSrc" | "status" | "price" | "subCategories" | "category"
      >
    > = {};
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
    if (
      scrapedProduct.data.status.value !== undefined &&
      scrapedProduct.data.status.value !== product.status
    ) {
      updateData = { ...updateData, status: scrapedProduct.data.status.value };
    }
    if (
      scrapedProduct.data.price.value !== undefined &&
      scrapedProduct.data.price.value !== product.price
    ) {
      updateData = { ...updateData, price: scrapedProduct.data.price.value };
    }
    if (!arraysHaveSameElements(scrapedProduct.subCategories, product.subCategories)) {
      updateData = { ...updateData, subCategories: scrapedProduct.subCategories };
    }
    if (scrapedProduct.category !== product.category) {
      updateData = { ...updateData, category: scrapedProduct.category };
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
        data: {
          ...updateData,
          updatedById: user.id,
        },
      });
    }
    /* A product should always have at least 1 record, but it may have been an error record,
       in which case there will be no recorded records. */
    if (records.length === 0) {
      logger.info(
        `Creating a new recorded record for product '${product.slug}' because there are recorded ` +
          "records for the product.",
      );
      return await createProductRecord(tx, product, scrapedProduct, { user });
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
      return await createProductRecord(tx, product, scrapedProduct, { user });
    }
    return null;
  }

  public async updateProductRecords<P extends paths.ProductsPageId>(
    page: P,
    { limit, user, batchSize = 10 }: UpdateProductRecordsContext,
  ) {
    const scrapedProducts = await client.scrapeProducts(page, { limit, batchSize });

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
