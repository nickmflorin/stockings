import { type ElementAttribute } from "~/prisma/model";
import { enumeratedLiterals, type EnumeratedLiteralsType } from "~/lib/literals";

import { sanitizeString } from "./util";

import { InvalidTextError, InvalidAttributeError, type ApiElement } from ".";

export const PARSER_NAMES = enumeratedLiterals(["price", "priceRange", "productSlug"] as const, {});
export type ParserName = EnumeratedLiteralsType<typeof PARSER_NAMES>;

export type ParserResults = {
  price: number;
  priceRange: { lower: number; upper: number };
  productSlug: string;
};

export type ParserResult<N extends ParserName> = N extends ParserName ? ParserResults[N] : never;

const PriceRegex = /^\s*\$([0-9]+\.[0-9]{2})\s*$/;
const PriceRangeRegex = /^\s*\$([0-9]+\.[0-9]{2})\s*-\s*\$([0-9]+\.[0-9]{2})\s*$/;
/* For whatever reason, Lie Nielsen has a couple of slugs that are in title case with spaces, which
   match the product's name (e.g. Model Maker's Block Plane) is the slug...  We also have to account
   for the degree (º) symbol. */
const ProductSlugRegex = /^\/products\/([A-Za-z0-9-'\sº]+).*/;

export type ParserOptions = {
  readonly attribute: ElementAttribute | "text";
  readonly strict?: boolean;
  readonly parent: ApiElement;
};

export type ParserReturn<
  N extends ParserName,
  O extends { strict?: boolean },
> = N extends ParserName
  ? O extends { strict: false }
    ? ParserResults[N] | null
    : ParserResults[N]
  : never;

export type Parser<N extends ParserName> = <O extends ParserOptions>(
  value: string,
  options: O,
) => ParserReturn<N, O>;

interface IParsers {
  handleInvalid<O extends ParserOptions>(this: IParsers, value: string, opts: O): null;
  parse<N extends ParserName, O extends ParserOptions>(
    value: string,
    parsers: N[],
    opts: O,
  ): ParserReturn<N, O>;
  price<O extends ParserOptions>(this: IParsers, value: string, opts: O): ParserReturn<"price", O>;
  priceRange<O extends ParserOptions>(
    this: IParsers,
    value: string,
    opts: O,
  ): ParserReturn<"priceRange", O>;
  productSlug<O extends ParserOptions>(
    this: IParsers,
    value: string,
    opts: O,
  ): ParserReturn<"productSlug", O>;
}

export const Parsers: IParsers = {
  handleInvalid: <O extends ParserOptions>(
    value: string,
    { parent, attribute, strict = true }: O,
  ) => {
    if (strict) {
      if (attribute === "text") {
        throw new InvalidTextError(value, { parent });
      }
      throw new InvalidAttributeError(attribute, value, { parent });
    }
    return null;
  },
  productSlug<O extends ParserOptions>(value: string, opts: O): ParserReturn<"productSlug", O> {
    const match = decodeURI(sanitizeString(value)).match(ProductSlugRegex);
    if (match === null || match.length !== 2) {
      return this.handleInvalid(value, opts) as ParserReturn<"productSlug", O>;
    }
    return match[1];
  },
  price<O extends ParserOptions>(value: string, opts: O): ParserReturn<"price", O> {
    const match = sanitizeString(value).match(PriceRegex);
    if (match === null || match.length !== 2) {
      return this.handleInvalid(value, opts) as ParserReturn<"price", O>;
    }
    const flt = parseFloat(match[1]);
    if (isNaN(flt) || !isFinite(flt)) {
      return this.handleInvalid(value, opts) as ParserReturn<"price", O>;
    }
    return flt;
  },
  priceRange<O extends ParserOptions>(value: string, opts: O): ParserReturn<"priceRange", O> {
    const match = sanitizeString(value).match(PriceRangeRegex);
    if (match === null || match.length !== 3) {
      return this.handleInvalid(value, opts) as ParserReturn<"priceRange", O>;
    }
    const [lower, upper] = match.slice(1).map(parseFloat);
    if (isNaN(lower) || !isFinite(lower) || isNaN(upper) || !isFinite(upper)) {
      return this.handleInvalid(value, opts) as ParserReturn<"priceRange", O>;
    }
    return { lower, upper };
  },
  parse<N extends ParserName, O extends ParserOptions>(
    value: string,
    parsers: N[],
    { strict = true, parent, attribute }: O,
  ): ParserReturn<N, O> {
    if (parsers.length === 0) {
      throw new TypeError("At least one parser must be provided.");
    }
    for (const parser of parsers.slice(0, parsers.length - 1)) {
      const result = this[parser](value, { strict: false, parent, attribute });
      if (result !== null) {
        return result as ParserReturn<N, O>;
      }
    }
    return this[parsers[parsers.length - 1]](value, { strict, parent, attribute }) as ParserReturn<
      N,
      O
    >;
  },
};
