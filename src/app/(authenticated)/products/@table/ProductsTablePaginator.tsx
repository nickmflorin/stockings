import { Suspense } from "react";

import { fetchProductsPagination } from "~/actions/fetches/products";

import { Paginator } from "~/components/pagination/Paginator";
import { type ProductsTableFilters } from "~/features/products";

export interface ProductsTablePaginatorProps {
  readonly filters: ProductsTableFilters;
  readonly page: number;
}

export const ProductsTablePaginator = async ({
  filters,
  page: _page,
}: ProductsTablePaginatorProps): Promise<JSX.Element> => {
  const {
    data: { count, page, pageSize },
  } = await fetchProductsPagination({ filters, page: _page }, { strict: true });
  return (
    <Suspense>
      <Paginator count={count} pageSize={pageSize} page={page} />
    </Suspense>
  );
};
