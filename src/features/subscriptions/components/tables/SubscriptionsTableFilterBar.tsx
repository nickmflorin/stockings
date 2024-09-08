"use client";
import { useRef } from "react";

import { type ProductSubscriptionType } from "~/database/model";

import { SubscriptionsFiltersObj } from "~/actions";

import type { SelectInstance } from "~/components/input/select";
import { TableView } from "~/components/tables/TableView";
import type { ComponentProps } from "~/components/types";
import { ProductSelect } from "~/features/products/components/input/ProductSelect";
import { SubscriptionTypeSelect } from "~/features/subscriptions/components/input/SubscriptionTypeSelect";
import { useFilters } from "~/hooks/use-filters";

export interface SubscriptionsTableFilterBarProps extends ComponentProps {
  readonly excludeProducts?: boolean;
}

export const SubscriptionsTableFilterBar = ({
  excludeProducts = false,
  ...props
}: SubscriptionsTableFilterBarProps): JSX.Element => {
  const typeSelectRef = useRef<SelectInstance<ProductSubscriptionType, "multi"> | null>(null);
  const productSelectRef = useRef<SelectInstance<string, "multi"> | null>(null);

  const [filters, updateFilters] = useFilters({
    filters: SubscriptionsFiltersObj,
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
      {!excludeProducts && (
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
      )}
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
