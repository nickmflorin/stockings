import dynamic from "next/dynamic";
import { Suspense } from "react";

import { z } from "zod";

import { parseFilters } from "~/lib/filters";
import { parseOrdering } from "~/lib/ordering";

import {
  ProductNotificationOrderableFields,
  ProductNotificationsDefaultOrdering,
  ProductNotificationsFiltersOptions,
  ProductNotificationsFiltersSchemas,
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

export interface NotificationsTablePageProps {
  readonly searchParams: Record<string, string>;
}

export default function NotificationsTablePage({ searchParams }: NotificationsTablePageProps) {
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
      filterBar={
        <Suspense>
          <NotificationsTableFilterBar />
        </Suspense>
      }
      pagination={
        <Suspense key={JSON.stringify(filters) + String(page)}>
          <NotificationsTablePaginator filters={filters} page={page} />
        </Suspense>
      }
    >
      <Suspense
        key={JSON.stringify(filters) + JSON.stringify(ordering) + String(page)}
        fallback={<Loading isLoading component="tbody" />}
      >
        <NotificationsTableBody filters={filters} page={page} ordering={ordering} />
      </Suspense>
    </NotificationsTableView>
  );
}
