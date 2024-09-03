import type { NotificationMedium } from "~/database/model";
import { NotificationMediums } from "~/database/model";

import { Badge, type BadgeProps } from "~/components/badges/Badge";
import { classNames } from "~/components/types";

export interface NotificationMediumBadgeProps extends Omit<BadgeProps, "children"> {
  readonly medium: NotificationMedium;
}

export const NotificationMediumBadge = ({ medium, ...props }: NotificationMediumBadgeProps) => (
  <Badge
    {...props}
    className={classNames(
      NotificationMediums.getModel(medium).badgeBgColorClassName,
      NotificationMediums.getModel(medium).badgeTextColorClassName,
      props.className,
    )}
  >
    {NotificationMediums.getModel(medium).label}
  </Badge>
);
