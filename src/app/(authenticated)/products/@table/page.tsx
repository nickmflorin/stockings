import dynamic from "next/dynamic";
import { Suspense } from "react";

import { Loading } from "~/components/loading/Loading";
import { PaginatorPlaceholder } from "~/components/pagination/PaginatorPlaceholder";
/* eslint-disable-next-line max-len */
import { ProductsTableSearchBar } from "~/features/products/components/tables/ProductsTableSearchBar";

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
  const search = searchParams?.search || "";

  return (
    <ProductsTableView
      searchBar={<ProductsTableSearchBar />}
      pagination={
        <Suspense key={search} fallback={<PaginatorPlaceholder />}>
          <ProductsTablePaginator search={search} />
        </Suspense>
      }
    >
      <Suspense key={search} fallback={<Loading isLoading component="tbody" />}>
        <ProductsTableBody search={search} />
      </Suspense>
    </ProductsTableView>
  );
}
