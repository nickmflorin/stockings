import { type FullProductSubscription } from "~/database/model";

import type { DataTableColumnConfig } from "~/components/tables";

export const SubscriptionsTableColumns = [
  {
    id: "product",
    label: "Product",
    minWidth: 240,
    maxWidth: 240,
    isOrderable: true,
    align: "left",
  },
  {
    id: "type",
    label: "Type",
    align: "left",
  },
  {
    id: "enabled",
    label: "Enabled",
    minWidth: 120,
    maxWidth: 140,
    align: "center",
  },
  {
    id: "conditions",
    label: "Conditions",
    maxWidth: 230,
    minWidth: 220,
    align: "center",
  },
  {
    id: "notificationsCount",
    label: "# Notifications",
    minWidth: 120,
    maxWidth: 140,
    align: "center",
  },
  {
    id: "createdAt",
    label: "Created",
    minWidth: 240,
    maxWidth: 240,
    isOrderable: true,
    align: "left",
  },
  {
    id: "updatedAt",
    label: "Last Updated",
    minWidth: 240,
    maxWidth: 240,
    isOrderable: true,
    align: "left",
  },
] as const satisfies DataTableColumnConfig<FullProductSubscription, string>[];

export type SubscriptionsTableColumnId = (typeof SubscriptionsTableColumns)[number]["id"];

export type OrderableSubscriptionsTableColumnId = Extract<
  (typeof SubscriptionsTableColumns)[number],
  { isOrderable: true }
>["id"];

export const OrderableSubscriptionsTableColumnIds = [...SubscriptionsTableColumns]
  .filter(col => (col as { isOrderable?: boolean }).isOrderable)
  .map(col => col.id) as OrderableSubscriptionsTableColumnId[];
