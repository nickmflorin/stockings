import { type ReactNode } from "react";

import { TableTitle } from "~/features/common/TableTitle";

interface ProductSubscriptionsLayoutProps {
  readonly table: ReactNode;
  readonly title: ReactNode;
}

export default function ProductSubscriptionsLayout({
  table,
  title,
}: ProductSubscriptionsLayoutProps) {
  return (
    <div className="flex flex-col gap-[16px] h-full pl-1">
      <TableTitle count={title}>Subscriptions</TableTitle>
      <div className="flex flex-row items-center grow min-h-[0px] overflow-auto">{table}</div>
    </div>
  );
}
