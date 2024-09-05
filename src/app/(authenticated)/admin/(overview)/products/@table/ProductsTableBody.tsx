import dynamic from "next/dynamic";

import { type ProductsControls, type ProductsFilters } from "~/actions";
import { fetchProducts } from "~/actions/products";

import { Loading } from "~/components/loading/Loading";

const ClientProductsAdminTableBody = dynamic(
  () => import("~/features/products/components/tables/ProductsAdminTableBody"),
  { loading: () => <Loading isLoading component="tbody" /> },
);

export interface ProductsTableBodyProps {
  readonly filters: ProductsFilters;
  readonly page: number;
  readonly ordering: ProductsControls["ordering"];
}

export const ProductsTableBody = async ({
  filters,
  page,
  ordering,
}: ProductsTableBodyProps): Promise<JSX.Element> => {
  const { data: products } = await fetchProducts(
    {
      filters,
      ordering,
      page,
      includes: [],
    },
    { strict: true },
  );
  return <ClientProductsAdminTableBody data={products} />;
};
