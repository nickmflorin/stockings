"use client";
import { DisableButton } from "~/components/buttons/DisableButton";
import { EnableButton } from "~/components/buttons/EnableButton";
import { TableControlBarPlaceholder } from "~/components/tables/TableControlBarPlaceholder";

export const SubscriptionsTableControlBarPlaceholder = (): JSX.Element => (
  <TableControlBarPlaceholder canDeleteRows>
    <EnableButton isDisabled={true} />
    <DisableButton isDisabled={true} />
  </TableControlBarPlaceholder>
);
