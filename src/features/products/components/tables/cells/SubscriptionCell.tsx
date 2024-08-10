import type { ApiProduct } from "~/database/model";

import { Icon } from "~/components/icons/Icon";
import { Text } from "~/components/typography";

export interface SubscriptionCellProps {
  readonly product: ApiProduct;
}

export const SubscriptionCell = ({ product }: SubscriptionCellProps): JSX.Element =>
  product.subscription ? (
    <div className="flex flex-row items-center gap-2">
      <div className="flex flex-col gap-1">
        <div className="flex flex-row gap-2 items-center">
          {product.subscription.statusChange ? (
            <Icon className="text-green-600" icon="check-circle" size="sm" iconStyle="solid" />
          ) : (
            <Icon className="text-gray-600" icon="circle-xmark" size="sm" iconStyle="solid" />
          )}
          <Text fontSize="sm">Inventory Notifications</Text>
        </div>
        <div className="flex flex-row gap-2 items-center">
          {product.subscription.priceChange ? (
            <Icon className="text-green-600" icon="check-circle" size="sm" iconStyle="solid" />
          ) : (
            <Icon className="text-gray-600" icon="circle-xmark" size="sm" iconStyle="solid" />
          )}
          <Text fontSize="sm">Price Notifications</Text>
        </div>
      </div>
    </div>
  ) : (
    <Text fontSize="sm" className="text-gray-500">
      Not Subscribed
    </Text>
  );

export default SubscriptionCell;
