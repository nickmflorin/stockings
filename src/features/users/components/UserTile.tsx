import type { User } from "~/database/model";

import { Avatar } from "~/components/images/Avatar";
import { classNames, type ComponentProps } from "~/components/types";
import { Label, Text } from "~/components/typography";

export interface UserTileProps extends ComponentProps {
  readonly user: User;
}

export const UserTile = ({ user, ...props }: UserTileProps): JSX.Element => (
  <div {...props} className={classNames("flex flex-row gap-2 items-center")}>
    <Avatar src={user.profileImageUrl} size={40} />
    <div className="flex flex-col gap-1">
      <Label fontSize="sm">{`${user.firstName} ${user.lastName}`}</Label>
      <Text fontSize="xs">{user.emailAddress}</Text>
    </div>
  </div>
);
