import { type FloatingContentRenderProps } from "~/components/floating";
import { Table } from "~/components/tables/generic/Table";
import type { TableBodyRowProps } from "~/components/tables/generic/TableBodyRow";
import type * as types from "~/components/tables/types";

import { ActionsCell, type ActionsCellProps } from "../cells/ActionsCell";
import { TableBodyCell } from "../generic/TableBodyCell";

import { DataTableBodyCell } from "./DataTableBodyCell";

export interface DataTableBodyRowProps<D extends types.DataTableDatum, I extends string = string>
  extends Omit<TableBodyRowProps, "children"> {
  readonly datum: D;
  readonly columns: types.DataTableColumn<D, I>[];
  readonly actionMenuWidth?: ActionsCellProps["menuWidth"];
  readonly getRowActions?: (
    datum: D,
    params: Pick<FloatingContentRenderProps, "setIsOpen">,
  ) => types.DataTableRowAction[];
}

export const DataTableBodyRow = <D extends types.DataTableDatum, I extends string>({
  datum,
  columns,
  actionMenuWidth,
  getRowActions,
  ...props
}: DataTableBodyRowProps<D, I>): JSX.Element => (
  <Table.BodyRow {...props}>
    {columns.map(col => (
      <DataTableBodyCell<D, I> key={`${col.id}-${datum.id}`} column={col} datum={datum} />
    ))}
    {getRowActions && (
      <TableBodyCell align="center">
        <ActionsCell menuWidth={actionMenuWidth} actions={params => getRowActions(datum, params)} />
      </TableBodyCell>
    )}
  </Table.BodyRow>
);
