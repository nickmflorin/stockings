import { ResendButton } from "~/components/buttons/ResendButton";
import { TableControlBarPlaceholder } from "~/components/tables/TableControlBarPlaceholder";

export interface NotificationsAdminTableControlBarPlaceholderProps {
  readonly targetId?: string;
}

export const NotificationsAdminTableControlBarPlaceholder = ({
  targetId,
}: NotificationsAdminTableControlBarPlaceholderProps): JSX.Element => (
  <TableControlBarPlaceholder canDeleteRows targetId={targetId}>
    <ResendButton isDisabled={true} />
  </TableControlBarPlaceholder>
);
