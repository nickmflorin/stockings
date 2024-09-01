import { type ProductStatus } from "~/database/model";

import { ProductStatusBadge } from "~/components/badges/ProductStatusBadge";
import { Icon } from "~/components/icons/Icon";
import { classNames, type ComponentProps } from "~/components/types";

export interface StatusChangeConditionTransitionProps extends ComponentProps {
  readonly fromStatus: ProductStatus;
  readonly toStatus: ProductStatus;
  readonly justified?: boolean;
}

export const StatusChangeConditionTransition = ({
  fromStatus,
  toStatus,
  justified = false,
  ...props
}: StatusChangeConditionTransitionProps): JSX.Element => (
  <div {...props} className={classNames("flex flex-row items-center gap-2", props.className)}>
    <div
      className={classNames("flex flex-row items-center w-[96px] justify-end", {
        "justify-start": justified,
      })}
    >
      <ProductStatusBadge status={fromStatus} />
    </div>
    <Icon icon="arrow-right" className="text-gray-600" size="14px" />
    <div
      className={classNames("flex flex-row items-center w-[96px] justify-start", {
        "justify-end": justified,
      })}
    >
      <ProductStatusBadge status={toStatus} />
    </div>
  </div>
);
