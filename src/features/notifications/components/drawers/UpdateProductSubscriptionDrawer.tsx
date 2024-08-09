import { type Product } from "~/database/model";

import { type ExtendingDrawerProps } from "~/components/drawers";
import { Drawer } from "~/components/drawers/Drawer";

import { UpdateProductSubscriptionForm } from "../forms";

interface UpdateProductSubscriptionDrawerProps extends ExtendingDrawerProps {
  readonly product: Product;
  readonly subscriptionId: string;
}

export const UpdateProductSubscriptionDrawer = ({
  product,
  subscriptionId,
  onClose,
}: UpdateProductSubscriptionDrawerProps): JSX.Element => (
  <Drawer>
    <Drawer.Header description="Update your notification subscription for the product.">
      {product.name ?? "Unnamed Product"}
    </Drawer.Header>
    <Drawer.Content className="overflow-y-hidden">
      <UpdateProductSubscriptionForm
        productId={product.id}
        subscriptionId={subscriptionId}
        onCancel={() => onClose()}
        onSuccess={() => onClose()}
      />
    </Drawer.Content>
  </Drawer>
);

export default UpdateProductSubscriptionDrawer;
