import type { ApiProduct } from "~/database/model";

import { IconButton } from "~/components/buttons";
import { useDrawers } from "~/components/drawers/hooks/use-drawers";
import { DropdownMenu } from "~/components/menus/DropdownMenu";
import { Menu } from "~/components/menus/Menu";

export interface ActionsCellProps {
  readonly product: ApiProduct;
}

export const ActionsCell = ({ product }: ActionsCellProps): JSX.Element => {
  const { ids, open } = useDrawers();

  return (
    <div className="flex flex-row items-center justify-center">
      <DropdownMenu
        placement="bottom-end"
        width={220}
        inPortal
        content={({ setIsOpen }) => (
          <Menu>
            <Menu.Content>
              <Menu.Item
                className="font-medium"
                isVisible={product.statusChangeSubscription !== null}
                onClick={e => {
                  if (product.statusChangeSubscription !== null) {
                    setIsOpen(false, e);
                    open(ids.UPDATE_STATUS_CHANGE_SUBSCRIPTION, {
                      product,
                      subscriptionId: product.statusChangeSubscription.id,
                    });
                  }
                }}
              >
                Manage Status Subscription
              </Menu.Item>
              <Menu.Item
                className="font-medium"
                isVisible={product.priceChangeSubscription !== null}
                onClick={e => {
                  if (product.priceChangeSubscription !== null) {
                    setIsOpen(false, e);
                    open(ids.UPDATE_PRICE_CHANGE_SUBSCRIPTION, {
                      product,
                      subscriptionId: product.priceChangeSubscription.id,
                    });
                  }
                }}
              >
                Manage Price Subscription
              </Menu.Item>
              <Menu.Item
                className="font-medium"
                isVisible={product.statusChangeSubscription === null}
                onClick={e => {
                  setIsOpen(false, e);
                  open(ids.SUBSCRIBE_TO_STATUS_CHANGES, {
                    product,
                  });
                }}
              >
                Subscribe to Status Changes
              </Menu.Item>
              <Menu.Item
                className="font-medium"
                isVisible={product.priceChangeSubscription === null}
                onClick={e => {
                  setIsOpen(false, e);
                  open(ids.SUBSCRIBE_TO_PRICE_CHANGES, {
                    product,
                  });
                }}
              >
                Subscribe to Price Changes
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
            element="button"
            icon="ellipsis-h"
            className="text-gray-500 hover:bg-gray-100"
            radius="full"
            activeClassName="text-blue-700 bg-gray-100"
            size="medium"
            onClick={e => {
              e.stopPropagation();
              if ("onClick" in params && typeof params.onClick === "function") {
                params.onClick?.(e);
              }
            }}
          />
        )}
      </DropdownMenu>
    </div>
  );
};

export default ActionsCell;
