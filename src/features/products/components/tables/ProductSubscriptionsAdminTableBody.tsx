import { type ApiProductSubscription } from "~/database/model";

import {
  SubscriptionsAdminTableBody,
  type SubscriptionsAdminTableBodyProps,
} from "~/features/subscriptions/components/tables/SubscriptionsAdminTableBody";

export interface ProductSubscriptionsTableBodyProps
  extends Omit<
    SubscriptionsAdminTableBodyProps<
      ApiProductSubscription<["conditions", "user", "notificationsCount"]>
    >,
    | "emptyContent"
    | "isEmpty"
    | "controlBarTargetId"
    | "controlBarTooltipsInPortal"
    | "excludeColumns"
  > {}

export const ProductSubscriptionsTableBody = (
  props: ProductSubscriptionsTableBodyProps,
): JSX.Element => (
  <SubscriptionsAdminTableBody
    {...props}
    isEmpty={props.data.length === 0}
    excludeColumns={["product"]}
    emptyContent="There are currently no subscriptions for this product."
    controlBarTargetId="product-subscriptions-control-bar"
    controlBarTooltipsInPortal
  />
);
