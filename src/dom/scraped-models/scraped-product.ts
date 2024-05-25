import { InvalidTextError } from "~/dom/api";
import { enumeratedLiterals, type EnumeratedLiteralsType } from "~/lib/literals";

import { type ParserResult } from "../api/parsers";

import { ScrapedApiModel } from "./scraped-model";

export const ProductScrapedStates = enumeratedLiterals(["out-of-stock", "in-stock"] as const, {});
export type ProductScrapedState = EnumeratedLiteralsType<typeof ProductScrapedStates>;

export const parseProductScrapedState = (value: string) => {
  const test = value.toLowerCase().replaceAll(" ", "");
  switch (test) {
    case "outofstock":
      return ProductScrapedStates.OUT_OF_STOCK;
    case "addtocart":
      return ProductScrapedStates.IN_STOCK;
    default:
      return null;
  }
};

export type IScrapedProduct = {
  readonly price: ParserResult<"price">;
  readonly rawPrice: string;
  readonly imageSrc: string;
  readonly name: string;
  readonly state: ProductScrapedState;
  readonly code: string;
};

export class ScrapedProduct extends ScrapedApiModel<IScrapedProduct> implements IScrapedProduct {
  protected comparisonFields = ["price", "rawPrice", "imageSrc", "code"] as const;

  private get priceElement() {
    /* eslint-disable-next-line quotes */
    return this.root('div[itemprop="offerDetails"]', {})
      .find({ className: "product-price", tag: "h4" })
      .find({ tag: "span", attributes: { itemprop: "price" } });
  }

  public get price() {
    return this.priceElement.parseText(["price"], {});
  }

  public get state() {
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

  public get rawPrice() {
    return this.priceElement.text;
  }

  public get imageSrc() {
    return this.root({ tag: "img", className: "zoom-image" }, { strictUniqueness: false }).src;
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

  protected parseData() {
    return {
      price: this.price,
      rawPrice: this.rawPrice,
      imageSrc: this.imageSrc,
      name: this.name,
      code: this.code,
      state: this.state,
    };
  }
}
