import { type ReactNode } from "react";

import { Table, type TableProps } from "~/components/tables/generic/Table";
import type * as types from "~/components/tables/types";
import { type QuantitativeSize } from "~/components/types";

import { DataTableHeaderRow } from "./DataTableHeaderRow";

export type DataTableWrapperProps<D extends types.DataTableDatum, I extends string = string> = Omit<
  TableProps,
  "children"
> & {
  readonly ordering?: types.TableOrdering<I> | null;
  readonly headerHeight?: QuantitativeSize<"px">;
  readonly columns: types.DataTableColumnConfig<D, I>[];
  readonly children: ReactNode;
  readonly onSort?: (
    event: React.MouseEvent<unknown>,
    col: types.DataTableColumnConfig<D, I>,
  ) => void;
};

export const DataTableWrapper = <D extends types.DataTableDatum, I extends string>({
  ordering,
  headerHeight,
  children,
  columns,
  onSort,
  ...props
}: DataTableWrapperProps<D, I>): JSX.Element => (
  <Table {...props} stickyHeader>
    <Table.Head>
      <DataTableHeaderRow<D, I>
        columns={columns}
        ordering={ordering}
        height={headerHeight}
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
