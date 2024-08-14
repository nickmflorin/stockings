import { fetchProduct } from "~/actions/fetches/products";

import { ErrorView } from "~/components/errors/ErrorView";
import { Avatar } from "~/components/images/Avatar";
import { Module } from "~/components/structural/Module";
import { ProductCategoryText } from "~/features/products/components/ProductCategoryText";

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const productId = params.id;
  const product = await fetchProduct(productId, { strict: false });
  return (
    <>
      <Module.Header
        title={product?.name ?? "-"}
        avatar={<Avatar size={80} src={product?.imageSrc} className="border" radius="full" />}
      >
        {product?.category ? <ProductCategoryText inherit category={product.category} /> : "-"}
      </Module.Header>
      <Module.Content>
        {!product ? <ErrorView>There was an error loading the product.</ErrorView> : "Foo"}
      </Module.Content>
    </>
  );
}
