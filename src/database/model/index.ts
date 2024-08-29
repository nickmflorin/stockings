import { type Equals } from "~/lib/types";

export * from "./brand";
export * from "./categories";
export * from "./charting";
export * from "./dom";
export * from "./errors";
export * from "./inclusion";
export * from "./notifications";
export * from "./product";
export * from "./subscription";

export {
  PriceChangeCondition,
  ProductStatus,
  ProductCategory,
  ProductSubCategory,
  ScrapingErrorCode,
  ElementAttribute,
  ProductRecordDataField,
  Prisma,
  PrismaClient,
  NotificationState,
  ProductNotificationType,
  ProductSubscriptionType,
} from "./generated";

export type {
  ProductSubscription,
  StatusChangeSubscription,
  StatusChangeSubscriptionCondition,
  PriceChangeSubscription,
  User,
  HttpClientErrorData,
  HttpNetworkErrorData,
  HttpSerializationErrorData,
  MissingAttributeErrorData,
  MissingElementErrorData,
  MissingTextErrorData,
  InvalidAttributeErrorData,
  InvalidTextErrorData,
  NonUniqueElementErrorData,
  ProductRecord,
  ProductRecordError,
  Product,
  ProductNotification,
  PriceChangeNotification,
  StatusChangeNotification,
  ProcessedProductRecord,
} from "./zenstack-generated/models";

export { enhance } from "./zenstack-generated/enhance";

export type ModelWithNonNullField<T extends Record<string, unknown>, K extends keyof T> = {
  [key in keyof T]: Equals<key, K, Exclude<T[key], null>, T[key]>;
};
