import dynamic from "next/dynamic";

import { logger } from "~/internal/logger";

import { type SubscriptionsControls } from "~/actions";
import { fetchProduct } from "~/actions/products";
import { fetchProductSubscriptions } from "~/actions/subscriptions/fetch-subscriptions";

import { InlineLink } from "~/components/buttons";
import { Loading } from "~/components/loading/Loading";

import { ApiClientGlobalErrorCodes } from "~/api";

const ClientSubscriptionsTableBody = dynamic(
  () => import("~/features/subscriptions/components/tables/SubscriptionsTableBody"),
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
      <ClientSubscriptionsTableBody
        data={[]}
        isError
        errorMessage="There was an error loading the subscriptions."
        controlBarTargetId="product-subscriptions-control-bar"
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
    <ClientSubscriptionsTableBody
      data={data}
      isEmpty={data.length === 0}
      emptyContent={
        <>
          You are currently not subscribed to the product. Click <InlineLink>here</InlineLink> to
          subsribe.
        </>
      }
      controlBarTargetId="product-subscriptions-control-bar"
      controlBarTooltipsInPortal
    />
  );
};
