import dynamic from "next/dynamic";
import { Suspense } from "react";

import { z } from "zod";

import { parseFilters } from "~/lib/filters";

import { Loading } from "~/components/loading/Loading";
import { ProductsTableFiltersOptions, ProductsTableFiltersSchemas } from "~/features/products";
/* eslint-disable-next-line max-len */
import { ProductsTableFilterBar } from "~/features/products/components/tables/ProductsTableFilterBar";

import { ProductsTableBody } from "./ProductsTableBody";
import { ProductsTablePaginator } from "./ProductsTablePaginator";

const ProductsTableView = dynamic(
  () => import("~/features/products/components/tables/ProductsTableView"),
  { loading: () => <Loading isLoading /> },
);

export interface ProductsTablePageProps {
  readonly searchParams: Record<string, string>;
}

export default function ProductsTablePage({ searchParams }: ProductsTablePageProps) {
  const page = z.coerce.number().int().positive().min(1).safeParse(searchParams?.page).data ?? 1;

  const filters = parseFilters(
    searchParams,
    ProductsTableFiltersSchemas,
    ProductsTableFiltersOptions,
  );

  return (
    <ProductsTableView
      searchBar={
        <Suspense>
          <ProductsTableFilterBar />
        </Suspense>
      }
      pagination={
        <Suspense key={JSON.stringify(filters) + String(page)}>
          <ProductsTablePaginator filters={filters} page={page} />
        </Suspense>
      }
    >
      <Suspense
        key={JSON.stringify(filters) + String(page)}
        fallback={<Loading isLoading component="tbody" />}
      >
        <ProductsTableBody filters={filters} page={page} />
      </Suspense>
    </ProductsTableView>
  );
}
