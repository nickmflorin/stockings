import type { BasicIconProps } from "~/components/icons";
import { Icon } from "~/components/icons/Icon";
import { classNames } from "~/components/types";

export interface EnabledIconProps extends Omit<BasicIconProps, "icon" | "iconStyle"> {
  readonly isEnabled: boolean;
}

export const EnabledIcon = ({ isEnabled, ...props }: EnabledIconProps) =>
  isEnabled ? (
    <Icon
      {...props}
      className={classNames("text-green-600", props.className)}
      iconStyle="solid"
      icon="circle-check"
    />
  ) : (
    <Icon
      {...props}
      className={classNames("text-red-600", props.className)}
      iconStyle="solid"
      icon="circle-xmark"
    />
  );
