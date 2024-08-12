import dynamic from "next/dynamic";

import { fetchProductPriceData } from "~/actions/fetches/products";

import { Loading } from "~/components/loading/Loading";

const ClientProductPriceLineChart = dynamic(
  () => import("~/features/products/components/charts/PriceLineChart"),
  { loading: () => <Loading isLoading /> },
);

export interface ProductPriceLineChartProps {
  readonly productId: string;
  readonly width: number;
  readonly height: number;
}

export const ProductPriceLineChart = async ({
  productId,
  height,
  width,
}: ProductPriceLineChartProps): Promise<JSX.Element> => {
  const records = await fetchProductPriceData(productId);
  return <ClientProductPriceLineChart height={height} width={width} data={records} />;
};
