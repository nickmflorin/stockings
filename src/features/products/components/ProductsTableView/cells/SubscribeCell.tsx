import type { Product } from "~/database/model";

import { Button } from "~/components/buttons";
import { DrawerIds } from "~/components/drawers";
import { useDrawers } from "~/components/drawers/hooks/use-drawers";

export interface SubscribeCellProps {
  readonly product: Product;
}

export const SubscribeCell = ({ product }: SubscribeCellProps): JSX.Element => {
  const { open } = useDrawers();

  return (
    <Button.Solid element="button" onClick={() => open(DrawerIds.MODIFY_PRODUCT_SUBSCRIPTION, {})}>
      Subscribe
    </Button.Solid>
  );
};

export default SubscribeCell;
