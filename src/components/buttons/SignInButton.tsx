import { SignInButton as RootSignInButton } from "@clerk/nextjs";

import { Button } from "./generic";
import { type ButtonComponentProps } from "./types";
import { type ButtonClassNameStyleProps } from "./util";

export interface SignInButtonProps
  extends Omit<
    ButtonClassNameStyleProps<"button", "button", ButtonComponentProps<"button">>,
    "variant" | "buttonType" | "component" | "scheme"
  > {}

export const SignInButton = (props: SignInButtonProps) => (
  <RootSignInButton>
    <Button.Solid {...props} scheme="primary" element="div">
      Log Out
    </Button.Solid>
  </RootSignInButton>
);
