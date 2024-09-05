"use client";
import { ProductsDefaultOrdering } from "~/actions";

import { DataTableWrapper } from "~/components/tables/data-tables/DataTableWrapper";
import { TableView } from "~/components/tables/TableView";
import {
  ProductsAdminTableColumns,
  type ProductsAdminTableOrderableColumnId,
  type ProductsAdminTableColumnId,
} from "~/features/products/types";
import { useOrdering } from "~/hooks/use-ordering";

export interface ProductsAdminTableViewProps {
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
}: ProductsAdminTableViewProps) => {
  const [ordering, setOrdering] = useOrdering<ProductsAdminTableOrderableColumnId>({
    useQueryParams: true,
    fields: ProductsAdminTableColumns.orderableColumns.map(c => c.id),
    defaultOrdering: ProductsDefaultOrdering,
  });
  return (
    <TableView header={filterBar} footer={pagination}>
      <DataTableWrapper
        rowsHaveActions={false}
        excludeColumns={excludeColumns}
        columns={ProductsAdminTableColumns.columns}
        ordering={ordering}
        onSort={(e, col) => {
          const id = col.id;
          if (ProductsAdminTableColumns.isOrderableColumnId(id)) {
            setOrdering({ field: id });
          }
        }}
      >
        {children}
      </DataTableWrapper>
    </TableView>
  );
};

export default ProductsAdminTableView;
