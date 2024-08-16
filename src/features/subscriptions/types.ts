import { z } from "zod";

import {
  type FullProductSubscription,
  type SubscriptionType,
  SubscriptionTypes,
} from "~/database/model";

import type { ParseFiltersOptions } from "~/lib/filters";

import type { DataTableColumnConfig, TableOrdering } from "~/components/tables";

export const SubscriptionsTableColumns = [
  {
    id: "product",
    label: "Product",
    minWidth: 240,
    maxWidth: 240,
    isOrderable: true,
  },
  {
    id: "type",
    label: "Type",
    minWidth: 240,
    maxWidth: 240,
  },
  {
    id: "notificationsCount",
    label: "# Notifications",
    minWidth: 240,
    maxWidth: 240,
  },
  {
    id: "createdAt",
    label: "Created",
    minWidth: 240,
    maxWidth: 240,
    isOrderable: true,
  },
  {
    id: "updatedAt",
    label: "Last Updated",
    minWidth: 240,
    maxWidth: 240,
    isOrderable: true,
  },
] as const satisfies DataTableColumnConfig<FullProductSubscription, string>[];

export type SubscriptionsTableColumnId = (typeof SubscriptionsTableColumns)[number]["id"];

export type OrderableSubscriptionsTableColumnId = Extract<
  (typeof SubscriptionsTableColumns)[number],
  { isOrderable: true }
>["id"];

export interface SubscriptionsTableFilters {
  readonly types: SubscriptionType[];
  readonly search: string;
}

export interface SubscriptionsTableControls {
  readonly filters: SubscriptionsTableFilters;
  readonly ordering: TableOrdering<OrderableSubscriptionsTableColumnId>;
  readonly page: number;
}

export const SubscriptionsTableFiltersSchemas = {
  search: z.string(),
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
  search: { defaultValue: "", excludeWhen: v => v.length === 0 },
};
