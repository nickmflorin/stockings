import {
  TableHeaderCell,
  type TableHeaderCellProps,
} from "~/components/tables/generic/TableHeaderCell";
import type * as types from "~/components/tables/types";

export interface DataTableHeaderCellProps<
  D extends types.DataTableDatum,
  C extends types.DataTableColumn<D> = types.DataTableColumn<D>,
> extends Omit<TableHeaderCellProps, "ordering" | "icon" | "id" | "isOrderable" | "children"> {
  readonly column: C;
  readonly order?: types.TableOrder | null;
}

export const DataTableHeaderCell = <
  D extends types.DataTableDatum,
  C extends types.DataTableColumn<D>,
>({
  order,
  column,
  ...props
}: DataTableHeaderCellProps<D, C>): JSX.Element => (
  <TableHeaderCell
    {...props}
    {...column.props}
    align={column.align ?? "left"}
    isOrderable={column.isOrderable}
    order={order}
    sx={[
      ...(Array.isArray(column.props?.sx) ? column.props.sx : [column.props?.sx]),
      { width: column.width },
    ]}
  >
    {column.label}
  </TableHeaderCell>
);
