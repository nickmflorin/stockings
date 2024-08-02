import { isError } from "~/application/errors";
import { getAttributeKey, type ElementAttribute, ScrapingErrorCode } from "~/prisma/model";

import { type ApiElement, type ApiSelector } from "~/scraping/dom";

import { BaseScrapingError } from "./base-scraping-error";

interface ElementErrorConfig {
  readonly parent?: ApiElement;
}

export abstract class ElementError<E extends ScrapingErrorCode> extends BaseScrapingError<E> {
  protected readonly parent: ApiElement | undefined;
  public abstract message: string;

  constructor(config?: ElementErrorConfig) {
    super();
    this.parent = config?.parent;
  }

  public get html() {
    return this.parent?.html ?? null;
  }
}

export abstract class ApiSelectorError<E extends ScrapingErrorCode> extends ElementError<E> {
  protected readonly selector: ApiSelector | string;

  constructor(selector: ApiSelector | string, config?: ElementErrorConfig) {
    super(config);
    this.selector = selector;
  }
}

export class MissingElementError extends ApiSelectorError<
  typeof ScrapingErrorCode.MISSING_ELEMENT
> {
  public errorCode = ScrapingErrorCode.MISSING_ELEMENT;

  public get message() {
    if (this.parent) {
      return `The selector '${this.selector.toString()}' did not match any children in ${this.parent.toString()}.`;
    }
    return `The selector '${this.selector.toString()}' did not match any children.`;
  }

  public get errorData() {
    return { parentHtml: this.html, selector: this.selector.toString() };
  }
}

export class NonUniqueElementError extends ApiSelectorError<
  typeof ScrapingErrorCode.NONUNIQUE_ELEMENT
> {
  public errorCode = ScrapingErrorCode.NONUNIQUE_ELEMENT;

  public get message() {
    if (this.parent) {
      return `The selector '${this.selector.toString()}' unexpectedly matched multiple children in ${this.parent.toString()}.`;
    }
    return `The selector '${this.selector.toString()}' unexpectedly matched multiple children.`;
  }

  public get errorData() {
    return { parentHtml: this.html, selector: this.selector.toString() };
  }
}

export class MissingTextError extends ElementError<typeof ScrapingErrorCode.MISSING_TEXT> {
  public errorCode = ScrapingErrorCode.MISSING_TEXT;

  public get message() {
    if (this.parent) {
      return `The parent '${this.parent.toString()}' did not have a child text node.`;
    }
    return "The parent did not have a child text node.";
  }

  public get errorData() {
    return { parentHtml: this.html };
  }
}

export class NonUniqueTextError extends ElementError<typeof ScrapingErrorCode.NONUNIQUE_TEXT> {
  public errorCode = ScrapingErrorCode.NONUNIQUE_TEXT;

  public get message() {
    if (this.parent) {
      return `The parent '${this.parent.toString()}' had multiple child text nodes when only 1 was expected.`;
    }
    return "The parent had multiple child text nodes when only 1 was expected.";
  }

  public get errorData() {
    return { parentHtml: this.html };
  }
}

export class InvalidTextError extends ElementError<typeof ScrapingErrorCode.INVALID_TEXT> {
  public errorCode = ScrapingErrorCode.INVALID_TEXT;
  private readonly value: string;

  constructor(value: string, config?: ElementErrorConfig) {
    super(config);
    this.value = value;
  }

  public get message() {
    if (this.parent) {
      return `The element ${this.parent.toString()} had an invalid text value, '${this.value}'.`;
    }
    return `The element had an invalid text value, '${this.value}'.`;
  }

  public get errorData() {
    return { parentHtml: this.html, value: this.value };
  }
}

export abstract class AttributeError<
  E extends typeof ScrapingErrorCode.MISSING_ATTRIBUTE | typeof ScrapingErrorCode.INVALID_ATTRIBUTE,
> extends ElementError<E> {
  protected readonly attribute: ElementAttribute;

  constructor(attribute: ElementAttribute, config?: ElementErrorConfig) {
    super(config);
    this.attribute = attribute;
  }

  public get key() {
    return getAttributeKey(this.attribute);
  }
}

export class MissingAttributeError extends AttributeError<
  typeof ScrapingErrorCode.MISSING_ATTRIBUTE
> {
  public errorCode = ScrapingErrorCode.MISSING_ATTRIBUTE;

  public get message() {
    if (this.parent) {
      return `The element ${this.parent.toString()} did not have the attribute '${this.key}'.`;
    }
    return `The element did not have the attribute '${this.key}'.`;
  }

  public get errorData() {
    return { attribute: this.attribute, parentHtml: this.html };
  }
}

export class InvalidAttributeError extends AttributeError<
  typeof ScrapingErrorCode.INVALID_ATTRIBUTE
> {
  private readonly value: string;
  public errorCode = ScrapingErrorCode.INVALID_ATTRIBUTE;

  constructor(attribute: ElementAttribute, value: string, config?: ElementErrorConfig) {
    super(attribute, config);
    this.value = value;
  }

  public get message() {
    if (this.parent) {
      return `The element ${this.parent.toString()} had an invalid value, '${this.value}', for the attribute '${this.attribute}'.`;
    }
    return `The element had an invalid value, '${this.value}', for the attribute '${this.attribute}'.`;
  }

  public get errorData() {
    return { attribute: this.attribute, parentHtml: this.html, value: this.value };
  }
}

export type ScrapingDomError =
  | InvalidAttributeError
  | MissingAttributeError
  | MissingTextError
  | MissingElementError
  | NonUniqueElementError
  | NonUniqueTextError
  | InvalidTextError;

export const isScrapingDomError = (e: unknown) =>
  isError(e) &&
  [
    InvalidAttributeError,
    MissingAttributeError,
    MissingTextError,
    MissingElementError,
    NonUniqueElementError,
    NonUniqueTextError,
    InvalidTextError,
  ].some(cls => e instanceof cls);
