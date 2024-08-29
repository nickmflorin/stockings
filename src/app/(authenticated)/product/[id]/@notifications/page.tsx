import { Suspense } from "react";

import { parseOrdering } from "~/lib/ordering";

import { ProductNotificationOrderableFields, ProductNotificationsDefaultOrdering } from "~/actions";

import { Loading } from "~/components/loading/Loading";

import { NotificationsTableBody } from "./NotificationsTableBody";

export interface SubscriptionsTablePageProps {
  readonly searchParams: Record<string, string>;
  readonly params: { id: string };
}

export default async function SubscriptionsPage({
  searchParams,
  params,
}: SubscriptionsTablePageProps) {
  const ordering = parseOrdering(searchParams, {
    defaultOrdering: ProductNotificationsDefaultOrdering,
    fields: [...ProductNotificationOrderableFields],
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
