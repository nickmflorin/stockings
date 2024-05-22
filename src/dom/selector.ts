import type * as cheerio from "cheerio";

export interface ISelector {
  readonly tag?: string;
  readonly className?: string;
}

export interface IElementSelector extends ISelector {
  readonly toString: () => string;
  readonly evaluate: (element: cheerio.Element) => boolean;
}

export const ElementSelector = (params: ISelector | IElementSelector): IElementSelector => {
  if ("evaluate" in params) {
    return params;
  } else if (!params.tag && !params.className) {
    throw new TypeError("The selector must contain at least 1 criteria.");
  }
  return {
    ...params,
    toString(this: IElementSelector) {
      const parts = [
        this.className ? `className = ${this.className}` : null,
        this.tag ? `tag = ${this.tag}` : null,
      ]
        .filter(p => p !== null)
        .join(", ");
      return `Selector(${parts})`;
    },
    evaluate(this: IElementSelector, element: cheerio.Element) {
      return [
        this.tag !== undefined ? element.name === this.tag : true,
        this.className !== undefined
          ? element.attribs.class && element.attribs.class.includes(this.className)
          : true,
      ].every(Boolean);
    },
  };
};
