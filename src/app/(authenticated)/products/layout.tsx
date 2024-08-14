import { type ReactNode } from "react";

import { Module } from "~/components/structural/Module";

interface ProductsLayoutProps {
  readonly table: ReactNode;
  readonly chart: ReactNode;
  readonly searchParams?: unknown;
}

export default function ProductsLayout({ table, chart }: ProductsLayoutProps) {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="flex flex-row items-center">
        <Module component="paper">{chart}</Module>
      </div>
      <div className="flex flex-row items-center grow min-h-[0px] overflow-auto">{table}</div>
    </div>
  );
}
