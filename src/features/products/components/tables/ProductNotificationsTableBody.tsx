"use client";
import type { ApiProduct, ProductSubscriptionType } from "~/database/model";

import { InlineLink } from "~/components/buttons";
import { useDrawers } from "~/components/drawers/hooks";
import { Description } from "~/components/typography";
import {
  NotificationsTableBody,
  type NotificationsTableBodyProps,
} from "~/features/notifications/components/tables/NotificationsTableBody";

export interface ProductSubscriptionsTableBodyProps
  extends Omit<
    NotificationsTableBodyProps,
    | "emptyContent"
    | "isEmpty"
    | "controlBarTargetId"
    | "controlBarTooltipsInPortal"
    | "excludeColumns"
  > {
  readonly activeSubscriptions: ProductSubscriptionType[];
  readonly product?: ApiProduct<["statusChangeSubscription", "priceChangeSubscription"]>;
}

export const ProductNotificationsTableBody = ({
  product,
  activeSubscriptions,
  ...props
}: ProductSubscriptionsTableBodyProps): JSX.Element => {
  const { ids, open } = useDrawers();
  return (
    <NotificationsTableBody
      {...props}
      isEmpty={props.data.length === 0}
      excludeColumns={["product"]}
      emptyContent={
        product ? (
          <div className="flex flex-col gap-4">
            <Description fontSize="sm">
              {activeSubscriptions.length === 0
                ? "You have not yet received any notifications for this product because " +
                  "you are not subscribed to this product."
                : "You have not yet received any notifications for this product."}
            </Description>
            {activeSubscriptions.length === 0 && (
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
            )}
          </div>
        ) : (
          <></>
        )
      }
    />
  );
};
