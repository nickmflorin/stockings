import dynamic from "next/dynamic";

import { type Product } from "~/database/model";

import { type ExtendingDrawerProps } from "~/components/drawers";
import { Drawer } from "~/components/drawers/Drawer";
import { Loading } from "~/components/loading/Loading";

const SubscribeToStatusChangesForm = dynamic(
  () =>
    import("../forms/SubscribeToStatusChangesForm").then(mod => mod.SubscribeToStatusChangesForm),
  { loading: () => <Loading isLoading /> },
);

interface SubscribeToStatusChangesDrawerProps extends ExtendingDrawerProps {
  readonly product: Product;
}

export const SubscribeToStatusChangesDrawer = ({
  product,
  onClose,
}: SubscribeToStatusChangesDrawerProps): JSX.Element => (
  <Drawer>
    <Drawer.Header
      description={
        "Subscribe to receive notifications when the status " + "of the product changes."
      }
    >
      {product.name ?? "Unnamed Product"}
    </Drawer.Header>
    <Drawer.Content className="overflow-y-hidden">
      <SubscribeToStatusChangesForm
        productId={product.id}
        onCancel={() => onClose()}
        onSuccess={() => onClose()}
      />
    </Drawer.Content>
  </Drawer>
);

export default SubscribeToStatusChangesDrawer;
