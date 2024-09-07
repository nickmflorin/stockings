import { type ReactNode } from "react";

import { Badge } from "~/components/badges/Badge";
import { Title } from "~/components/typography";

interface UserNotificationsLayoutProps {
  readonly table: ReactNode;
  readonly title: ReactNode;
}

export default function UserNotificationsLayout({ table, title }: UserNotificationsLayoutProps) {
  return (
    <div className="flex flex-col gap-[16px] h-full pl-1">
      <div className="flex flex-row items-center gap-4">
        <Title component="h3">Notifications</Title>
        <Badge>{title}</Badge>
      </div>
      <div className="flex flex-row items-center grow min-h-[0px] overflow-auto">{table}</div>
    </div>
  );
}
