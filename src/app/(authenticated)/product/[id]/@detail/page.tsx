import { fetchProduct } from "~/actions/products";

import { ProductInfoTile } from "~/features/products/components/ProductInfoTile";

// TODO: Should we use 'generateStaticParams' here?
export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const { data: product } = await fetchProduct(params.id, { includes: [] }, { strict: true });
  return <ProductInfoTile product={product} />;
}
