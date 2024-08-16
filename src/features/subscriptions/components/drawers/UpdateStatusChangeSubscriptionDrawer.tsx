import dynamic from "next/dynamic";

import { type Product } from "~/database/model";

import { type ExtendingDrawerProps } from "~/components/drawers";
import { Drawer } from "~/components/drawers/Drawer";
import { Loading } from "~/components/loading/Loading";

const UpdateStatusChangeSubscriptionForm = dynamic(
  () =>
    import("../forms/UpdateStatusChangeSubscriptionForm").then(
      mod => mod.UpdateStatusChangeSubscriptionForm,
    ),
  { loading: () => <Loading isLoading /> },
);

interface UpdateStatusChangeSubscriptionDrawerProps extends ExtendingDrawerProps {
  readonly product: Product;
  readonly subscriptionId: string;
}

export const UpdateStatusChangeSubscriptionDrawer = ({
  product,
  subscriptionId,
  onClose,
}: UpdateStatusChangeSubscriptionDrawerProps): JSX.Element => (
  <Drawer>
    <Drawer.Header
      description={
        "Update your notification settings for when the status " + "of the product changes."
      }
    >
      {product.name ?? "Unnamed Product"}
    </Drawer.Header>
    <Drawer.Content className="overflow-y-hidden">
      <UpdateStatusChangeSubscriptionForm
        productId={product.id}
        subscriptionId={subscriptionId}
        onCancel={() => onClose()}
        onSuccess={() => onClose()}
      />
    </Drawer.Content>
  </Drawer>
);

export default UpdateStatusChangeSubscriptionDrawer;
