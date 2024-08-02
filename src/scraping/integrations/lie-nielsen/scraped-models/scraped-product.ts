import { logger } from "~/internal/logger";
import { ProductRecordStatus, type ProductRecord } from "~/prisma/model";

import { type DifferenceField, Differences } from "~/lib/differences";
import { type ParserResult, type DomApiType } from "~/scraping/dom";
import { InvalidTextError } from "~/scraping/errors";
import {
  ScrapedModel,
  BaseScrapedModel,
  ProcessedScrapedModel,
  dataValueIsFieldValue,
} from "~/scraping/models";

import { checkScrapedProductInconsistencies } from "./inconsistencies";
import { type ProcessedScrapedThumbnail } from "./scraped-thumbnail";

/* const logExisting = (products: [ProcessedScrapedProduct, ProcessedScrapedProduct]) => {
     const differences = products[0].compare(products[1]);
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
       logger.warn(`Encountered two identical products with the same slug, '${products[0].slug}'.`,
      {
         slug: products[0].slug,
       });
     }
   }; */

export type ProductScrapedStatus = Exclude<
  ProductRecordStatus,
  typeof ProductRecordStatus.NOT_LISTED
>;

export const parseProductScrapedState = (value: string): ProductScrapedStatus | null => {
  const v = value.toLowerCase().replaceAll(" ", "");
  switch (v) {
    case "outofstock":
      return ProductRecordStatus.OUT_OF_STOCK;
    case "placebackorder":
      return ProductRecordStatus.AVAILABLE_FOR_BACKORDER;
    case "addtocart":
      return ProductRecordStatus.IN_STOCK;
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
  ScrapedProductConfig,
  ProcessedScrapedProduct
> {
  protected ProcessedCls = ProcessedScrapedProduct;
  // protected comparisonFields = ["price", "rawPrice", "imageSrc", "code"] as const;
  protected fields = ["price", "rawPrice", "imageSrc", "name", "status", "code"] as const;

  constructor(root: DomApiType, config: ScrapedProductConfig) {
    super(root, new ScrapedProductData(root), config);
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
            const existing = p.find(pi => pi.slug === processed.slug);
            if (existing) {
              // logExisting([existing, processed]);
              return p;
            }
            processed.checkInconsistencies();
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
  ScrapedProductConfig
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
        if (dataValueIsFieldValue(v)) {
          return { ...prev, [curr]: v.value };
        }
        return { ...prev, [curr]: undefined };
      },
      {} as DiffData,
    );
    return Differences([data, record], this.recordComparisonFields);
  }
}
