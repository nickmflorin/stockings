"use client";
import { type Notification } from "~/database/model";

import { convertConfigsToColumns, type DataTableColumnConfig } from "~/components/tables";
import { DataTableBody } from "~/components/tables/data-tables/DataTableBody";
import { Text } from "~/components/typography";
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
