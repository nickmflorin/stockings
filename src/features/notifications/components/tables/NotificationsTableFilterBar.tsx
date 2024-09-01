"use client";
import { useRef } from "react";

import { type ProductNotificationType, type NotificationState } from "~/database/model";

import { ProductNotificationsFiltersOptions, ProductNotificationsFiltersSchemas } from "~/actions";

import type { SelectInstance } from "~/components/input/select";
import { TableView } from "~/components/tables/TableView";
import { classNames, type ComponentProps } from "~/components/types";
import { ShowHide } from "~/components/util";
/* eslint-disable-next-line max-len */
import { NotificationStateSelect } from "~/features/notifications/components/input/NotificationStateSelect";
/* eslint-disable-next-line max-len */
import { NotificationTypeSelect } from "~/features/notifications/components/input/NotificationTypeSelect";
import { ProductSelect } from "~/features/products/components/input/ProductSelect";
import { useFilters } from "~/hooks/use-filters";

export interface NotificationsTableFilterBarProps extends ComponentProps {
  readonly excludeProducts?: boolean;
  readonly isSearchable?: boolean;
}

export const NotificationsTableFilterBar = ({
  excludeProducts = false,
  ...props
}: NotificationsTableFilterBarProps): JSX.Element => {
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
      <ShowHide show={!excludeProducts}>
        <ProductSelect
          ref={productSelectRef}
          /* The product value is coming from a query parameter, so we have to account for invalid
             product IDs that may sneak in. */
          strictValueLookup={false}
          behavior="multi"
          filters={{ notified: true }}
          dynamicHeight={false}
          placeholder="Products"
          inputClassName="max-w-[520px]"
          initialValue={filters.products}
          onChange={products => updateFilters({ products })}
          onClear={() => updateFilters({ products: [] })}
        />
      </ShowHide>
      <NotificationStateSelect
        ref={stateSelectRef}
        dynamicHeight={false}
        placeholder="States"
        behavior="multi"
        inputClassName={classNames({
          "max-w-[260px]": props.isSearchable !== false,
          "flex-1": props.isSearchable === false,
        })}
        initialValue={filters.states}
        onChange={(states: NotificationState[]) => updateFilters({ states })}
        onClear={() => updateFilters({ states: [] })}
      />
      <NotificationTypeSelect
        ref={typeSelectRef}
        dynamicHeight={false}
        placeholder="Types"
        behavior="multi"
        inputClassName={classNames({
          "max-w-[320px]": props.isSearchable !== false,
          "flex-1": props.isSearchable === false,
        })}
        initialValue={filters.types}
        onChange={(types: ProductNotificationType[]) => updateFilters({ types })}
        onClear={() => updateFilters({ types: [] })}
      />
    </TableView.FilterBar>
  );
};
