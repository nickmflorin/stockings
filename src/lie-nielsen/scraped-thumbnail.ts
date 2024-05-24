import type * as paths from "./paths";
import type * as cheerio from "cheerio";

import { DomDifferences, WrappedElement, Parsers, type ParserResult } from "~/dom";
import { logger } from "~/application/logger";

export type ScrapedThumbnailConfig<
  P extends paths.ProductsPageId = paths.ProductsPageId,
  S extends paths.ProductsSubPageId<P> = paths.ProductsSubPageId<P>,
> = {
  readonly page: P;
  readonly subPage?: S;
};

export type IScrapedThumbnail<
  P extends paths.ProductsPageId = paths.ProductsPageId,
  S extends paths.ProductsSubPageId<P> = paths.ProductsSubPageId<P>,
> = {
  readonly page: P;
  readonly subPage?: S;
  readonly path: string;
  readonly price: ParserResult<"price"> | ParserResult<"priceRange">;
  readonly rawPrice: string;
  readonly imageSrc: string;
  readonly name: string;
  readonly slug: string;
};

export const ScrapedThumbnail = <
  P extends paths.ProductsPageId = paths.ProductsPageId,
  S extends paths.ProductsSubPageId<P> = paths.ProductsSubPageId<P>,
>(
  element: cheerio.Element,
  config: ScrapedThumbnailConfig<P, S>,
): IScrapedThumbnail<P, S> => {
  const ele = WrappedElement(element);

  const anchor = ele.find({ tag: "a" });
  const caption = ele.find({ className: "caption" });
  const h6 = caption.find({ tag: "h6" });

  return {
    page: config.page,
    subPage: config.subPage,
    path: anchor.href,
    rawPrice: h6.text,
    price: Parsers.parse(h6.text, ["price", "priceRange"], {
      parent: h6,
      attribute: "text",
    }),
    imageSrc: anchor.find({ tag: "img" }).src,
    name: caption.find({ tag: "h5" }).find({ tag: "a" }).text,
    slug: Parsers.productSlug(anchor.href, { parent: anchor, attribute: "href" }),
  };
};

export const ScrapedThumbnailDifferences = <P extends paths.ProductsPageId>(
  a: IScrapedThumbnail<P>,
  b: IScrapedThumbnail<P>,
) => {
  if (a.slug !== b.slug) {
    throw new TypeError("Can only compare thumbnails with the same slug.");
  }
  /* Don't include the path, because the path will be different on a sub-page by sub-page difference
     since the query parameters include the destination from which the URL/path was navigated
     from. */
  const properties: (keyof IScrapedThumbnail<P>)[] = ["price", "rawPrice", "name", "imageSrc"];
  return DomDifferences([a, b], properties);
};

const subPageMessage = (a: IScrapedThumbnail, b: IScrapedThumbnail): string => {
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

const logExisting = (thumbs: [IScrapedThumbnail, IScrapedThumbnail]) => {
  if (thumbs[0].page !== thumbs[1].page || thumbs[0].slug !== thumbs[1].slug) {
    throw new TypeError(
      "Improper Method Usage: The thumbnails must not have differing slugs and/or pages to log.",
    );
  }
  const differences = ScrapedThumbnailDifferences(thumbs[0], thumbs[1]);
  if (differences.hasDifferences) {
    logger.warn(
      `Encountered two thumbnails with the same slug, '${thumbs[0].slug}', that have ` +
        `differing data: ${differences.toString()}.` +
        subPageMessage(thumbs[0], thumbs[1]),
      {
        differences: differences.differences,
        slug: thumbs[0].slug,
        thumbnails: [thumbs[0], thumbs[1]],
        page: thumbs[0].page,
        subPages: [
          thumbs[0].subPage ?? "main product page",
          thumbs[1].subPage ?? "main product page",
        ],
      },
    );
  } else {
    logger.warn(
      `Encountered two identical thumbnails with the same slug, '${thumbs[0].slug}'. ` +
        subPageMessage(thumbs[0], thumbs[1]),
      {
        slug: thumbs[0].slug,
        thumbnails: [thumbs[0], thumbs[1]],
        page: thumbs[0].page,
        subPages: [
          thumbs[0].subPage ?? "main product page",
          thumbs[1].subPage ?? "main product page",
        ],
      },
    );
  }
};

export const processScrapedThumbnails = (
  thumbnails: IScrapedThumbnail[] | IScrapedThumbnail[][],
): IScrapedThumbnail[] => {
  if (thumbnails.length === 0) {
    return [];
  }
  const ts = (Array.isArray(thumbnails[0]) ? thumbnails : [thumbnails]) as IScrapedThumbnail[][];
  const results = ts.reduce(
    (prev: IScrapedThumbnail[], curr: IScrapedThumbnail[]) =>
      curr.reduce((p: IScrapedThumbnail[], c: IScrapedThumbnail): IScrapedThumbnail[] => {
        const existing = p.find(pi => pi.slug === c.slug);
        if (existing) {
          logExisting([existing, c]);
          return p;
        }
        return [...p, c];
      }, prev),
    [] as IScrapedThumbnail[],
  );

  return results;
};
