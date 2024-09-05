"use client";
import { ProductsDefaultOrdering } from "~/actions";

import { DataTableWrapper } from "~/components/tables/data-tables/DataTableWrapper";
import { TableView } from "~/components/tables/TableView";
import {
  ProductsTableColumns,
  type ProductsTableOrderableColumnId,
  type ProductsTableColumnId,
} from "~/features/products/types";
import { useOrdering } from "~/hooks/use-ordering";

export interface ProductsTableViewProps {
  readonly children: JSX.Element;
  readonly filterBar?: JSX.Element;
  readonly pagination?: JSX.Element;
  readonly excludeColumns?: ProductsTableColumnId[];
}

export const ProductsTableView = ({
  children,
  filterBar,
  pagination,
  excludeColumns,
}: ProductsTableViewProps) => {
  const [ordering, setOrdering] = useOrdering<ProductsTableOrderableColumnId>({
    useQueryParams: true,
    fields: ProductsTableColumns.orderableColumns.map(c => c.id),
    defaultOrdering: ProductsDefaultOrdering,
  });
  return (
    <TableView header={filterBar} footer={pagination}>
      <DataTableWrapper
        rowsHaveActions
        excludeColumns={excludeColumns}
        columns={ProductsTableColumns.columns}
        ordering={ordering}
        onSort={(e, col) => {
          const id = col.id;
          if (ProductsTableColumns.isOrderableColumnId(id)) {
            setOrdering({ field: id });
          }
        }}
      >
        {children}
      </DataTableWrapper>
    </TableView>
  );
};

export default ProductsTableView;
