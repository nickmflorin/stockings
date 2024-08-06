"use client";
import { useUser } from "@clerk/nextjs";

import { IconButton } from "~/components/buttons";
import { SignInButton } from "~/components/buttons/SignInButton";
import { SignOutButton } from "~/components/buttons/SignOutButton";
import { DropdownMenu, type DropdownMenuProps } from "~/components/menus/DropdownMenu";
import { Menu } from "~/components/menus/Menu";

import { OrganizationsMenuItemGroup } from "./OrganizationsMenuItemGroup";

export interface SiteDropdownMenuProps
  extends Omit<DropdownMenuProps, "placement" | "width" | "content" | "children" | "triggers"> {}

export const SiteDropdownMenu = (props: SiteDropdownMenuProps) => {
  const { isSignedIn } = useUser();

  return (
    <DropdownMenu
      {...props}
      placement="bottom-end"
      width={300}
      content={
        <div className="flex flex-col">
          <Menu>
            {isSignedIn ? <OrganizationsMenuItemGroup /> : <></>}
            <div className="flex flex-row items-center px-[8px] py-[6px]">
              {isSignedIn ? (
                <SignOutButton className="w-full" />
              ) : (
                <SignInButton className="w-full" />
              )}
            </div>
          </Menu>
        </div>
      }
    >
      <IconButton.Solid scheme="secondary" element="button" icon="bars" radius="sm" />
    </DropdownMenu>
  );
};
