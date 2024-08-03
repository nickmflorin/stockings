import { ElementAttribute, type ProductSubCategory } from "~/database/model";
import { logger } from "~/internal/logger";

import {
  type ApiElement,
  type ParserResult,
  ScrapedModel,
  BaseScrapedModel,
  ProcessedScrapedModel,
  type ProcessedScrapedModelConfig,
} from "~/integrations/scraping";
import { replaceInArray } from "~/lib/arrays";
import { Differences } from "~/lib/differences";

import {
  type ProductsSubPageId,
  ProductsSubPages,
  ProductsPages,
  type ProductsPageId,
} from "./paths";

const SCRAPED_THUMBNAIL_FIELDS = [
  "path",
  "slug",
  "name",
  "imageSrc",
  "rawPrice",
  "price",
  "isComposite",
] as const;

const subPageMessage = (a: ProcessedScrapedThumbnail, b: ProcessedScrapedThumbnail): string => {
  if (a.subPage && b.subPage) {
    return (
      `The first thumbnail was encountered on sub-page '${a.subPage}', and the ` +
      `second thumbnail was encountered on sub-page '${b.subPage}.`
    );
  } else if (a.subPage) {
    return (
      `The first thumbnail was encountered on sub-page '${a.subPage}', and the ` +
      "second thumbnail was encountered on the main product page."
    );
  } else if (b.subPage) {
    return (
      "The first thumbnail was encountered on the main product page, and the " +
      `second thumbnail was encountered on sub-page '${b.subPage}.`
    );
  } else {
    return "Both thumbnails were encountered on the main product page.";
  }
};

const logExisting = (thumbs: [ProcessedScrapedThumbnail, ProcessedScrapedThumbnail]) => {
  // Note: This method assumes that both thumbnails were partially valid.
  if (
    thumbs[0].page !== thumbs[1].page ||
    thumbs[0].partiallyValidatedData.slug !== thumbs[1].partiallyValidatedData.slug
  ) {
    throw new TypeError(
      "Improper Method Usage: The thumbnails must not have differing slugs and/or pages to log.",
    );
  }
  const differences = Differences(
    [thumbs[0].unvalidatedData, thumbs[1].unvalidatedData],
    [...SCRAPED_THUMBNAIL_FIELDS].filter(f => f !== "slug" && f !== "isComposite"),
  );
  if (differences.hasDifferences) {
    logger.warn(
      `Encountered two thumbnails with the same slug, '${thumbs[0].partiallyValidatedData.slug}', ` +
        `that have differing data: ${differences.toString()}.` +
        subPageMessage(thumbs[0], thumbs[1]),
      {
        differences: differences.differences,
        slug: thumbs[0].partiallyValidatedData.slug,
        page: thumbs[0].page,
        subPages: [
          thumbs[0].subPage ?? "main product page",
          thumbs[1].subPage ?? "main product page",
        ],
      },
    );
  } else {
    logger.debug(
      "Encountered two identical thumbnails with the same slug, " +
        `'${thumbs[0].partiallyValidatedData.slug}'. ` +
        subPageMessage(thumbs[0], thumbs[1]),
      {
        slug: thumbs[0].partiallyValidatedData.slug,
        page: thumbs[0].page,
        subPages: [
          thumbs[0].subPage ?? "main product page",
          thumbs[1].subPage ?? "main product page",
        ],
      },
    );
  }
};

export type ScrapedThumbnailOptions = {
  readonly page: ProductsPageId;
  readonly subPage?: ProductsSubPageId;
};

export type IScrapedThumbnailData = {
  readonly path: string;
  readonly price: ParserResult<"price"> | ParserResult<"priceRange">;
  readonly rawPrice: string;
  readonly imageSrc: string;
  readonly name: string;
  readonly slug: string;
  readonly isComposite: boolean;
};

class ScrapedThumbnailData extends BaseScrapedModel<ApiElement> {
  public get path() {
    return decodeURI(this.root.find({ tag: "a" }).href);
  }

  public get slug() {
    return this.root.find({ tag: "a" }).parseAttribute(ElementAttribute.HREF, ["productSlug"], {});
  }

  public get name() {
    return this.root.find({ className: "caption" }).find({ tag: "h5" }).find({ tag: "a" }).text;
  }

  public get imageSrc() {
    return this.root.find({ tag: "a" }).find({ tag: "img" }).src;
  }

  public get rawPrice() {
    return this.root.find({ className: "caption" }).find({ tag: "h6" }).text;
  }

  public get price() {
    return this.root
      .find({ className: "caption" })
      .find({ tag: "h6" })
      .parseText(["price", "priceRange"], {});
  }

  /**
   * Returns whether or not the {@link ScrapedThumbnail} is composite, meaning that the thumbnail
   * represents a collection of products that can be selected from a dropdown on the product page.
   *
   * In the case that the {@link ScrapedThumbnail} is composite, on some page (either the same or
   * other), there should be individual {@link ScrapedThumbnail}(s) for each of the composite's
   * products that are represented by the overall {@link ScrapedThumbnail}.  This means that the
   * overall {@link ScrapedThumbnail} can be excluded from the scraped products, when mapping the
   * {@link ScrapedThumbnail}(s) to {@link ScrapedProduct}(s).
   *
   * Ex).
   * ---
   * There is a thumbnail for a "Mortise Chisels" product, which is a composite product that has
   * both "1/2 Mortise Chisel" and "1/4 Mortise Chisel" in its dropdown.  There will be (or at
   * least should be) three thumbnails:
   *
   * 1) Mortise Chisels
   * 2) 1/2 Mortise Chisel
   * 3) 1/4 Mortise Chisel
   *
   * All three thumbnails point to a page that has a select dropdown, but clicking the
   * "Mortise Chisels" thumbnail will take you to the page with that select defaulted, as either
   * 1/2 Mortise Chisel or 1/4 Mortise Chisel.  When the select dropdown changes, the URL path
   * changes to reflect the selected product.
   */
  public get isComposite() {
    /* In the case that the thumbnail represents a composite set of products, the thumbnail's name
       (or the text of the link to the product page) will represent the overall composite product
       (e.g. Mortise Chisels) where the 'data-ga-product-name' will correspond to the product slug
       that is contained inside of the href of the link. */
    const dataProductName = this.root
      .find({ className: "caption" })
      .find({ tag: "h5" })
      .find({ tag: "a" })
      .findAttribute(ElementAttribute.DATA_GA_PRODUCT_NAME);
    return (
      dataProductName.trim().toLowerCase().replaceAll(" ", "") !==
      this.name.trim().toLowerCase().replaceAll(" ", "")
    );
  }
}

/**
 * ```html
 * <div class="thumbnail">
 *   <a><img /></a>
 *   <div class="caption">
 *     <h5 class="center">
 *       <a></a>
 *     </h5>
 *     <h6>$285.00</h6>
 *   </div>
 * </div>
 * ```
 */
export class ScrapedThumbnail extends ScrapedModel<
  ApiElement,
  IScrapedThumbnailData,
  readonly ["slug", "isComposite"],
  ScrapedThumbnailOptions,
  ProcessedScrapedThumbnail
> {
  protected ProcessedCls = ProcessedScrapedThumbnail;

  protected fields = SCRAPED_THUMBNAIL_FIELDS;

  constructor(root: ApiElement, config: ScrapedThumbnailOptions) {
    super(root, new ScrapedThumbnailData(root), ["slug", "isComposite"] as const, config);
  }

  public get page() {
    return this.options.page;
  }

  public get subPage() {
    return this.options.subPage;
  }

  public static processScrapedThumbnails(
    thumbnails: ScrapedThumbnail[] | ScrapedThumbnail[][],
  ): ProcessedScrapedThumbnail[] {
    const ts = (Array.isArray(thumbnails[0]) ? thumbnails : [thumbnails]) as ScrapedThumbnail[][];
    return ts.reduce(
      (prev: ProcessedScrapedThumbnail[], curr: ScrapedThumbnail[]) =>
        curr.reduce(
          (p: ProcessedScrapedThumbnail[], c: ScrapedThumbnail): ProcessedScrapedThumbnail[] => {
            const processed = c.process();

            if (processed.isPartiallyValid) {
              // TODO: Should we still combine the thumbnails, if one is a composite?
              if (processed.partiallyValidatedData.isComposite === false) {
                const existing = p.find(
                  pi =>
                    pi.isPartiallyValid &&
                    pi.partiallyValidatedData.slug === processed.partiallyValidatedData.slug,
                );
                if (existing) {
                  const newProcessed = existing.combine(processed);
                  const [replaced, _, newArray] = replaceInArray(
                    p,
                    { value: newProcessed },
                    pi =>
                      pi.isPartiallyValid &&
                      pi.partiallyValidatedData.slug === processed.partiallyValidatedData.slug,
                  );
                  if (!replaced) {
                    throw new Error(
                      "The array replacement should have been made because the predicate was " +
                        "already evaluated for its presence in the array.",
                    );
                  }
                  return newArray;
                }
                return [...p, processed];
              }
              return p;
            } else {
              logger.warn(
                "Encountered thumbnail whose 'slug' and/or 'isComposite' value(s) could not be " +
                  "parsed. The thumbnail cannot be processed.",
                { thumbnail: processed.data },
              );
              return p;
            }
          },
          prev,
        ),
      [] as ProcessedScrapedThumbnail[],
    );
  }
}

export class ProcessedScrapedThumbnail extends ProcessedScrapedModel<
  IScrapedThumbnailData,
  ScrapedThumbnailOptions,
  readonly ["slug", "isComposite"]
> {
  private _subCategories: ProductSubCategory[] = [];

  constructor({
    __cloned_sub_categories__,
    ...config
  }: ProcessedScrapedModelConfig<
    IScrapedThumbnailData,
    ScrapedThumbnailOptions,
    readonly ["slug", "isComposite"]
  > & {
    readonly __cloned_sub_categories__?: ProductSubCategory[];
  }) {
    super(config);
    if (__cloned_sub_categories__ === undefined) {
      const subCat = this.subPage ? ProductsSubPages.getModel(this.subPage).subCategory : null;
      this._subCategories = subCat ? [subCat] : [];
    } else {
      this._subCategories = __cloned_sub_categories__;
    }
  }

  public combine(other: ProcessedScrapedThumbnail) {
    logExisting([this, other]);
    const cloned = this.clone();
    if (other.subPage) {
      cloned.addSubCategory(other.subPage);
    }
    return cloned;
  }

  public clone() {
    return new ProcessedScrapedThumbnail({
      ...this._config,
      __cloned_sub_categories__: this.subCategories,
    });
  }

  public get page() {
    return this.options.page;
  }

  public get subPage() {
    return this.options.subPage;
  }

  public get category() {
    return ProductsPages.getModel(this.page).category;
  }

  public get subCategories() {
    return this._subCategories;
  }

  public addSubCategory(subPage: ProductsSubPageId) {
    const subCat = ProductsSubPages.getModel(subPage).subCategory;
    if (subCat !== null && !this._subCategories.includes(subCat)) {
      this._subCategories.push(subCat);
    }
  }
}
