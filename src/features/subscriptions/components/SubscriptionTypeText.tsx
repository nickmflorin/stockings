import { ProductSubscriptionTypes, type ProductSubscriptionType } from "~/database/model";

import { Text, type TextProps, type TextComponent } from "~/components/typography";

export type SubscriptionTypeTextProps<C extends TextComponent> = Omit<TextProps<C>, "children"> & {
  readonly subscriptionType: ProductSubscriptionType;
};

export const SubscriptionTypeText = <C extends TextComponent>({
  subscriptionType,
  ...props
}: SubscriptionTypeTextProps<C>): JSX.Element => (
  <Text fontSize="sm" transform="uppercase" fontWeight="medium" {...props}>
    {ProductSubscriptionTypes.getModel(subscriptionType).label}
  </Text>
);
