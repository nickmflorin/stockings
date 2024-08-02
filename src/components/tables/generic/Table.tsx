"use client";
import RootTable, { type TableProps as RootTableProps } from "@mui/material/Table";

import { type TableSize } from "~/components/tables/types";
import type { ComponentProps } from "~/components/types";
import { classNames } from "~/components/types";

import { TableBody } from "./TableBody";
import { TableBodyCell } from "./TableBodyCell";
import { TableBodyRow } from "./TableBodyRow";
import { TableHead } from "./TableHead";
import { TableHeaderCell } from "./TableHeaderCell";
import { TableHeaderRow } from "./TableHeaderRow";

export type TableProps = Omit<RootTableProps<"table">, keyof ComponentProps> &
  ComponentProps & {
    readonly size?: TableSize;
    readonly bordered?: boolean;
    readonly highlightRowsOnHover?: boolean;
  };

const LocalTable = ({
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

export const Table = Object.assign(LocalTable, {
  Body: TableBody,
  BodyCell: TableBodyCell,
  HeaderCell: TableHeaderCell,
  Head: TableHead,
  BodyRow: TableBodyRow,
  HeaderRow: TableHeaderRow,
});

export default Table;
