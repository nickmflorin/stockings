import type * as cheerio from "cheerio";

export interface ApiSelectorParams {
  readonly tag?: string;
  readonly className?: string | string[];
  readonly attributes?: { [key in string]: string };
}

export interface IApiSelector {
  readonly tag: string | null;
  readonly attributes: { [key in string]: string };
  readonly classNames: string[];
  readonly toString: () => string;
  readonly toRepresentation: () => string;
  readonly evaluate: (element: cheerio.Element) => boolean;
}

export class ApiSelector implements IApiSelector {
  private readonly params: ApiSelectorParams;

  constructor(params: ApiSelectorParams) {
    this.params = params;
    if (this.isInvalid) {
      throw new TypeError("The selector must contain at least 1 criteria.");
    }
  }

  public static create(params: ApiSelectorParams | ApiSelector) {
    if (params instanceof ApiSelector) {
      return params;
    }
    return new ApiSelector(params);
  }

  get attributes() {
    return this.params.attributes ?? {};
  }

  get tag() {
    return this.params.tag ?? null;
  }

  get classNames() {
    return Array.isArray(this.params.className)
      ? this.params.className
      : this.params.className !== undefined
        ? [this.params.className]
        : [];
  }

  get isInvalid() {
    return !this.tag && this.classNames.length === 0 && Object.keys(this.attributes).length === 0;
  }

  public toString() {
    return [
      this.tag ?? "",
      ...this.classNames.map(cs => `.${cs}`),
      ...Object.entries(this.attributes).map(([k, v]) => `[${k}="${v}"]`),
    ].join("");
  }

  public toRepresentation() {
    const parts = [
      this.classNames.length !== 0 ? `className = ${this.classNames.join(", ")}` : null,
      this.tag ? `tag = ${this.tag}` : null,
      ...Object.entries(this.attributes).map(([k, v]) => `${k} = ${v}`),
    ]
      .filter(p => p !== null)
      .join(", ");
    return `<Selector(${parts})>`;
  }

  public evaluate(element: cheerio.Element) {
    const evaluatedAttrs = Object.keys(this.attributes).map(
      k => element.attribs[k] === this.attributes[k],
    );
    return [
      this.tag !== null ? element.name === this.tag : true,
      this.classNames.length !== 0
        ? element.attribs.class &&
          this.classNames.every(cs =>
            element.attribs.class
              .split(" ")
              .map(c => c.trim())
              .includes(cs),
          )
        : true,
      evaluatedAttrs.length === 0 || evaluatedAttrs.every(Boolean),
    ].every(Boolean);
  }
}
