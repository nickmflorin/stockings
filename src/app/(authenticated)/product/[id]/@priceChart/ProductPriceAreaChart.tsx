import dynamic from "next/dynamic";

import { fetchProductPriceData } from "~/actions/fetches/products";

import { Loading } from "~/components/loading/Loading";

const ClientProductPriceAreaChart = dynamic(
  () => import("~/features/products/components/charts/ProductPriceAreaChart"),
  { loading: () => <Loading isLoading /> },
);

export interface ProductPriceAreaChartProps {
  readonly productId: string;
  readonly width: number;
  readonly height: number;
}

export const ProductPriceAreaChart = async ({
  productId,
  height,
  width,
}: ProductPriceAreaChartProps): Promise<JSX.Element> => {
  const records = await fetchProductPriceData(productId);
  return <ClientProductPriceAreaChart height={height} width={width} data={records} />;
};
