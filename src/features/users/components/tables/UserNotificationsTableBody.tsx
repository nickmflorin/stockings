"use client";
import type { ApiProductNotification } from "~/database/model";

import {
  NotificationsAdminTableBody,
  type NotificationsAdminTableBodyProps,
} from "~/features/notifications/components/tables/NotificationsAdminTableBody";

export interface UserNotificationsTableBodyProps
  extends Omit<
    NotificationsAdminTableBodyProps<ApiProductNotification<["product"]>>,
    | "emptyContent"
    | "isEmpty"
    | "controlBarTargetId"
    | "controlBarTooltipsInPortal"
    | "excludeColumns"
  > {}

export const UserNotificationsTableBody = (props: UserNotificationsTableBodyProps): JSX.Element => (
  <NotificationsAdminTableBody
    {...props}
    excludeColumns={["user"]}
    isEmpty={props.data.length === 0}
    controlBarTargetId="user-notifications-control-bar"
    controlBarTooltipsInPortal
    emptyContent="The user has not yet received any notifications."
  />
);
