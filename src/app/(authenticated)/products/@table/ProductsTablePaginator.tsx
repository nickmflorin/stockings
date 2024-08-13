import { redirect } from "next/navigation";
import { Suspense } from "react";

import { getAuthedUser } from "~/application/auth/server";

import { PAGE_SIZES } from "~/actions";
import { fetchProductsCount } from "~/actions/fetches/products";

import { Paginator } from "~/components/pagination/Paginator";
import { type ProductsTableFilters } from "~/features/products";

export interface ProductsTablePaginatorProps {
  readonly filters: ProductsTableFilters;
}

export const ProductsTablePaginator = async ({
  filters,
}: ProductsTablePaginatorProps): Promise<JSX.Element> => {
  const { user } = await getAuthedUser();

  if (!user) {
    // TODO: Revisit this redirect
    return redirect("/sign-in");
  }

  const count = await fetchProductsCount({ filters });
  return (
    <Suspense>
      <Paginator count={count} pageSize={PAGE_SIZES.product} />
    </Suspense>
  );
};
