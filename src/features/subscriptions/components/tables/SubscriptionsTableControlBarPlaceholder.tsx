"use client";
import { DeleteButton } from "~/components/buttons/DeleteButton";
import { DisableButton } from "~/components/buttons/DisableButton";
import { EnableButton } from "~/components/buttons/EnableButton";
import { TableControlBar } from "~/components/tables/TableControlBar";

export const SubscriptionsTableControlBarPlaceholder = (): JSX.Element => (
  <TableControlBar allRowsAreSelected={false} selectionIsDisabled={true}>
    <DeleteButton isDisabled={true} />
    <EnableButton isDisabled={true} />
    <DisableButton isDisabled={true} />
  </TableControlBar>
);
