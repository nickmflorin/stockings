"use client";
import { useRef } from "react";

import { type SubscriptionType } from "~/database/model";

import type { SelectInstance } from "~/components/input/select";
import { TableView } from "~/components/tables/TableView";
import type { ComponentProps } from "~/components/types";
/* eslint-disable-next-line max-len */
import { SubscriptionTypeSelect } from "~/features/subscriptions/components/input/SubscriptionTypeSelect";
import {
  SubscriptionsTableFiltersOptions,
  SubscriptionsTableFiltersSchemas,
} from "~/features/subscriptions/types";
import { useFilters } from "~/hooks/use-filters";

export interface SubscriptionsTableFilterBarProps extends ComponentProps {}

export const SubscriptionsTableFilterBar = (
  props: SubscriptionsTableFilterBarProps,
): JSX.Element => {
  const typeSelectRef = useRef<SelectInstance | null>(null);

  const [filters, updateFilters] = useFilters({
    schemas: SubscriptionsTableFiltersSchemas,
    options: SubscriptionsTableFiltersOptions,
  });

  return (
    <TableView.FilterBar
      {...props}
      onSearch={v => updateFilters({ search: v })}
      search={filters.search}
      onClear={() => {
        for (const r of [typeSelectRef]) {
          r.current?.clear();
        }
        updateFilters({ search: "", types: [] });
      }}
    >
      <SubscriptionTypeSelect
        ref={typeSelectRef}
        dynamicHeight={false}
        placeholder="Types"
        behavior="multi"
        inputClassName="max-w-[320px]"
        initialValue={filters.types}
        onChange={(types: SubscriptionType[]) => updateFilters({ types })}
        onClear={() => updateFilters({ types: [] })}
      />
    </TableView.FilterBar>
  );
};
