"use client";
import { type ApiProduct } from "~/database/model";

import { convertConfigsToColumns, type DataTableColumnConfig } from "~/components/tables";
import { DataTableBody } from "~/components/tables/data-tables/DataTableBody";
import { ProductsAdminTableColumns, type ProductsAdminTableColumnId } from "~/features/products";

import { ProductsTableColumnProperties } from "./ProductsTableColumnProperties";

export interface ProductsAdminTableBodyProps {
  readonly excludeColumns?: ProductsAdminTableColumnId[];
  readonly data: ApiProduct<[]>[];
}

export const ProductsAdminTableBody = (props: ProductsAdminTableBodyProps): JSX.Element => (
  <DataTableBody
    {...props}
    actionMenuWidth={200}
    columns={convertConfigsToColumns(
      [...ProductsAdminTableColumns] as DataTableColumnConfig<
        ApiProduct<[]>,
        ProductsAdminTableColumnId
      >[],
      ProductsTableColumnProperties,
    )}
  />
);

export default ProductsAdminTableBody;
