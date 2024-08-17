import { type ProductStatus, type StatusChangeSubscriptionCondition } from "~/database/model";

import { ProductStatusBadge } from "~/components/badges/ProductStatusBadge";
import { classNames, type ComponentProps } from "~/components/types";

type SingleOrArray<T> = T | T[];

interface StatusChangeStatusesProps extends ComponentProps {
  readonly statuses: ProductStatus[];
}

const StatusChangeStatuses = ({ statuses, ...props }: StatusChangeStatusesProps): JSX.Element => (
  <div
    {...props}
    className={classNames("flex flex-wrap gap-x-1 gap-y-1 max-w-full", props.className)}
  >
    {statuses.map((status, index) => (
      <ProductStatusBadge key={index} status={status} />
    ))}
  </div>
);

export interface StatusChangeConditionTransitionProps extends ComponentProps {
  readonly conditions: SingleOrArray<
    Pick<StatusChangeSubscriptionCondition, "fromStatus" | "toStatus">
  >;
}

export const StatusChangeConditionTransition = ({
  conditions,
  ...props
}: StatusChangeConditionTransitionProps): JSX.Element => {
  if ((Array.isArray(conditions) && conditions.length === 1) || !Array.isArray(conditions)) {
    const condition = Array.isArray(conditions) ? conditions[0] : conditions;

    return (
      <div {...props} className={classNames("flex flex-row items-center w-full", props.className)}>
        <div className="w-full flex flex-row items-center gap-2">
          <StatusChangeStatuses statuses={condition.fromStatus} />
          <span className="text-sm font-medium">→</span>
          <StatusChangeStatuses statuses={condition.toStatus} />
        </div>
      </div>
    );
  }

  return <></>;
};
