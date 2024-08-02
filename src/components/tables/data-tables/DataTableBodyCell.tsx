import { isValidElement } from "react";

import { TableBodyCell } from "~/components/tables/generic/TableBodyCell";
import type * as types from "~/components/tables/types";

export interface DataTableBodyCellProps<
  D extends types.DataTableDatum,
  C extends types.DataTableColumn<D> = types.DataTableColumn<D>,
> {
  readonly datum: D;
  readonly column: C;
}

const CellAccessorContent = <D extends types.DataTableDatum>({
  datum,
  accessor,
}: {
  datum: D;
  accessor: Exclude<keyof D, "id">;
}): JSX.Element => {
  const v = datum[accessor];
  if (isValidElement(v) || typeof v === "string" || typeof v === "number") {
    return <>{v}</>;
  }
  return <></>;
};

export const DataTableBodyCell = <
  D extends types.DataTableDatum,
  C extends types.DataTableColumn<D>,
>({
  column,
  datum,
}: DataTableBodyCellProps<D, C>): JSX.Element => (
  <TableBodyCell {...column.cellProps} align={column.align}>
    {column.cellRenderer ? (
      column.cellRenderer(datum)
    ) : column.accessor ? (
      <CellAccessorContent datum={datum} accessor={column.accessor} />
    ) : (
      <></>
    )}
  </TableBodyCell>
);
