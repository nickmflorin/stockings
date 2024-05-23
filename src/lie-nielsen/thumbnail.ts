import type * as paths from "./paths";
import type * as cheerio from "cheerio";

import { WrappedElement, Parsers, type ParserResult } from "~/dom";

export type ThumbnailConfig<
  P extends paths.ProductsPageId = paths.ProductsPageId,
  S extends paths.ProductsSubPageId<P> = paths.ProductsSubPageId<P>,
> = {
  readonly page: P;
  readonly subPage?: S;
};

export type IThumbnail<
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

export const Thumbnail = <
  P extends paths.ProductsPageId = paths.ProductsPageId,
  S extends paths.ProductsSubPageId<P> = paths.ProductsSubPageId<P>,
>(
  element: cheerio.Element,
  config: ThumbnailConfig<P, S>,
): IThumbnail<P, S> => {
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
    slug: Parsers.parse(anchor.href, ["productSlug"], { parent: anchor, attribute: "href" }),
  };
};
