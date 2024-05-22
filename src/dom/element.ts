import { type Text } from "domhandler";
import { ElementType } from "htmlparser2";

import type * as cheerio from "cheerio";

import { logger } from "~/application/logger";

import { MissingElementError, MissingTextError } from "./errors";
import { type IElementSelector, type ISelector, ElementSelector } from "./selector";
import { isElement, isText } from "./types";

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

export const findElement = <O extends FindOptions>(
  parent: IWrappedElement,
  selector: IElementSelector,
  options?: O,
): FindElementRT<O> => {
  const strictUniqueness = options?.strictUniqueness ?? true;
  const strict = options?.strict ?? true;

  const elements = parent.children.filter(
    // Ignore ElementType.Script and ElementType.Style
    (c): c is cheerio.Element => isElement(c) && c.type === ElementType.Tag && selector.evaluate(c),
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
      throw new MissingElementError(selector, { parent });
    }
    return null as FindElementRT<O>;
  }
  return WrappedElement(elements[0]) as FindElementRT<O>;
};

export const findText = <O extends FindOptions>(
  parent: IWrappedElement,
  options?: O,
): FindTextRT<O> => {
  const strictUniqueness = options?.strictUniqueness ?? true;
  const strict = options?.strict ?? true;

  const elements = parent.children.filter((c): c is Text => isText(c));
  if (elements.length > 1) {
    if (strictUniqueness) {
      // TODO: Make a strict uniqueness error.
      throw new Error("");
    }
    // TODO: Add more context.
    logger.warn("Found more than one text element.");
    return elements[0].data as FindTextRT<O>;
  } else if (elements.length === 0) {
    if (strict) {
      throw new MissingTextError(parent);
    }
    return null as FindTextRT<O>;
  }
  return elements[0].data as FindTextRT<O>;
};

export type IWrappedElement = cheerio.Element & {
  text: string;
  findText<O extends FindOptions>(this: IWrappedElement, options?: O): FindTextRT<O>;
  find<O extends FindOptions>(
    this: IWrappedElement,
    selector: ISelector | IElementSelector,
    options?: O,
  ): FindElementRT<O>;
};

export const WrappedElement = (element: cheerio.Element): IWrappedElement =>
  ({
    ...element,
    get text() {
      return findText(this);
    },
    findText<O extends FindOptions>(this: IWrappedElement, options?: O) {
      return findText<O>(this, options);
    },
    find<O extends FindOptions>(
      this: IWrappedElement,
      selector: IElementSelector | ISelector,
      options?: O,
    ) {
      return findElement<O>(this, ElementSelector(selector), options);
    },
  }) as IWrappedElement;
