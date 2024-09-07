import { ResendButton } from "~/components/buttons/ResendButton";
import { Tooltip } from "~/components/floating/Tooltip";
import { TableControlBar, type TableControlBarProps } from "~/components/tables/TableControlBar";
import { type ProductNotificationsAdminTableModel } from "~/features/notifications/types";

export interface NotificationsAdminTableFilterBarProps<
  M extends ProductNotificationsAdminTableModel,
> extends Omit<TableControlBarProps<M>, "children"> {}

export const NotificationsAdminTableControlBar = <M extends ProductNotificationsAdminTableModel>({
  selectedRows,
  ...props
}: NotificationsAdminTableFilterBarProps<M>): JSX.Element => (
  <TableControlBar {...props} selectedRows={selectedRows}>
    <Tooltip
      placement="top-start"
      inPortal={props.tooltipsInPortal}
      offset={{ mainAxis: 6 }}
      content={`Resend ${selectedRows.length} selected notification${selectedRows.length <= 1 ? "" : "s"}.`}
      className="text-sm"
      isDisabled={selectedRows.length === 0 || props.isDisabled}
    >
      <ResendButton
        isDisabled={selectedRows.length === 0 || props.isDisabled}
        isLoading={false}
        onClick={async () => {
          /* eslint-disable-next-line no-console */
          console.log("Resend not implemented yet.");
        }}
      />
    </Tooltip>
  </TableControlBar>
);
