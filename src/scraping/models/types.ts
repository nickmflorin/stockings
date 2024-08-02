import { type ScrapingDomError } from "~/scraping/errors";

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
  readonly __brand__: "error";
};

export type ScrapedModelFieldValue<V extends BaseScrapedModelDataValue> = {
  readonly error?: never;
  readonly value: V;
  readonly __brand__: "valid";
};

export type ScrapedModelDataValue<F extends string, V extends BaseScrapedModelDataValue> =
  | ScrapedModelFieldValue<V>
  | ScrapedModelFieldError<F>;

export const dataValueIsFieldError = <
  D extends BaseScrapedModelData,
  F extends ScrapedModelField<D>,
>(
  val: ScrapedModelDataValue<F, D[F]> | D[F],
): val is ScrapedModelFieldError<F> => (val as ScrapedModelFieldError<F>).__brand__ === "error";

export const dataValueIsFieldValue = <
  D extends BaseScrapedModelData,
  F extends ScrapedModelField<D>,
>(
  val: ScrapedModelDataValue<F, D[F]> | D[F],
): val is ScrapedModelFieldValue<D[F]> =>
  (val as ScrapedModelFieldValue<D[F]>).__brand__ === "valid";

export type ScrapedModelData<D extends BaseScrapedModelData> = {
  [key in ScrapedModelField<D>]: ScrapedModelDataValue<key, D[key]>;
};

export type ScrapedModelFieldErrors<D extends BaseScrapedModelData> = Partial<{
  [key in keyof D & string]: ScrapingDomError;
}>;

export type ScrapedModelField<D extends BaseScrapedModelData> = keyof D & string;
