import dynamic from "next/dynamic";

import { type Product } from "~/database/model";

import { type ExtendingDrawerProps } from "~/components/drawers";
import { Drawer } from "~/components/drawers/Drawer";
import { Loading } from "~/components/loading/Loading";

const SubscribeToPriceChangesForm = dynamic(
  () => import("../forms/SubscribeToPriceChangesForm").then(mod => mod.SubscribeToPriceChangesForm),
  { loading: () => <Loading isLoading /> },
);

interface SubscribeToPriceChangesDrawerProps extends ExtendingDrawerProps {
  readonly product: Product;
}

export const SubscribeToPriceChangesDrawer = ({
  product,
  onClose,
}: SubscribeToPriceChangesDrawerProps): JSX.Element => (
  <Drawer>
    <Drawer.Header
      description={"Subscribe to receive notifications when the price " + "of the product changes."}
    >
      {product.name ?? "Unnamed Product"}
    </Drawer.Header>
    <Drawer.Content className="overflow-y-hidden">
      <SubscribeToPriceChangesForm
        productId={product.id}
        onCancel={() => onClose()}
        onSuccess={() => onClose()}
      />
    </Drawer.Content>
  </Drawer>
);

export default SubscribeToPriceChangesDrawer;
