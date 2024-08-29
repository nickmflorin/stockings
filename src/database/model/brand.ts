import { type ProductNotificationType } from "./generated";
import {
  type ProductNotification,
  type Product,
  type ProductSubscription,
  type ProductRecord,
  type ProcessedProductRecord,
  type PriceChangeNotification,
  type StatusChangeNotification,
} from "./zenstack-generated/models";

export type ToBrandedModel<M, T extends string> = M & {
  readonly $kind: T;
};

export type Brands = {
  product: Product;
  notification: Notification;
  productSubscription: ProductSubscription;
  productRecord: ProductRecord;
  processedProductRecord: ProcessedProductRecord;
  statusChangeNotification: Omit<StatusChangeNotification, "notificationType"> & {
    readonly notificationType: typeof ProductNotificationType.StatusChangeNotification;
  };
  priceChangeNotification: Omit<PriceChangeNotification, "notificationType"> & {
    readonly notificationType: typeof ProductNotificationType.PriceChangeNotification;
  };
  productNotification: ProductNotification;
};

export type BrandedModels = { [key in keyof Brands]: ToBrandedModel<Brands[key], key> };
export type Brand = keyof Brands;

export type BrandModel<T extends Brand> = T extends Brand ? BrandedModels[T] : never;

export type BrandProduct = BrandModel<"product">;
export type BrandNotification = BrandModel<"notification">;
export type BrandProductSubscription = BrandModel<"productSubscription">;
export type BrandProductRecord = BrandModel<"productRecord">;
export type BrandProcessedProductRecord = BrandModel<"processedProductRecord">;
export type BrandPriceChangeNotification = BrandModel<"priceChangeNotification">;
export type BrandStatusChangeNotification = BrandModel<"statusChangeNotification">;
export type BrandProductNotification = BrandModel<"productNotification">;

export type PluralBrand<T extends Brand = Brand> = `${T}s`;

export const pluralizeBrandModel = <T extends Brand>(brand: T): PluralBrand<T> =>
  `${brand}s` as PluralBrand<T>;
