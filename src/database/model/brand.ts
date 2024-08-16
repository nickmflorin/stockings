import {
  type Notification,
  type Product,
  type ProductSubscription,
} from "./zenstack-generated/models";

export type ToBrandedModel<M, T extends string> = M & {
  readonly $kind: T;
};

export type Brands = {
  product: Product;
  notification: Notification;
  productSubscription: ProductSubscription;
};

export type BrandedModels = { [key in keyof Brands]: ToBrandedModel<Brands[key], key> };
export type Brand = keyof Brands;

export type BrandModel<T extends Brand> = T extends Brand ? BrandedModels[T] : never;

export type BrandProduct = BrandModel<"product">;
export type BrandNotification = BrandModel<"notification">;
export type BrandProductSubscription = BrandModel<"productSubscription">;

export type PluralBrand<T extends Brand = Brand> = `${T}s`;

export const pluralizeBrandModel = <T extends Brand>(brand: T): PluralBrand<T> =>
  `${brand}s` as PluralBrand<T>;
