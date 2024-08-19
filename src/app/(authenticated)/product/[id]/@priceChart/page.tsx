import { Suspense } from "react";

import { logger } from "~/internal/logger";

import { fetchProduct } from "~/actions/products";

import { ErrorView } from "~/components/errors/ErrorView";
import { Loading } from "~/components/loading/Loading";
import { Module } from "~/components/structural/Module";

import { ApiClientGlobalErrorCodes } from "~/api";

import { ProductPriceAreaChart } from "./ProductPriceAreaChart";

export default async function ProductPriceChartPage({ params }: { params: { id: string } }) {
  const productId = params.id;
  const { data: product, error } = await fetchProduct(productId, { strict: false });
  if (error) {
    if (error.code !== ApiClientGlobalErrorCodes.NOT_FOUND) {
      logger.error(error, "There was an error loading the product for the price chart.", {
        productId,
      });
    }
    return (
      <>
        <Module.Header title="-">Price History</Module.Header>
        <Module.Content centerChildren height={300} minHeight={300} width={400} minWidth={400}>
          <ErrorView>There was an error loading the product.</ErrorView>
        </Module.Content>
      </>
    );
  }
  return (
    <>
      <Module.Header title={product.name}>Price History</Module.Header>
      <Module.Content centerChildren height={300} minHeight={300} width={400} minWidth={400}>
        <Suspense key={productId} fallback={<Loading isLoading />}>
          <ProductPriceAreaChart width={400} height={300} productId={productId} />
        </Suspense>
      </Module.Content>
    </>
  );
}
