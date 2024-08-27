import { ProductSubCategories, type ProductSubCategory } from "~/database/model";

import { classNames } from "~/components/types";
import { Text, type TextProps, type TextComponent } from "~/components/typography";

export type ProductSubCategoryTextProps<C extends TextComponent> = Omit<
  TextProps<C>,
  "children"
> & {
  readonly subCategory: ProductSubCategory;
  readonly colored?: boolean;
};

export const ProductSubCategoryText = <C extends TextComponent>({
  subCategory,
  colored = false,
  ...props
}: ProductSubCategoryTextProps<C>): JSX.Element => (
  <Text
    fontSize="sm"
    transform="uppercase"
    fontWeight="medium"
    {...props}
    className={classNames(
      {
        [ProductSubCategories.getModel(subCategory).badgeTextColorClassName]: colored,
      },
      props.className,
    )}
  >
    {ProductSubCategories.getModel(Array.isArray(subCategory) ? subCategory[0] : subCategory).label}
  </Text>
);
