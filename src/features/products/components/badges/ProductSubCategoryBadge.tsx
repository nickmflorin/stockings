import type { ProductSubCategory } from "~/database/model";
import { ProductSubCategories } from "~/database/model";

import { Badge, type BadgeProps } from "~/components/badges/Badge";
import { classNames } from "~/components/types";

export interface ProductSubCategoryBadgeProps extends Omit<BadgeProps, "children"> {
  readonly category: ProductSubCategory;
}

export const ProductSubCategoryBadge = ({ category, ...props }: ProductSubCategoryBadgeProps) => (
  <Badge
    {...props}
    className={classNames(
      ProductSubCategories.getModel(category).badgeBgColorClassName,
      ProductSubCategories.getModel(category).badgeTextColorClassName,
      props.className,
    )}
  >
    {ProductSubCategories.getModel(category).label}
  </Badge>
);
