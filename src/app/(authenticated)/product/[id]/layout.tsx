import { redirect } from "next/navigation";
import { type ReactNode } from "react";

import { fetchProduct } from "~/actions/products";

import { Module } from "~/components/structural/Module";

import { ApiClientGlobalErrorCodes } from "~/api";

interface ProductLayoutProps {
  readonly priceChart: ReactNode;
  readonly detail: ReactNode;
  readonly subscriptions: ReactNode;
  readonly params: { id: string };
}

export default async function ProductLayout({
  priceChart,
  detail,
  subscriptions,
  params,
}: ProductLayoutProps) {
  const { error } = await fetchProduct(params.id, { strict: false });
  if (error) {
    if (error.code === ApiClientGlobalErrorCodes.NOT_FOUND) {
      return redirect("/404");
    }
  }
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="flex flex-row items-center max-w-[500px]">{detail}</div>
      <div className="flex flex-row gap-[16px] h-[400px]">
        {/* TODO: Revisit these sizes when we make the page responsive. */}
        <div className="flex flex-col gap-[16px] max-w-[600px] h-full">
          <Module component="paper" className="h-full">
            <Module.Header title="Price History">
              Historical recorded prices for the product.
            </Module.Header>
            <Module.Content centerChildren height={300} minHeight={300} width={400} minWidth={400}>
              {priceChart}
            </Module.Content>
          </Module>
        </div>
        <div className="flex flex-col gap-[16px] grow min-w-0 h-full">
          <Module component="paper" className="max-h-[500px] h-full">
            <Module.Header title="Subscriptions">
              Your current subscriptions to the product.
            </Module.Header>
            <Module.Content>{subscriptions}</Module.Content>
          </Module>
        </div>
      </div>
    </div>
  );
}
