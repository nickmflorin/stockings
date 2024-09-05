"use client";
import RouterLink from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useTransition, useState, useEffect } from "react";

import { uniqBy } from "lodash-es";
import { toast } from "react-toastify";

import { type ApiProductSubscription } from "~/database/model";
import { ProductSubscriptionType, ProductSubscriptionTypes } from "~/database/model";
import { logger } from "~/internal/logger";

import { addQueryParamsToUrl, parseQueryParams } from "~/integrations/http";
import { arraysHaveSameElements } from "~/lib/arrays";

import { updateProductSubscription, deleteProductSubscription } from "~/actions/subscriptions";

import { Link } from "~/components/buttons";
import { ExternalProductIconLink } from "~/components/buttons/ExternalProductIconLink";
import { ProductLink } from "~/components/buttons/ProductLink";
import { useDrawers } from "~/components/drawers/hooks";
import Icon from "~/components/icons/Icon";
import type { Action } from "~/components/structural/Actions";
import { convertConfigsToColumns, type DataTableColumnConfig } from "~/components/tables";
import {
  DataTableBody,
  type DataTableBodyProps,
} from "~/components/tables/data-tables/DataTableBody";
import { HorizontallyCentered } from "~/components/util";
import {
  SubscriptionsTableColumns,
  type SubscriptionsTableColumnId,
} from "~/features/subscriptions";

import { SubscriptionsTableColumnProperties } from "./SubscriptionsTableColumnProperties";
import { SubscriptionsTableControlBar } from "./SubscriptionsTableControlBar";

export interface SubscriptionsTableBodyProps
  extends Omit<
    DataTableBodyProps<
      ApiProductSubscription<["conditions", "notificationsCount", "product"]>,
      SubscriptionsTableColumnId
    >,
    "rowIsSelected" | "onRowSelected" | "getRowActions" | "columns"
  > {
  readonly scope?: "subscriptions" | "product";
  readonly controlBarTargetId: string;
  readonly controlBarTooltipsInPortal?: boolean;
  readonly actions?: Action[];
}

export const SubscriptionsTableBody = ({
  controlBarTargetId,
  controlBarTooltipsInPortal,
  actions,
  scope = "subscriptions",
  ...props
}: SubscriptionsTableBodyProps): JSX.Element => {
  const { ids, open } = useDrawers();
  const [selectedRows, setSelectedRows] = useState<
    ApiProductSubscription<["conditions", "notificationsCount", "product"]>[]
  >([]);

  const { refresh } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [enablePending, enableTransition] = useTransition();
  const [disablePending, disableTransition] = useTransition();
  const [deletePending, deleteTransition] = useTransition();
  const [editPending, editTransition] = useTransition();

  useEffect(() => {
    setSelectedRows(curr => props.data.filter(d => curr.map(r => r.id).includes(d.id)));
  }, [props.data]);

  return (
    <>
      <SubscriptionsTableControlBar
        actions={actions}
        isDisabled={props.isEmpty}
        targetId={controlBarTargetId}
        tooltipsInPortal={controlBarTooltipsInPortal}
        selectedRows={selectedRows}
        allRowsAreSelected={
          props.data.length !== 0 &&
          arraysHaveSameElements(
            selectedRows.map(r => r.id),
            props.data.map(datum => datum.id),
          )
        }
        onSelectAllRows={selected => (selected ? setSelectedRows(props.data) : setSelectedRows([]))}
      />
      <DataTableBody
        actionMenuWidth={140}
        {...props}
        rowHeight={58}
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
              ProductSubscriptionType.StatusChangeSubscription,
              ProductSubscriptionType.PriceChangeSubscription,
            ].includes(
              subscription.subscriptionType as
                | typeof ProductSubscriptionType.StatusChangeSubscription
                | typeof ProductSubscriptionType.PriceChangeSubscription,
            ),
            icon: <Icon icon="pen-to-square" size="16px" className="text-blue-600" />,
            onClick: async e =>
              editTransition(() => {
                if (
                  subscription.subscriptionType === ProductSubscriptionType.StatusChangeSubscription
                ) {
                  open(ids.UPDATE_STATUS_CHANGE_SUBSCRIPTION, {
                    subscriptionId: subscription.id,
                    product: subscription.product,
                  });
                  setIsOpen(false, e);
                } else if (
                  subscription.subscriptionType === ProductSubscriptionType.PriceChangeSubscription
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
              let response: Awaited<ReturnType<typeof updateProductSubscription>> | null = null;
              try {
                response = await updateProductSubscription(subscription.id, { enabled: true });
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
              let response: Awaited<ReturnType<typeof updateProductSubscription>> | null = null;
              try {
                response = await updateProductSubscription(subscription.id, { enabled: false });
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
              let response: Awaited<ReturnType<typeof deleteProductSubscription>> | null = null;
              try {
                response = await deleteProductSubscription(subscription.id);
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
          [...SubscriptionsTableColumns.columns] as DataTableColumnConfig<
            ApiProductSubscription<["conditions", "notificationsCount", "product"]>,
            SubscriptionsTableColumnId
          >[],
          {
            ...SubscriptionsTableColumnProperties,
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
            notifications: {
              cellRenderer(datum) {
                if (datum.notificationsCount === 0) {
                  return "-";
                }
                let href = addQueryParamsToUrl("/notifications", {
                  products: [datum.product.id],
                  types: [
                    ProductSubscriptionTypes.getModel(datum.subscriptionType).notificationType,
                  ],
                });
                if (scope === "product") {
                  href = addQueryParamsToUrl(pathname, {
                    ...parseQueryParams(searchParams.toString()),
                    types: [
                      ProductSubscriptionTypes.getModel(datum.subscriptionType).notificationType,
                    ],
                  });
                }
                return (
                  <HorizontallyCentered>
                    <Link component={RouterLink} element="a" href={href}>
                      {datum.notificationsCount}
                    </Link>
                  </HorizontallyCentered>
                );
              },
            },
          },
        )}
      />
    </>
  );
};

export default SubscriptionsTableBody;
