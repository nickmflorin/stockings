import dynamic from "next/dynamic";

import { type ProductsFilters } from "~/actions";
import { fetchProducts } from "~/actions/products";

import { Loading } from "~/components/loading/Loading";

const ClientProductsTableBody = dynamic(
  () => import("~/features/products/components/tables/ProductsTableBody"),
  { loading: () => <Loading isLoading component="tbody" /> },
);

export interface ProductsTableBodyProps {
  readonly filters: ProductsFilters;
  readonly page: number;
}

export const ProductsTableBody = async ({
  filters,
  page,
}: ProductsTableBodyProps): Promise<JSX.Element> => {
  const { data: products } = await fetchProducts(
    {
      filters,
      ordering: { orderBy: "name", order: "asc" },
      page,
      includes: ["priceChangeSubscription", "statusChangeSubscription"],
    },
    { strict: true },
  );
  return <ClientProductsTableBody data={products} />;
};
