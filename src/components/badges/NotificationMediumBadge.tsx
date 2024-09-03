import type { NotificationMedium } from "~/database/model";
import { NotificationMediums } from "~/database/model";

import { classNames } from "~/components/types";

import { Badge, type BadgeProps } from "./Badge";

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
