import type { ApiProduct } from "~/database/model";

import { Link } from "~/components/buttons";
import { useDrawers } from "~/components/drawers/hooks";
import { Icon } from "~/components/icons/Icon";
import { Text } from "~/components/typography";

export interface SubscriptionCellProps {
  readonly product: ApiProduct<["statusChangeSubscription", "priceChangeSubscription"]>;
}

export const SubscriptionCell = ({ product }: SubscriptionCellProps): JSX.Element => {
  const { ids, open } = useDrawers();
  const priceChange = product.priceChangeSubscription;
  const statusChange = product.statusChangeSubscription;

  if (!priceChange && !statusChange) {
    return (
      <Text fontSize="sm" className="text-gray-500">
        Not Subscribed
      </Text>
    );
  }
  return (
    <div className="flex flex-row items-center gap-2">
      <div className="flex flex-col gap-1">
        <div className="flex flex-row gap-2 items-center">
          {statusChange ? (
            <Icon className="text-green-600" icon="check-circle" size="sm" iconStyle="solid" />
          ) : (
            <Icon className="text-gray-600" icon="circle-xmark" size="sm" iconStyle="solid" />
          )}
          <Link
            fontSize="sm"
            onClick={() => {
              if (statusChange) {
                return open(ids.UPDATE_STATUS_CHANGE_SUBSCRIPTION, {
                  subscriptionId: statusChange.id,
                  product,
                });
              }
              return open(ids.SUBSCRIBE_TO_STATUS_CHANGES, { product });
            }}
          >
            Status Notifications
          </Link>
        </div>
        <div className="flex flex-row gap-2 items-center">
          {priceChange ? (
            <Icon className="text-green-600" icon="check-circle" size="sm" iconStyle="solid" />
          ) : (
            <Icon className="text-gray-600" icon="circle-xmark" size="sm" iconStyle="solid" />
          )}
          <Link
            fontSize="sm"
            onClick={() => {
              if (priceChange) {
                return open(ids.UPDATE_PRICE_CHANGE_SUBSCRIPTION, {
                  subscriptionId: priceChange.id,
                  product,
                });
              }
              return open(ids.SUBSCRIBE_TO_PRICE_CHANGES, { product });
            }}
          >
            Price Notifications
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCell;
