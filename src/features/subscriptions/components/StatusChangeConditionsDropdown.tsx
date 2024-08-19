"use client";
import dynamic from "next/dynamic";

import {
  flattenStatusChangeSubscriptionConditions,
  type StatusChangeSubscriptionCondition,
  groupStatusChangeSubscriptionConditions,
} from "~/database/model";

import { type SingleOrArray } from "~/lib/types";

import { Link } from "~/components/buttons";
import { CaretIcon } from "~/components/icons/CaretIcon";
import { Loading } from "~/components/loading/Loading";
import { DropdownMenu, type DropdownMenuProps } from "~/components/menus/DropdownMenu";

/* const ProductStatusTransitionChart = dynamic(
     () =>
       import("./charts/ProductStatusTransitionChart")
       .then(mod => mod.ProductStatusTransitionChart),
     { ssr: false, loading: () => <Loading isLoading /> },
   ); */

const StatusChangeConditionTransitions = dynamic(
  () =>
    import("./StatusChangeConditionTransitions").then(mod => mod.StatusChangeConditionTransitions),
  { loading: () => <Loading isLoading /> },
);

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
  const flattened = flattenStatusChangeSubscriptionConditions(conditions);
  if (flattened.length === 0) {
    return <Link isDisabled>No Transition</Link>;
  }

  return (
    <DropdownMenu
      {...props}
      width={236}
      offset={{ mainAxis: 6 }}
      placement="auto"
      allowedPlacements={["bottom-end", "top-end"]}
      // Force lazy/dynamic loading of the content with the boolean toggle.
      content={({ isOpen }) =>
        isOpen ? (
          <div
            className="flex flex-col relative p-2"
            style={{ minHeight: groupStatusChangeSubscriptionConditions(conditions).length * 32 }}
          >
            <StatusChangeConditionTransitions conditions={conditions} grouped />
          </div>
        ) : (
          <></>
        )
      }
    >
      {({ ref, params, isOpen }) => (
        <Link
          ref={ref}
          {...params}
          fontSize="sm"
          scheme="primary"
          icon={{ right: <CaretIcon open={isOpen} size="14px" /> }}
        >
          {`${flattened.length} Transition${flattened.length === 1 ? "" : "s"}`}
        </Link>
      )}
    </DropdownMenu>
  );
};
