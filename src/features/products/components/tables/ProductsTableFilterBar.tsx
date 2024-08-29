"use client";
import { useRef } from "react";

import {
  type ProductCategory,
  type ProductSubCategory,
  type ProductStatus,
} from "~/database/model";

import { ProductsFiltersOptions, ProductsFiltersSchemas } from "~/actions";

import type { SelectInstance } from "~/components/input/select";
import { TableView } from "~/components/tables/TableView";
import type { ComponentProps } from "~/components/types";
import { ProductCategorySelect } from "~/features/products/components/input/ProductCategorySelect";
import { ProductStatusSelect } from "~/features/products/components/input/ProductStatusSelect";
/* eslint-disable-next-line max-len */
import { ProductSubCategorySelect } from "~/features/products/components/input/ProductSubCategorySelect";
import { useFilters } from "~/hooks/use-filters";

export interface ProductsTableFilterBarProps extends ComponentProps {}

export const ProductsTableFilterBar = (props: ProductsTableFilterBarProps): JSX.Element => {
  const statusesSelectRef = useRef<SelectInstance | null>(null);
  const categoriesSelectRef = useRef<SelectInstance | null>(null);
  const subCategoriesSelectRef = useRef<SelectInstance | null>(null);

  const [filters, updateFilters] = useFilters({
    schemas: ProductsFiltersSchemas,
    options: ProductsFiltersOptions,
  });

  return (
    <TableView.FilterBar
      {...props}
      searchPlaceholder="Search products..."
      onSearch={v => updateFilters({ search: v })}
      search={filters.search}
      onClear={() => {
        for (const r of [statusesSelectRef, categoriesSelectRef, subCategoriesSelectRef]) {
          r.current?.clear();
        }
        updateFilters({ subCategories: [], categories: [], search: "", statuses: [] });
      }}
    >
      <ProductStatusSelect
        ref={statusesSelectRef}
        dynamicHeight={false}
        placeholder="Statuses"
        behavior="multi"
        inputClassName="max-w-[260px]"
        initialValue={filters.statuses}
        onChange={(statuses: ProductStatus[]) => updateFilters({ statuses })}
        onClear={() => updateFilters({ statuses: [] })}
      />
      <ProductCategorySelect
        ref={categoriesSelectRef}
        dynamicHeight={false}
        placeholder="Categories"
        behavior="multi"
        inputClassName="max-w-[320px]"
        initialValue={filters.categories}
        onChange={(categories: ProductCategory[]) => updateFilters({ categories })}
        onClear={() => updateFilters({ categories: [] })}
      />
      <ProductSubCategorySelect
        ref={subCategoriesSelectRef}
        dynamicHeight={false}
        placeholder="Subcategories"
        behavior="multi"
        inputClassName="max-w-[420px]"
        initialValue={filters.subCategories}
        onChange={(subCategories: ProductSubCategory[]) => updateFilters({ subCategories })}
        onClear={() => updateFilters({ subCategories: [] })}
      />
    </TableView.FilterBar>
  );
};
