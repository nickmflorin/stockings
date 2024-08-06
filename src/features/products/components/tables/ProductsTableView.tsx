"use client";
import TableContainer from "@mui/material/TableContainer";

import { DataTableWrapper } from "~/components/tables/data-tables/DataTableWrapper";
import { ProductsTableColumns } from "~/features/products/types";

export interface ProductsTableViewProps {
  readonly children: JSX.Element;
}

export const ProductsTableView = ({ children }: ProductsTableViewProps) => (
  <TableContainer sx={{ maxHeight: "400px" }}>
    <DataTableWrapper columns={ProductsTableColumns}>{children}</DataTableWrapper>
  </TableContainer>
);

export default ProductsTableView;
