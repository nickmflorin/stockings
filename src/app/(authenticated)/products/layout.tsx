import { type ReactNode } from "react";

interface ProductsLayoutProps {
  readonly table: ReactNode;
  readonly chart: ReactNode;
  readonly searchParams?: unknown;
}

export default function ProductsLayout({ table, chart }: ProductsLayoutProps) {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="flex flex-row items-center min-h-[300px] max-h-[300px] h-[320px]">
        {chart}
      </div>
      <div className="flex flex-row items-center max-h-[calc(100%-300px-16px)]">{table}</div>
    </div>
  );
}
