import { fetchProductsCount } from "~/actions/products";

import { Badge } from "~/components/badges/Badge";
import { Title } from "~/components/typography";

export default async function ProductsTitlePage() {
  const {
    data: { count },
  } = await fetchProductsCount({ strict: true });
  return (
    <div className="flex flex-row items-center gap-4">
      <Title component="h3">Products</Title>
      <Badge>{count}</Badge>
    </div>
  );
}
