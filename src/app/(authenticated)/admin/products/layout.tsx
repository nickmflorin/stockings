import { type ReactNode } from "react";

interface ProductsLayoutProps {
  readonly table: ReactNode;
  readonly title: ReactNode;
}

export default function ProductsLayout({ table, title }: ProductsLayoutProps) {
  return (
    <div className="flex flex-col gap-[16px] max-h-full h-full">
      {title}
      <div className="flex flex-row items-center grow min-h-[0px] overflow-auto">{table}</div>
    </div>
  );
}
