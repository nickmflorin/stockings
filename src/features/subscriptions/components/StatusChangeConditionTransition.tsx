import { type ProductStatus } from "~/database/model";

import { Icon } from "~/components/icons/Icon";
import { classNames, type ComponentProps } from "~/components/types";
import { ProductStatusBadge } from "~/features/products/components/badges";

export interface StatusChangeConditionTransitionProps extends ComponentProps {
  readonly fromStatus: ProductStatus;
  readonly toStatus: ProductStatus;
  readonly justified?: "outer" | "inner" | false;
}

export const StatusChangeConditionTransition = ({
  fromStatus,
  toStatus,
  justified = false,
  ...props
}: StatusChangeConditionTransitionProps): JSX.Element => (
  <div {...props} className={classNames("flex flex-row items-center gap-2", props.className)}>
    <div
      className={classNames("flex flex-row items-center", {
        "w-[96px]": justified !== false,
        "justify-start": justified === "outer",
        "justify-end": justified === "inner",
      })}
    >
      <ProductStatusBadge status={fromStatus} />
    </div>
    <Icon icon="arrow-right" className="text-gray-600" size="14px" />
    <div
      className={classNames("flex flex-row items-center", {
        "w-[96px]": justified !== false,
        "justify-start": justified === "inner",
        "justify-end": justified === "outer",
      })}
    >
      <ProductStatusBadge status={toStatus} />
    </div>
  </div>
);
