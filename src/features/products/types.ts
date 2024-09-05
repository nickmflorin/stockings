import type { TableColumnId, OrderableTableColumnId } from "~/components/tables";
import { ColumnsConfiguration } from "~/components/tables";

const ProductsTableColumnConfigurations = ColumnsConfiguration([
  {
    id: "name",
    label: "Name",
    isOrderable: true,
  },
  {
    id: "status",
    label: "Status",
    minWidth: 240,
    maxWidth: 240,
  },
  {
    id: "price",
    label: "Price",
    isOrderable: true,
    minWidth: 240,
    maxWidth: 240,
  },
  {
    id: "category",
    label: "Category",
    align: "center",
  },
  {
    id: "subCategories",
    label: "Sub Categories",
    align: "center",
  },
  {
    id: "subscription",
    label: "Subscriptions",
    minWidth: 200,
    maxWidth: 220,
  },
] as const);

export const ProductsTableColumns = ProductsTableColumnConfigurations.select([
  "name",
  "status",
  "price",
  "category",
  "subCategories",
  "subscription",
]);

export type ProductsTableColumnId = TableColumnId<typeof ProductsTableColumns>;

export type ProductsTableOrderableColumnId = OrderableTableColumnId<typeof ProductsTableColumns>;

export const ProductsAdminTableColumns = ProductsTableColumnConfigurations.select([
  "name",
  "status",
  "price",
  "category",
  "subCategories",
]);

export type ProductsAdminTableColumnId = TableColumnId<typeof ProductsAdminTableColumns>;

export type ProductsAdminTableOrderableColumnId = OrderableTableColumnId<
  typeof ProductsAdminTableColumns
>;
