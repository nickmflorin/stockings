import { z } from "zod";

import type { Product, ProductCategory, ProductStatus, ProductSubCategory } from "~/database/model";
import { ProductStatuses, ProductSubCategories, ProductCategories } from "~/database/model";

import type { ParseFiltersOptions } from "~/lib/filters";

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

export const ProductsTableFiltersSchemas = {
  search: z.string(),
  subCategories: z.union([z.string(), z.array(z.string())]).transform(value => {
    if (typeof value === "string") {
      return ProductSubCategories.contains(value) ? [value] : [];
    }
    return value.reduce(
      (prev, curr) => (ProductSubCategories.contains(curr) ? [...prev, curr] : prev),
      [] as ProductSubCategory[],
    );
  }),
  categories: z.union([z.string(), z.array(z.string())]).transform(value => {
    if (typeof value === "string") {
      return ProductCategories.contains(value) ? [value] : [];
    }
    return value.reduce(
      (prev, curr) => (ProductCategories.contains(curr) ? [...prev, curr] : prev),
      [] as ProductCategory[],
    );
  }),
  statuses: z.union([z.string(), z.array(z.string())]).transform(value => {
    if (typeof value === "string") {
      return ProductStatuses.contains(value) ? [value] : [];
    }
    return value.reduce(
      (prev, curr) => (ProductStatuses.contains(curr) ? [...prev, curr] : prev),
      [] as ProductStatus[],
    );
  }),
} satisfies {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  [key in keyof ProductsTableFilters]: z.ZodType;
};

export const ProductsTableFiltersOptions: ParseFiltersOptions<typeof ProductsTableFiltersSchemas> =
  {
    categories: { defaultValue: [], excludeWhen: v => v.length === 0 },
    subCategories: { defaultValue: [], excludeWhen: v => v.length === 0 },
    search: { defaultValue: "", excludeWhen: v => v.length === 0 },
    statuses: { defaultValue: [], excludeWhen: v => v.length === 0 },
  };
