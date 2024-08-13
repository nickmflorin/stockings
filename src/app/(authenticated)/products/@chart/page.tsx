import { Suspense } from "react";

import { fetchProduct } from "~/actions/fetches/products";

import { Loading } from "~/components/loading/Loading";
import { Module } from "~/components/structural/Module";

import { ProductPriceAreaChart } from "./ProductPriceAreaChart";

export interface ProductsChartPageProps {
  readonly searchParams: Record<string, string | string[] | undefined>;
}

export default async function ProductsChartPage({ searchParams }: ProductsChartPageProps) {
  const productId = searchParams.productId;
  if (typeof productId !== "string") {
    return <></>;
  }
  const product = await fetchProduct(productId);
  return (
    <Module
      title={product.name}
      description="Price History"
      contentProps={{ height: 300, minHeight: 300, width: 400, minWidth: 400 }}
    >
      <Suspense key={productId} fallback={<Loading isLoading />}>
        <ProductPriceAreaChart width={400} height={300} productId={productId} />
      </Suspense>
    </Module>
  );
}
