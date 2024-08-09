import { type Transaction } from "~/database";
import {
  ProductStatus,
  type ProductRecord,
  type Product,
  type User,
  ProductRecordDataField,
  type ScrapingErrorData,
} from "~/database/model";
import { createScrapingErrorData } from "~/database/model";
import { logger } from "~/internal/logger";

import {
  type ScrapedModelField,
  type ScrapingDomError,
  type ParserResult,
  type DomApiType,
  InvalidTextError,
  ScrapedModel,
  BaseScrapedModel,
  ProcessedScrapedModel,
} from "~/integrations/scraping";
import { arraysHaveSameElements } from "~/lib/arrays";
import { type DifferenceField, Differences } from "~/lib/differences";
import { humanizeList } from "~/lib/formatters";

import { checkScrapedProductInconsistencies } from "./inconsistencies";
import { type ProcessedScrapedThumbnail } from "./scraped-thumbnail";

/* const logExisting = (products: [ProcessedScrapedProduct, ProcessedScrapedProduct]) => {
     const differences = Differences(
       [products[0].unvalidatedData, products[1].unvalidatedData],
       ["price", "rawPrice", "status"],
     );
     if (differences.hasDifferences) {
       logger.warn(
         `Encountered two products with the same slug, '${products[0].slug}', that have ` +
           `differing data: ${differences.toString()}.`,
         {
           differences: differences.differences,
           slug: products[0].slug,
         },
       );
     } else {
       logger.warn(`Encountered two identical products with the same slug, '${products[0].slug}'.` {
         slug: products[0].slug,
       });
     }
   }; */

export type ProductScrapedStatus = Exclude<ProductStatus, typeof ProductStatus.NotListed>;

export const parseProductScrapedState = (value: string): ProductScrapedStatus | null => {
  const v = value.toLowerCase().replaceAll(" ", "");
  switch (v) {
    case "outofstock":
      return ProductStatus.OutOfStock;
    case "placebackorder":
      return ProductStatus.AvailableForBackorder;
    case "addtocart":
      return ProductStatus.InStock;
    default:
      return null;
  }
};

export type IScrapedProductData = {
  readonly price: ParserResult<"price">;
  readonly rawPrice: string;
  readonly imageSrc: string;
  readonly name: string;
  readonly status: ProductScrapedStatus;
  readonly code: string;
};

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

export type PersistedError = {
  readonly data: ScrapingErrorData;
  readonly error: ScrapingDomError;
  readonly field: ProductRecordDataField;
};

export type ScrapedProductConfig = {
  readonly thumbnail: ProcessedScrapedThumbnail;
};

class ScrapedProductData extends BaseScrapedModel<DomApiType> implements IScrapedProductData {
  private get priceElement() {
    /* eslint-disable-next-line quotes */
    return this.root('div[itemprop="offerDetails"]', {})
      .find({ className: "product-price", tag: "h4" })
      .find({ tag: "span", attributes: { itemprop: "price" } });
  }

  public get price() {
    return this.priceElement.parseText(["price"], {});
  }

  public get status() {
    /* Note: There are multiple forms with the same ID because they are used for supporting mobile
       devices.  We are only interested in the first, although all 3 are pretty much identical. */
    /* eslint-disable-next-line quotes */
    const button = this.root('form[id="product-buy-now"]', { first: true }).find({
      tag: "button",
      attributes: { id: "buy-now-btn" },
    });
    const state = parseProductScrapedState(button.text);
    if (!state) {
      throw new InvalidTextError(button.text, { parent: button });
    }
    return state;
  }

  public get hasCompositeElements() {
    /* eslint-disable-next-line quotes */
    const div = this.root('div[id="product-varying-attrs"]', { strict: false });
    /* Unfortunately, the contents of the div (particularly the select with the varying products)
       are populated in HTML by a <script> that executes after the initial HTML render of the page,
       so we do not and cannot detect it via web scraping.  This means that all we can determine
       is whether or not the product page is composite, and has a select dropdown, but not what
       the contents of that select dropdown are.

       In these cases, we are relying on those composite products having their own individual
          thumbnails (which they almost always do).  Then, the scraped products will include both
          those individual composite products, along with a scraped product for the composite
          product as a whole.  However, the scraped product for the composite product as a whole
          will be the same as one of the individual scraped products.

          Ex).
          ---
          There is a thumbnail for a "Mortise Chisels" product, which is a composite product that
          has both "1/2 Mortise Chisel" and "1/4 Mortise Chisel" in its dropdown.  There will be
          (or at least should be) three thumbnails:

          1) Mortise Chisels
          2) 1/2 Mortise Chisel
          3) 1/4 Mortise Chisel

       All three thumbnails point to a page that has a select dropdown, but clicking the
       "Mortise Chisels" thumbnail will take you to the page with that select defaulted, as either
       1/2 Mortise Chisel or 1/4 Mortise Chisel.  When the select dropdown changes, the URL path
       changes to reflect the selected product. */
    if (div) {
      return true;
    }
    return false;
  }

  public get rawPrice() {
    return this.priceElement.text;
  }

  public get imageSrc() {
    return this.root({ tag: "img", className: "zoom-image" }, { duplication: "silent" }).src;
  }

  public get name() {
    return this.root({ tag: "h3", className: ["product-heading", "product-name"] }, {}).find({
      attributes: { itemprop: "name" },
      tag: "span",
    }).text;
  }

  public get code() {
    return this.root({
      tag: "small",
      className: "product-code",
      attributes: { itemprop: "identifier" },
    }).text;
  }
}

export class ScrapedProduct extends ScrapedModel<
  DomApiType,
  IScrapedProductData,
  readonly [],
  ScrapedProductConfig,
  ProcessedScrapedProduct
> {
  protected ProcessedCls = ProcessedScrapedProduct;
  protected fields = ["price", "rawPrice", "imageSrc", "name", "status", "code"] as const;

  constructor(root: DomApiType, config: ScrapedProductConfig) {
    super(root, new ScrapedProductData(root), [] as const, config);
  }

  public static processScrapedProducts(
    products: ScrapedProduct[] | ScrapedProduct[][],
  ): ProcessedScrapedProduct[] {
    const ts = (Array.isArray(products[0]) ? products : [products]) as ScrapedProduct[][];
    return ts.reduce(
      (prev: ProcessedScrapedProduct[], curr: ScrapedProduct[]): ProcessedScrapedProduct[] =>
        curr.reduce(
          (p: ProcessedScrapedProduct[], c: ScrapedProduct): ProcessedScrapedProduct[] => {
            const processed = c.process();
            processed.checkInconsistencies();

            const existing = p.find(pi => pi.slug === processed.slug);
            /* This should not happen, because the thumbnails that are used to derive the scraped
               products should be unique after they are processed. */
            if (existing) {
              throw new Error("Encountered duplicate products!");
            }
            return [...p, processed];
          },
          prev,
        ),
      [] as ProcessedScrapedProduct[],
    );
  }
}

export class ProcessedScrapedProduct extends ProcessedScrapedModel<
  IScrapedProductData,
  ScrapedProductConfig,
  readonly []
> {
  protected recordComparisonFields = ["price", "status"] as const satisfies DifferenceField<
    ProductRecord,
    IScrapedProductData
  >[];

  public get thumbnail() {
    return this.options.thumbnail;
  }

  public get slug() {
    return this.thumbnail.validatedData.slug;
  }

  public get page() {
    return this.thumbnail.page;
  }

  public get subPage() {
    return this.thumbnail.subPage;
  }

  public get category() {
    return this.thumbnail.category;
  }

  public get subCategories() {
    return this.thumbnail.subCategories;
  }

  public async persistErrors(tx: Transaction): Promise<PersistedError[]> {
    const _createScrapingErrorData = async (
      field: ProductRecordDataField,
      error: ScrapingDomError,
    ) => {
      const data = await createScrapingErrorData(tx, error);
      return { data, error, field };
    };

    return await Promise.all(
      Object.entries(this.errors).reduce((curr: Promise<PersistedError>[], [field, error]) => {
        const fieldName =
          ProductRecordDataFieldMap[field as keyof typeof ProductRecordDataFieldMap];
        if (fieldName) {
          return [...curr, _createScrapingErrorData(fieldName, error)];
        }
        return curr;
      }, [] as Promise<PersistedError>[]),
    );
  }

  public checkInconsistencies() {
    checkScrapedProductInconsistencies(this);
  }

  public compareToRecord(record: ProductRecord) {
    type DiffData = {
      [key in (typeof this.recordComparisonFields)[number]]: IScrapedProductData[key] | undefined;
    };
    const data = this.recordComparisonFields.reduce(
      (prev: DiffData, curr: (typeof this.recordComparisonFields)[number]) => {
        const v = this.data[curr];
        if (v.value !== undefined) {
          return { ...prev, [curr]: v.value };
        }
        return { ...prev, [curr]: undefined };
      },
      {} as DiffData,
    );
    return Differences([record, data], this.recordComparisonFields);
  }

  public compareToProduct(product: Product) {
    let updateData: Partial<
      Pick<
        Product,
        | "code"
        | "name"
        | "imageSrc"
        | "status"
        | "price"
        | "subCategories"
        | "category"
        | "statusRecordedAt"
        | "priceRecordedAt"
      >
    > = {};
    /* The 'name' associated with the scraped product might not be present if there was an error
       parsing the name from the HTML. */
    const name = this.data.name.value ?? null;
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
    const code = this.data.code.value ?? null;
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
    const imageSrc = this.data.imageSrc.value ?? null;
    if (imageSrc !== null && product.imageSrc !== imageSrc) {
      logger.warn(
        `Product '${product.id}' has the same slug as the scraped product, '${product.slug}', but ` +
          `the product image '${product.imageSrc}' differs from the scraped image, '${imageSrc}'!`,
        { scrapedImageSrc: imageSrc, product },
      );
      updateData = { ...updateData, imageSrc };
    }

    if (this.data.price.value !== undefined) {
      if (this.data.price.value !== product.price) {
        updateData = {
          ...updateData,
          price: this.data.price.value,
          priceRecordedAt: new Date(),
        };
        /* Note: At this point, the product price is guaranteed to be non-null.  This is because
           if it were 'null', the previous condition would have to be true, since
           'this.data.price.value' cannot be null. */
      } else if (product.priceRecordedAt === null) {
        /* The logic inside of this check is present to ensure that the data flow is somewhat
           self-healing.  If the product has a defined price, it *should* have a value for the
           date/time in which this price was recorded (i.e. 'priceRecordedAt').  If it does not,
           it means that somehow, the data was corrupted - most likely due to data migrations,
           seeding, or other database operations that may have inadvertently set the price without
           setting the price recorded date.  In this case, we want to set the price recorded date
           to better ensure data integrity, and will log a warning to ensure that we are aware that
           this had occurred. */
        logger.warn(
          `Encountered product with ID '${product.id}' (slug = '${product.slug}') that has ` +
            "a non-null price, but no price recorded date.  Setting the price recorded " +
            "date to the current date.",
          { product },
        );
        updateData = {
          ...updateData,
          priceRecordedAt: new Date(),
        };
      }
    } else if (product.priceRecordedAt === null && product.price !== null) {
      // See comment above regarding "self-healing" data flow.
      logger.warn(
        `Encountered product with ID '${product.id}' (slug = '${product.slug}') that has ` +
          "a non-null price, but no price recorded date.  Normally, this would not warrant " +
          "updating the product, but we need to set the price recorded date to the current date.",
        { product },
      );
      updateData = {
        ...updateData,
        priceRecordedAt: new Date(),
      };
    }

    if (this.data.status.value !== undefined) {
      if (this.data.status.value !== product.status) {
        updateData = {
          ...updateData,
          status: this.data.status.value,
          statusRecordedAt: new Date(),
        };
        /* Note: At this point, the product status is guaranteed to be non-null.  This is because
           if it were 'null', the previous condition would have to be true, since
           'this.data.status.value' cannot be null. */
      } else if (product.statusRecordedAt === null) {
        /* The logic inside of this check is present to ensure that the data flow is somewhat
           self-healing.  If the product has a defined status, it *should* have a value for the
           date/time in which this status was recorded (i.e. 'statusRecordedAt').  If it does not,
           it means that somehow, the data was corrupted - most likely due to data migrations,
           seeding, or other database operations that may have inadvertently set the status without
           setting the status recorded date.  In this case, we want to set the status recorded date
           to better ensure data integrity, and will log a warning to ensure that we are aware that
           this had occurred. */
        logger.warn(
          `Encountered product with ID '${product.id}' (slug = '${product.slug}') that has ` +
            "a non-null status, but no status recorded date.  Setting the status recorded " +
            "date to the current date.",
          { product },
        );
        updateData = {
          ...updateData,
          statusRecordedAt: new Date(),
        };
      }
    } else if (product.statusRecordedAt === null && product.status !== null) {
      // See comment above regarding "self-healing" data flow.
      logger.warn(
        `Encountered product with ID '${product.id}' (slug = '${product.slug}') that has ` +
          "a non-null status, but no status recorded date.  Normally, this would not warrant " +
          "updating the product, but we need to set the status recorded date to the current date.",
        { product },
      );
      updateData = {
        ...updateData,
        statusRecordedAt: new Date(),
      };
    }

    if (!arraysHaveSameElements(this.subCategories, product.subCategories)) {
      updateData = { ...updateData, subCategories: this.subCategories };
    }
    if (this.category !== product.category) {
      updateData = { ...updateData, category: this.category };
    }
    return updateData;
  }

  public async createProduct(tx: Transaction, ctx: { user: User }) {
    return await tx.product.create({
      data: {
        name: this.data.name.value ?? null,
        code: this.data.code.value ?? null,
        slug: this.slug,
        status: this.data.status.value ?? null,
        price: this.data.price.value ?? null,
        imageSrc: this.data.imageSrc.value ?? null,
        subCategories: this.subCategories,
        category: this.category,
        // Only set the 'priceRecordedAt' field if the price was in fact successfully scraped.
        priceRecordedAt: this.data.price.value !== undefined ? new Date() : null,
        // Only set the 'statusRecordedAt' field if the status was in fact successfully scraped.
        statusRecordedAt: this.data.status.value !== undefined ? new Date() : null,
        createdBy: { connect: { id: ctx.user.id } },
        updatedBy: { connect: { id: ctx.user.id } },
      },
    });
  }

  public async syncProduct(tx: Transaction, product: Product, ctx: { user: User }) {
    const updateData = this.compareToProduct(product);
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
      return await tx.product.update({
        where: { id: product.id },
        data: {
          ...updateData,
          updatedById: ctx.user.id,
        },
      });
    }
    return product;
  }

  public async createProductRecord(
    tx: Transaction,
    product: Product,
    ctx: { user: User },
  ): Promise<ProductRecord> {
    const errors = await this.persistErrors(tx);
    return await tx.productRecord.create({
      data: {
        product: { connect: { id: product.id } },
        createdBy: { connect: { id: ctx.user.id } },
        updatedBy: { connect: { id: ctx.user.id } },
        wasManuallyCreated: false,
        price: this.data.price.value,
        rawPrice: this.data.rawPrice.value,
        status: this.data.status.value,
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
  }
}
