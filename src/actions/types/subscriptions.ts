import { z } from "zod";

import type { ProductSubscriptionType } from "~/database/model";
import { ProductSubscriptionTypes } from "~/database/model";

import type { ParseFiltersOptions } from "~/lib/filters";
import { type Ordering } from "~/lib/ordering";
import { isUuid } from "~/lib/typeguards";

export const SubscriptionOrderableFields = ["createdAt", "updatedAt", "product"] as const;
export type SubscriptionOrderableField = (typeof SubscriptionOrderableFields)[number];

export interface SubscriptionsFilters {
  readonly types: ProductSubscriptionType[];
  readonly search: string;
  readonly products: string[];
}

export interface SubscriptionsControls {
  readonly filters: SubscriptionsFilters;
  readonly ordering: Ordering<SubscriptionOrderableField>;
  readonly page: number;
}

export const SubscriptionsDefaultOrdering: SubscriptionsControls["ordering"] = {
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
} satisfies {
  [key in keyof SubscriptionsFilters]: z.ZodType;
};

export const SubscriptionsFiltersOptions: ParseFiltersOptions<typeof SubscriptionsFiltersSchemas> =
  {
    types: { defaultValue: [], excludeWhen: v => v.length === 0 },
    products: { defaultValue: [], excludeWhen: v => v.length === 0 },
    search: { defaultValue: "", excludeWhen: v => v.length === 0 },
  };
