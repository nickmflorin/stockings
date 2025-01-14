import dynamic from "next/dynamic";

import { type ProductsControls, type ProductsFilters } from "~/actions";
import { fetchProducts } from "~/actions/products";

import { Loading } from "~/components/loading/Loading";

const ClientProductsTableBody = dynamic(
  () => import("~/features/products/components/tables/ProductsTableBody"),
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
  const fetcher = fetchProducts(["priceChangeSubscription", "statusChangeSubscription"]);
  const { data: products } = await fetcher(
    {
      filters,
      ordering,
      page,
      visibility: "public",
    },
    { strict: true },
  );
  return <ClientProductsTableBody data={products} />;
};
