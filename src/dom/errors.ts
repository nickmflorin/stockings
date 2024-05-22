import type * as cheerio from "cheerio";

import { type IWrappedElement } from "~/dom/element";

import { type IElementSelector } from "./selector";

interface MissingElementErrorConfig {
  readonly context?: string;
  readonly parent?: IWrappedElement | string;
}

export class MissingElementError extends Error {
  private readonly parent: IWrappedElement | string | undefined;
  private readonly selector: IElementSelector;

  constructor(selector: IElementSelector, config?: MissingElementErrorConfig) {
    super();
    this.selector = selector;
    this.parent = config?.parent;
  }

  public get message() {
    if (typeof this.parent === "string") {
      return `Parent ${this.parent}: The selector '${this.selector.toString()}' was not present in the DOM.`;
    }
    return `The selector '${this.selector.toString()}' was not present in the DOM.`;
  }
}

export class MissingTextError extends Error {
  private readonly parent: IWrappedElement | string;

  constructor(parent: IWrappedElement) {
    super();
    this.parent = parent;
  }

  public get message() {
    if (typeof this.parent === "string") {
      return `The parent ${this.parent} did not have a child text node.`;
    }
    return `The parent '${this.parent.toString()}' did not have a child text node.`;
  }
}
