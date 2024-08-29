"use client";
import type { FullProductSubscription, Product } from "~/database/model";
import { ProductSubscriptionType } from "~/database/model";

import { Link } from "~/components/buttons";
import { useDrawers } from "~/components/drawers/hooks";
import { Tooltip } from "~/components/floating/Tooltip";
import { Text } from "~/components/typography";

export interface SubscribeToOtherActionProps {
  readonly product: Product;
  readonly subscriptions: FullProductSubscription[];
}

export const SubscribeToOtherAction = ({
  product,
  subscriptions,
}: SubscribeToOtherActionProps): JSX.Element => {
  const { ids, open } = useDrawers();

  const hasPriceChangeSubscription = subscriptions
    .map(sub => sub.subscriptionType)
    .includes(ProductSubscriptionType.PriceChangeSubscription);
  const hasStatusChangeSubscription = subscriptions
    .map(sub => sub.subscriptionType)
    .includes(ProductSubscriptionType.StatusChangeSubscription);

  if (
    (hasStatusChangeSubscription && hasPriceChangeSubscription) ||
    (!hasStatusChangeSubscription && !hasPriceChangeSubscription)
  ) {
    return <></>;
  } else if (!hasStatusChangeSubscription) {
    return (
      <Tooltip
        placement="top-end"
        width={300}
        offset={{ mainAxis: 12 }}
        inPortal
        content={
          <div className="flex flex-col gap-2">
            <Text fontWeight="regular" fontSize="sm">
              You are currently subscribed to receive notifications for when the product&apos;s{" "}
              <Text fontWeight="semibold" component="span">
                price
              </Text>{" "}
              changes.
            </Text>
            <Text fontWeight="regular" fontSize="sm">
              Click if you would also like to subscribe to receive notifications for when the
              product&apos;s{" "}
              <Text fontWeight="semibold" component="span">
                inventory state
              </Text>{" "}
              changes.
            </Text>
          </div>
        }
      >
        <Link.Primary
          icon="plus"
          element="button"
          onClick={() =>
            open(ids.SUBSCRIBE_TO_STATUS_CHANGES, { product, excludeEnableToggle: true })
          }
        >
          Inventory Subscription
        </Link.Primary>
      </Tooltip>
    );
  } else {
    return (
      <Tooltip
        placement="top-end"
        inPortal
        offset={{ mainAxis: 12 }}
        width={300}
        content={
          <div className="flex flex-col gap-2">
            <Text fontWeight="regular" fontSize="sm">
              You are currently subscribed to receive notifications for when the product&apos;s{" "}
              <Text fontWeight="semibold" component="span">
                inventory state
              </Text>{" "}
              changes.
            </Text>
            <Text fontWeight="regular" fontSize="sm">
              Click if you would also like to subscribe to receive notifications for when the
              product&apos;s{" "}
              <Text fontWeight="semibold" component="span">
                price
              </Text>{" "}
              changes.
            </Text>
          </div>
        }
      >
        <Link.Primary
          icon="plus"
          element="button"
          onClick={() =>
            open(ids.SUBSCRIBE_TO_PRICE_CHANGES, { product, excludeEnableToggle: true })
          }
        >
          Price Subscription
        </Link.Primary>
      </Tooltip>
    );
  }
};
