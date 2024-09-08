"use client";
import { useEffect, useRef, useCallback } from "react";

import {
  type ProductNotificationType,
  type NotificationState,
  type NotificationMedium,
} from "~/database/model";

import {
  ProductNotificationsFiltersOptions,
  ProductNotificationsFiltersSchemas,
  type ProductNotificationsFilters,
} from "~/actions";

import type { SelectInstance } from "~/components/input/select";
import { TableView } from "~/components/tables/TableView";
import { classNames, type ComponentProps } from "~/components/types";
import { ShowHide } from "~/components/util";
import { NotificationMediumSelect } from "~/features/notifications/components/input/NotificationMediumSelect";
import { NotificationStateSelect } from "~/features/notifications/components/input/NotificationStateSelect";
import { NotificationTypeSelect } from "~/features/notifications/components/input/NotificationTypeSelect";
import { ProductSelect } from "~/features/products/components/input/ProductSelect";
import { UserSelect } from "~/features/users/components/input/UserSelect";
import { useFilters } from "~/hooks/use-filters";

type SelectFilterField = Exclude<keyof ProductNotificationsFilters, "search">;

export interface NotificationsTableFilterBarProps extends ComponentProps {
  readonly isSearchable?: boolean;
  readonly excludeFilters?: SelectFilterField[];
  readonly filters: ProductNotificationsFilters;
}

/* type FilterModels<F extends SelectFilterField = SelectFilterField> = {
     states: NotificationState;
     types: ProductNotificationType;
     mediums: NotificationMedium;
     products: string;
     users: string;
   }[F]; */

/* type FilterRefs = {
     [key in SelectFilterField]: React.MutableRefObject<SelectInstance<
       FilterModels<key>,
       "multi"
     > | null>;
   }; */

const useFilterRefs = ({ filters }: { filters: ProductNotificationsFilters }) => {
  const refs = useRef({
    states: useRef<SelectInstance<NotificationState, "multi"> | null>(null),
    types: useRef<SelectInstance<ProductNotificationType, "multi"> | null>(null),
    mediums: useRef<SelectInstance<NotificationMedium, "multi"> | null>(null),
    products: useRef<SelectInstance<string, "multi"> | null>(null),
    users: useRef<SelectInstance<string, "multi"> | null>(null),
  });

  const clear = useCallback(() => {
    for (const ref of Object.values(refs.current)) {
      ref.current?.clear();
    }
  }, []);

  const sync = useCallback((filts: ProductNotificationsFilters) => {
    for (const [field, ref] of Object.entries(refs.current)) {
      if (ref.current) {
        const f = field as SelectFilterField;
        const v = filts[f];
        const setter = ref.current.setValue as (v: ProductNotificationsFilters[typeof f]) => void;
        setter(v);
      }
    }
  }, []);

  useEffect(() => {
    sync(filters);
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [filters]);

  return { refs: refs.current, clear, sync };
};

export const NotificationsTableFilterBar = ({
  excludeFilters = [],
  filters,
  ...props
}: NotificationsTableFilterBarProps): JSX.Element => {
  const { refs, clear } = useFilterRefs({ filters });

  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const [, updateFilters] = useFilters({
    schemas: ProductNotificationsFiltersSchemas,
    options: ProductNotificationsFiltersOptions,
  });

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.value = filters.search;
    }
  }, [filters]);

  return (
    <TableView.FilterBar
      {...props}
      searchInputRef={searchInputRef}
      searchPlaceholder="Search notifications..."
      onSearch={v => updateFilters({ search: v })}
      search={filters.search}
      onClear={() => {
        clear();
        /* TODO: Establish more of an Object-Oriented pattern for our "Filters" object, for each
           specific model, and expose an attribute on the object 'emptyFilters' that can be used
           to reset the value here. */
        updateFilters({ states: [], types: [], search: "", users: [], products: [], mediums: [] });
      }}
    >
      <ShowHide show={!excludeFilters.includes("products")}>
        <ProductSelect
          ref={refs.products}
          /* The product value is coming from a query parameter, so we have to account for invalid
             product IDs that may sneak in. */
          strictValueLookup={false}
          behavior="multi"
          filters={{ notified: true }}
          dynamicHeight={false}
          placeholder="Products"
          inputClassName="max-w-[320px]"
          initialValue={filters.products}
          onChange={products => updateFilters({ products })}
          onClear={() => updateFilters({ products: [] })}
        />
      </ShowHide>
      <ShowHide show={!excludeFilters.includes("users")}>
        <UserSelect
          ref={refs.users}
          /* The user value is coming from a query parameter, so we have to account for invalid
             user IDs that may sneak in. */
          strictValueLookup={false}
          behavior="multi"
          dynamicHeight={false}
          placeholder="Users"
          inputClassName="max-w-[320px]"
          initialValue={filters.users}
          onChange={users => updateFilters({ users })}
          onClear={() => updateFilters({ users: [] })}
        />
      </ShowHide>
      <ShowHide show={!excludeFilters.includes("states")}>
        <NotificationStateSelect
          ref={refs.states}
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
      </ShowHide>
      <ShowHide show={!excludeFilters.includes("mediums")}>
        <NotificationMediumSelect
          ref={refs.mediums}
          dynamicHeight={false}
          placeholder="Mediums"
          behavior="multi"
          inputClassName={classNames({
            "max-w-[260px]": props.isSearchable !== false,
            "flex-1": props.isSearchable === false,
          })}
          initialValue={filters.mediums}
          onChange={(mediums: NotificationMedium[]) => updateFilters({ mediums })}
          onClear={() => updateFilters({ mediums: [] })}
        />
      </ShowHide>
      <ShowHide show={!excludeFilters.includes("types")}>
        <NotificationTypeSelect
          ref={refs.types}
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
      </ShowHide>
    </TableView.FilterBar>
  );
};
