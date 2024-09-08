import type { ApiProductNotification } from "~/database/model";

import {
  NotificationsAdminTableBody,
  type NotificationsAdminTableBodyProps,
} from "~/features/notifications/components/tables/NotificationsAdminTableBody";

export interface ProductNotificationsAdminTableBodyProps
  extends Omit<
    NotificationsAdminTableBodyProps<ApiProductNotification<["user"]>>,
    | "emptyContent"
    | "isEmpty"
    | "controlBarTargetId"
    | "controlBarTooltipsInPortal"
    | "excludeColumns"
    | "errorMessage"
  > {}

export const ProductNotificationsAdminTableBody = (
  props: ProductNotificationsAdminTableBodyProps,
): JSX.Element => (
  <NotificationsAdminTableBody
    {...props}
    isEmpty={props.data.length === 0}
    excludeColumns={["product"]}
    controlBarTargetId="product-notifications-control-bar"
    errorMessage="There was an error loading the notifications for this product."
    emptyContent="There are no notifications for this product."
  />
);
