import { SignOutButton as RootSignOutButton } from "@clerk/nextjs";

import { Button } from "./generic";
import { type ButtonComponentProps } from "./types";
import { type ButtonClassNameStyleProps } from "./util";

export interface SignOutButtonProps
  extends Omit<
    ButtonClassNameStyleProps<"button", "button", ButtonComponentProps<"button">>,
    "variant" | "buttonType" | "component" | "scheme"
  > {}

export const SignOutButton = (props: SignOutButtonProps) => (
  <RootSignOutButton>
    <Button.Solid {...props} scheme="secondary" element="div">
      Log Out
    </Button.Solid>
  </RootSignOutButton>
);
