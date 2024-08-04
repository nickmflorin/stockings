import { Table } from "~/components/tables/generic/Table";
import type { TableBodyRowProps } from "~/components/tables/generic/TableBodyRow";
import type * as types from "~/components/tables/types";

import { DataTableBodyCell } from "./DataTableBodyCell";

export interface DataTableBodyRowProps<D extends types.DataTableDatum, I extends string = string>
  extends Omit<TableBodyRowProps, "children"> {
  readonly datum: D;
  readonly columns: types.DataTableColumn<D, I>[];
}

export const DataTableBodyRow = <D extends types.DataTableDatum, I extends string>({
  datum,
  columns,
  ...props
}: DataTableBodyRowProps<D, I>): JSX.Element => (
  <Table.BodyRow {...props}>
    {columns.map(col => (
      <DataTableBodyCell<D, I> key={`${col.id}-${datum.id}`} column={col} datum={datum} />
    ))}
  </Table.BodyRow>
);
