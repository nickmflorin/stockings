import { Table } from "~/components/tables/generic/Table";
import type { TableHeaderRowProps } from "~/components/tables/generic/TableHeaderRow";
import type * as types from "~/components/tables/types";

import { DataTableHeaderCell } from "./DataTableHeaderCell";

export interface DataTableHeaderRowProps<
  D extends types.DataTableDatum,
  C extends types.DataTableColumn<D> = types.DataTableColumn<D>,
> extends Omit<TableHeaderRowProps, "children"> {
  readonly columns: C[];
  readonly ordering?: types.TableOrdering<types.DataTableField<C>> | null;
  readonly onSort?: (event: React.MouseEvent<unknown>, col: C) => void;
}

export const DataTableHeaderRow = <
  D extends types.DataTableDatum,
  C extends types.DataTableColumn<D>,
>({
  columns,
  ordering,
  onSort,
  ...props
}: DataTableHeaderRowProps<D, C>): JSX.Element => (
  <Table.HeaderRow {...props}>
    {columns.map(column => (
      <DataTableHeaderCell<D, C>
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
