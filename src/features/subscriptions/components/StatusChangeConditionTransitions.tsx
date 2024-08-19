import {
  groupStatusChangeSubscriptionConditions,
  type StatusChangeSubscriptionCondition,
} from "~/database/model";
import { flattenStatusChangeSubscriptionConditions } from "~/database/model";
import { logger } from "~/internal/logger";

import { type SingleOrArray } from "~/lib/types";

import { ProductStatusBadge } from "~/components/badges/ProductStatusBadge";
import type { IconName } from "~/components/icons";
import { Icon } from "~/components/icons/Icon";
import { classNames, type ComponentProps } from "~/components/types";

export interface StatusChangeConditionTransitionsProps extends ComponentProps {
  readonly grouped?: boolean;
  readonly conditions: SingleOrArray<
    Pick<StatusChangeSubscriptionCondition, "fromStatus" | "toStatus">
  >;
}

const getIcon = (index: number, numStatuses: number): IconName => {
  if (numStatuses === 3) {
    return (["arrow-turn-right", "arrow-right", "arrow-turn-down-right"] as const)[index];
  } else if (numStatuses === 2) {
    return (["arrow-turn-right", "arrow-turn-down-right"] as const)[index];
  } else if (numStatuses === 1) {
    return "arrow-right";
  }
  logger.error(
    `Unexpectedly encountered '${numStatuses}' transition statuses for condition! ` +
      "There should only ever be at most 3!",
  );
  return "arrow-right";
};

export const StatusChangeConditionTransitions = ({
  conditions,
  grouped = false,
  ...props
}: StatusChangeConditionTransitionsProps): JSX.Element => {
  if (!grouped) {
    const flattened = flattenStatusChangeSubscriptionConditions(conditions);
    if (flattened.length === 0) {
      return <></>;
    }
    return (
      <div {...props} className={classNames("flex flex-col gap-1 max-w-fit", props.className)}>
        {flattened.map(([fromStatus, toStatus], index) => (
          <div className="w-full flex flex-row items-center gap-2" key={index}>
            <div className="flex flex-row items-center justify-start w-[96px]">
              <ProductStatusBadge status={fromStatus} />
            </div>
            <Icon icon="arrow-right" className="text-gray-600" size="14px" />
            <div className="flex flex-row items-center justify-end w-[96px]">
              <ProductStatusBadge status={toStatus} />
            </div>
          </div>
        ))}
      </div>
    );
  }
  const groupedConditions = groupStatusChangeSubscriptionConditions(conditions);
  if (groupedConditions.length === 0) {
    return <></>;
  }
  return (
    <div {...props} className={classNames("flex flex-col gap-4 max-w-fit", props.className)}>
      {groupedConditions
        .filter(([_, toStatuses]) => toStatuses.length !== 0)
        .map(([fromStatus, toStatuses], index) => (
          <div className="w-full flex flex-row items-center gap-2" key={index}>
            <div className="flex flex-row items-center justify-start w-[96px] min-w-[96px]">
              <ProductStatusBadge status={fromStatus} />
            </div>
            <div className="flex flex-col items-end gap-1">
              {toStatuses.map((status, i) => (
                <div className="flex flex-row items-center gap-2" key={i}>
                  <Icon
                    icon={getIcon(i, toStatuses.length)}
                    className="text-gray-600 justify-start"
                    size="14px"
                  />
                  <div className="flex flex-row items-center justify-end w-[96px]">
                    <ProductStatusBadge key={status} status={status} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};
