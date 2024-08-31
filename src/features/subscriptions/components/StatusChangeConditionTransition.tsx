import { type ProductStatus } from "~/database/model";

import { ProductStatusBadge } from "~/components/badges/ProductStatusBadge";
import { Icon } from "~/components/icons/Icon";
import { classNames, type ComponentProps } from "~/components/types";

export interface StatusChangeConditionTransitionProps extends ComponentProps {
  readonly fromStatus: ProductStatus;
  readonly toStatus: ProductStatus;
}

export const StatusChangeConditionTransition = ({
  fromStatus,
  toStatus,
  ...props
}: StatusChangeConditionTransitionProps): JSX.Element => (
  <div
    {...props}
    className={classNames("w-full flex flex-row items-center gap-2", props.className)}
  >
    <div className="flex flex-row items-center justify-start w-[96px]">
      <ProductStatusBadge status={fromStatus} />
    </div>
    <Icon icon="arrow-right" className="text-gray-600" size="14px" />
    <div className="flex flex-row items-center justify-end w-[96px]">
      <ProductStatusBadge status={toStatus} />
    </div>
  </div>
);
