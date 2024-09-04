"use client";
import { ProductsDefaultOrdering } from "~/actions";

import { DataTableWrapper } from "~/components/tables/data-tables/DataTableWrapper";
import { TableView } from "~/components/tables/TableView";
import {
  OrderableProductsAdminTableColumnIds,
  ProductsAdminTableColumns,
  type OrderableProductsAdminTableColumnId,
  type ProductsAdminTableColumnId,
} from "~/features/products/types";
import { useOrdering } from "~/hooks/use-ordering";

export interface ProductsTableViewProps {
  readonly children: JSX.Element;
  readonly filterBar?: JSX.Element;
  readonly pagination?: JSX.Element;
  readonly excludeColumns?: ProductsAdminTableColumnId[];
}

export const ProductsAdminTableView = ({
  children,
  filterBar,
  pagination,
  excludeColumns,
}: ProductsTableViewProps) => {
  const [ordering, setOrdering] = useOrdering<OrderableProductsAdminTableColumnId>({
    useQueryParams: true,
    fields: OrderableProductsAdminTableColumnIds,
    defaultOrdering: ProductsDefaultOrdering,
  });
  return (
    <TableView header={filterBar} footer={pagination}>
      <DataTableWrapper
        rowsHaveActions={false}
        excludeColumns={excludeColumns}
        columns={ProductsAdminTableColumns}
        ordering={ordering}
        onSort={(e, col) => {
          if (
            OrderableProductsAdminTableColumnIds.includes(
              col.id as OrderableProductsAdminTableColumnId,
            )
          ) {
            setOrdering({ field: col.id as OrderableProductsAdminTableColumnId });
          }
        }}
      >
        {children}
      </DataTableWrapper>
    </TableView>
  );
};

export default ProductsAdminTableView;
