import { type ApiProductNotification } from "~/database/model";

import type { DataTableColumnConfig } from "~/components/tables";

export const ProductNotificationsTableColumns = [
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
    // minWidth: 240,
    maxWidth: 240,
  },
  {
    id: "transition",
    label: "Transition",
    // minWidth: 240,
    maxWidth: 240,
  },
  {
    id: "state",
    label: "State",
    // minWidth: 240,
    maxWidth: 240,
  },
  {
    id: "sentAt",
    label: "Sent At",
    // minWidth: 240,
    maxWidth: 240,
    isOrderable: true,
  },
] as const satisfies DataTableColumnConfig<ApiProductNotification<["product"]>, string>[];

export type ProductNotificationsTableColumnId =
  (typeof ProductNotificationsTableColumns)[number]["id"];

export type OrderableProductNotificationsTableColumnId = Extract<
  (typeof ProductNotificationsTableColumns)[number],
  { isOrderable: true }
>["id"];

export const OrderableProductNotificationsTableColumnIds = [...ProductNotificationsTableColumns]
  .filter(col => (col as { isOrderable?: boolean }).isOrderable)
  .map(col => col.id) as OrderableProductNotificationsTableColumnId[];
