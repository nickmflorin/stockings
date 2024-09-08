"use client";
import { useRef } from "react";

import {
  type ProductCategory,
  type ProductSubCategory,
  type ProductStatus,
  type ProductSubscriptionType,
} from "~/database/model";

import { ProductsFiltersObj } from "~/actions";

import type { SelectInstance } from "~/components/input/select";
import { TableView } from "~/components/tables/TableView";
import type { ComponentProps } from "~/components/types";
import { ProductCategorySelect } from "~/features/products/components/input/ProductCategorySelect";
import { ProductStatusSelect } from "~/features/products/components/input/ProductStatusSelect";
import { ProductSubCategorySelect } from "~/features/products/components/input/ProductSubCategorySelect";
import { SubscriptionTypeSelect } from "~/features/subscriptions/components/input/SubscriptionTypeSelect";
import { useFilters } from "~/hooks/use-filters";

export interface ProductsTableFilterBarProps extends ComponentProps {
  readonly excludeSubscriptions?: boolean;
}

export const ProductsTableFilterBar = ({
  excludeSubscriptions = false,
  ...props
}: ProductsTableFilterBarProps): JSX.Element => {
  const statusSelectRef = useRef<SelectInstance<ProductStatus, "multi"> | null>(null);
  const categorySelectRef = useRef<SelectInstance<ProductCategory, "multi"> | null>(null);
  const subCategorySelectRef = useRef<SelectInstance<ProductSubCategory, "multi"> | null>(null);
  const subscriptionTypeSelectRef = useRef<SelectInstance<ProductSubscriptionType, "multi"> | null>(
    null,
  );

  const [filters, updateFilters] = useFilters({
    filters: ProductsFiltersObj,
  });

  return (
    <TableView.FilterBar
      {...props}
      searchPlaceholder="Search products..."
      onSearch={v => updateFilters({ search: v })}
      search={filters.search}
      onClear={() => {
        for (const r of [
          statusSelectRef,
          categorySelectRef,
          subCategorySelectRef,
          subscriptionTypeSelectRef,
        ]) {
          r.current?.clear();
        }
        updateFilters({
          subCategories: [],
          categories: [],
          search: "",
          statuses: [],
          subscriptionTypes: [],
        });
      }}
    >
      <ProductStatusSelect
        ref={statusSelectRef}
        dynamicHeight={false}
        placeholder="Statuses"
        behavior="multi"
        inputClassName="max-w-[260px]"
        initialValue={filters.statuses}
        onChange={(statuses: ProductStatus[]) => updateFilters({ statuses })}
        onClear={() => updateFilters({ statuses: [] })}
      />
      {!excludeSubscriptions ? (
        <SubscriptionTypeSelect
          ref={subscriptionTypeSelectRef}
          dynamicHeight={false}
          placeholder="Subscriptions"
          behavior="multi"
          inputClassName="max-w-[320px]"
          initialValue={filters.subscriptionTypes}
          onChange={(subscriptionTypes: ProductSubscriptionType[]) =>
            updateFilters({ subscriptionTypes })
          }
          onClear={() => updateFilters({ subscriptionTypes: [] })}
        />
      ) : (
        <></>
      )}
      <ProductCategorySelect
        ref={categorySelectRef}
        dynamicHeight={false}
        placeholder="Categories"
        behavior="multi"
        inputClassName="max-w-[320px]"
        initialValue={filters.categories}
        onChange={(categories: ProductCategory[]) => updateFilters({ categories })}
        onClear={() => updateFilters({ categories: [] })}
      />
      <ProductSubCategorySelect
        ref={subCategorySelectRef}
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
