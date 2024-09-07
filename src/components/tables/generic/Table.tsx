"use client";
import RootTable, { type TableProps as RootTableProps } from "@mui/material/Table";

import { type TableSize } from "~/components/tables/types";
import type { ComponentProps } from "~/components/types";
import { classNames } from "~/components/types";

export type TableProps = Omit<RootTableProps<"table">, keyof ComponentProps> &
  ComponentProps & {
    readonly size?: TableSize;
    readonly bordered?: boolean;
    readonly highlightRowsOnHover?: boolean;
  };

export const Table = ({
  children,
  highlightRowsOnHover = true,
  bordered = true,
  size = "medium",
  ...props
}: TableProps) => (
  <RootTable
    {...props}
    className={classNames(
      "table",
      `table--size-${size}`,
      {
        "table--higlighted-rows-on-hover": highlightRowsOnHover,
        "table--bordered": bordered,
      },
      props.className,
    )}
  >
    {children}
  </RootTable>
);

export default Table;
