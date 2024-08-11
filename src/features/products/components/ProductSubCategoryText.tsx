import { ProductSubCategories, type ProductSubCategory } from "~/database/model";

import { Text, type TextProps, type TextComponent } from "~/components/typography";

export type ProductSubCategoryTextProps<C extends TextComponent> = Omit<
  TextProps<C>,
  "children"
> & {
  readonly subCategory: ProductSubCategory;
};

export const ProductSubCategoryText = <C extends TextComponent>({
  subCategory,
  ...props
}: ProductSubCategoryTextProps<C>): JSX.Element => (
  <Text fontSize="sm" transform="uppercase" fontWeight="medium" {...props}>
    {ProductSubCategories.getModel(subCategory).label}
  </Text>
);
