import { Table } from "~/components/tables/generic/Table";
import type { TableHeaderRowProps } from "~/components/tables/generic/TableHeaderRow";
import type * as types from "~/components/tables/types";

import { DataTableHeaderCell } from "./DataTableHeaderCell";

export interface DataTableHeaderRowProps<D extends types.DataTableDatum, I extends string = string>
  extends Omit<TableHeaderRowProps, "children"> {
  readonly columns: types.DataTableColumnConfig<D, I>[];
  readonly ordering?: types.TableOrdering<I> | null;
  readonly onSort?: (
    event: React.MouseEvent<unknown>,
    col: types.DataTableColumnConfig<D, I>,
  ) => void;
}

export const DataTableHeaderRow = <D extends types.DataTableDatum, I extends string>({
  columns,
  ordering,
  onSort,
  ...props
}: DataTableHeaderRowProps<D, I>): JSX.Element => (
  <Table.HeaderRow {...props}>
    {columns.map(column => (
      <DataTableHeaderCell<D, I>
        key={column.id}
        column={column}
        order={ordering?.field === column.id ? ordering.order : null}
        onSort={e => {
          if (column.isOrderable && onSort) {
            onSort(e, column);
          }
        }}
      />
    ))}
  </Table.HeaderRow>
);
