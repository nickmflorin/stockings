"use client";
import {
  flattenStatusChangeSubscriptionsConditions,
  type StatusChangeSubscriptionCondition,
} from "~/database/model";

import { type SingleOrArray } from "~/lib/types";

import { Button } from "~/components/buttons";
import { CaretIcon } from "~/components/icons/CaretIcon";
import { DropdownMenu, type DropdownMenuProps } from "~/components/menus/DropdownMenu";

import { StatusChangeConditionTransitions } from "./StatusChangeConditionTransitions";

export interface StatusChangeConditionsDropdownProps
  extends Omit<DropdownMenuProps, "placement" | "width" | "content" | "children" | "triggers"> {
  readonly conditions: SingleOrArray<
    Pick<StatusChangeSubscriptionCondition, "fromStatus" | "toStatus">
  >;
}

export const StatusChangeConditionsDropdown = ({
  conditions,
  ...props
}: StatusChangeConditionsDropdownProps) => {
  const flattened = flattenStatusChangeSubscriptionsConditions(conditions);
  if (flattened.length === 0) {
    return <Button.Transparent isDisabled>No Transition</Button.Transparent>;
  }

  return (
    <DropdownMenu
      {...props}
      width="fit-content"
      placement="bottom-end"
      content={
        <div className="flex flex-col items-center p-2">
          <StatusChangeConditionTransitions conditions={conditions} />
        </div>
      }
    >
      {({ ref, params, isOpen }) => (
        <Button.Transparent
          ref={ref}
          {...params}
          size="small"
          scheme="secondary"
          icon={{ right: <CaretIcon open={isOpen} size="14px" /> }}
        >
          {`${flattened.length} Transition${flattened.length === 1 ? "" : "s"}`}
        </Button.Transparent>
      )}
    </DropdownMenu>
  );
};
