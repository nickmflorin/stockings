import { redirect } from "next/navigation";

import { getAuthedUser } from "~/application/auth/server";

import { PAGE_SIZES } from "~/actions";
import { fetchProductsCount } from "~/actions/fetches/products";

import { Paginator } from "~/components/pagination/Paginator";

export interface ProductsTablePaginatorProps {
  readonly search: string;
}

export const ProductsTablePaginator = async ({
  search,
}: ProductsTablePaginatorProps): Promise<JSX.Element> => {
  const { user } = await getAuthedUser();

  if (!user) {
    // TODO: Revisit this redirect
    return redirect("/sign-in");
  }

  const count = await fetchProductsCount({
    filters: { categories: [], subCategories: [], search, statuses: [] },
  });
  console.log({ count });
  return <Paginator count={count} pageSize={PAGE_SIZES.product} />;
};
