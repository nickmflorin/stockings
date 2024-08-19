import { logger } from "~/internal/logger";

import { fetchProduct } from "~/actions/products";

import { ErrorView } from "~/components/errors/ErrorView";
import { Avatar } from "~/components/images/Avatar";
import { Module } from "~/components/structural/Module";
import { ProductCategoryText } from "~/features/products/components/ProductCategoryText";

import { ApiClientGlobalErrorCodes } from "~/api";

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const productId = params.id;
  const { data: product, error } = await fetchProduct(productId, { strict: false });
  if (error) {
    if (error.code !== ApiClientGlobalErrorCodes.NOT_FOUND) {
      logger.error(error, "There was an error loading the product for the detail view.", {
        productId,
      });
    }
  }
  return (
    <>
      <Module.Header
        title={product?.name ?? "-"}
        avatar={<Avatar size={80} src={product?.imageSrc} className="border" radius="full" />}
      >
        {product?.category ? <ProductCategoryText inherit category={product.category} /> : "-"}
      </Module.Header>
      <Module.Content>
        {!product ? <ErrorView>There was an error loading the product.</ErrorView> : product.name}
      </Module.Content>
    </>
  );
}
