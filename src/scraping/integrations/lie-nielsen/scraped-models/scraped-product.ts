import type { ScrapedThumbnail } from "./scraped-thumbnail";

import { logger } from "~/application/logger";
import { ProductRecordStatus, type ProductRecordedRecord } from "~/prisma/model";
import { type api } from "~/scraping/dom";
import { InvalidTextError, type DomApiType } from "~/scraping/dom/api";
import {
  type ProductsPageId,
  type ProductsSubPageId,
} from "~/scraping/integrations/lie-nielsen/paths";
import { ScrapedApiModel, ScrapedApiModelDataCls } from "~/scraping/scraped-model";
import { Differences, type DifferenceField } from "~/lib/differences";

import { checkScrapedProductInconsistencies } from "./inconsistencies";

const logExisting = <
  P extends ProductsPageId = ProductsPageId,
  S extends ProductsSubPageId<P> = ProductsSubPageId<P>,
>(
  products: [ScrapedThumbnailProduct<P, S>, ScrapedThumbnailProduct<P, S>],
) => {
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
    logger.warn(`Encountered two identical products with the same slug, '${products[0].slug}'.`, {
      slug: products[0].slug,
    });
  }
};

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
  readonly price: api.ParserResult<"price">;
  readonly rawPrice: string;
  readonly imageSrc: string;
  readonly name: string;
  readonly status: ProductScrapedStatus;
  readonly code: string;
};

class ScrapedProductData extends ScrapedApiModelDataCls implements IScrapedProductData {
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
          those individual composite products, along with a scraped product for the composite product
          as a whole.  However, the scraped product for the composite product as a whole will be the
          same as one of the individual scraped products.

          Ex).
          ---
          There is a thumbnail for a "Mortise Chisels" product, which is a composite product that has
          both "1/2 Mortise Chisel" and "1/4 Mortise Chisel" in its dropdown.  There will be (or at
          least should be) three thumbnails:

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

export class ScrapedProduct extends ScrapedApiModel<IScrapedProductData> {
  protected comparisonFields = ["price", "rawPrice", "imageSrc", "code"] as const;
  protected fields = ["price", "rawPrice", "imageSrc", "name", "status", "code"] as const;
  protected recordComparisonFields: DifferenceField<ProductRecordedRecord, IScrapedProductData>[] =
    ["price", "status"] as const;

  constructor(root: DomApiType) {
    super(root, new ScrapedProductData(root));
  }

  public compareRecord(record: ProductRecordedRecord) {
    return Differences([this.validatedData, record], this.recordComparisonFields);
  }
}

export class ScrapedThumbnailProduct<
  P extends ProductsPageId = ProductsPageId,
  S extends ProductsSubPageId<P> = ProductsSubPageId<P>,
> extends ScrapedProduct {
  public thumbnail: ScrapedThumbnail<P, S>;

  constructor(root: DomApiType, thumbnail: ScrapedThumbnail<P, S>) {
    super(root);
    this.thumbnail = thumbnail;
    if (this.thumbnail.isComposite) {
      throw new Error(
        "A ScrapedThumbnailProduct cannot be instantiated from a composite thumbnail!",
      );
    }
  }

  public get slug() {
    /* The thumbnail will already be valid before it is used to instantiate the
       ScrapedThumbnailProduct, so the slug property can be safely exposed without having to ensure
       that parsing it does not throw an error (as with the other fields of this class).
       Additionally, the slug needs to be accessible for the ScrapedModelProduct at all times,
       regardless of whether or not the data can be properly parsed, because it is used as a unique
       identifier to relate to other models. */
    return this.thumbnail.slug;
  }

  public checkInconsistencies() {
    checkScrapedProductInconsistencies(this);
  }

  public process(others: ScrapedThumbnailProduct<P, S>[]) {
    /* Accessing the slug property will not result in an ElementError being thrown because it is
       accessed from the underlying Thumbnail, which must be valid in order to instantiate the
       ScrapedThumbnailProduct. */
    const existing = others.find(pi => pi.slug === this.slug);
    if (existing) {
      logExisting([existing, this]);
      return false;
    }
    this.checkInconsistencies();
    return true;
  }

  public static processScrapedProducts<
    P extends ProductsPageId = ProductsPageId,
    S extends ProductsSubPageId<P> = ProductsSubPageId<P>,
  >(
    products: ScrapedThumbnailProduct<P, S>[] | ScrapedThumbnailProduct<P, S>[][],
  ): ScrapedThumbnailProduct<P, S>[] {
    const ts = (Array.isArray(products[0]) ? products : [products]) as ScrapedThumbnailProduct<
      P,
      S
    >[][];
    return ts.reduce(
      (prev: ScrapedThumbnailProduct<P, S>[], curr: ScrapedThumbnailProduct<P, S>[]) =>
        curr
          .filter(th => !th.isComposite)
          .reduce(
            (
              p: ScrapedThumbnailProduct<P, S>[],
              c: ScrapedThumbnailProduct<P, S>,
            ): ScrapedThumbnailProduct<P, S>[] => {
              const existing = p.find(pi => pi.slug === c.slug);
              if (existing) {
                logExisting([existing, c]);
                return p;
              }
              c.checkInconsistencies();
              return [...p, c];
            },
            prev,
          ),
      [] as ScrapedThumbnailProduct<P, S>[],
    );
  }
}
