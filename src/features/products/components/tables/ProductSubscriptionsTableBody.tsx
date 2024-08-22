"use client";
import type { Product } from "~/database/model";

import { InlineLink } from "~/components/buttons";
import { useDrawers } from "~/components/drawers/hooks";
import { Description } from "~/components/typography";
import {
  SubscriptionsTableBody,
  type SubscriptionsTableBodyProps,
} from "~/features/subscriptions/components/tables/SubscriptionsTableBody";

export interface ProductSubscriptionsTableBodyProps
  extends Omit<
    SubscriptionsTableBodyProps,
    "emptyContent" | "isEmpty" | "controlBarTargetId" | "controlBarTooltipsInPortal"
  > {
  readonly product?: Product;
}

export const ProductSubscriptionsTableBody = ({
  product,
  ...props
}: ProductSubscriptionsTableBodyProps): JSX.Element => {
  const { ids, open } = useDrawers();
  return (
    <SubscriptionsTableBody
      {...props}
      isEmpty={props.data.length === 0}
      emptyContent={
        product ? (
          <div className="flex flex-col gap-4">
            <Description fontSize="sm">
              You are currently not subscribed to receive notifications for this product.
            </Description>
            <Description fontSize="sm" fontWeight="medium">
              Click{" "}
              <InlineLink
                element="button"
                onClick={() => open(ids.SUBSCRIBE_TO_PRODUCT_MULTIPART, { product })}
              >
                here
              </InlineLink>{" "}
              to subscribe.
            </Description>
          </div>
        ) : (
          <></>
        )
      }
      controlBarTargetId="product-subscriptions-control-bar"
      controlBarTooltipsInPortal
    />
  );
};
