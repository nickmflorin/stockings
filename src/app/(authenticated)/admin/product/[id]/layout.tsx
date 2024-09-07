import { redirect } from "next/navigation";
import { type ReactNode } from "react";

import { type ApiProduct } from "~/database/model";
import { logger } from "~/internal/logger";

import { fetchProduct } from "~/actions/products";

import { DetailBreadcrumb } from "~/components/DetailBreadcrumb";
import { ErrorView } from "~/components/errors/ErrorView";
import { Tabs } from "~/components/layout/Tabs";

import { ApiClientGlobalErrorCodes } from "~/api";

interface AdminProductLayoutProps {
  readonly children: ReactNode;
  readonly params: { id: string };
}

export default async function AdminProductLayout({ children, params }: AdminProductLayoutProps) {
  let product: ApiProduct<[]>;
  try {
    const { error, data } = await fetchProduct(params.id, { includes: [] }, { strict: false });
    if (error) {
      if (error.code === ApiClientGlobalErrorCodes.NOT_FOUND) {
        return redirect("/404");
      }
      logger.error(error, "There was an error fetching the product in the admin.");
      return (
        <ErrorView>There was an error loading the product. Do not worry - we are on it.</ErrorView>
      );
    }
    product = data;
  } catch (e) {
    logger.errorUnsafe(e, "There was an error fetching the product in the admin.");
    return (
      <ErrorView>There was an error loading the product. Do not worry - we are on it.</ErrorView>
    );
  }

  return (
    <div className="flex flex-col gap-[16px] w-full h-full max-h-full overflow-hidden">
      <DetailBreadcrumb returnHref="/admin/products" returnLabel="Products">
        {product.name ?? "Unnamed Product"}
      </DetailBreadcrumb>
      <Tabs
        items={[
          {
            label: "Subscriptions",
            path: `/admin/product/${product.id}/subscriptions`,
            activePaths: { leadingPath: "/admin/product/:id/subscriptions" },
            icon: "mailbox",
          },
          {
            label: "Notifications",
            path: `/admin/product/${product.id}/notifications`,
            activePaths: { leadingPath: "/admin/product/:id/notifications" },
            icon: "envelope",
          },
        ]}
      />
      <div className="grow min-h-0 max-h-full h-full flex flex-col mt-1">{children}</div>
    </div>
  );
}
