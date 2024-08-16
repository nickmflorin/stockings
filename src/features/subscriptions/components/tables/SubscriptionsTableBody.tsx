"use client";
import { type ApiProductSubscription, type FullProductSubscription } from "~/database/model";

import { convertConfigsToColumns, type DataTableColumnConfig } from "~/components/tables";
import { DataTableBody } from "~/components/tables/data-tables/DataTableBody";
import {
  SubscriptionsTableColumns,
  type SubscriptionsTableColumnId,
} from "~/features/subscriptions";
import { SubscriptionTypeText } from "~/features/subscriptions/components/SubscriptionTypeText";

export interface SubscriptionsTableBodyProps {
  readonly data: FullProductSubscription[];
}

export const SubscriptionsTableBody = ({ data }: SubscriptionsTableBodyProps): JSX.Element => (
  <DataTableBody
    columns={convertConfigsToColumns(
      [...SubscriptionsTableColumns] as DataTableColumnConfig<
        FullProductSubscription,
        SubscriptionsTableColumnId
      >[],
      {
        type: {
          cellRenderer(datum) {
            return (
              <SubscriptionTypeText
                fontWeight="medium"
                fontSize="sm"
                subscriptionType={datum.subscriptionType}
              />
            );
          },
        },
        notificationsCount: {
          cellRenderer(datum) {
            return datum.notificationsCount;
          },
        },
      },
    )}
    data={data}
  />
);

export default SubscriptionsTableBody;
