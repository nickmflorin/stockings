import dynamic from "next/dynamic";
import { Suspense } from "react";

import { z } from "zod";

import { parseOrdering } from "~/lib/ordering";

import {
  ProductNotificationOrderableFields,
  ProductNotificationsDefaultOrdering,
  ProductNotificationsFiltersObj,
} from "~/actions";

import { Loading } from "~/components/loading/Loading";
import { NotificationsTablePaginator } from "~/features/notifications/components/tables//NotificationsTablePaginator";
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

  const filters = ProductNotificationsFiltersObj.parse(searchParams);

  const ordering = parseOrdering(searchParams, {
    defaultOrdering: ProductNotificationsDefaultOrdering,
    fields: [...ProductNotificationOrderableFields],
  });

  return (
    <NotificationsTableView
      filterBar={
        <Suspense>
          <NotificationsTableFilterBar filters={filters} />
        </Suspense>
      }
      pagination={<NotificationsTablePaginator filters={filters} page={page} visibility="public" />}
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
