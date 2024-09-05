import { redirect } from "next/navigation";
import { type ReactNode } from "react";

import { type ApiProduct } from "~/database/model";
import { logger } from "~/internal/logger";

import { fetchProduct } from "~/actions/products";

import { ErrorView } from "~/components/errors/ErrorView";
import { Module } from "~/components/structural/Module";
import { ProductBreadcrumb } from "~/features/products/components/ProductBreadcrumbs";

import { ApiClientGlobalErrorCodes } from "~/api";

interface ProductLayoutProps {
  readonly priceChart: ReactNode;
  readonly detail: ReactNode;
  readonly subscriptions: ReactNode;
  readonly notifications: ReactNode;
  readonly notificationsModuleTitle: ReactNode;
  readonly params: { id: string };
}

export default async function ProductLayout({
  priceChart,
  detail,
  subscriptions,
  notifications,
  params,
  notificationsModuleTitle,
}: ProductLayoutProps) {
  let product: ApiProduct<[]>;
  try {
    const { error, data } = await fetchProduct(params.id, { includes: [] }, { strict: false });
    if (error) {
      if (error.code === ApiClientGlobalErrorCodes.NOT_FOUND) {
        return redirect("/404");
      }
      logger.error(error, "There was an error fetching the product.");
      return (
        <ErrorView>There was an error loading the product. Do not worry - we are on it.</ErrorView>
      );
    }
    product = data;
  } catch (e) {
    logger.errorUnsafe(e, "There was an error fetching the product.");
    return (
      <ErrorView>There was an error loading the product. Do not worry - we are on it.</ErrorView>
    );
  }
  return (
    <div className="flex flex-col gap-[16px] overflow-y-hidden">
      <ProductBreadcrumb returnHref="/admin/products">
        {product.name ?? "Unnamed Product"}
      </ProductBreadcrumb>
      <div className="flex flex-row gap-[16px] grow min-h-0 overflow-y-auto">
        <div className="flex flex-col items-center max-w-[650px] gap-[16px]">
          <Module component="paper" className="w-full">
            <Module.Content>{detail}</Module.Content>
          </Module>
          <Module component="paper" className="w-full" minHeight={400}>
            <Module.Header title="Price History">
              Historical recorded prices for the product.
            </Module.Header>
            <Module.Content>{priceChart}</Module.Content>
          </Module>
        </div>
        <div className="flex flex-col gap-[16px] grow min-w-0 h-full max-h-full">
          <Module component="paper" className="min-h-[220px] shrink-0">
            <Module.Header title="Subscriptions">
              Your current subscriptions to the product.
            </Module.Header>
            <Module.Content>{subscriptions}</Module.Content>
          </Module>
          <Module component="paper" className="grow min-h-[400px]">
            <Module.Header title={notificationsModuleTitle}>
              Notifications you have received for the product.
            </Module.Header>
            <Module.Content>{notifications}</Module.Content>
          </Module>
        </div>
      </div>
    </div>
  );
}
