import { type NotificationMedium, NotificationMediums } from "~/database/model";

import { classNames } from "~/components/types";
import { Text, type TextProps, type TextComponent } from "~/components/typography";

export type NotificationStateTextProps<C extends TextComponent> = Omit<TextProps<C>, "children"> & {
  readonly medium: NotificationMedium;
};

export const NotificationMediumText = <C extends TextComponent>({
  medium,
  ...props
}: NotificationStateTextProps<C>): JSX.Element => (
  <Text
    fontSize="sm"
    transform="uppercase"
    fontWeight="medium"
    {...props}
    className={classNames(NotificationMediums.getModel(medium).textClassName, props.className)}
  >
    {NotificationMediums.getModel(medium).label}
  </Text>
);
