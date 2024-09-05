"use client";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import { toast } from "react-toastify";

import { type ApiProductSubscription } from "~/database/model";
import { logger } from "~/internal/logger";

import { disableProductSubscriptions, enableProductSubscriptions } from "~/actions/subscriptions";

import { DisableButton } from "~/components/buttons/DisableButton";
import { EnableButton } from "~/components/buttons/EnableButton";
import { Tooltip } from "~/components/floating/Tooltip";
import { TableControlBar, type TableControlBarProps } from "~/components/tables/TableControlBar";
/* eslint-disable-next-line max-len */
import { DeleteSubscriptionsConfirmationDialog } from "~/features/subscriptions/components/dialogs/DeleteSubscriptionsConfirmationDialog";

export interface SubscriptionsTableFilterBarProps
  extends Omit<TableControlBarProps<ApiProductSubscription<[]>>, "children"> {}

export const SubscriptionsTableControlBar = ({
  selectedRows,
  ...props
}: SubscriptionsTableFilterBarProps): JSX.Element => {
  const { refresh } = useRouter();

  const [isEnabling, setIsEnabling] = useState(false);
  const [isDisabling, setIsDisabling] = useState(false);

  const [_, transition] = useTransition();

  const numEnabled = selectedRows.filter(row => row.enabled).length;
  const numDisabled = selectedRows.filter(row => !row.enabled).length;
  return (
    <TableControlBar
      {...props}
      selectedRows={selectedRows}
      canDeleteRows
      deleteTooltipContent={numRows => `Delete ${numRows} selected subscriptions.`}
      confirmationModal={DeleteSubscriptionsConfirmationDialog}
    >
      <Tooltip
        placement="top-start"
        inPortal={props.tooltipsInPortal}
        offset={{ mainAxis: 6 }}
        content={`Enable ${numDisabled} selected subscription${numDisabled <= 1 ? "" : "s"}.`}
        className="text-sm"
        isDisabled={numDisabled === 0 || props.isDisabled}
      >
        <EnableButton
          isDisabled={numDisabled === 0 || props.isDisabled}
          isLoading={isEnabling}
          onClick={async () => {
            let response: Awaited<ReturnType<typeof enableProductSubscriptions>> | null = null;
            setIsEnabling(true);
            try {
              response = await enableProductSubscriptions(selectedRows.map(row => row.id));
            } catch (e) {
              logger.errorUnsafe(e, "There was an error enabling the product subscriptions.", {
                subscriptions: selectedRows.map(row => row.id),
              });
              setIsEnabling(false);
              return toast.error("There was an error enabling the subscriptions.");
            }
            const { error } = response;
            if (error) {
              logger.error(error, "There was an error enabling the product subscriptions.", {
                subscriptions: selectedRows.map(row => row.id),
              });
              setIsEnabling(false);
              return toast.error("There was an error enabling the subscriptions.");
            }
            transition(() => {
              refresh();
              setIsEnabling(false);
              toast.success("The subscriptions have been enabled.");
            });
          }}
        />
      </Tooltip>
      <Tooltip
        placement="top-start"
        inPortal={props.tooltipsInPortal}
        offset={{ mainAxis: 6 }}
        content={`Disable ${numEnabled} selected subscription${numEnabled <= 1 ? "" : "s"}.`}
        className="text-sm"
        isDisabled={numEnabled === 0 || props.isDisabled}
      >
        <DisableButton
          isDisabled={numEnabled === 0 || props.isDisabled}
          isLoading={isDisabling}
          onClick={async () => {
            let response: Awaited<ReturnType<typeof disableProductSubscriptions>> | null = null;
            setIsDisabling(true);
            try {
              response = await disableProductSubscriptions(selectedRows.map(row => row.id));
            } catch (e) {
              logger.errorUnsafe(e, "There was an error disabling the product subscriptions.", {
                subscriptions: selectedRows.map(row => row.id),
              });
              setIsDisabling(false);
              return toast.error("There was an error disabling the subscriptions.");
            }
            const { error } = response;
            if (error) {
              logger.error(error, "There was an error disabling the product subscriptions.", {
                subscriptions: selectedRows.map(row => row.id),
              });
              setIsDisabling(false);
              return toast.error("There was an error disabling the subscriptions.");
            }
            transition(() => {
              refresh();
              setIsDisabling(false);
              toast.success("The subscriptions have been disabled.");
            });
          }}
        />
      </Tooltip>
    </TableControlBar>
  );
};
