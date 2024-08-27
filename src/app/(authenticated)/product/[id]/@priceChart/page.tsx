import { Suspense } from "react";

import { Loading } from "~/components/loading/Loading";

import { ProductPriceAreaChart } from "./ProductPriceAreaChart";

// TODO: Should we use 'generateStaticParams' here?
export default async function ProductPriceChartPage({ params }: { params: { id: string } }) {
  return (
    <Suspense key={params.id} fallback={<Loading isLoading />}>
      <ProductPriceAreaChart width={400} height={300} productId={params.id} />
    </Suspense>
  );
}
