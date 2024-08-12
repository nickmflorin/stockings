"use client";
import { useRef } from "react";

import { useDebouncedCallback } from "use-debounce";

import {
  type ProductCategory,
  type ProductSubCategory,
  type ProductStatus,
} from "~/database/model";

import { IconButton } from "~/components/buttons";
import type { SelectInstance } from "~/components/input/select";
import { TextInput } from "~/components/input/TextInput";
import type { ComponentProps } from "~/components/types";
import { classNames } from "~/components/types";
import { ProductCategorySelect } from "~/features/products/components/input/ProductCategorySelect";
/* eslint-disable-next-line max-len */
import { ProductStatusSelect } from "~/features/products/components/input/ProductStatusSelect";
/* eslint-disable-next-line max-len */
import { ProductSubCategorySelect } from "~/features/products/components/input/ProductSubCategorySelect";
import {
  ProductsTableFiltersOptions,
  ProductsTableFiltersSchemas,
} from "~/features/products/types";
import { useFilters } from "~/hooks/use-filters";

export interface ProductsTableSearchBarProps extends ComponentProps {}

export const ProductsTableSearchBar = (props: ProductsTableSearchBarProps): JSX.Element => {
  const statusesSelectRef = useRef<SelectInstance | null>(null);
  const categoriesSelectRef = useRef<SelectInstance | null>(null);
  const subCategoriesSelectRef = useRef<SelectInstance | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [filters, updateFilters] = useFilters({
    schemas: ProductsTableFiltersSchemas,
    options: ProductsTableFiltersOptions,
  });

  const onSearch = useDebouncedCallback((search: string) => {
    updateFilters({ search });
  }, 200);

  return (
    <div className={classNames("flex flex-row items-center gap-2", props.className)}>
      <TextInput
        ref={inputRef}
        defaultValue={filters.search}
        onChange={e => onSearch(e.target.value)}
        placeholder="Search for products"
        className="grow"
        onClear={() => {
          if (inputRef.current) {
            inputRef.current.value = "";
          }
          updateFilters({ search: "" });
        }}
      />
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
      <IconButton.Transparent
        icon="xmark"
        radius="full"
        element="button"
        className="text-gray-400 h-full aspect-square w-auto p-[4px] hover:text-gray-500"
        onClick={() => {
          for (const r of [statusesSelectRef, categoriesSelectRef, subCategoriesSelectRef]) {
            r.current?.clear();
          }
          if (inputRef.current) {
            inputRef.current.value = "";
          }
          updateFilters({ subCategories: [], categories: [], search: "", statuses: [] });
        }}
      />
    </div>
  );
};
