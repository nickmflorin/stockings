import {
  type ProductSubscription,
  type StatusChangeSubscribedEvent,
  type PriceChangeSubscribedEvent,
  type StatusChangeEventCondition,
} from "./zenstack-generated/models";

export type ApiStatusChangeSubscribedEvent = StatusChangeSubscribedEvent & {
  readonly conditions: StatusChangeEventCondition[];
};

export type ApiProductSubscription = ProductSubscription & {
  readonly statusChange: ApiStatusChangeSubscribedEvent | null;
  readonly priceChange: PriceChangeSubscribedEvent | null;
};
