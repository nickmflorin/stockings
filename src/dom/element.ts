import { type Text } from "domhandler";
import { ElementType } from "htmlparser2";

import type * as cheerio from "cheerio";

import { logger } from "~/application/logger";

import {
  MissingElementError,
  MissingTextError,
  MissingAttributeError,
  InvalidAttributeError,
} from "./errors";
import { type IElementSelector, type ISelector, ElementSelector } from "./selector";
import { isElement, isText, type ElementAttribute } from "./types";
import { sanitizeString } from "./util";

export type FindOptions = {
  readonly strict?: false;
  readonly strictUniqueness?: false;
};

export type FindElementRT<O extends FindOptions> = O extends { strict: false }
  ? IWrappedElement | null
  : IWrappedElement;

export type FindTextRT<O extends FindOptions> = O extends { strict: false }
  ? string | null
  : string;

export type FindAttributeRT<O extends FindOptions> = O extends { strict: false }
  ? string | null
  : string;

export type IWrappedElement = {
  [key in keyof cheerio.Element]: cheerio.Element[key];
} & {
  text: string;
  href: string;
  src: string;
  toString(): string;
  findAttribute<O extends FindOptions>(
    this: IWrappedElement,
    attribute: ElementAttribute,
    options?: O,
  ): FindAttributeRT<O>;
  findText<O extends FindOptions>(this: IWrappedElement, options?: O): FindTextRT<O>;
  find<O extends FindOptions>(
    this: IWrappedElement,
    selector: ISelector | IElementSelector,
    options?: O,
  ): FindElementRT<O>;
};

export const WrappedElement = (element: cheerio.Element): IWrappedElement => ({
  ...(element as {
    [key in keyof cheerio.Element]: cheerio.Element[key];
  }),
  get text() {
    return this.findText();
  },
  get href() {
    return this.findAttribute("href");
  },
  get src() {
    return this.findAttribute("src");
  },
  toString() {
    const attribParts = Object.entries(this.attribs)
      .map(([k, v]) => `${k}="${v}"`)
      .join(" ");
    return `<${this.name} ${attribParts}>`;
  },
  findAttribute<O extends FindOptions>(attribute: ElementAttribute, options?: O) {
    const v = this.attribs[attribute];
    if (v === undefined) {
      if (options?.strict !== false) {
        throw new MissingAttributeError(attribute, { parent: this });
      }
      return null as FindAttributeRT<O>;
    } else if (v.trim() === "") {
      if (options?.strict !== false) {
        throw new InvalidAttributeError(attribute, v, { parent: this });
      }
      return null as FindAttributeRT<O>;
    }
    return v;
  },
  findText<O extends FindOptions>(this: IWrappedElement, options?: O) {
    const strictUniqueness = options?.strictUniqueness ?? true;
    const strict = options?.strict ?? true;

    const elements = this.children.filter((c): c is Text => isText(c));
    if (elements.length > 1) {
      if (strictUniqueness) {
        // TODO: Make a strict uniqueness error.
        throw new Error("");
      }
      // TODO: Add more context.
      logger.warn("Found more than one text element.");
      return sanitizeString(elements[0].data) as FindTextRT<O>;
    } else if (elements.length === 0) {
      if (strict) {
        throw new MissingTextError({ parent: this });
      }
      return null as FindTextRT<O>;
    }
    return sanitizeString(elements[0].data) as FindTextRT<O>;
  },
  find<O extends FindOptions>(
    this: IWrappedElement,
    selector: IElementSelector | ISelector,
    options?: O,
  ) {
    const sel = ElementSelector(selector);
    const strictUniqueness = options?.strictUniqueness ?? true;
    const strict = options?.strict ?? true;

    const elements = this.children.filter(
      // Ignore ElementType.Script and ElementType.Style
      (c): c is cheerio.Element => isElement(c) && c.type === ElementType.Tag && sel.evaluate(c),
    );
    if (elements.length > 1) {
      if (strictUniqueness) {
        // TODO: Make a strict uniqueness error.
        throw new Error("");
      }
      // TODO: Add more context.
      logger.warn("Found more than one element matching the selector.");
      return WrappedElement(elements[0]) as FindElementRT<O>;
    } else if (elements.length === 0) {
      if (strict) {
        throw new MissingElementError(sel, { parent: this });
      }
      return null as FindElementRT<O>;
    }
    return WrappedElement(elements[0]) as FindElementRT<O>;
  },
});
