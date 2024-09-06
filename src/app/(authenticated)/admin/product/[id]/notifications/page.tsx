import { Suspense } from "react";

import { parseOrdering } from "~/lib/ordering";

import { ProductNotificationsDefaultOrdering } from "~/actions";

import { Loading } from "~/components/loading/Loading";
import { ProductNotificationsAdminTableColumns } from "~/features/notifications";

import { NotificationsTableBody } from "./NotificationsTableBody";

export interface NotificationsTablePageProps {
  readonly searchParams: Record<string, string>;
  readonly params: { id: string };
}

export default async function NotificationsPage({
  searchParams,
  params,
}: NotificationsTablePageProps) {
  const ordering = parseOrdering(searchParams, {
    defaultOrdering: ProductNotificationsDefaultOrdering,
    fields: ProductNotificationsAdminTableColumns.orderableColumns.map(c => c.id),
  });

  return (
    <Suspense
      key={JSON.stringify(ordering) + params.id}
      fallback={<Loading isLoading component="tbody" />}
    >
      <NotificationsTableBody productId={params.id} ordering={ordering} />
    </Suspense>
  );
}
