import type { ApiStatusChangeSubscription } from "./subscription";
import type { Product, PriceChangeSubscription } from "./zenstack-generated/models";

export type ApiProduct = Product & {
  readonly statusChangeSubscription: ApiStatusChangeSubscription | null;
  readonly priceChangeSubscription: PriceChangeSubscription | null;
};
