import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

import { getAuthedUser } from "~/application/auth/server";

import { fetchProducts } from "~/actions/fetches/products";

import { Loading } from "~/components/loading/Loading";
import { type ProductsTableFilters } from "~/features/products";

const ClientProductsTableBody = dynamic(
  () => import("~/features/products/components/tables/ProductsTableBody"),
  { loading: () => <Loading isLoading component="tbody" /> },
);

export interface ProductsTableBodyProps {
  readonly filters: ProductsTableFilters;
  readonly page: number;
}

export const ProductsTableBody = async ({
  filters,
  page,
}: ProductsTableBodyProps): Promise<JSX.Element> => {
  const { user } = await getAuthedUser();

  if (!user) {
    // TODO: Revisit this redirect
    return redirect("/sign-in");
  }

  const products = await fetchProducts({
    filters,
    ordering: { field: "name", order: "asc" },
    page,
  });
  return <ClientProductsTableBody data={products} />;
};
