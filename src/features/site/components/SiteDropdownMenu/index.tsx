"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

import { useUser } from "@clerk/nextjs";

import { IconButton, Button } from "~/components/buttons";
import { SignInButton } from "~/components/buttons/SignInButton";
import { SignOutButton } from "~/components/buttons/SignOutButton";
import { Avatar } from "~/components/images/Avatar";
import { DropdownMenu, type DropdownMenuProps } from "~/components/menus/DropdownMenu";
import { Menu } from "~/components/menus/Menu";
import { Label, Text } from "~/components/typography";

import { OrganizationsMenuItemGroup } from "./OrganizationsMenuItemGroup";

const UserProfileDialog = dynamic(() =>
  import("~/features/site/components/UserProfileDialog").then(mod => mod.UserProfileDialog),
);

export interface SiteDropdownMenuProps
  extends Omit<DropdownMenuProps, "placement" | "width" | "content" | "children" | "triggers"> {}

export const SiteDropdownMenu = (props: SiteDropdownMenuProps) => {
  const { isSignedIn, user } = useUser();
  const [userProfileDialogIsOpen, setUserProfileDialogIsOpen] = useState(false);

  return (
    <>
      <DropdownMenu
        {...props}
        placement="bottom-end"
        width={300}
        content={({ setIsOpen }) => (
          <div className="flex flex-col">
            <Menu>
              <Menu.Content>
                {isSignedIn && user ? (
                  <Menu.Item
                    {...props}
                    highlightOnHover={false}
                    className="px-[12px] pt-[14px] pb-[4px]"
                  >
                    <Avatar src={user.imageUrl} size="48px" />
                    <div className="flex flex-col gap-1">
                      <Label fontSize="md">{user.fullName}</Label>
                      <Text fontSize="sm">{user.emailAddresses[0]?.emailAddress}</Text>
                    </div>
                  </Menu.Item>
                ) : (
                  <></>
                )}
                {isSignedIn ? <OrganizationsMenuItemGroup /> : <></>}
                {isSignedIn ? (
                  <div className="flex flex-row items-center px-[8px] py-[6px]">
                    <Button.Outlined
                      element="button"
                      onClick={e => {
                        setIsOpen(false, e);
                        setUserProfileDialogIsOpen(true);
                      }}
                      className="w-full"
                    >
                      Manage Account
                    </Button.Outlined>
                  </div>
                ) : (
                  <></>
                )}
                <div className="flex flex-row items-center px-[8px] py-[6px]">
                  {isSignedIn ? (
                    <SignOutButton className="w-full" />
                  ) : (
                    <SignInButton className="w-full" />
                  )}
                </div>
              </Menu.Content>
            </Menu>
          </div>
        )}
      >
        <IconButton.Solid scheme="secondary" element="button" icon="bars" radius="sm" />
      </DropdownMenu>
      {userProfileDialogIsOpen && (
        <UserProfileDialog isOpen={true} onClose={() => setUserProfileDialogIsOpen(false)} />
      )}
    </>
  );
};
