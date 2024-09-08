import { ProductsFiltersObj } from "~/actions";
import { fetchProductsCount } from "~/actions/products";

export interface ProductsTitlePageProps {
  readonly searchParams: Record<string, string>;
}
export default async function ProductsTitlePage({ searchParams }: ProductsTitlePageProps) {
  const filters = ProductsFiltersObj.parse(searchParams);
  const {
    data: { count },
  } = await fetchProductsCount({ visibility: "public", filters }, { strict: true });
  return <>{count}</>;
}
