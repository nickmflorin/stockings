import type { User } from "~/database/model";

import { Avatar } from "~/components/images/Avatar";
import { classNames, type ComponentProps, type FontSize } from "~/components/types";
import { Label, Text } from "~/components/typography";

export type UserTileSize = "sm" | "md";

export interface UserTileProps extends ComponentProps {
  readonly user: User;
  readonly size?: UserTileSize;
}

const UserTileImageSizes: { [key in UserTileSize]: number } = {
  sm: 32,
  md: 40,
};

const UserTileLabelSizes: { [key in UserTileSize]: FontSize } = {
  sm: "xs",
  md: "sm",
};

const UserTileTextSizes: { [key in UserTileSize]: FontSize } = {
  sm: "xxs",
  md: "xs",
};

export const UserTile = ({ user, size = "md", ...props }: UserTileProps): JSX.Element => (
  <div {...props} className={classNames("flex flex-row gap-2 items-center")}>
    <Avatar src={user.profileImageUrl} size={UserTileImageSizes[size]} />
    <div className="flex flex-col gap-1">
      <Label fontSize={UserTileLabelSizes[size]}>{`${user.firstName} ${user.lastName}`}</Label>
      <Text fontSize={UserTileTextSizes[size]}>{user.emailAddress}</Text>
    </div>
  </div>
);
