"use client";
import { UsersFiltersOptions, UsersFiltersSchemas } from "~/actions";

import { TableView } from "~/components/tables/TableView";
import type { ComponentProps } from "~/components/types";
import { useFilters } from "~/hooks/use-filters";

export interface UsersTableFilterBarProps extends ComponentProps {}

export const UsersTableFilterBar = (props: UsersTableFilterBarProps): JSX.Element => {
  const [filters, updateFilters] = useFilters({
    schemas: UsersFiltersSchemas,
    options: UsersFiltersOptions,
  });

  return (
    <TableView.FilterBar
      {...props}
      searchPlaceholder="Search users..."
      onSearch={v => updateFilters({ search: v })}
      search={filters.search}
      onClear={() => {
        updateFilters({ search: "" });
      }}
    />
  );
};
