"use client";
import RootTableCell, { type TableCellProps as RootTableCellProps } from "@mui/material/TableCell";

import { classNames } from "~/components/types";
import { type MuiComponentProps } from "~/components/types";

export type TableBodyCellProps = MuiComponentProps<RootTableCellProps>;

export const TableBodyCell = (props: TableBodyCellProps) => (
  <RootTableCell
    {...props}
    className={classNames("table__cell table__body-cell", props.className)}
  />
);

export default TableBodyCell;
