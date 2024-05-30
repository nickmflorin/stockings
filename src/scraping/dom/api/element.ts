import prettier from "@prettier/sync";
import { type ChildNode, type Text } from "domhandler";
import { DomUtils } from "htmlparser2";

import type * as cheerio from "cheerio";

import { logger } from "~/application/logger";
import { ElementAttribute, getAttributeKey } from "~/prisma/model";

import {
  MissingElementError,
  MissingTextError,
  MissingAttributeError,
  InvalidAttributeError,
  NonUniqueElementError,
  NonUniqueTextError,
} from "./errors";
import { Parsers, type ParserName, type ParserOptions, type ParserReturn } from "./parsers";
import { type IApiSelector, type ApiSelectorParams, ApiSelector } from "./selector";
import { isText, isApiValidElement } from "./types";
import { sanitizeString } from "./util";

export type FindOptions = {
  readonly strict?: false;
  readonly first?: true;
  readonly duplication?: "log" | "silent" | "error";
  readonly multiple?: boolean;
};

export type FindRT<P, O extends FindOptions> = O extends { first: true }
  ? O extends { strict: false }
    ? P | null
    : P
  : O extends { multiple: true }
    ? P[]
    : O extends { strict: false }
      ? P | null
      : P;

type FindElementRT<O extends FindOptions> = FindRT<ApiElement, O>;

export type FindTextRT<O extends FindOptions> = FindRT<string, O>;

export type FindAttributeOptions = {
  readonly strict?: false;
};

export type FindAttributeRT<O extends FindOptions> = O extends { strict: false }
  ? string | null
  : string;

export interface IApiElement {
  readonly text: string;
  readonly href: string;
  readonly src: string;
  readonly name: string;
  readonly html: string;
  readonly attributes: Record<string, string>;
  readonly children: cheerio.Element["children"];
  toString(): string;
  findAttribute<O extends FindAttributeOptions>(
    this: IApiElement,
    attribute: ElementAttribute,
    options?: O,
  ): FindAttributeRT<O>;
  findText<O extends FindOptions>(this: IApiElement, options?: O): FindTextRT<O>;
  find<O extends FindOptions>(
    this: IApiElement,
    selector: ApiSelectorParams | IApiSelector,
    options?: O,
  ): FindElementRT<O>;
}

export class ApiElement implements IApiElement {
  public readonly element: cheerio.Element;

  constructor(element: cheerio.Element) {
    this.element = element;
  }

  public static create(element: cheerio.Element | ApiElement) {
    return element instanceof ApiElement ? element : new ApiElement(element);
  }

  public get children() {
    return this.element.children;
  }

  public get name() {
    return this.element.name;
  }

  public get attributes() {
    return this.element.attribs;
  }

  public get text() {
    return this.findText();
  }

  public get href() {
    return this.findAttribute(ElementAttribute.HREF);
  }

  public get src() {
    return this.findAttribute(ElementAttribute.SRC);
  }

  public get html() {
    const outerHtml = DomUtils.getOuterHTML(this.element);
    const options = prettier.resolveConfig("./.prettierrc.yaml");
    return prettier.format(outerHtml, {
      parser: "html",
      ...options,
      htmlWhitespaceSensitivity: "ignore",
    });
  }

  public toString() {
    const attribParts = Object.entries(this.element.attribs)
      .map(([k, v]) => `${k}="${v}"`)
      .join(" ");
    return `<${this.name} ${attribParts}>`;
  }

  public static findReturn<T, O extends FindOptions>(
    results: T[],
    { nonUniqueError, missingError }: { nonUniqueError: () => Error; missingError: () => Error },
    options?: O,
  ): FindRT<T, O> {
    const duplication = options?.duplication ?? "error";
    const strict = options?.strict ?? true;
    const multiple = options?.multiple ?? false;
    const first = options?.first ?? false;

    if (results.length > 1) {
      if (first) {
        return results[0] as FindRT<T, O>;
      } else if (multiple) {
        return results as FindRT<T, O>;
      }
      const err = nonUniqueError();
      if (duplication === "error") {
        throw err;
      } else if (duplication === "log") {
        logger.warn(err.message);
      }
      return results[0] as FindRT<T, O>;
    } else if (results.length === 0) {
      if (first || !multiple) {
        if (strict) {
          throw missingError();
        }
        return null as FindRT<T, O>;
      }
      return [] as T[] as FindRT<T, O>;
    } else if (multiple) {
      return results as FindRT<T, O>;
    }
    return results[0] as FindRT<T, O>;
  }

  public findAttribute<O extends FindAttributeOptions>(
    attribute: ElementAttribute,
    options?: O,
  ): FindAttributeRT<O> {
    const v = this.attributes[getAttributeKey(attribute)];
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
    return v as FindAttributeRT<O>;
  }

  public findText<O extends FindOptions>(options?: O) {
    const elements = this.children
      .filter((c): c is Text => isText(c) && c.data.trim() !== "")
      .map(c => sanitizeString(c.data));
    return ApiElement.findReturn(
      elements,
      {
        nonUniqueError: () => new NonUniqueTextError({ parent: this }),
        missingError: () => new MissingTextError({ parent: this }),
      },
      options,
    );
  }

  public parse<N extends ParserName, O extends ParserOptions>(
    value: string,
    parsers: N[],
    options: Omit<O, "parent">,
  ): ParserReturn<N, O> {
    return Parsers.parse<N, typeof options & { parent: ApiElement }>(value, parsers, {
      ...options,
      parent: this,
    });
  }

  public parseText<N extends ParserName, O extends ParserOptions>(
    parsers: N[],
    options: Omit<O, "parent" | "attribute">,
  ) {
    return this.parse<N, typeof options & { parent: ApiElement; attribute: "text" }>(
      this.text,
      parsers,
      { ...options, attribute: "text", parent: this },
    );
  }

  public parseAttribute<N extends ParserName, O extends ParserOptions>(
    attribute: ElementAttribute,
    parsers: N[],
    options: Omit<O, "parent" | "attribute">,
  ) {
    return this.parse<N, typeof options & { attribute: ElementAttribute; parent: ApiElement }>(
      this.findAttribute(attribute, {}),
      parsers,
      { ...options, attribute, parent: this },
    );
  }

  /* TODO: Build this to support finding multiple nested children.
     Note: This is currently not being used... */
  private findNested(sel: ApiSelector): ApiElement | null {
    const checkChildren = (children: ChildNode[]): ApiElement | null => {
      const f = children.filter(isApiValidElement);
      for (let i = 0; i < f.length; i++) {
        const child = f[i];
        if (sel.evaluate(child)) {
          return ApiElement.create(child);
        }
        const nestedChild = checkChildren(child.children);
        if (nestedChild) {
          return ApiElement.create(nestedChild);
        }
      }
      return null;
    };

    const filtered = this.children.filter(isApiValidElement);
    for (let i = 0; i < filtered.length; i++) {
      const child = filtered[i];
      if (sel.evaluate(child)) {
        return ApiElement.create(child);
      }
      const checked = checkChildren(child.children);
      if (checked) {
        return checked;
      }
    }
    return null;
  }

  public findFirstNested<O extends FindOptions>(
    selector: ApiSelector | ApiSelectorParams,
    options?: O,
  ): FindElementRT<O> {
    const sel = ApiSelector.create(selector);

    const nested = this.findNested(sel);

    return ApiElement.findReturn(
      nested ? [nested] : [],
      {
        nonUniqueError: () => new NonUniqueElementError(sel, { parent: this }),
        missingError: () => new MissingElementError(sel, { parent: this }),
      },
      options,
    );
  }

  public find<O extends FindOptions>(
    selector: ApiSelector | ApiSelectorParams,
    options?: O,
  ): FindElementRT<O> {
    const sel = ApiSelector.create(selector);
    const elements = this.children
      .filter((c): c is cheerio.Element => isApiValidElement(c) && sel.evaluate(c))
      .map(c => ApiElement.create(c));
    return ApiElement.findReturn(
      elements,
      {
        nonUniqueError: () => new NonUniqueElementError(sel, { parent: this }),
        missingError: () => new MissingElementError(sel, { parent: this }),
      },
      options,
    );
  }
}
