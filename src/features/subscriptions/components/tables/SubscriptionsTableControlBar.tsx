"use client";
import { type FullProductSubscription } from "~/database/model";

import { DisableButton } from "~/components/buttons/DisableButton";
import { EnableButton } from "~/components/buttons/EnableButton";
import { Tooltip } from "~/components/floating/Tooltip";
import { TableControlBar, type TableControlBarProps } from "~/components/tables/TableControlBar";
/* eslint-disable-next-line max-len */
import { DeleteSubscriptionsConfirmationDialog } from "~/features/subscriptions/components/dialogs/DeleteSubscriptionsConfirmationDialog";

export interface SubscriptionsTableFilterBarProps
  extends Omit<TableControlBarProps<FullProductSubscription>, "children"> {}

export const SubscriptionsTableControlBar = ({
  selectedRows,
  ...props
}: SubscriptionsTableFilterBarProps): JSX.Element => {
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
        isDisabled={numDisabled === 0}
      >
        <EnableButton isDisabled={numDisabled === 0} />
      </Tooltip>
      <Tooltip
        placement="top-start"
        inPortal={props.tooltipsInPortal}
        offset={{ mainAxis: 6 }}
        content={`Disable ${numEnabled} selected subscription${numEnabled <= 1 ? "" : "s"}.`}
        className="text-sm"
        isDisabled={numEnabled === 0}
      >
        <DisableButton isDisabled={numEnabled === 0} />
      </Tooltip>
    </TableControlBar>
  );
};
