import dynamic from "next/dynamic";
import { Suspense } from "react";

import { z } from "zod";

import { parseFilters } from "~/lib/filters";

import { Loading } from "~/components/loading/Loading";
import {
  NotificationsTableFiltersOptions,
  NotificationsTableFiltersSchemas,
} from "~/features/notifications";
/* eslint-disable-next-line max-len */
import { NotificationsTableFilterBar } from "~/features/notifications/components/tables/NotificationsTableFilterBar";

import { NotificationsTableBody } from "./NotificationsTableBody";
import { NotificationsTablePaginator } from "./NotificationsTablePaginator";

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
    NotificationsTableFiltersSchemas,
    NotificationsTableFiltersOptions,
  );

  return (
    <NotificationsTableView
      searchBar={
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
        key={JSON.stringify(filters) + String(page)}
        fallback={<Loading isLoading component="tbody" />}
      >
        <NotificationsTableBody filters={filters} page={page} />
      </Suspense>
    </NotificationsTableView>
  );
}
