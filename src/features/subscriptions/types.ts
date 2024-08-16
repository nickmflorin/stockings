import { z } from "zod";

import {
  type ApiProductSubscription,
  type SubscriptionType,
  SubscriptionTypes,
} from "~/database/model";

import type { ParseFiltersOptions } from "~/lib/filters";

import type { DataTableColumnConfig } from "~/components/tables";

export const SubscriptionsTableColumns = [
  {
    id: "type",
    label: "Type",
    minWidth: 240,
    maxWidth: 240,
  },
] as const satisfies DataTableColumnConfig<ApiProductSubscription, string>[];

export type SubscriptionsTableColumnId = (typeof SubscriptionsTableColumns)[number]["id"];

export type OrderableSubscriptionsTableColumnId = Extract<
  (typeof SubscriptionsTableColumns)[number],
  { isOrderable: true }
>["id"];

export interface SubscriptionsTableFilters {
  readonly types: SubscriptionType[];
}

export interface SubscriptionsTableControls {
  readonly filters: SubscriptionsTableFilters;
  // readonly ordering: TableOrdering<OrderableSubscriptionsTableColumnId>;
  readonly page: number;
}

export const SubscriptionsTableFiltersSchemas = {
  types: z.union([z.string(), z.array(z.string())]).transform(value => {
    if (typeof value === "string") {
      return SubscriptionTypes.contains(value) ? [value] : [];
    }
    return value.reduce(
      (prev, curr) => (SubscriptionTypes.contains(curr) ? [...prev, curr] : prev),
      [] as SubscriptionType[],
    );
  }),
} satisfies {
  [key in keyof SubscriptionsTableFilters]: z.ZodType;
};

export const SubscriptionsTableFiltersOptions: ParseFiltersOptions<
  typeof SubscriptionsTableFiltersSchemas
> = {
  types: { defaultValue: [], excludeWhen: v => v.length === 0 },
};
