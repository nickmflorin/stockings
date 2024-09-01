"use client";
import RouterLink from "next/link";

import { type ApiProductNotification } from "~/database/model";
import { ProductNotificationType } from "~/database/model";

import { InlineLink } from "~/components/buttons";
import { ExternalProductIconLink } from "~/components/buttons/ExternalProductIconLink";
import { ProductLink } from "~/components/buttons/ProductLink";
import { convertConfigsToColumns, type DataTableColumnConfig } from "~/components/tables";
import {
  type DataTableBodyProps,
  DataTableBody,
} from "~/components/tables/data-tables/DataTableBody";
import { Text, Description } from "~/components/typography";
import { DateTimeText } from "~/components/typography/DateTimeText";
import { HorizontallyCentered } from "~/components/util";
import {
  ProductNotificationsTableColumns,
  type ProductNotificationsTableColumnId,
} from "~/features/notifications";
import { NotificationStateText } from "~/features/notifications/components/NotificationStateText";
import { NotificationTypeText } from "~/features/notifications/components/NotificationTypeText";
/* eslint-disable-next-line max-len */
import { PriceChangeConditionTransition } from "~/features/subscriptions/components/PriceChangeConditionTransition";
/* eslint-disable-next-line max-len */
import { StatusChangeConditionTransition } from "~/features/subscriptions/components/StatusChangeConditionTransition";

export interface NotificationsTableBodyProps
  extends Omit<
    DataTableBodyProps<ApiProductNotification<["product"]>, ProductNotificationsTableColumnId>,
    "rowIsSelected" | "onRowSelected" | "getRowActions" | "columns"
  > {}

export const NotificationsTableBody = (props: NotificationsTableBodyProps): JSX.Element => (
  <DataTableBody
    emptyContent={
      <div className="flex flex-col gap-4">
        <Description fontSize="sm">You have not received any notifications.</Description>
        <Description fontSize="sm">
          If you have not yet already done so, visit the{" "}
          <InlineLink element="a" component={RouterLink} href="/products" fontWeight="medium">
            Products Page
          </InlineLink>{" "}
          and subscribe to receive notifications for the products you would like.
        </Description>
      </div>
    }
    {...props}
    columns={convertConfigsToColumns(
      [...ProductNotificationsTableColumns] as DataTableColumnConfig<
        ApiProductNotification<["product"]>,
        ProductNotificationsTableColumnId
      >[],
      {
        product: {
          cellRenderer(datum) {
            return (
              <div className="flex flex-row items-center gap-2">
                <ProductLink product={datum.product} location="internal" />
                <ExternalProductIconLink product={datum.product} />
              </div>
            );
          },
        },
        event: {
          cellRenderer(datum) {
            if (datum.notificationType === ProductNotificationType.StatusChangeNotification) {
              return (
                <HorizontallyCentered>
                  <StatusChangeConditionTransition
                    fromStatus={datum.previousStatus}
                    toStatus={datum.newStatus}
                  />
                </HorizontallyCentered>
              );
            } else if (datum.notificationType === ProductNotificationType.PriceChangeNotification) {
              return (
                <HorizontallyCentered>
                  <PriceChangeConditionTransition
                    fromPrice={datum.previousPrice}
                    toPrice={datum.newPrice}
                  />
                </HorizontallyCentered>
              );
            }
          },
        },
        type: {
          cellRenderer(datum) {
            return (
              <HorizontallyCentered>
                <NotificationTypeText
                  fontWeight="medium"
                  fontSize="sm"
                  notificationType={datum.notificationType}
                />
              </HorizontallyCentered>
            );
          },
        },
        state: {
          cellRenderer(datum) {
            return (
              <div className="flex flex-col">
                <NotificationStateText fontWeight="medium" fontSize="sm" state={datum.state} />
                {datum.stateAsOf && (
                  <Text fontWeight="regular" fontSize="sm" className="text-gray-500">
                    {" "}
                    as of <DateTimeText component="span" value={datum.stateAsOf} />
                  </Text>
                )}
              </div>
            );
          },
        },
        sentAt: {
          cellRenderer(datum) {
            return <div className="flex flex-col">Need to do</div>;
          },
        },
      },
    )}
  />
);

export default NotificationsTableBody;
