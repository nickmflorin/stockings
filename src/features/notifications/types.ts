import type { TableColumnId, OrderableTableColumnId } from "~/components/tables";
import { ColumnsConfiguration } from "~/components/tables";

const ProductNotificationsTableColumnConfigurations = ColumnsConfiguration([
  {
    id: "user",
    label: "User",
    isOrderable: true,
  },
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
] as const);

export const ProductNotificationsTableColumns =
  ProductNotificationsTableColumnConfigurations.select([
    "product",
    "type",
    "event",
    "state",
    "mediums",
  ]);

export type ProductNotificationsTableColumnId = TableColumnId<
  typeof ProductNotificationsTableColumns
>;

export type ProductNotificationsTableOrderableColumnId = OrderableTableColumnId<
  typeof ProductNotificationsTableColumns
>;

export const ProductNotificationsAdminTableColumns =
  ProductNotificationsTableColumnConfigurations.select([
    "user",
    "product",
    "type",
    "event",
    "state",
    "mediums",
  ]);

export type ProductNotificationsAdminTableColumnId = TableColumnId<
  typeof ProductNotificationsAdminTableColumns
>;

export type ProductNotificationsAdminTableOrderableColumnId = OrderableTableColumnId<
  typeof ProductNotificationsAdminTableColumns
>;
