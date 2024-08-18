"use client";
import TableContainer from "@mui/material/TableContainer";

import { DataTableWrapper } from "~/components/tables/data-tables/DataTableWrapper";
import { TableView } from "~/components/tables/TableView";
import { ProductsTableColumns } from "~/features/products/types";

export interface ProductsTableViewProps {
  readonly children: JSX.Element;
  readonly filterBar?: JSX.Element;
  readonly pagination?: JSX.Element;
}

export const ProductsTableView = ({ children, filterBar, pagination }: ProductsTableViewProps) => (
  <TableView header={filterBar} footer={pagination}>
    <TableContainer sx={{ maxHeight: "100%" }}>
      <DataTableWrapper rowsHaveActions columns={ProductsTableColumns}>
        {children}
      </DataTableWrapper>
    </TableContainer>
  </TableView>
);

export default ProductsTableView;
