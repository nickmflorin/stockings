import { SubscriptionTypes, type SubscriptionType } from "~/database/model";

import { Text, type TextProps, type TextComponent } from "~/components/typography";

export type SubscriptionTypeTextProps<C extends TextComponent> = Omit<TextProps<C>, "children"> & {
  readonly subscriptionType: SubscriptionType;
};

export const SubscriptionTypeText = <C extends TextComponent>({
  subscriptionType,
  ...props
}: SubscriptionTypeTextProps<C>): JSX.Element => (
  <Text fontSize="sm" transform="uppercase" fontWeight="medium" {...props}>
    {SubscriptionTypes.getModel(subscriptionType).label}
  </Text>
);
