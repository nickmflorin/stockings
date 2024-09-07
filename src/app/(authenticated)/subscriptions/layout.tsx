import { type ReactNode } from "react";

interface SubscriptionsLayoutProps {
  readonly table: ReactNode;
  readonly title: ReactNode;
}

export default function SubscriptionsLayout({ table, title }: SubscriptionsLayoutProps) {
  return (
    <div className="flex flex-col gap-[16px]">
      {title}
      <div className="flex flex-row items-center grow min-h-[0px] overflow-auto">{table}</div>
    </div>
  );
}
