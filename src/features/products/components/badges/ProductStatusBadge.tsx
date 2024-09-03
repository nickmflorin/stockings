import type { ProductStatus } from "~/database/model";
import { ProductStatuses } from "~/database/model";

import { Badge, type BadgeProps } from "~/components/badges/Badge";
import { classNames } from "~/components/types";

export interface ProductStatusBadgeProps extends Omit<BadgeProps, "children"> {
  readonly status: ProductStatus;
}

export const ProductStatusBadge = ({ status, ...props }: ProductStatusBadgeProps) => (
  <Badge
    {...props}
    className={classNames(
      ProductStatuses.getModel(status).badgeBgColorClassName,
      ProductStatuses.getModel(status).badgeTextColorClassName,
      props.className,
    )}
  >
    {ProductStatuses.getModel(status).shortLabel}
  </Badge>
);
