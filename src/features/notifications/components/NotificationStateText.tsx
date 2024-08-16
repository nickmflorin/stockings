import { NotificationStates, type NotificationState } from "~/database/model";

import { Text, type TextProps, type TextComponent } from "~/components/typography";

export type NotificationStateTextProps<C extends TextComponent> = Omit<TextProps<C>, "children"> & {
  readonly state: NotificationState;
};

export const NotificationStateText = <C extends TextComponent>({
  state,
  ...props
}: NotificationStateTextProps<C>): JSX.Element => (
  <Text fontSize="sm" transform="uppercase" fontWeight="medium" {...props}>
    {NotificationStates.getModel(state).label}
  </Text>
);
