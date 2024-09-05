import { enumeratedLiterals, type EnumeratedLiteralsMember } from "enumerated-literals";
import { uniq } from "lodash-es";

import { replaceInArray } from "~/lib/arrays";

import { type TailwindTextColorClassName, type TailwindBgColorClassName } from "~/components/types";

import { type BrandStatusChangeSubscription, type BrandPriceChangeSubscription } from "./brand";
import { type ConditionallyInclude } from "./inclusion";
import {
  ProductSubscriptionType,
  type ProductStatus,
  PriceChangeCondition,
  ProductNotificationType,
  type Product,
  type StatusChangeSubscriptionCondition,
  type User,
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

export const ProductSubscriptionIncludesFields = enumeratedLiterals(
  ["product", "notificationsCount", "user"] as const,
  {},
);
export type ProductSubscriptionIncludesField = EnumeratedLiteralsMember<
  typeof ProductSubscriptionIncludesFields
>;

export type ProductSubscriptionIncludes =
  | ["product", "notificationsCount", "user", "conditions"]
  | ["product", "notificationsCount", "conditions", "user"]
  | ["product", "user", "notificationsCount", "conditions"]
  | ["product", "user", "conditions", "notificationsCount"]
  | ["product", "conditions", "notificationsCount", "user"]
  | ["product", "conditions", "user", "notificationsCount"]
  | ["notificationsCount", "product", "user", "conditions"]
  | ["notificationsCount", "product", "conditions", "user"]
  | ["notificationsCount", "user", "product", "conditions"]
  | ["notificationsCount", "user", "conditions", "product"]
  | ["notificationsCount", "conditions", "product", "user"]
  | ["notificationsCount", "conditions", "user", "product"]
  | ["user", "product", "notificationsCount", "conditions"]
  | ["user", "product", "conditions", "notificationsCount"]
  | ["user", "notificationsCount", "product", "conditions"]
  | ["user", "notificationsCount", "conditions", "product"]
  | ["user", "conditions", "product", "notificationsCount"]
  | ["user", "conditions", "notificationsCount", "product"]
  | ["conditions", "product", "notificationsCount", "user"]
  | ["conditions", "product", "user", "notificationsCount"]
  | ["conditions", "notificationsCount", "product", "user"]
  | ["conditions", "notificationsCount", "user", "product"]
  | ["conditions", "user", "product", "notificationsCount"]
  | ["conditions", "user", "notificationsCount", "product"]
  | ["product", "notificationsCount", "user"]
  | ["product", "notificationsCount", "conditions"]
  | ["product", "user", "notificationsCount"]
  | ["product", "user", "conditions"]
  | ["product", "conditions", "notificationsCount"]
  | ["product", "conditions", "user"]
  | ["notificationsCount", "product", "user"]
  | ["notificationsCount", "product", "conditions"]
  | ["notificationsCount", "user", "product"]
  | ["notificationsCount", "user", "conditions"]
  | ["notificationsCount", "conditions", "product"]
  | ["notificationsCount", "conditions", "user"]
  | ["user", "product", "notificationsCount"]
  | ["user", "product", "conditions"]
  | ["user", "notificationsCount", "product"]
  | ["user", "notificationsCount", "conditions"]
  | ["user", "conditions", "product"]
  | ["user", "conditions", "notificationsCount"]
  | ["conditions", "product", "notificationsCount"]
  | ["conditions", "product", "user"]
  | ["conditions", "notificationsCount", "product"]
  | ["conditions", "notificationsCount", "user"]
  | ["conditions", "user", "product"]
  | ["conditions", "user", "notificationsCount"]
  | ["product", "notificationsCount"]
  | ["product", "user"]
  | ["product", "conditions"]
  | ["notificationsCount", "product"]
  | ["notificationsCount", "user"]
  | ["notificationsCount", "conditions"]
  | ["user", "product"]
  | ["user", "notificationsCount"]
  | ["user", "conditions"]
  | ["conditions", "product"]
  | ["conditions", "notificationsCount"]
  | ["conditions", "user"]
  | ["product"]
  | ["notificationsCount"]
  | ["user"]
  | ["conditions"]
  | [];

export type ApiStatusChangeSubscription<I extends ProductSubscriptionIncludes = []> =
  ConditionallyInclude<
    BrandStatusChangeSubscription & {
      readonly product: Product;
      readonly conditions: StatusChangeSubscriptionCondition[];
      readonly notificationsCount: number;
      readonly user: User;
    },
    ["product", "user", "conditions", "notificationsCount"],
    I
  >;

export type ApiPriceChangeSubscription<I extends ProductSubscriptionIncludes = []> =
  ConditionallyInclude<
    BrandPriceChangeSubscription & {
      readonly product: Product;
      readonly notificationsCount: number;
      readonly user: User;
    },
    ["product", "user", "conditions", "notificationsCount"],
    I
  >;

export type ApiProductSubscription<I extends ProductSubscriptionIncludes = []> =
  I extends ProductSubscriptionIncludes
    ? ApiPriceChangeSubscription<I> | ApiStatusChangeSubscription<I>
    : never;

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
