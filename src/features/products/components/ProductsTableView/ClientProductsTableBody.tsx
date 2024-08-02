"use client";
import { type Product } from "~/prisma/model";

import { DataTableBody } from "~/components/tables/data-tables/DataTableBody";

import { Columns } from "./columns";

export interface ClientProductsTableBodyProps {
  readonly data: Product[];
}

export const ClientProductsTableBody = async ({
  data,
}: ClientProductsTableBodyProps): Promise<JSX.Element> => (
  <DataTableBody columns={Columns} data={data} />
);
