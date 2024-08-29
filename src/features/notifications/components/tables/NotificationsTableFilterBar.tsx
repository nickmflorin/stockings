"use client";
import { useRef } from "react";

import { type ProductNotificationType, type NotificationState } from "~/database/model";

import { ProductNotificationsFiltersOptions, ProductNotificationsFiltersSchemas } from "~/actions";

import { IconButton } from "~/components/buttons";
import type { SelectInstance } from "~/components/input/select";
import { TableView } from "~/components/tables/TableView";
import type { ComponentProps } from "~/components/types";
/* eslint-disable-next-line max-len */
import { NotificationStateSelect } from "~/features/notifications/components/input/NotificationStateSelect";
/* eslint-disable-next-line max-len */
import { NotificationTypeSelect } from "~/features/notifications/components/input/NotificationTypeSelect";
import { ProductSelect } from "~/features/products/components/input/ProductSelect";
import { useFilters } from "~/hooks/use-filters";

export interface NotificationsTableFilterBarProps extends ComponentProps {}

export const NotificationsTableFilterBar = (
  props: NotificationsTableFilterBarProps,
): JSX.Element => {
  const stateSelectRef = useRef<SelectInstance | null>(null);
  const typeSelectRef = useRef<SelectInstance | null>(null);
  const productSelectRef = useRef<SelectInstance | null>(null);

  const [filters, updateFilters] = useFilters({
    schemas: ProductNotificationsFiltersSchemas,
    options: ProductNotificationsFiltersOptions,
  });

  return (
    <TableView.FilterBar
      {...props}
      searchPlaceholder="Search notifications..."
      onSearch={v => updateFilters({ search: v })}
      search={filters.search}
      onClear={() => {
        for (const r of [typeSelectRef, stateSelectRef]) {
          r.current?.clear();
        }
        updateFilters({ states: [], types: [], search: "" });
      }}
    >
      <ProductSelect
        ref={productSelectRef}
        behavior="multi"
        filters={{ notified: true }}
        dynamicHeight={false}
        placeholder="Products"
        inputClassName="max-w-[520px]"
        initialValue={filters.products}
        onChange={products => updateFilters({ products })}
        onClear={() => updateFilters({ products: [] })}
      />
      <NotificationStateSelect
        ref={stateSelectRef}
        dynamicHeight={false}
        placeholder="States"
        behavior="multi"
        inputClassName="max-w-[260px]"
        initialValue={filters.states}
        onChange={(states: NotificationState[]) => updateFilters({ states })}
        onClear={() => updateFilters({ states: [] })}
      />
      <NotificationTypeSelect
        ref={typeSelectRef}
        dynamicHeight={false}
        placeholder="Types"
        behavior="multi"
        inputClassName="max-w-[320px]"
        initialValue={filters.types}
        onChange={(types: ProductNotificationType[]) => updateFilters({ types })}
        onClear={() => updateFilters({ types: [] })}
      />
      <IconButton.Transparent
        icon="xmark"
        radius="full"
        element="button"
        className="text-gray-400 h-full aspect-square w-auto p-[4px] hover:text-gray-500"
        onClick={() => {
          for (const r of [typeSelectRef, stateSelectRef]) {
            r.current?.clear();
          }
        }}
      />
    </TableView.FilterBar>
  );
};
