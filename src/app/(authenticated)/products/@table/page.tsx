import dynamic from "next/dynamic";
import { Suspense } from "react";

import { z } from "zod";

import { parseOrdering } from "~/lib/ordering";

import { ProductsDefaultOrdering, ProductsFiltersObj } from "~/actions";

import { Loading } from "~/components/loading/Loading";
import { ProductsTableColumns } from "~/features/products";
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

  const filters = ProductsFiltersObj.parse(searchParams);

  const ordering = parseOrdering(searchParams, {
    defaultOrdering: ProductsDefaultOrdering,
    fields: ProductsTableColumns.orderableColumns.map(c => c.id),
  });

  return (
    <ProductsTableView
      filterBar={
        <Suspense>
          <ProductsTableFilterBar />
        </Suspense>
      }
      pagination={<ProductsTablePaginator filters={filters} page={page} />}
    >
      <Suspense
        key={JSON.stringify(filters) + JSON.stringify(ordering) + String(page)}
        fallback={<Loading isLoading component="tbody" />}
      >
        <ProductsTableBody filters={filters} page={page} ordering={ordering} />
      </Suspense>
    </ProductsTableView>
  );
}
