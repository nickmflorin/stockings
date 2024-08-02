"use client";
import { type Product } from "~/prisma/model";

import { type DataTableColumn } from "~/components/tables";
import { DataTableWrapper } from "~/components/tables/data-tables/DataTableWrapper";

import { Columns } from "./columns";

export interface ProductsDataTableWrapperProps {
  readonly children: JSX.Element;
}

export const ProductsDataTableWrapper = async ({
  children,
}: ProductsDataTableWrapperProps): Promise<JSX.Element> => (
  <DataTableWrapper<Product, DataTableColumn<Product>> columns={Columns}>
    {children}
  </DataTableWrapper>
);
