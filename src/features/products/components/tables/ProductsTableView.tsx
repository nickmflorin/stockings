"use client";
import TableContainer from "@mui/material/TableContainer";

import { ProductsDefaultOrdering } from "~/actions";

import { DataTableWrapper } from "~/components/tables/data-tables/DataTableWrapper";
import { TableView } from "~/components/tables/TableView";
import {
  OrderableProductsTableColumnIds,
  ProductsTableColumns,
  type OrderableProductsTableColumnId,
} from "~/features/products/types";
import { useOrdering } from "~/hooks/use-ordering";

export interface ProductsTableViewProps {
  readonly children: JSX.Element;
  readonly filterBar?: JSX.Element;
  readonly pagination?: JSX.Element;
}

export const ProductsTableView = ({ children, filterBar, pagination }: ProductsTableViewProps) => {
  const [ordering, setOrdering] = useOrdering<OrderableProductsTableColumnId>({
    useQueryParams: true,
    fields: OrderableProductsTableColumnIds,
    defaultOrdering: ProductsDefaultOrdering,
  });
  return (
    <TableView header={filterBar} footer={pagination}>
      <TableContainer sx={{ maxHeight: "100%" }}>
        <DataTableWrapper
          rowsHaveActions
          columns={ProductsTableColumns}
          ordering={ordering}
          onSort={(e, col) => {
            if (
              OrderableProductsTableColumnIds.includes(col.id as OrderableProductsTableColumnId)
            ) {
              setOrdering({ field: col.id as OrderableProductsTableColumnId });
            }
          }}
        >
          {children}
        </DataTableWrapper>
      </TableContainer>
    </TableView>
  );
};

export default ProductsTableView;
