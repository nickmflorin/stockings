import { type ApiProductNotification } from "~/database/model";

import type { DataTableColumnConfig } from "~/components/tables";

export const ProductNotificationsTableColumns = [
  {
    id: "product",
    label: "Product",
    maxWidth: 240,
    isOrderable: true,
    align: "left",
  },
  {
    id: "type",
    label: "Type",
    maxWidth: 240,
    align: "left",
  },
  {
    id: "event",
    label: "Event",
    maxWidth: 240,
    align: "center",
  },
  {
    id: "state",
    label: "State",
    maxWidth: 240,
    align: "left",
    isOrderable: true,
  },
  {
    id: "mediums",
    label: "Mediums",
    maxWidth: 240,
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
