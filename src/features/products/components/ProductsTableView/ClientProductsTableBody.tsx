"use client";
import { type Product } from "~/database/model";

import { DataTableBody } from "~/components/tables/data-tables/DataTableBody";

import { Columns } from "./columns";

export interface ClientProductsTableBodyProps {
  readonly data: Product[];
}

export const ClientProductsTableBody = ({ data }: ClientProductsTableBodyProps): JSX.Element => (
  <DataTableBody columns={Columns} data={data} />
);
