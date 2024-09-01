import { enumeratedLiterals } from "enumerated-literals";
import { uniq } from "lodash-es";

import { replaceInArray } from "~/lib/arrays";

import { type TailwindTextColorClassName, type TailwindBgColorClassName } from "~/components/types";

import {
  ProductSubscriptionType,
  type ProductStatus,
  PriceChangeCondition,
  ProductNotificationType,
  type Product,
  type StatusChangeSubscription,
  type StatusChangeSubscriptionCondition,
  type PriceChangeSubscription,
} from "./models";

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

export const ProductSubscriptionTypes = enumeratedLiterals(
  [
    {
      value: ProductSubscriptionType.PriceChangeSubscription,
      label: "Price Change",
      notificationType: ProductNotificationType.PriceChangeNotification,
      description:
        "A subscription that will issue notifications when the price of a product changes.",
    },
    {
      value: ProductSubscriptionType.StatusChangeSubscription,
      label: "Status Change",
      notificationType: ProductNotificationType.StatusChangeNotification,
      description:
        "A subscription that will issue notifications when the status of a product changes.",
    },
  ] as const satisfies {
    value: ProductSubscriptionType;
    notificationType: ProductNotificationType;
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

export const flattenStatusChangeSubscriptionConditions = (
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
  // Sort for consistent ordering.
  return flattened.sort((a, b) => a[0].localeCompare(b[0]));
};

type GroupedStatusChangeSubscriptionCondition = [ProductStatus, ProductStatus[]];

export const groupStatusChangeSubscriptionConditions = (
  conditions:
    | Pick<StatusChangeSubscriptionCondition, "fromStatus" | "toStatus">
    | Pick<StatusChangeSubscriptionCondition, "fromStatus" | "toStatus">[],
): GroupedStatusChangeSubscriptionCondition[] => {
  const flattened = flattenStatusChangeSubscriptionConditions(conditions);

  return (
    flattened
      .reduce<GroupedStatusChangeSubscriptionCondition[]>(
        (acc, condition): GroupedStatusChangeSubscriptionCondition[] => {
          const [replaced, _, updated] = replaceInArray(
            acc,
            (
              curr: GroupedStatusChangeSubscriptionCondition,
            ): GroupedStatusChangeSubscriptionCondition => [
              curr[0],
              uniq([...curr[1], condition[1]]),
            ],
            v => v[0] === condition[0],
          );
          if (replaced) {
            return updated;
          }
          return [...acc, [condition[0], [condition[1]]]];
        },
        [] as GroupedStatusChangeSubscriptionCondition[],
      )
      // Sort for consistent ordering.
      .sort((a, b) => a[0].localeCompare(b[0]))
  );
};
