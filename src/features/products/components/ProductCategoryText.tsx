import { ProductCategories, type ProductCategory } from "~/database/model";

import { classNames } from "~/components/types";
import { Text, type TextProps, type TextComponent } from "~/components/typography";

export type ProductCategoryTextProps<C extends TextComponent> = Omit<TextProps<C>, "children"> & {
  readonly category: ProductCategory;
  readonly colored?: boolean;
};

export const ProductCategoryText = <C extends TextComponent>({
  category,
  colored = false,
  ...props
}: ProductCategoryTextProps<C>): JSX.Element => (
  <Text
    fontSize="sm"
    transform="uppercase"
    fontWeight="medium"
    {...props}
    className={classNames(
      {
        [ProductCategories.getModel(category).badgeTextColorClassName]: colored,
      },
      props.className,
    )}
  >
    {ProductCategories.getModel(category).label}
  </Text>
);
