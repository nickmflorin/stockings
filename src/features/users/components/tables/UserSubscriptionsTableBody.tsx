import {
  SubscriptionsAdminTableBody,
  type SubscriptionsAdminTableBodyProps,
} from "~/features/subscriptions/components/tables/SubscriptionsAdminTableBody";

export interface UserSubscriptionsTableBodyProps
  extends Omit<
    SubscriptionsAdminTableBodyProps,
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
    emptyContent="The user currently is not subscribed to any products."
    controlBarTargetId="user-subscriptions-control-bar"
    controlBarTooltipsInPortal
  />
);
