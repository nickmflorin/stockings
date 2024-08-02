"use client";
import RootTableHead, { type TableHeadProps as RootTableHeadProps } from "@mui/material/TableHead";

import { classNames } from "~/components/types";
import { type MuiComponentProps } from "~/components/types";

export type TableHeadProps = MuiComponentProps<RootTableHeadProps<"thead">>;

export const TableHead = (props: TableHeadProps) => (
  <RootTableHead {...props} className={classNames("table__head", props.className)} />
);

export default TableHead;
