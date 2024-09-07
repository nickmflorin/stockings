import { forwardRef } from "react";

import { IconButton, type IconButtonProps } from "./generic";

export interface ResendButtonProps
  extends Omit<IconButtonProps<"button">, "icon" | "scheme" | "variant"> {}

export const ResendButton = forwardRef<HTMLButtonElement, ResendButtonProps>(
  (props: ResendButtonProps, ref) => (
    <IconButton.Transparent {...props} scheme="light" icon="paper-plane-top" ref={ref} />
  ),
);
