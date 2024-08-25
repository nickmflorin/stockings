import { type ReactNode } from "react";

interface ProductsLayoutProps {
  readonly table: ReactNode;
}

export default function ProductsLayout({ table }: ProductsLayoutProps) {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="flex flex-row items-center grow min-h-[0px] overflow-auto">{table}</div>
    </div>
  );
}
