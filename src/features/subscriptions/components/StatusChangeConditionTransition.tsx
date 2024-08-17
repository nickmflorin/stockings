import { type StatusChangeSubscriptionCondition } from "~/database/model";
import { flattenStatusChangeSubscriptionsConditions } from "~/database/model";

import { ProductStatusBadge } from "~/components/badges/ProductStatusBadge";
import { Icon } from "~/components/icons/Icon";
import { classNames, type ComponentProps } from "~/components/types";

type SingleOrArray<T> = T | T[];

export interface StatusChangeConditionTransitionProps extends ComponentProps {
  readonly conditions: SingleOrArray<
    Pick<StatusChangeSubscriptionCondition, "fromStatus" | "toStatus">
  >;
}

export const StatusChangeConditionTransition = ({
  conditions,
  ...props
}: StatusChangeConditionTransitionProps): JSX.Element => {
  const flattened = flattenStatusChangeSubscriptionsConditions(conditions);
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
};
