import type { PriceChangeCondition } from "~/database/model";
import { PriceChangeConditions } from "~/database/model";

import { classNames } from "~/components/types";

import { Badge, type BadgeProps } from "./Badge";

export interface PriceChangeConditionBadgeProps extends Omit<BadgeProps, "children"> {
  readonly condition: PriceChangeCondition;
}

export const PriceChangeConditionBadge = ({
  condition,
  ...props
}: PriceChangeConditionBadgeProps) => (
  <Badge
    {...props}
    className={classNames(
      PriceChangeConditions.getModel(condition).badgeBgColorClassName,
      PriceChangeConditions.getModel(condition).badgeTextColorClassName,
      props.className,
    )}
  >
    {PriceChangeConditions.getModel(condition).label}
  </Badge>
);
