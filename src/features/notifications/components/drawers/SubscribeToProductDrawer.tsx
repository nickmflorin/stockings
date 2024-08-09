import { type Product } from "~/database/model";

import { type ExtendingDrawerProps } from "~/components/drawers";
import { Drawer } from "~/components/drawers/Drawer";

import { SubscribeToProductForm } from "../forms";

interface SubscribeToProductDrawerProps extends ExtendingDrawerProps {
  readonly product: Product;
}

export const SubscribeToProductDrawer = ({
  product,
  onClose,
}: SubscribeToProductDrawerProps): JSX.Element => (
  <Drawer>
    <Drawer.Header description="Subscribe to notifications for the product.">
      {product.name ?? "Unnamed Product"}
    </Drawer.Header>
    <Drawer.Content className="overflow-y-hidden">
      <SubscribeToProductForm
        productId={product.id}
        onCancel={() => onClose()}
        onSuccess={() => onClose()}
      />
    </Drawer.Content>
  </Drawer>
);

export default SubscribeToProductDrawer;
