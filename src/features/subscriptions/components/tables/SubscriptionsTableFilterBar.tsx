"use client";
import { useRef } from "react";

import { type ProductSubscriptionType } from "~/database/model";

import { SubscriptionsFiltersOptions, SubscriptionsFiltersSchemas } from "~/actions";

import type { SelectInstance } from "~/components/input/select";
import { TableView } from "~/components/tables/TableView";
import type { ComponentProps } from "~/components/types";
import { ProductSelect } from "~/features/products/components/input/ProductSelect";
/* eslint-disable-next-line max-len */
import { SubscriptionTypeSelect } from "~/features/subscriptions/components/input/SubscriptionTypeSelect";
import { useFilters } from "~/hooks/use-filters";

export interface SubscriptionsTableFilterBarProps extends ComponentProps {}

export const SubscriptionsTableFilterBar = (
  props: SubscriptionsTableFilterBarProps,
): JSX.Element => {
  const typeSelectRef = useRef<SelectInstance | null>(null);
  const productSelectRef = useRef<SelectInstance | null>(null);

  const [filters, updateFilters] = useFilters({
    schemas: SubscriptionsFiltersSchemas,
    options: SubscriptionsFiltersOptions,
  });

  return (
    <TableView.FilterBar
      {...props}
      searchPlaceholder="Search subscriptions..."
      onSearch={v => updateFilters({ search: v })}
      search={filters.search}
      onClear={() => {
        for (const r of [typeSelectRef, productSelectRef]) {
          r.current?.clear();
        }
        updateFilters({ search: "", types: [], products: [] });
      }}
    >
      <ProductSelect
        ref={productSelectRef}
        /* The product value is coming from a query parameter, so we have to account for invalid
           product IDs that may sneak in. */
        strictValueLookup={false}
        behavior="multi"
        filters={{ subscribed: true }}
        dynamicHeight={false}
        placeholder="Products"
        inputClassName="max-w-[520px]"
        initialValue={filters.products}
        onChange={products => updateFilters({ products })}
        onClear={() => updateFilters({ products: [] })}
      />
      <SubscriptionTypeSelect
        ref={typeSelectRef}
        dynamicHeight={false}
        placeholder="Types"
        behavior="multi"
        inputClassName="max-w-[320px]"
        initialValue={filters.types}
        onChange={(types: ProductSubscriptionType[]) => updateFilters({ types })}
        onClear={() => updateFilters({ types: [] })}
      />
    </TableView.FilterBar>
  );
};
