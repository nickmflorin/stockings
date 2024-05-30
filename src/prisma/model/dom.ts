import { ElementAttribute } from "./generated";

const _ElementAttributeKeys = {
  [ElementAttribute.HREF]: "href",
  [ElementAttribute.SRC]: "src",
  [ElementAttribute.DATA_GA_PRODUCT_NAME]: "data-ga-product-name",
  [ElementAttribute.VALUE]: "value",
} as const satisfies { [key in ElementAttribute]: string };

export type ElementAttributeKeys = typeof _ElementAttributeKeys;

export type ElementAttributeKey<K extends ElementAttribute = ElementAttribute> =
  ElementAttributeKeys[K];

export const getAttributeKey = <K extends ElementAttribute>(attribute: K): ElementAttributeKey<K> =>
  _ElementAttributeKeys[attribute];
