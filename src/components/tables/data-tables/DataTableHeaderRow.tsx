import { type Ordering } from "~/lib/ordering";

import { Table } from "~/components/tables/generic/Table";
import type { TableHeaderRowProps } from "~/components/tables/generic/TableHeaderRow";
import type * as types from "~/components/tables/types";

import { TableHeaderCell } from "../generic/TableHeaderCell";

import { DataTableHeaderCell } from "./DataTableHeaderCell";

export interface DataTableHeaderRowProps<D extends types.DataTableDatum, I extends string = string>
  extends Omit<TableHeaderRowProps, "children"> {
  readonly columns: types.DataTableColumnConfig<D, I>[];
  readonly ordering?: Ordering<I> | null;
  readonly rowsHaveActions?: boolean;
  readonly rowsAreSelectable?: boolean;
  readonly onSort?: (
    event: React.MouseEvent<unknown>,
    col: types.DataTableColumnConfig<D, I>,
  ) => void;
}

export const DataTableHeaderRow = <D extends types.DataTableDatum, I extends string>({
  columns,
  ordering,
  rowsHaveActions,
  rowsAreSelectable,
  onSort,
  ...props
}: DataTableHeaderRowProps<D, I>): JSX.Element => (
  <Table.HeaderRow {...props}>
    {rowsAreSelectable && <TableHeaderCell align="center" width={40} maxWidth={40} minWidth={40} />}
    {columns.map(column => (
      <DataTableHeaderCell<D, I>
        key={column.id}
        column={column}
        order={ordering?.orderBy === column.id ? ordering.order : null}
        onSort={e => {
          if (column.isOrderable && onSort) {
            onSort(e, column);
          }
        }}
      />
    ))}
    {rowsHaveActions && (
      <TableHeaderCell align="center" width={120} maxWidth={120} minWidth={120} />
    )}
  </Table.HeaderRow>
);
