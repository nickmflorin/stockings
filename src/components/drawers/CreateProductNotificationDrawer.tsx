import { type Product } from "~/database/model";

import { CreateProductNotificationForm } from "~/components/forms/product-notifications";

import { Drawer } from "./generic";
import { type ExtendingDrawerProps } from "./types";

interface CreateProductNotificationDrawerProps extends ExtendingDrawerProps {
  readonly product: Product;
}

export const CreateProductNotificationDrawer = ({
  product,
  onClose,
}: CreateProductNotificationDrawerProps): JSX.Element => (
  <Drawer>
    <Drawer.Header description="Subscribe to notifications.">
      {product.name ?? "Unnamed Product"}
    </Drawer.Header>
    <Drawer.Content className="overflow-y-hidden">
      <CreateProductNotificationForm />
    </Drawer.Content>
  </Drawer>
);

export default CreateProductNotificationDrawer;
