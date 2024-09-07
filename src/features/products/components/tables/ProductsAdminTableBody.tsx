"use client";
import { useRouter } from "next/navigation";

import { type ApiProduct } from "~/database/model";

import { convertConfigsToColumns, type DataTableColumnConfig } from "~/components/tables";
import {
  DataTableBody,
  type DataTableBodyProps,
} from "~/components/tables/data-tables/DataTableBody";
import { ProductsAdminTableColumns, type ProductsAdminTableColumnId } from "~/features/products";

import { useProductsTableColumnProperties } from "./hooks/use-column-properties";

export interface ProductsAdminTableBodyProps
  extends DataTableBodyProps<
    Omit<ApiProduct<[]>, "columns" | "getRowActions" | "actionMenuWidth" | "onRowClick">,
    ProductsAdminTableColumnId
  > {}

export const ProductsAdminTableBody = (props: ProductsAdminTableBodyProps): JSX.Element => {
  const columnProperties = useProductsTableColumnProperties();
  const { push } = useRouter();

  return (
    <DataTableBody
      {...props}
      actionMenuWidth={200}
      onRowClick={id => push(`/admin/product/${id}`)}
      columns={convertConfigsToColumns(
        [...ProductsAdminTableColumns.columns] as DataTableColumnConfig<
          ApiProduct<[]>,
          ProductsAdminTableColumnId
        >[],
        columnProperties,
      )}
    />
  );
};

export default ProductsAdminTableBody;
