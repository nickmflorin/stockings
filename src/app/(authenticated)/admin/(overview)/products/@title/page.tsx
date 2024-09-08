import { fetchProductsCount } from "~/actions/products";

export default async function ProductsTitlePage() {
  const {
    data: { count },
  } = await fetchProductsCount({ strict: true });
  return <>{count}</>;
}
