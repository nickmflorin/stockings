import { type Product } from "./generated";

export type ToBrandedModel<M, T extends string> = M & {
  readonly $kind: T;
};

export type Brands = {
  product: Product;
};

export type BrandedModels = { [key in keyof Brands]: ToBrandedModel<Brands[key], key> };
export type Brand = keyof Brands;

export type BrandModel<T extends Brand> = T extends Brand ? BrandedModels[T] : never;

export type BrandProduct = BrandModel<"product">;

export type PluralBrand<T extends Brand = Brand> = `${T}s`;

export const pluralizeBrandModel = <T extends Brand>(brand: T): PluralBrand<T> =>
  `${brand}s` as PluralBrand<T>;
