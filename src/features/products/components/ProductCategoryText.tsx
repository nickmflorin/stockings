import { ProductCategories, type ProductCategory } from "~/database/model";

import { Text, type TextProps, type TextComponent } from "~/components/typography";

export type ProductCategoryTextProps<C extends TextComponent> = Omit<TextProps<C>, "children"> & {
  readonly category: ProductCategory;
};

export const ProductCategoryText = <C extends TextComponent>({
  category,
  ...props
}: ProductCategoryTextProps<C>): JSX.Element => (
  <Text fontSize="sm" transform="uppercase" fontWeight="medium" {...props}>
    {ProductCategories.getModel(category).label}
  </Text>
);
