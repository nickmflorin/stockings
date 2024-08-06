import { ProductStatuses, type ProductStatus } from "~/database/model";

import { classNames } from "~/components/types";
import { Text, type TextProps, type TextComponent } from "~/components/typography";

export type ProductStatusTextProps<C extends TextComponent> = Omit<TextProps<C>, "children"> & {
  readonly status: ProductStatus;
};

export const ProductStatusText = <C extends TextComponent>({
  status,
  ...props
}: ProductStatusTextProps<C>): JSX.Element => (
  <Text
    fontSize="sm"
    transform="uppercase"
    fontWeight="medium"
    {...props}
    className={classNames(ProductStatuses.getModel(status).textColorClassName, props.className)}
  >
    {ProductStatuses.getModel(status).label}
  </Text>
);
