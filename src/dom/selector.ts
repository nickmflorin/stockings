import type * as cheerio from "cheerio";

export interface ISelector {
  readonly tag?: string;
  readonly className?: string | string[];
  readonly attributes?: { [key in string]: string };
}

export interface IElementSelector extends ISelector {
  readonly classNames?: string[];
  readonly toString: () => string;
  readonly evaluate: (element: cheerio.Element) => boolean;
}

export const ElementSelector = (params: ISelector | IElementSelector): IElementSelector => {
  if ("evaluate" in params) {
    return params;
  } else if (
    !params.tag &&
    ((Array.isArray(params.className) && params.className.length === 0) ||
      params.className === undefined) &&
    (params.attributes === undefined || Object.keys(params.attributes).length === 0)
  ) {
    throw new TypeError("The selector must contain at least 1 criteria.");
  }
  return {
    ...params,
    classNames: Array.isArray(params.className)
      ? params.className
      : params.className !== undefined
        ? [params.className]
        : undefined,
    toString(this: IElementSelector) {
      const parts = [
        this.classNames ? `className = ${this.classNames.join(", ")}` : null,
        this.tag ? `tag = ${this.tag}` : null,
        ...Object.entries(this.attributes ?? {}).map(([k, v]) => `${k} = ${v}`),
      ]
        .filter(p => p !== null)
        .join(", ");
      return `Selector(${parts})`;
    },
    evaluate(this: IElementSelector, element: cheerio.Element) {
      const evaluatedAttrs = Object.keys(this.attributes ?? {}).map(
        k => element.attribs[k] === (this.attributes ?? {})[k],
      );
      return [
        this.tag !== undefined ? element.name === this.tag : true,
        this.classNames !== undefined
          ? element.attribs.class &&
            this.classNames
              .map(cs =>
                element.attribs.class
                  .split(" ")
                  .map(c => c.trim())
                  .includes(cs),
              )
              .every(Boolean)
          : true,
        evaluatedAttrs.length === 0 || evaluatedAttrs.every(Boolean),
      ].every(Boolean);
    },
  };
};
