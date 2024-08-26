"use client";
import RouterLink from "next/link";

import { type Notification } from "~/database/model";

import { InlineLink } from "~/components/buttons";
import { convertConfigsToColumns, type DataTableColumnConfig } from "~/components/tables";
import { DataTableBody } from "~/components/tables/data-tables/DataTableBody";
import { Text, Description } from "~/components/typography";
import { DateTimeText } from "~/components/typography/DateTimeText";
import {
  NotificationsTableColumns,
  type NotificationsTableColumnId,
} from "~/features/notifications";
import { NotificationStateText } from "~/features/notifications/components/NotificationStateText";
import { NotificationTypeText } from "~/features/notifications/components/NotificationTypeText";

export interface NotificationsTableBodyProps {
  readonly data: Notification[];
}

export const NotificationsTableBody = ({ data }: NotificationsTableBodyProps): JSX.Element => (
  <DataTableBody
    isEmpty={data.length === 0}
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
    columns={convertConfigsToColumns(
      [...NotificationsTableColumns] as DataTableColumnConfig<
        Notification,
        NotificationsTableColumnId
      >[],
      {
        type: {
          cellRenderer(datum) {
            return (
              <NotificationTypeText
                fontWeight="medium"
                fontSize="sm"
                notificationType={datum.notificationType}
              />
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
      },
    )}
    data={data}
  />
);

export default NotificationsTableBody;
