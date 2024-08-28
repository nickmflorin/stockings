import { type ReactNode } from "react";

import { Table, type TableProps } from "~/components/tables/generic/Table";
import type * as types from "~/components/tables/types";
import { type QuantitativeSize } from "~/components/types";

import { DataTableHeaderRow, type DataTableHeaderRowProps } from "./DataTableHeaderRow";

export type DataTableWrapperProps<D extends types.DataTableDatum, I extends string = string> = Omit<
  TableProps,
  "children"
> &
  Pick<
    DataTableHeaderRowProps<D, I>,
    "rowsHaveActions" | "rowsAreSelectable" | "onSort" | "columns" | "ordering" | "excludeColumns"
  > & {
    readonly headerHeight?: QuantitativeSize<"px">;
    readonly children: ReactNode;
  };

export const DataTableWrapper = <D extends types.DataTableDatum, I extends string>({
  ordering,
  headerHeight,
  children,
  columns,
  rowsHaveActions,
  rowsAreSelectable,
  excludeColumns,
  onSort,
  ...props
}: DataTableWrapperProps<D, I>): JSX.Element => (
  <Table {...props} stickyHeader>
    <Table.Head>
      <DataTableHeaderRow<D, I>
        columns={columns}
        ordering={ordering}
        height={headerHeight}
        excludeColumns={excludeColumns}
        rowsHaveActions={rowsHaveActions}
        rowsAreSelectable={rowsAreSelectable}
        onSort={(e, col) => {
          if (col.isOrderable) {
            onSort?.(e, col);
          }
        }}
      />
    </Table.Head>
    {children}
  </Table>
);
