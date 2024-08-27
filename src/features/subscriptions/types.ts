import { type FullProductSubscription } from "~/database/model";

import type { DataTableColumnConfig } from "~/components/tables";

export const SubscriptionsTableColumns = [
  {
    id: "product",
    label: "Product",
    // minWidth: 240,
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
    // minWidth: 60,
    maxWidth: 60,
    align: "center",
  },
  {
    id: "conditions",
    label: "Conditions",
    maxWidth: 200,
    // minWidth: 180,
    align: "center",
  },
  {
    id: "notificationsCount",
    label: "# Notifications",
    // minWidth: 120,
    maxWidth: 140,
    align: "center",
  },
  {
    id: "createdAt",
    label: "Created",
    // minWidth: 240,
    maxWidth: 240,
    isOrderable: true,
    align: "left",
    columnCellClassName: "hidden @3xl/subscriptions-table-view:table-cell",
  },
  {
    id: "updatedAt",
    label: "Last Updated",
    // minWidth: 240,
    maxWidth: 240,
    isOrderable: true,
    align: "left",
    columnCellClassName: "hidden @3xl/subscriptions-table-view:table-cell",
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
