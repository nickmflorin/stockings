import { logger } from "~/internal/logger";
import { ElementAttribute } from "~/prisma/model";

import { type ApiElement } from "~/scraping/dom";
import { type ParserResult } from "~/scraping/dom/parsers";
import type * as paths from "~/scraping/integrations/lie-nielsen/paths";
import { ScrapedModel, BaseScrapedModel, ProcessedScrapedModel } from "~/scraping/models";

const subPageMessage = (a: ValidScrapedThumbnail, b: ValidScrapedThumbnail): string => {
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

const logExisting = (thumbs: [ValidScrapedThumbnail, ValidScrapedThumbnail]) => {
  if (thumbs[0].page !== thumbs[1].page || thumbs[0].data.slug !== thumbs[1].data.slug) {
    throw new TypeError(
      "Improper Method Usage: The thumbnails must not have differing slugs and/or pages to log.",
    );
  }
  const differences = thumbs[0].compare(thumbs[1]);
  if (differences.hasDifferences) {
    logger.warn(
      `Encountered two thumbnails with the same slug, '${thumbs[0].data.slug}', that have ` +
        `differing data: ${differences.toString()}.` +
        subPageMessage(thumbs[0], thumbs[1]),
      {
        differences: differences.differences,
        slug: thumbs[0].data.slug,
        // thumbnails: [thumbs[0], thumbs[1]],
        page: thumbs[0].page,
        subPages: [
          thumbs[0].subPage ?? "main product page",
          thumbs[1].subPage ?? "main product page",
        ],
      },
    );
  } else {
    logger.debug(
      `Encountered two identical thumbnails with the same slug, '${thumbs[0].data.slug}'. ` +
        subPageMessage(thumbs[0], thumbs[1]),
      {
        slug: thumbs[0].data.slug,
        // thumbnails: [thumbs[0], thumbs[1]],
        page: thumbs[0].page,
        subPages: [
          thumbs[0].subPage ?? "main product page",
          thumbs[1].subPage ?? "main product page",
        ],
      },
    );
  }
};

export type ScrapedThumbnailConfig = {
  readonly page: paths.ProductsPageId;
  readonly subPage?: paths.ProductsSubPageId;
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
  ValidScrapedThumbnail,
  InvalidScrapedThumbnail,
  ScrapedThumbnailConfig
> {
  protected ValidCls = ValidScrapedThumbnail;
  protected InvalidCls = InvalidScrapedThumbnail;

  // protected comparisonFields = ["price", "rawPrice", "imageSrc", "code"] as const;
  protected fields = [
    "path",
    "slug",
    "name",
    "imageSrc",
    "rawPrice",
    "price",
    "isComposite",
  ] as const;

  /* protected recordComparisonFields: DifferenceField<ProductRecordedRecord,
     IScrapedProductData>[] =
       ["price", "status"] as const; */

  constructor(root: ApiElement, config: ScrapedThumbnailConfig) {
    super(root, new ScrapedThumbnailData(root), config);
  }

  public get page() {
    return this.options.page;
  }

  public get subPage() {
    return this.options.subPage;
  }

  public static processScrapedThumbnails(
    thumbnails: ScrapedThumbnail[] | ScrapedThumbnail[][],
  ): ValidScrapedThumbnail[] {
    const ts = (Array.isArray(thumbnails[0]) ? thumbnails : [thumbnails]) as ScrapedThumbnail[][];
    return ts.reduce(
      (prev: ValidScrapedThumbnail[], curr: ScrapedThumbnail[]) =>
        curr.reduce((p: ValidScrapedThumbnail[], c: ScrapedThumbnail): ValidScrapedThumbnail[] => {
          const validated = c.validate();
          if (validated.isValid) {
            if (!validated.data.isComposite) {
              const existing = p.find(pi => pi.data.slug === validated.data.slug);
              if (existing) {
                logExisting([existing, validated]);
                return p;
              }
              return [...p, validated];
            }
          } else {
            // TODO: Improve this logic.
            logger.warn("Encountered an invalid thumbnail.  Cannot process.");
          }
          return p;
        }, prev),
      [] as ValidScrapedThumbnail[],
    );
  }
}

export class ProcessedScrapedThumbnail extends ProcessedScrapedModel<
  IScrapedThumbnailData,
  ScrapedThumbnailConfig
> {
  public get page() {
    return this.options.page;
  }

  public get subPage() {
    return this.options.subPage;
  }
}
