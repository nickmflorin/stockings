import type * as cheerio from "cheerio";

import { NonUniqueElementError, WrappedElement, type ParserResult, Parsers } from "~/dom";
import { MissingElementError } from "~/dom";

export type ProductScrapedState = "out-of-stock" | "in-stock";

export type IScrapedProduct = {
  readonly price: ParserResult<"price">;
  readonly rawPrice: string;
  readonly imageSrc: string;
  readonly name: string;
  readonly code: string;
};

export const ScrapedProduct = (selector: cheerio.CheerioAPI): IScrapedProduct => {
  const h3s = [...selector("h3.product-heading.product-name").map((i, el) => WrappedElement(el))];
  if (h3s.length === 0) {
    throw new MissingElementError({ className: ["product-heading", "product-name"], tag: "h3" });
  } else if (h3s.length > 1) {
    throw new NonUniqueElementError({ className: ["product-heading", "product-name"], tag: "h3" });
  }
  const name = h3s[0].find({ attributes: { itemprop: "name" }, tag: "span" }).text;

  const smalls = [
    /* eslint-disable-next-line quotes */
    ...selector('small.product-code[itemprop="identifier"]').map((i, el) => WrappedElement(el)),
  ];
  if (smalls.length === 0) {
    throw new MissingElementError({
      className: ["product-code"],
      tag: "small",
      attributes: { itemProp: "identifier" },
    });
  } else if (smalls.length > 1) {
    throw new NonUniqueElementError({
      className: ["product-code"],
      tag: "small",
      attributes: { itemProp: "identifier" },
    });
  }
  const code = smalls[0].text;

  const images = [...selector("img.zoom-image").map((i, el) => WrappedElement(el))];
  if (images.length === 0) {
    throw new MissingElementError({
      className: ["zoom-image"],
      tag: "img",
    });
  } else if (images.length > 1) {
    throw new NonUniqueElementError({
      className: ["zoom-image"],
      tag: "img",
    });
  }
  const imageSrc = WrappedElement(images[0]).findAttribute("src");

  const offerDetails = [
    /* eslint-disable-next-line quotes */
    ...selector('div[itemprop="offerDetails"]').map((i, el) => WrappedElement(el)),
  ];
  if (offerDetails.length === 0) {
    throw new MissingElementError({ attributes: { itemprop: "offerDetails" }, tag: "div" });
  } else if (smalls.length > 1) {
    throw new NonUniqueElementError({ attributes: { itemprop: "offerDetails" }, tag: "div" });
  }
  const price = offerDetails[0]
    .find({ className: "product-price", tag: "h4" })
    .find({ tag: "span", attributes: { itemprop: "price" } });

  return {
    name,
    rawPrice: price.text,
    price: Parsers.parse(price.text, ["price"], { attribute: "text", parent: price }),
    imageSrc: imageSrc,
    code,
  };
};
