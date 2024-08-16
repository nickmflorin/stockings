import { enumeratedLiterals } from "enumerated-literals";

import { SubscriptionType } from "./generated";
import {
  type StatusChangeSubscription,
  type StatusChangeSubscriptionCondition,
  type PriceChangeSubscription,
} from "./zenstack-generated/models";

export type ApiStatusChangeSubscription = StatusChangeSubscription & {
  readonly conditions: StatusChangeSubscriptionCondition[];
};

export type ApiProductSubscription = ApiStatusChangeSubscription | PriceChangeSubscription;

export const SubscriptionTypes = enumeratedLiterals(
  [
    {
      value: SubscriptionType.NewProductSubscription,
      label: "New Product",
      description: "A subscription that will issue notifications when new products are added.",
    },
    {
      value: SubscriptionType.PriceChangeSubscription,
      label: "Price Change",
      description:
        "A subscription that will issue notifications when the price of a product changes.",
    },
    {
      value: SubscriptionType.StatusChangeSubscription,
      label: "Status Change",
      description:
        "A subscription that will issue notifications when the status of a product changes.",
    },
  ] as const satisfies {
    value: SubscriptionType;
    description: string;
    label: string;
  }[],
  {},
);
