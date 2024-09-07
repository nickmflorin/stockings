import { type ReactNode } from "react";

interface UserSubscriptionsLayoutProps {
  readonly table: ReactNode;
  readonly title: ReactNode;
}

export default function UserSubscriptionsLayout({ table, title }: UserSubscriptionsLayoutProps) {
  return (
    <div className="flex flex-col gap-[16px] h-full pl-1">
      {title}
      <div className="flex flex-row items-center grow min-h-[0px] overflow-auto">{table}</div>
    </div>
  );
}
