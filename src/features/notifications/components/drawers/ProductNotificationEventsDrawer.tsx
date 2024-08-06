import { type Product } from "~/database/model";

import { type ExtendingDrawerProps } from "~/components/drawers";
import { Drawer } from "~/components/drawers/Drawer";

import { ProductNotificationEventsForm } from "../forms";

interface ProductNotificationEventsDrawerProps extends ExtendingDrawerProps {
  readonly product: Product;
}

export const ProductNotificationEventsDrawer = ({
  product,
  onClose,
}: ProductNotificationEventsDrawerProps): JSX.Element => (
  <Drawer>
    <Drawer.Header description="Subscribe to notifications.">
      {product.name ?? "Unnamed Product"}
    </Drawer.Header>
    <Drawer.Content className="overflow-y-hidden">
      <ProductNotificationEventsForm />
    </Drawer.Content>
  </Drawer>
);

export default ProductNotificationEventsDrawer;
