import dynamic from "next/dynamic";

import { ProductSubscriptionType } from "~/database/model";

import { type ProductNotificationsControls, type ProductNotificationsFilters } from "~/actions";
import { ProductNotificationsFiltersObj } from "~/actions";
import { fetchProductNotifications } from "~/actions/notifications";
import { fetchProduct } from "~/actions/products";

import { Loading } from "~/components/loading/Loading";

const ClientProductNotificationsTableBody = dynamic(
  () =>
    import("~/features/products/components/tables/ProductNotificationsTableBody").then(
      mod => mod.ProductNotificationsTableBody,
    ),
  { loading: () => <Loading isLoading component="tbody" /> },
);

export interface NotificationsTableBodyProps {
  readonly productId: string;
  readonly filters: Omit<ProductNotificationsFilters, "products">;
  readonly page: number;
  readonly ordering: ProductNotificationsControls["ordering"];
}

export const NotificationsTableBody = async ({
  ordering,
  page,
  productId,
  filters,
}: NotificationsTableBodyProps): Promise<JSX.Element> => {
  const { data: product } = await fetchProduct(
    productId,
    { includes: ["priceChangeSubscription", "statusChangeSubscription"] },
    { strict: true },
  );
  const { data } = await fetchProductNotifications(
    {
      ordering,
      filters: { ...filters, products: [product.id] },
      includes: ["product"],
      page,
      visibility: "public",
    },
    { strict: true },
  );
  return (
    <ClientProductNotificationsTableBody
      data={data}
      product={product}
      isNoResults={data.length === 0 && ProductNotificationsFiltersObj.areEmpty(filters)}
      activeSubscriptions={[
        product.priceChangeSubscription
          ? ProductSubscriptionType.PriceChangeSubscription
          : undefined,
        product.statusChangeSubscription
          ? ProductSubscriptionType.StatusChangeSubscription
          : undefined,
      ].filter((v): v is ProductSubscriptionType => v !== undefined)}
    />
  );
};
