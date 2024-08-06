import dynamic from "next/dynamic";

import { fetchProducts } from "~/actions/fetches/products";

import { Loading } from "~/components/loading/Loading";

const ClientProductsTableBody = dynamic(
  () => import("~/features/products/components/tables/ProductsTableBody"),
  { loading: () => <Loading isLoading /> },
);

export const ProductsTableBody = async (): Promise<JSX.Element> => {
  const products = await fetchProducts({
    filters: { categories: [], subCategories: [], search: "", statuses: [] },
    ordering: { field: "name", order: "asc" },
    page: 1,
  });
  return <ClientProductsTableBody data={products} />;
};
