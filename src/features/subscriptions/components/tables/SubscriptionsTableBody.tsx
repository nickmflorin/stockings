"use client";
import { type ApiProductSubscription } from "~/database/model";

import { convertConfigsToColumns, type DataTableColumnConfig } from "~/components/tables";
import { DataTableBody } from "~/components/tables/data-tables/DataTableBody";
import {
  SubscriptionsTableColumns,
  type SubscriptionsTableColumnId,
} from "~/features/subscriptions";
import { SubscriptionTypeText } from "~/features/subscriptions/components/SubscriptionTypeText";

export interface SubscriptionsTableBodyProps {
  readonly data: ApiProductSubscription[];
}

export const SubscriptionsTableBody = ({ data }: SubscriptionsTableBodyProps): JSX.Element => (
  <DataTableBody
    columns={convertConfigsToColumns(
      [...SubscriptionsTableColumns] as DataTableColumnConfig<
        ApiProductSubscription,
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
      },
    )}
    data={data}
  />
);

export default SubscriptionsTableBody;
