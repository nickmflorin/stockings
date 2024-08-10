import type { Product, ProductCategory, ProductStatus, ProductSubCategory } from "~/database/model";

import type { TableOrdering, DataTableColumnConfig } from "~/components/tables";

export const ProductsTableColumns = [
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
    id: "subcategories",
    label: "Sub Categories",
    align: "center",
  },
  {
    id: "subscription",
    label: "Subscription",
    minWidth: 200,
    maxWidth: 220,
  },
  {
    id: "actions",
    label: "",
  },
] as const satisfies DataTableColumnConfig<Product, string>[];

export type ProductsTableColumnId = (typeof ProductsTableColumns)[number]["id"];

export type OrderableProductsTableColumnId = Extract<
  (typeof ProductsTableColumns)[number],
  { isOrderable: true }
>["id"];

export interface ProductsTableFilters {
  readonly search: string;
  readonly categories: ProductCategory[];
  readonly subCategories: ProductSubCategory[];
  readonly statuses: ProductStatus[];
}

export interface ProductsTableControls {
  readonly filters: ProductsTableFilters;
  readonly ordering: TableOrdering<OrderableProductsTableColumnId>;
  readonly page: number;
}
