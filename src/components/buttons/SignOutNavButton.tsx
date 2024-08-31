import { SignOutButton as RootSignOutButton } from "@clerk/nextjs";

import { Tooltip } from "~/components/floating/Tooltip";
import { classNames, type ComponentProps } from "~/components/types";

import { IconButton } from "./generic";

export interface SignOutNavButtonProps extends ComponentProps {}

export const SignOutNavButton = (props: SignOutNavButtonProps) => (
  <RootSignOutButton>
    <Tooltip content="Log out" placement="right" inPortal>
      {({ ref, params }) => (
        <IconButton.Solid
          {...params}
          {...props}
          ref={ref}
          activeClassName="bg-blue-800 outline-blue-800 text-white"
          icon="left-from-bracket"
          element="button"
          className={classNames(
            "z-0 text-body outline-transparent bg-transparent",
            "hover:bg-gray-300 hover:outline-gray-300",
            props.className,
          )}
          size="xlarge"
          iconSize="medium"
        />
      )}
    </Tooltip>
  </RootSignOutButton>
);
