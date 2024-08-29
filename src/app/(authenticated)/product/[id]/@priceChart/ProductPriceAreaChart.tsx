import dynamic from "next/dynamic";

import { fetchProductPriceData } from "~/actions/products";

import { Loading } from "~/components/loading/Loading";

const ClientProductPriceAreaChart = dynamic(
  () => import("~/features/products/components/charts/ProductPriceAreaChart"),
  { loading: () => <Loading isLoading /> },
);

export interface ProductPriceAreaChartProps {
  readonly productId: string;
}

export const ProductPriceAreaChart = async ({
  productId,
}: ProductPriceAreaChartProps): Promise<JSX.Element> => {
  const { data: records } = await fetchProductPriceData(productId, {
    scope: "action",
    strict: true,
  });
  return <ClientProductPriceAreaChart data={records} isEmpty={records.length === 0} />;
};
