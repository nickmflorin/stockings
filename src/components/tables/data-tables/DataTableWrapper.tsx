import { type ReactNode } from "react";

import { Table, type TableProps } from "~/components/tables/generic/Table";
import type * as types from "~/components/tables/types";
import { type QuantitativeSize } from "~/components/types";

import { DataTableHeaderRow } from "./DataTableHeaderRow";

export type DataTableWrapperProps<
  D extends types.DataTableDatum,
  C extends types.DataTableColumn<D> = types.DataTableColumn<D>,
> = Omit<TableProps, "children"> & {
  readonly ordering?: types.TableOrdering<types.DataTableField<C>> | null;
  readonly headerHeight?: QuantitativeSize<"px">;
  readonly columns: C[];
  readonly children: ReactNode;
  readonly onSort?: (event: React.MouseEvent<unknown>, col: C) => void;
};

export const DataTableWrapper = <
  D extends types.DataTableDatum,
  C extends types.DataTableColumn<D>,
>({
  ordering,
  headerHeight,
  children,
  columns,
  onSort,
  ...props
}: DataTableWrapperProps<D, C>): JSX.Element => (
  <Table {...props} stickyHeader>
    <Table.Head>
      <DataTableHeaderRow<D, C>
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
