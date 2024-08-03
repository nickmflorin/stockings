"use client";
import TableContainer from "@mui/material/TableContainer";

import { type Product } from "~/database/model";

import { type DataTableColumn } from "~/components/tables";
import { DataTableWrapper } from "~/components/tables/data-tables/DataTableWrapper";

import { Columns } from "./columns";

export interface ProductsDataTableWrapperProps {
  readonly children: JSX.Element;
}

export const ProductsDataTableWrapper = ({
  children,
}: ProductsDataTableWrapperProps): JSX.Element => (
  <TableContainer sx={{ maxHeight: "400px" }}>
    <DataTableWrapper<Product, DataTableColumn<Product>> columns={Columns}>
      {children}
    </DataTableWrapper>
  </TableContainer>
);
