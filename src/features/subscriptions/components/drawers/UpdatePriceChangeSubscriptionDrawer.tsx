import dynamic from "next/dynamic";

import { type Product } from "~/database/model";

import { type ExtendingDrawerProps } from "~/components/drawers";
import { Drawer } from "~/components/drawers/Drawer";
import { Loading } from "~/components/loading/Loading";

const UpdatePriceChangeSubscriptionForm = dynamic(
  () =>
    import("../forms/UpdatePriceChangeSubscriptionForm").then(
      mod => mod.UpdatePriceChangeSubscriptionForm,
    ),
  { loading: () => <Loading isLoading /> },
);

interface UpdatePriceChangeSubscriptionDrawerProps extends ExtendingDrawerProps {
  readonly product: Product;
  readonly subscriptionId: string;
}

export const UpdatePriceChangeSubscriptionDrawer = ({
  product,
  subscriptionId,
  onClose,
}: UpdatePriceChangeSubscriptionDrawerProps): JSX.Element => (
  <Drawer>
    <Drawer.Header
      description={
        "Update your notification settings for when the price " + "of the product changes."
      }
    >
      {product.name ?? "Unnamed Product"}
    </Drawer.Header>
    <Drawer.Content className="overflow-y-hidden">
      <UpdatePriceChangeSubscriptionForm
        productId={product.id}
        subscriptionId={subscriptionId}
        onCancel={() => onClose()}
        onSuccess={() => onClose()}
      />
    </Drawer.Content>
  </Drawer>
);

export default UpdatePriceChangeSubscriptionDrawer;
