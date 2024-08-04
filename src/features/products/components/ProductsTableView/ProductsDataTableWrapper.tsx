"use client";
import TableContainer from "@mui/material/TableContainer";

import { DataTableWrapper } from "~/components/tables/data-tables/DataTableWrapper";

import { Columns } from "./columns";

export interface ProductsDataTableWrapperProps {
  readonly children: JSX.Element;
}

export const ProductsDataTableWrapper = ({
  children,
}: ProductsDataTableWrapperProps): JSX.Element => (
  <TableContainer sx={{ maxHeight: "400px" }}>
    <DataTableWrapper columns={Columns}>{children}</DataTableWrapper>
  </TableContainer>
);
