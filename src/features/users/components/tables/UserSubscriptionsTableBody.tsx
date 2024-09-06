import type { ApiProductSubscription } from "~/database/model";

import {
  SubscriptionsAdminTableBody,
  type SubscriptionsAdminTableBodyProps,
} from "~/features/subscriptions/components/tables/SubscriptionsAdminTableBody";

export interface UserSubscriptionsTableBodyProps
  extends Omit<
    SubscriptionsAdminTableBodyProps<
      ApiProductSubscription<["conditions", "product", "notificationsCount"]>
    >,
    | "emptyContent"
    | "isEmpty"
    | "controlBarTargetId"
    | "controlBarTooltipsInPortal"
    | "excludeColumns"
  > {}

export const UserSubscriptionsTableBody = (props: UserSubscriptionsTableBodyProps): JSX.Element => (
  <SubscriptionsAdminTableBody
    {...props}
    isEmpty={props.data.length === 0}
    excludeColumns={["user"]}
    emptyContent="The user currently is not subscribed to any products."
    controlBarTargetId="user-subscriptions-control-bar"
    controlBarTooltipsInPortal
  />
);
