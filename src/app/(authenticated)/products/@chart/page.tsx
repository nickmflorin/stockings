import { fetchProduct } from "~/actions/fetches/products";
import { Suspense } from "react";
import { ChartContainer } from "~/components/charts/ChartContainer";

import { ProductPriceLineChart } from "./ProductPriceLineChart";

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
    <ChartContainer title={product.name} description="Price History">
      <Suspense key={productId}>
        <ProductPriceLineChart width={400} height={300} productId={productId} />;
      </Suspense>
    </ChartContainer>
  );
}
