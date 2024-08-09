import type { ApiProduct, ApiProductSubscription } from "~/database/model";

import { Button } from "~/components/buttons";
import { DrawerIds } from "~/components/drawers";
import { useDrawers } from "~/components/drawers/hooks/use-drawers";

export interface UpdateSubscriptionCellProps {
  readonly product: ApiProduct;
  readonly subscription: ApiProductSubscription;
}

export const UpdateSubscriptionCell = ({
  product,
  subscription,
}: UpdateSubscriptionCellProps): JSX.Element => {
  const { open } = useDrawers();

  return (
    <Button.Solid
      element="button"
      onClick={() =>
        open(DrawerIds.UPDATE_PRODUCT_SUBSCRIPTION, {
          product,
          subscriptionId: subscription.id,
        })
      }
    >
      Update Subscription
    </Button.Solid>
  );
};

export default UpdateSubscriptionCell;
