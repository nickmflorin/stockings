import { NotificationTypes, type NotificationType } from "~/database/model";

import { Text, type TextProps, type TextComponent } from "~/components/typography";

export type NotificationTypeTextProps<C extends TextComponent> = Omit<TextProps<C>, "children"> & {
  readonly notificationType: NotificationType;
};

export const NotificationTypeText = <C extends TextComponent>({
  notificationType,
  ...props
}: NotificationTypeTextProps<C>): JSX.Element => (
  <Text fontSize="sm" transform="uppercase" fontWeight="medium" {...props}>
    {NotificationTypes.getModel(notificationType).label}
  </Text>
);
