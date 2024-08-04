import {
  TableHeaderCell,
  type TableHeaderCellProps,
} from "~/components/tables/generic/TableHeaderCell";
import type * as types from "~/components/tables/types";

export interface DataTableHeaderCellProps<D extends types.DataTableDatum, I extends string = string>
  extends Omit<TableHeaderCellProps, "ordering" | "icon" | "id" | "isOrderable" | "children"> {
  readonly column: types.DataTableColumnConfig<D, I>;
  readonly order?: types.TableOrder | null;
}

export const DataTableHeaderCell = <D extends types.DataTableDatum, I extends string>({
  order,
  column,
  ...props
}: DataTableHeaderCellProps<D, I>): JSX.Element => (
  <TableHeaderCell
    {...props}
    {...column.props}
    align={column.align ?? "left"}
    isOrderable={column.isOrderable}
    order={order}
    width={column.width}
    maxWidth={column.maxWidth}
    minWidth={column.minWidth}
  >
    {column.label}
  </TableHeaderCell>
);
