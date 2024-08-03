import { type ChildNode, type Text } from "domhandler";
import { ElementType } from "htmlparser2";

import type * as cheerio from "cheerio";

import { type Prettify } from "~/lib/types";

import { type ApiElement, type ApiSelector } from "./dom";
import { type ScrapingDomError } from "./errors";

export type FindInDomOptions = {
  readonly strict?: false;
  readonly first?: true;
  readonly duplication?: "log" | "silent" | "error";
  readonly multiple?: boolean;
};

export type FindRT<P, O extends FindInDomOptions> = O extends { first: true }
  ? O extends { strict: false }
    ? P | null
    : P
  : O extends { multiple: true }
    ? P[]
    : O extends { strict: false }
      ? P | null
      : P;

export type FindElementRT<O extends FindInDomOptions> = FindRT<ApiElement, O>;

export type FindTextRT<O extends FindInDomOptions> = FindRT<string, O>;

export type FindAttributeOptions = {
  readonly strict?: false;
};

export type FindAttributeRT<O extends FindInDomOptions> = O extends { strict: false }
  ? string | null
  : string;

export type DomApiRT<O extends FindInDomOptions> = FindRT<ApiElement, O>;

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

export type DomApiType = {
  <O extends FindInDomOptions>(
    selector: ApiSelector | ApiSelectorParams | string,
    options?: O,
  ): DomApiRT<O>;
};

export const isElement = (child: ChildNode): child is cheerio.Element =>
  [ElementType.Tag, ElementType.Script, ElementType.Style].includes(child.type);

export const isText = (child: ChildNode): child is Text => [ElementType.Text].includes(child.type);

export const isApiValidElement = (element: ChildNode): element is cheerio.Element =>
  // Ignore ElementType.Script and ElementType.Style
  isElement(element) && element.type === ElementType.Tag;

export type BaseScrapedModelDataValue =
  | string
  | number
  | boolean
  | Record<string, string | number | boolean>;

export type BaseScrapedModelData = Record<string, BaseScrapedModelDataValue>;

export type ScrapedModelFieldError<
  F extends string,
  E extends ScrapingDomError = ScrapingDomError,
> = {
  readonly error: E;
  readonly field: F;
  readonly value?: never;
};

export type ScrapedModelFieldValue<V extends BaseScrapedModelDataValue> = {
  readonly error?: never;
  readonly value: V;
  readonly field?: never;
};

export type ScrapedModelDataValue<F extends string, V extends BaseScrapedModelDataValue> =
  | ScrapedModelFieldValue<V>
  | ScrapedModelFieldError<F>;

export type ScrapedModelData<D extends BaseScrapedModelData> = {
  [key in ScrapedModelField<D>]: ScrapedModelDataValue<key, D[key]>;
};

export type ScrapedModelFieldErrors<D extends BaseScrapedModelData> = Partial<{
  [key in keyof D & string]: ScrapingDomError;
}>;

export type ScrapedModelField<D extends BaseScrapedModelData> = keyof D & string;

export type PartiallyValidData<
  D extends BaseScrapedModelData,
  F extends readonly ScrapedModelField<D>[],
> = Prettify<
  {
    [key in Extract<keyof D, F[number]>]: D[key];
  } & {
    [key in Exclude<keyof D, F[number]>]?: D[key];
  }
>;
