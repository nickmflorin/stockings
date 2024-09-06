import dynamic from "next/dynamic";

import { type ProductNotificationsControls } from "~/actions";
import { fetchProductNotifications } from "~/actions/notifications/fetch-product-notifications";
import { fetchProduct } from "~/actions/products";

import { Loading } from "~/components/loading/Loading";

const ProductNotificationsAdminTableBody = dynamic(
  () =>
    import("~/features/products/components/tables/ProductNotificationsAdminTableBody").then(
      mod => mod.ProductNotificationsAdminTableBody,
    ),
  { loading: () => <Loading isLoading component="tbody" /> },
);

export interface NotificationsTableBodyProps {
  readonly productId: string;
  readonly ordering: ProductNotificationsControls["ordering"];
}

export const NotificationsTableBody = async ({
  ordering,
  productId,
}: NotificationsTableBodyProps): Promise<JSX.Element> => {
  const { data: product } = await fetchProduct(productId, { includes: [] }, { strict: true });
  const { data } = await fetchProductNotifications(
    {
      ordering,
      filters: { products: [product.id] },
      includes: ["user"],
      visibility: "admin",
    },
    { strict: true },
  );
  return <ProductNotificationsAdminTableBody data={data} />;
};
