import dynamic from "next/dynamic";

import { type ProductNotificationsControls } from "~/actions";
import { fetchProductNotifications } from "~/actions/notifications/fetch-product-notifications";

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
  readonly filters: Omit<ProductNotificationsControls["filters"], "products">;
  readonly page: number;
  readonly ordering: ProductNotificationsControls["ordering"];
}

export const NotificationsTableBody = async ({
  ordering,
  productId,
  filters,
  page,
}: NotificationsTableBodyProps): Promise<JSX.Element> => {
  const { data } = await fetchProductNotifications(
    {
      ordering,
      filters: { ...filters, products: [productId] },
      includes: ["user"],
      visibility: "admin",
      page,
    },
    { strict: true },
  );
  return <ProductNotificationsAdminTableBody data={data} />;
};
