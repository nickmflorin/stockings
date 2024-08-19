import { type ReactNode } from "react";

import { Module } from "~/components/structural/Module";

interface ProductLayoutProps {
  readonly priceChart: ReactNode;
  readonly detail: ReactNode;
  readonly subscriptions: ReactNode;
}

export default function ProductLayout({ priceChart, detail }: ProductLayoutProps) {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="flex flex-row items-center">
        <Module component="paper" width="parent">
          {detail}
        </Module>
      </div>
      <div className="flex flex-row items-center">
        <Module component="paper">{priceChart}</Module>
      </div>
    </div>
  );
}
