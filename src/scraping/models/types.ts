import { type ScrapingDomError } from "~/scraping/errors";

export type BaseScrapedModelDataValue =
  | string
  | number
  | boolean
  | Record<string, string | number | boolean>;

export type BaseScrapedModelData = Record<string, BaseScrapedModelDataValue>;

export type InvalidScrapedModelFieldError<
  F extends string,
  E extends ScrapingDomError = ScrapingDomError,
> = {
  readonly error: E;
  readonly field: F;
  readonly value?: never;
  readonly __brand__: "error";
};

export type InvalidScrapedModelFieldValue<V extends BaseScrapedModelDataValue> = {
  readonly error?: never;
  readonly value: V;
  readonly __brand__: "valid";
};

export type InvalidScrapedModelDataValue<F extends string, V extends BaseScrapedModelDataValue> =
  | InvalidScrapedModelFieldValue<V>
  | InvalidScrapedModelFieldError<F>;

export const dataValueIsFieldError = <
  D extends BaseScrapedModelData,
  F extends ScrapedModelField<D>,
>(
  val: InvalidScrapedModelDataValue<F, D[F]> | D[F],
): val is InvalidScrapedModelFieldError<F> =>
  (val as InvalidScrapedModelFieldError<F>).__brand__ === "error";

export const dataValueIsFieldValue = <
  D extends BaseScrapedModelData,
  F extends ScrapedModelField<D>,
>(
  val: InvalidScrapedModelDataValue<F, D[F]> | D[F],
): val is InvalidScrapedModelFieldValue<D[F]> =>
  (val as InvalidScrapedModelFieldValue<D[F]>).__brand__ === "valid";

export const dataValueIsValue = <D extends BaseScrapedModelData, F extends ScrapedModelField<D>>(
  val: InvalidScrapedModelDataValue<F, D[F]> | D[F],
): val is D[F] => !dataValueIsFieldValue(val) && !dataValueIsFieldError(val);

export type InvalidScrapedModelData<D extends BaseScrapedModelData> = {
  [key in ScrapedModelField<D>]: InvalidScrapedModelDataValue<key, D[key]>;
};

export type ScrapedModelData<
  D extends BaseScrapedModelData,
  V extends boolean = boolean,
> = V extends true ? D : InvalidScrapedModelData<D>;

export type ScrapedModelFieldErrors<D extends BaseScrapedModelData> = Partial<{
  [key in keyof D & string]: ScrapingDomError;
}>;

export type ScrapedModelField<D extends BaseScrapedModelData> = keyof D & string;
