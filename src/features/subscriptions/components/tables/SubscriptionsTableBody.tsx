"use client";
import { useRouter } from "next/navigation";
import { useTransition, useState } from "react";

import { uniq, uniqBy } from "lodash-es";
import { toast } from "react-toastify";

import {
  type FullProductSubscription,
  type PriceChangeCondition,
  type StatusChangeSubscriptionCondition,
} from "~/database/model";
import { SubscriptionType } from "~/database/model";
import { logger } from "~/internal/logger";

import { arraysHaveSameElements } from "~/lib/arrays";

import { updateSubscription, deleteSubscription } from "~/actions/mutations/subscriptions";

import { PriceChangeConditionBadge } from "~/components/badges/PriceChangeConditionBadge";
import { ExternalProductIconLink } from "~/components/buttons/ExternalProductIconLink";
import { ProductLink } from "~/components/buttons/ProductLink";
import { useDrawers } from "~/components/drawers/hooks";
import { EnabledIcon } from "~/components/icons/EnabledIcon";
import Icon from "~/components/icons/Icon";
import { convertConfigsToColumns, type DataTableColumnConfig } from "~/components/tables";
import { DataTableBody } from "~/components/tables/data-tables/DataTableBody";
import { Text } from "~/components/typography";
import { DateTimeText } from "~/components/typography/DateTimeText";
import {
  SubscriptionsTableColumns,
  type SubscriptionsTableColumnId,
} from "~/features/subscriptions";

import { StatusChangeConditionsDropdown } from "../StatusChangeConditionsDropdown";
import { SubscriptionTypeText } from "../SubscriptionTypeText";

import { SubscriptionsTableControlBar } from "./SubscriptionsTableControlBar";

export interface SubscriptionsTableBodyProps {
  readonly data: FullProductSubscription[];
}

export const SubscriptionsTableBody = ({ data }: SubscriptionsTableBodyProps): JSX.Element => {
  const { ids, open } = useDrawers();
  const [selectedRows, setSelectedRows] = useState<FullProductSubscription[]>([]);

  const { refresh } = useRouter();

  const [enablePending, enableTransition] = useTransition();
  const [disablePending, disableTransition] = useTransition();
  const [deletePending, deleteTransition] = useTransition();
  const [editPending, editTransition] = useTransition();

  return (
    <>
      <SubscriptionsTableControlBar
        selectedRows={selectedRows}
        allRowsAreSelected={
          data.length !== 0 &&
          arraysHaveSameElements(
            selectedRows.map(r => r.id),
            data.map(datum => datum.id),
          )
        }
        onSelectAllRows={selected => (selected ? setSelectedRows(data) : setSelectedRows([]))}
      />
      <DataTableBody
        actionMenuWidth={140}
        rowIsSelected={datum => selectedRows.map(r => r.id).includes(datum.id)}
        onRowSelected={(datum, isSelected) =>
          setSelectedRows(curr =>
            isSelected ? uniqBy([...curr, datum], d => d.id) : curr.filter(d => d.id !== datum.id),
          )
        }
        getRowActions={(subscription, { setIsOpen }) => [
          {
            content: "Edit",
            isLoading: editPending,
            isVisible: [
              SubscriptionType.StatusChangeSubscription,
              SubscriptionType.PriceChangeSubscription,
            ].includes(
              subscription.subscriptionType as
                | typeof SubscriptionType.StatusChangeSubscription
                | typeof SubscriptionType.PriceChangeSubscription,
            ),
            icon: <Icon icon="pen-to-square" size="16px" className="text-blue-600" />,
            onClick: async e =>
              editTransition(() => {
                if (subscription.subscriptionType === SubscriptionType.StatusChangeSubscription) {
                  open(ids.UPDATE_STATUS_CHANGE_SUBSCRIPTION, {
                    subscriptionId: subscription.id,
                    product: subscription.product,
                  });
                  setIsOpen(false, e);
                } else if (
                  subscription.subscriptionType === SubscriptionType.PriceChangeSubscription
                ) {
                  open(ids.UPDATE_PRICE_CHANGE_SUBSCRIPTION, {
                    subscriptionId: subscription.id,
                    product: subscription.product,
                  });
                  setIsOpen(false, e);
                }
              }),
          },
          {
            isVisible: !subscription.enabled,
            content: "Enable",
            loadingText: "Enabling",
            icon: <Icon icon="volume-high" size="16px" className="text-gray-600" />,
            isLoading: enablePending,
            onClick: async (e, instance) => {
              instance.setLoading(true);
              let response: Awaited<ReturnType<typeof updateSubscription>> | null = null;
              try {
                response = await updateSubscription(subscription.id, { enabled: true });
              } catch (e) {
                logger.errorUnsafe(
                  e,
                  `There was an error enabling subscription with ID '${subscription.id}'!`,
                );
                toast.error(
                  "There was an error enabling the subscription. Please try again later.",
                );
                return instance.setLoading(false);
              }
              const { error } = response;
              if (error) {
                logger.errorUnsafe(
                  e,
                  `There was an error enabling subscription with ID '${subscription.id}'!`,
                );
                toast.error(
                  "There was an error enabling the subscription. Please try again later.",
                );
                return;
              }
              return enableTransition(() => {
                refresh();
                instance.setLoading(false);
                setIsOpen(false, e);
              });
            },
          },
          {
            isVisible: subscription.enabled,
            content: "Disable",
            loadingText: "Disabling",
            icon: <Icon icon="volume-xmark" size="16px" className="text-gray-600" />,
            isLoading: disablePending,
            onClick: async (e, instance) => {
              instance.setLoading(true);
              let response: Awaited<ReturnType<typeof updateSubscription>> | null = null;
              try {
                response = await updateSubscription(subscription.id, { enabled: false });
              } catch (e) {
                logger.errorUnsafe(
                  e,
                  `There was an error disabling subscription with ID '${subscription.id}'!`,
                );
                toast.error(
                  "There was an error disabling the subscription. Please try again later.",
                );
                return instance.setLoading(false);
              }
              const { error } = response;
              if (error) {
                logger.errorUnsafe(
                  e,
                  `There was an error disabling subscription with ID '${subscription.id}'!`,
                );
                toast.error(
                  "There was an error disabling the subscription. Please try again later.",
                );
                return;
              }
              return disableTransition(() => {
                refresh();
                instance.setLoading(false);
                setIsOpen(false, e);
              });
            },
          },
          {
            content: "Delete",
            isLoading: deletePending,
            loadingText: "Deleting",
            icon: <Icon icon="trash-alt" size="16px" className="text-red-600" />,
            onClick: async (e, instance) => {
              instance.setLoading(true);
              let response: Awaited<ReturnType<typeof deleteSubscription>> | null = null;
              try {
                response = await deleteSubscription(subscription.id);
              } catch (e) {
                logger.errorUnsafe(
                  e,
                  `There was an error deleting the subscription with ID '${subscription.id}'!`,
                );
                toast.error(
                  "There was an error deleting the subscription. Please try again later.",
                );
                return instance.setLoading(false);
              }
              const { error } = response;
              if (error) {
                logger.errorUnsafe(
                  e,
                  `There was an error deleting the subscription with ID '${subscription.id}'!`,
                );
                toast.error(
                  "There was an error deleting the subscription. Please try again later.",
                );
                return;
              }
              return deleteTransition(() => {
                refresh();
                instance.setLoading(false);
                setIsOpen(false, e);
              });
            },
          },
        ]}
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
            conditions: {
              cellRenderer: datum =>
                datum.subscriptionType === SubscriptionType.StatusChangeSubscription &&
                datum.conditions.length !== 0 ? (
                  <div className="flex flex-row items-center justify-center">
                    <StatusChangeConditionsDropdown
                      conditions={datum.conditions as StatusChangeSubscriptionCondition[]}
                    />
                  </div>
                ) : datum.subscriptionType === SubscriptionType.PriceChangeSubscription &&
                  datum.conditions.length !== 0 ? (
                  <div className="flex flex-col items-center gap-2">
                    {uniq(datum.conditions as PriceChangeCondition[]).map((condition, index) => (
                      <PriceChangeConditionBadge key={index} condition={condition} />
                    ))}
                  </div>
                ) : (
                  <></>
                ),
            },
            enabled: {
              cellRenderer(datum) {
                return (
                  <div className="flex flex-row items-center justify-center">
                    <EnabledIcon isEnabled={datum.enabled} size="20px" />
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
    </>
  );
};

export default SubscriptionsTableBody;
