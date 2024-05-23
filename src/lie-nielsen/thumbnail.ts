import isEqual from "lodash.isequal";

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
    slug: Parsers.productSlug(anchor.href, { parent: anchor, attribute: "href" }),
  };
};

type FieldDifference<O extends Record<string, unknown>, K extends keyof O> = [O[K], O[K]];
type DifferencesData<O extends Record<string, unknown>, K extends keyof O> = {
  [key in K]: FieldDifference<O, key>;
};

interface IDifferences<O extends Record<string, unknown>, K extends keyof O> {
  readonly hasDifferences: boolean;
  readonly data: DifferencesData<O, K>;
  toString(): string;
}

const Differences = <O extends Record<string, unknown>, K extends keyof O>(
  objs: [O, O],
  fields: K[],
): IDifferences<O, K> => {
  const data = {} as DifferencesData<O, K>;
  for (const field of fields) {
    if (!isEqual(objs[0][field], objs[1][field])) {
      data[field] = [objs[0][field], objs[1][field]];
    }
  }
  return {
    data,
    get hasDifferences() {
      return Object.keys(this.data).length > 0;
    },
    toString(this: IDifferences<O, K>) {
      if (!this.hasDifferences) {
        return "";
      }
      const attrs = Object.keys(this.data)
        .map(k => `${k}: ${this.data[k as K][0]} !== ${this.data[k as K][1]}`)
        .join(", ");

      return `<Differences ${attrs}>`;
    },
  };
};

export const ThumbnailDifferences = <P extends paths.ProductsPageId>(
  a: IThumbnail<P>,
  b: IThumbnail<P>,
) => {
  if (a.slug !== b.slug) {
    throw new TypeError("Can only compare thumbnails with the same slug.");
  }
  /* Don't include the path, because the path will be different on a sub-page by sub-page difference
     since the query parameters include the destination from which the URL/path was navigated
     from. */
  const properties: (keyof IThumbnail<P>)[] = ["price", "rawPrice", "name", "imageSrc"];
  return Differences([a, b], properties);
};
