import { Suspense } from "react";

import { logger } from "~/internal/logger";

import { fetchProduct } from "~/actions/products";

import { ErrorView } from "~/components/errors/ErrorView";
import { Loading } from "~/components/loading/Loading";
import { Module } from "~/components/structural/Module";

import { ApiClientGlobalErrorCodes } from "~/api";

import { ProductPriceAreaChart } from "./ProductPriceAreaChart";

export default async function ProductPriceChartPage({ params }: { params: { id: string } }) {
  /* const productId = params.id;
     const { data: product, error } = await fetchProduct(productId, { strict: false });
     if (error) {
       if (error.code !== ApiClientGlobalErrorCodes.NOT_FOUND) {
         logger.error(error, "There was an error loading the product for the price chart.", {
           productId,
         });
       }
       return <ErrorView>There was an error loading the product.</ErrorView>;
     } */
  return (
    <Suspense key={params.id} fallback={<Loading isLoading />}>
      <ProductPriceAreaChart width={400} height={300} productId={params.id} />
    </Suspense>
  );
}
