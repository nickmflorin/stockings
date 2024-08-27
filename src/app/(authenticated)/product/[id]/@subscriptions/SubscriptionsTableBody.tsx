import dynamic from "next/dynamic";

import { type SubscriptionsControls } from "~/actions";
import { fetchProduct } from "~/actions/products";
import { fetchProductSubscriptions } from "~/actions/subscriptions/fetch-subscriptions";

import { Loading } from "~/components/loading/Loading";

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
  const { data: product } = await fetchProduct(productId, { strict: true });
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
