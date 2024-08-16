import {
  type StatusChangeSubscription,
  type StatusChangeSubscriptionCondition,
} from "./zenstack-generated/models";

export type ApiStatusChangeSubscription = StatusChangeSubscription & {
  readonly conditions: StatusChangeSubscriptionCondition[];
};
