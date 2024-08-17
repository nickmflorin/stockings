import { enumeratedLiterals } from "enumerated-literals";

import { type TailwindTextColorClassName, type TailwindBgColorClassName } from "~/components/types";

import {
  SubscriptionType,
  type Product,
  type ProductStatus,
  PriceChangeCondition,
} from "./generated";
import {
  type StatusChangeSubscription,
  type StatusChangeSubscriptionCondition,
  type PriceChangeSubscription,
} from "./zenstack-generated/models";

export const PriceChangeConditions = enumeratedLiterals(
  [
    {
      value: PriceChangeCondition.PriceDecrease,
      label: "Price Decrease",
      badgeBgColorClassName: "bg-gray-200",
      badgeTextColorClassName: "text-gray-600",
    },
    {
      value: PriceChangeCondition.PriceIncrease,
      label: "Price Increase",
      badgeBgColorClassName: "bg-gray-200",
      badgeTextColorClassName: "text-gray-600",
    },
  ] as const satisfies {
    value: PriceChangeCondition;
    label: string;
    badgeBgColorClassName: TailwindBgColorClassName;
    badgeTextColorClassName: TailwindTextColorClassName;
  }[],
  {},
);

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

export type FullStatusChangeSubscription = ApiStatusChangeSubscription & {
  readonly product: Product;
  readonly notificationsCount: number;
};

export type FullPriceChangeSubscription = PriceChangeSubscription & {
  readonly product: Product;
  readonly notificationsCount: number;
};

export type FullProductSubscription = FullStatusChangeSubscription | FullPriceChangeSubscription;

type FlattenedStatusChangeSubscriptionCondition = [ProductStatus, ProductStatus];

export const flattenStatusChangeSubscriptionsConditions = (
  conditions:
    | Pick<StatusChangeSubscriptionCondition, "fromStatus" | "toStatus">
    | Pick<StatusChangeSubscriptionCondition, "fromStatus" | "toStatus">[],
): FlattenedStatusChangeSubscriptionCondition[] => {
  const cs = Array.isArray(conditions) ? conditions : [conditions];
  const flattened: FlattenedStatusChangeSubscriptionCondition[] = [];
  for (const condition of cs) {
    for (const fromStatus of condition.fromStatus) {
      for (const toStatus of condition.toStatus) {
        if (
          !flattened.some(([f, t]) => f === fromStatus && t === toStatus) &&
          toStatus !== fromStatus
        ) {
          flattened.push([fromStatus, toStatus]);
        }
      }
    }
  }
  return flattened;
};
