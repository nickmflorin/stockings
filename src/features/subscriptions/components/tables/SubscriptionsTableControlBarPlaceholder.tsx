import { DisableButton } from "~/components/buttons/DisableButton";
import { EnableButton } from "~/components/buttons/EnableButton";
import { TableControlBarPlaceholder } from "~/components/tables/TableControlBarPlaceholder";

export interface SubscriptionsTableControlBarPlaceholderProps {
  readonly targetId?: string;
}

export const SubscriptionsTableControlBarPlaceholder = ({
  targetId,
}: SubscriptionsTableControlBarPlaceholderProps): JSX.Element => (
  <TableControlBarPlaceholder canDeleteRows targetId={targetId}>
    <EnableButton isDisabled={true} />
    <DisableButton isDisabled={true} />
  </TableControlBarPlaceholder>
);
