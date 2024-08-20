import dynamic from "next/dynamic";

import { logger } from "~/internal/logger";

import { fetchProductPriceData } from "~/actions/products";

import { Loading } from "~/components/loading/Loading";

import { ApiClientGlobalErrorCodes } from "~/api";

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
  const { data: records, error } = await fetchProductPriceData(productId, {
    scope: "action",
  });
  if (error) {
    if (error.code !== ApiClientGlobalErrorCodes.NOT_FOUND) {
      logger.error(error, "There was an error loading the product for the detail view.", {
        productId,
      });
    }
    // TODO: Show an empty or error state here.
    return <ClientSubscriptionsTableBody data={[]} controlBarTargetId={controlBarTargetId} />;
  }

  return <ClientProductPriceAreaChart height={height} width={width} data={records} />;
};
