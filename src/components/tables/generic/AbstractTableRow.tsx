"use client";
import RootTableRow, { type TableRowProps as RootTableRowProps } from "@mui/material/TableRow";

import { classNames } from "~/components/types";
import { sizeToString, type QuantitativeSize } from "~/components/types";

export type AbstractTableRowProps = RootTableRowProps<"tr"> & {
  readonly height?: QuantitativeSize<"px">;
};

export const AbstractTableRow = ({ height, ...props }: AbstractTableRowProps) => (
  <RootTableRow
    {...props}
    className={classNames("table__row", props.className)}
    sx={{
      height: height ? sizeToString(height, "px") : undefined,
      maxHeight: height ? sizeToString(height, "px") : undefined,
    }}
  />
);

export default AbstractTableRow;
