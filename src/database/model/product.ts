import type { ApiProductSubscription } from "./subscription";
import type { Product } from "./zenstack-generated/models";

export type ApiProduct = Product & {
  readonly subscription: ApiProductSubscription | null;
};
