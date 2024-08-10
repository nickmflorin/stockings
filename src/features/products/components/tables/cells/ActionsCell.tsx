import type { ApiProduct } from "~/database/model";

import { IconButton } from "~/components/buttons";
import { DrawerIds } from "~/components/drawers";
import { useDrawers } from "~/components/drawers/hooks/use-drawers";
import { DropdownMenu } from "~/components/menus/DropdownMenu";
import { Menu } from "~/components/menus/Menu";

export interface ActionsCellProps {
  readonly product: ApiProduct;
}

export const ActionsCell = ({ product }: ActionsCellProps): JSX.Element => {
  const { open } = useDrawers();

  return (
    <div className="flex flex-row items-center justify-center">
      <DropdownMenu
        placement="bottom-end"
        width={200}
        inPortal
        content={({ setIsOpen }) => (
          <Menu>
            <Menu.Content>
              <Menu.Item
                className="font-medium"
                isVisible={product.subscription !== null}
                onClick={e => {
                  if (product.subscription !== null) {
                    setIsOpen(false, e);
                    open(DrawerIds.UPDATE_PRODUCT_SUBSCRIPTION, {
                      product,
                      subscriptionId: product.subscription.id,
                    });
                  }
                }}
              >
                Manage Subscription
              </Menu.Item>
              <Menu.Item
                className="font-medium"
                isVisible={product.subscription === null}
                onClick={e => {
                  setIsOpen(false, e);
                  open(DrawerIds.SUBSCRIBE_TO_PRODUCT, {
                    product,
                  });
                }}
              >
                Subscribe
              </Menu.Item>
            </Menu.Content>
          </Menu>
        )}
      >
        {({ ref, params, isOpen }) => (
          <IconButton.Transparent
            {...params}
            ref={ref}
            isActive={isOpen}
            icon="ellipsis-h"
            className="text-gray-500 hover:bg-gray-100"
            radius="full"
            activeClassName="text-blue-700 bg-gray-100"
            size="medium"
          />
        )}
      </DropdownMenu>
    </div>
  );
};

export default ActionsCell;
