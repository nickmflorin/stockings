import { Suspense } from "react";

import { type ProductsFilters } from "~/actions";
import { fetchProductsPagination } from "~/actions/products";

import { Paginator } from "~/components/pagination/Paginator";

export interface ProductsTablePaginatorProps {
  readonly filters: ProductsFilters;
  readonly page: number;
}

export const ProductsTablePaginator = async ({
  filters,
  page: _page,
}: ProductsTablePaginatorProps): Promise<JSX.Element> => {
  const {
    data: { count, page, pageSize },
  } = await fetchProductsPagination(
    { filters, page: _page, visibility: "public" },
    { strict: true },
  );
  return (
    <Suspense>
      <Paginator count={count} pageSize={pageSize} page={page} />
    </Suspense>
  );
};
