import { type ReactNode } from "react";

import { TableTitle } from "~/features/common/TableTitle";

interface ProductNotificationsLayoutProps {
  readonly table: ReactNode;
  readonly title: ReactNode;
}

export default function ProductNotificationsLayout({
  table,
  title,
}: ProductNotificationsLayoutProps) {
  return (
    <div className="flex flex-col gap-[16px] h-full pl-1">
      <TableTitle count={title}>Notifications</TableTitle>
      <div className="flex flex-row items-center grow min-h-[0px] overflow-auto">{table}</div>
    </div>
  );
}
