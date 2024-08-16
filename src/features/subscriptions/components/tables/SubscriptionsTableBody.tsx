"use client";
import { type FullProductSubscription } from "~/database/model";

import { ExternalProductIconLink } from "~/components/buttons/ExternalProductIconLink";
import { ProductLink } from "~/components/buttons/ProductLink";
import { convertConfigsToColumns, type DataTableColumnConfig } from "~/components/tables";
import { DataTableBody } from "~/components/tables/data-tables/DataTableBody";
import { Text } from "~/components/typography";
import { DateTimeText } from "~/components/typography/DateTimeText";
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
        createdAt: {
          cellRenderer(datum) {
            return (
              <Text fontWeight="regular" fontSize="sm" className="text-description">
                Created on{" "}
                <DateTimeText
                  className="text-body"
                  fontWeight="medium"
                  component="span"
                  value={datum.createdAt}
                />
              </Text>
            );
          },
        },
        updatedAt: {
          cellRenderer(datum) {
            return (
              <Text fontWeight="regular" fontSize="sm" className="text-description">
                Last updated on{" "}
                <DateTimeText
                  className="text-body"
                  fontWeight="medium"
                  component="span"
                  value={datum.updatedAt}
                />
              </Text>
            );
          },
        },
      },
    )}
    data={data}
  />
);

export default SubscriptionsTableBody;
