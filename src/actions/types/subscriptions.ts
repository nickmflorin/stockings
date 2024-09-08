import { z } from "zod";

import type {
  ProductSubscriptionIncludes,
  ProductSubscriptionIncludesField,
  ProductSubscriptionType,
} from "~/database/model";
import { ProductSubscriptionIncludesFields, ProductSubscriptionTypes } from "~/database/model";

import { Filters } from "~/lib/filters";
import { type Ordering, type Order } from "~/lib/ordering";
import { isUuid } from "~/lib/typeguards";

import { type ActionVisibility } from "~/actions/visibility";

export const SubscriptionOrderableFields = ["createdAt", "updatedAt", "product", "user"] as const;
export type SubscriptionOrderableField = (typeof SubscriptionOrderableFields)[number];

export const SubscriptionsOrderingMap = {
  createdAt: order => [{ createdAt: order }] as const,
  updatedAt: order => [{ updatedAt: order }] as const,
  product: order => [{ product: { name: order } }] as const,
  user: order => [{ user: { lastName: order } }, { user: { firstName: order } }] as const,
} as const satisfies { [key in SubscriptionOrderableField]: (order: Order) => unknown[] };

export type SubscriptionsFilters = {
  readonly types: ProductSubscriptionType[];
  readonly search: string;
  readonly products: string[];
  readonly users: string[];
};

export const SubscriptionsRestrictedFilters = [
  "users",
] as const satisfies (keyof SubscriptionsFilters)[];

export interface SubscriptionsControls<I extends ProductSubscriptionIncludes = []> {
  readonly filters: Partial<SubscriptionsFilters>;
  readonly ordering: Ordering<SubscriptionOrderableField>;
  readonly page?: number;
  readonly includes: I;
  readonly visibility: ActionVisibility;
}

export const SubscriptionsDefaultOrdering: Ordering<"createdAt"> = {
  orderBy: "createdAt",
  order: "desc",
};

export const SubscriptionsFiltersObj = Filters({
  search: { schema: z.string(), defaultValue: "", excludeWhen: (v: string) => v.length === 0 },
  types: {
    defaultValue: [] as ProductSubscriptionType[],
    excludeWhen: v => v.length === 0,
    schema: z.union([z.string(), z.array(z.string())]).transform(value => {
      if (typeof value === "string") {
        return ProductSubscriptionTypes.contains(value) ? [value] : [];
      }
      return value.reduce(
        (prev, curr) => (ProductSubscriptionTypes.contains(curr) ? [...prev, curr] : prev),
        [] as ProductSubscriptionType[],
      );
    }),
  },
  products: {
    defaultValue: [] as string[],
    excludeWhen: v => v.length === 0,
    schema: z.union([z.string(), z.array(z.string())]).transform(value => {
      if (typeof value === "string") {
        return isUuid(value) ? [value] : [];
      }
      return value.reduce((prev, curr) => (isUuid(curr) ? [...prev, curr] : prev), [] as string[]);
    }),
  },
  users: {
    defaultValue: [] as string[],
    excludeWhen: v => v.length === 0,
    schema: z.union([z.string(), z.array(z.string())]).transform(value => {
      if (typeof value === "string") {
        return isUuid(value) ? [value] : [];
      }
      return value.reduce((prev, curr) => (isUuid(curr) ? [...prev, curr] : prev), [] as string[]);
    }),
  },
});

// Used for API Routes
export const SubscriptionIncludesSchema = z
  .union([z.string(), z.array(z.string())])
  .transform(value => {
    if (typeof value === "string") {
      return (
        ProductSubscriptionIncludesFields.contains(value) ? [value] : []
      ) as ProductSubscriptionIncludes;
    }
    return value.reduce(
      (prev, curr) => (ProductSubscriptionIncludesFields.contains(curr) ? [...prev, curr] : prev),
      [] as ProductSubscriptionIncludesField[],
    ) as ProductSubscriptionIncludes;
  });
