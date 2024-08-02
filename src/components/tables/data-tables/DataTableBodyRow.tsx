import { Table } from "~/components/tables/generic/Table";
import type { TableBodyRowProps } from "~/components/tables/generic/TableBodyRow";
import type * as types from "~/components/tables/types";

import { DataTableBodyCell } from "./DataTableBodyCell";

export interface DataTableBodyRowProps<
  D extends types.DataTableDatum,
  C extends types.DataTableColumn<D> = types.DataTableColumn<D>,
> extends Omit<TableBodyRowProps, "children"> {
  readonly datum: D;
  readonly columns: C[];
}

export const DataTableBodyRow = <
  D extends types.DataTableDatum,
  C extends types.DataTableColumn<D>,
>({
  datum,
  columns,
  ...props
}: DataTableBodyRowProps<D, C>): JSX.Element => (
  <Table.BodyRow {...props}>
    {columns.map(col => (
      <DataTableBodyCell<D, C> key={`${col.id}-${datum.id}`} column={col} datum={datum} />
    ))}
  </Table.BodyRow>
);
