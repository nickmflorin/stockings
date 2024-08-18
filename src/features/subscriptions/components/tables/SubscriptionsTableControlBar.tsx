"use client";
import { type FullProductSubscription } from "~/database/model";

import { DeleteButton } from "~/components/buttons/DeleteButton";
import { DisableButton } from "~/components/buttons/DisableButton";
import { EnableButton } from "~/components/buttons/EnableButton";
import { Tooltip } from "~/components/floating/Tooltip";
import { TableControlBar, type TableControlBarProps } from "~/components/tables/TableControlBar";

export interface SubscriptionsTableFilterBarProps
  extends Omit<TableControlBarProps, "children" | "numSelectedRows"> {
  readonly selectedRows: FullProductSubscription[];
}

export const SubscriptionsTableControlBar = ({
  selectedRows,
  ...props
}: SubscriptionsTableFilterBarProps): JSX.Element => {
  const numEnabled = selectedRows.filter(row => row.enabled).length;
  const numDisabled = selectedRows.filter(row => !row.enabled).length;
  return (
    <TableControlBar {...props} numSelectedRows={selectedRows.length}>
      <Tooltip
        placement="top-start"
        offset={{ mainAxis: 6 }}
        content={`Delete ${selectedRows.length} selected subscriptions.`}
        className="text-sm"
        isDisabled={selectedRows.length === 0}
      >
        <DeleteButton isDisabled={selectedRows.length === 0} />
      </Tooltip>
      <Tooltip
        placement="top-start"
        offset={{ mainAxis: 6 }}
        content={`Enable ${numDisabled} selected subscription${numDisabled <= 1 ? "" : "s"}.`}
        className="text-sm"
        isDisabled={numDisabled === 0}
      >
        <EnableButton isDisabled={numDisabled === 0} />
      </Tooltip>
      <Tooltip
        placement="top-start"
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
