import dynamic from "next/dynamic";

import { logger } from "~/internal/logger";

import { type SubscriptionsControls } from "~/actions";
import { fetchProduct } from "~/actions/products";
import { fetchProductSubscriptions } from "~/actions/subscriptions/fetch-subscriptions";

import { Loading } from "~/components/loading/Loading";

import { ApiClientGlobalErrorCodes } from "~/api";

const ClientSubscriptionsTableBody = dynamic(
  () => import("~/features/subscriptions/components/tables/SubscriptionsTableBody"),
  { loading: () => <Loading isLoading component="tbody" /> },
);

export interface SubscriptionsTableBodyProps {
  readonly productId: string;
  readonly ordering: SubscriptionsControls["ordering"];
  readonly controlBarTargetId: string;
}

export const SubscriptionsTableBody = async ({
  ordering,
  controlBarTargetId,
  productId,
}: SubscriptionsTableBodyProps): Promise<JSX.Element> => {
  const { data: product, error } = await fetchProduct(productId, { strict: false });
  if (error) {
    if (error.code !== ApiClientGlobalErrorCodes.NOT_FOUND) {
      logger.error(error, "There was an error loading the product for the detail view.", {
        productId,
      });
    }
    // TODO: Show an empty or error state here.
    return <ClientSubscriptionsTableBody data={[]} controlBarTargetId={controlBarTargetId} />;
  }

  const { data } = await fetchProductSubscriptions(
    {
      ordering,
      filters: { products: [product.id] },
    },
    { strict: true },
  );
  // TODO: Show an empty state if data is not present.
  return (
    <ClientSubscriptionsTableBody
      data={data}
      controlBarTargetId={controlBarTargetId}
      controlBarTooltipsInPortal
    />
  );
};
