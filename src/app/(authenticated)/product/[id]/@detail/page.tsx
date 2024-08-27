import { ProductSubCategory } from "~/database/model";

import { fetchProduct } from "~/actions/products";

import { ProductInfoTile } from "~/features/products/components/ProductInfoTile";

// TODO: Should we use 'generateStaticParams' here?
export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const { data: product } = await fetchProduct(params.id, { strict: true });
  return (
    <ProductInfoTile
      product={{
        ...product,
        subCategories: [
          ProductSubCategory.AccessoryTools,
          ProductSubCategory.Chisels,
          ProductSubCategory.HandPlanes,
        ],
      }}
    />
  );
}
