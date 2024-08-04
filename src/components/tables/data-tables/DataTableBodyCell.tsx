import { isValidElement } from "react";

import { TableBodyCell } from "~/components/tables/generic/TableBodyCell";
import type * as types from "~/components/tables/types";

export interface DataTableBodyCellProps<D extends types.DataTableDatum, I extends string = string> {
  readonly datum: D;
  readonly column: types.DataTableColumn<D, I>;
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

export const DataTableBodyCell = <D extends types.DataTableDatum, I extends string>({
  column,
  datum,
}: DataTableBodyCellProps<D, I>): JSX.Element => (
  <TableBodyCell {...column.cellProps} align={column.config.align}>
    {column.cellRenderer ? (
      column.cellRenderer(datum)
    ) : column.config.accessor ? (
      <CellAccessorContent datum={datum} accessor={column.config.accessor} />
    ) : (
      <></>
    )}
  </TableBodyCell>
);
