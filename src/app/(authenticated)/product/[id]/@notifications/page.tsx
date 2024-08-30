import dynamic from "next/dynamic";
import { Suspense } from "react";

import { z } from "zod";

import { parseFilters } from "~/lib/filters";
import { parseOrdering } from "~/lib/ordering";

import {
  ProductNotificationOrderableFields,
  ProductNotificationsDefaultOrdering,
  ProductNotificationsFiltersSchemas,
  ProductNotificationsFiltersOptions,
} from "~/actions";

import { Loading } from "~/components/loading/Loading";
/* eslint-disable-next-line max-len */
import { NotificationsTablePaginator } from "~/features/notifications/components/tables//NotificationsTablePaginator";
/* eslint-disable-next-line max-len */
import { NotificationsTableFilterBar } from "~/features/notifications/components/tables/NotificationsTableFilterBar";

import { NotificationsTableBody } from "./NotificationsTableBody";

const NotificationsTableView = dynamic(
  () => import("~/features/notifications/components/tables/NotificationsTableView"),
  { loading: () => <Loading isLoading /> },
);

export interface SubscriptionsTablePageProps {
  readonly searchParams: Record<string, string>;
  readonly params: { id: string };
}

export default async function SubscriptionsPage({
  searchParams,
  params,
}: SubscriptionsTablePageProps) {
  const page = z.coerce.number().int().positive().min(1).safeParse(searchParams?.page).data ?? 1;

  const filters = parseFilters(
    searchParams,
    ProductNotificationsFiltersSchemas,
    ProductNotificationsFiltersOptions,
  );

  const ordering = parseOrdering(searchParams, {
    defaultOrdering: ProductNotificationsDefaultOrdering,
    fields: [...ProductNotificationOrderableFields],
  });

  return (
    <NotificationsTableView
      excludeColumns={["product"]}
      filterBar={
        <Suspense>
          <NotificationsTableFilterBar excludeProducts isSearchable={false} />
        </Suspense>
      }
      pagination={
        <Suspense key={JSON.stringify(filters) + String(page)}>
          <NotificationsTablePaginator
            filters={{ ...filters, products: [params.id] }}
            page={page}
          />
        </Suspense>
      }
    >
      <Suspense
        key={JSON.stringify(filters) + JSON.stringify(ordering) + String(page)}
        fallback={<Loading isLoading component="tbody" />}
      >
        <NotificationsTableBody
          productId={params.id}
          filters={filters}
          page={page}
          ordering={ordering}
        />
      </Suspense>
    </NotificationsTableView>
  );
}
