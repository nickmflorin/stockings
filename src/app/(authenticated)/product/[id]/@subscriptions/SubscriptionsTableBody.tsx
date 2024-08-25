import dynamic from "next/dynamic";

import { logger } from "~/internal/logger";

import { type SubscriptionsControls } from "~/actions";
import { fetchProduct } from "~/actions/products";
import { fetchProductSubscriptions } from "~/actions/subscriptions/fetch-subscriptions";

import { Loading } from "~/components/loading/Loading";

import { ApiClientGlobalErrorCodes } from "~/api";

import { SubscribeToOtherAction } from "./SubscribeToOtherAction";

const ProductSubscriptionsTableBody = dynamic(
  () =>
    import("~/features/products/components/tables/ProductSubscriptionsTableBody").then(
      mod => mod.ProductSubscriptionsTableBody,
    ),
  { loading: () => <Loading isLoading component="tbody" /> },
);

export interface SubscriptionsTableBodyProps {
  readonly productId: string;
  readonly ordering: SubscriptionsControls["ordering"];
}

export const SubscriptionsTableBody = async ({
  ordering,
  productId,
}: SubscriptionsTableBodyProps): Promise<JSX.Element> => {
  const { data: product, error } = await fetchProduct(productId, { strict: false });
  if (error) {
    if (error.code !== ApiClientGlobalErrorCodes.NOT_FOUND) {
      logger.error(error, "There was an error loading the product for the detail view.", {
        productId,
      });
    }
    return (
      <ProductSubscriptionsTableBody
        data={[]}
        isError
        errorMessage="There was an error loading the subscriptions."
      />
    );
  }

  const { data } = await fetchProductSubscriptions(
    {
      ordering,
      filters: { products: [product.id] },
    },
    { strict: true },
  );

  return (
    <ProductSubscriptionsTableBody
      data={data}
      product={product}
      actions={[<SubscribeToOtherAction key="0" subscriptions={data} product={product} />]}
    />
  );
};
