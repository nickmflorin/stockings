import { z } from "zod";

import type {
  ProductSubscriptionIncludes,
  ProductSubscriptionIncludesField,
  ProductSubscriptionType,
} from "~/database/model";
import { ProductSubscriptionIncludesFields, ProductSubscriptionTypes } from "~/database/model";

import type { ParseFiltersOptions } from "~/lib/filters";
import { type Ordering, type Order } from "~/lib/ordering";
import { isUuid } from "~/lib/typeguards";

import { type ActionVisibility } from "./actions";

export const SubscriptionOrderableFields = ["createdAt", "updatedAt", "product", "user"] as const;
export type SubscriptionOrderableField = (typeof SubscriptionOrderableFields)[number];

export const SubscriptionsOrderingMap = {
  createdAt: order => [{ createdAt: order }] as const,
  updatedAt: order => [{ updatedAt: order }] as const,
  product: order => [{ product: { name: order } }] as const,
  user: order => [{ user: { lastName: order } }, { user: { firstName: order } }] as const,
} as const satisfies { [key in SubscriptionOrderableField]: (order: Order) => unknown[] };

export interface SubscriptionsFilters {
  readonly types: ProductSubscriptionType[];
  readonly search: string;
  readonly products: string[];
  readonly users: string[];
}

export const SubscriptionsRestrictedFilters = [
  "users",
] as const satisfies (keyof SubscriptionsFilters)[];

export interface SubscriptionsControls<I extends ProductSubscriptionIncludes = []> {
  readonly filters: Partial<SubscriptionsFilters>;
  readonly ordering: Ordering<SubscriptionOrderableField>;
  readonly page?: number;
  readonly includes: I;
  readonly visibility?: ActionVisibility;
}

export const SubscriptionsDefaultOrdering: Ordering<"createdAt"> = {
  orderBy: "createdAt",
  order: "desc",
};

export const SubscriptionsFiltersSchemas = {
  search: z.string(),
  types: z.union([z.string(), z.array(z.string())]).transform(value => {
    if (typeof value === "string") {
      return ProductSubscriptionTypes.contains(value) ? [value] : [];
    }
    return value.reduce(
      (prev, curr) => (ProductSubscriptionTypes.contains(curr) ? [...prev, curr] : prev),
      [] as ProductSubscriptionType[],
    );
  }),
  products: z.union([z.string(), z.array(z.string())]).transform(value => {
    if (typeof value === "string") {
      return isUuid(value) ? [value] : [];
    }
    return value.reduce((prev, curr) => (isUuid(curr) ? [...prev, curr] : prev), [] as string[]);
  }),
  users: z.union([z.string(), z.array(z.string())]).transform(value => {
    if (typeof value === "string") {
      return isUuid(value) ? [value] : [];
    }
    return value.reduce((prev, curr) => (isUuid(curr) ? [...prev, curr] : prev), [] as string[]);
  }),
} satisfies {
  [key in keyof SubscriptionsFilters]: z.ZodType;
};

export const SubscriptionsFiltersOptions: ParseFiltersOptions<typeof SubscriptionsFiltersSchemas> =
  {
    types: { defaultValue: [], excludeWhen: v => v.length === 0 },
    products: { defaultValue: [], excludeWhen: v => v.length === 0 },
    users: { defaultValue: [], excludeWhen: v => v.length === 0 },
    search: { defaultValue: "", excludeWhen: v => v.length === 0 },
  };

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
