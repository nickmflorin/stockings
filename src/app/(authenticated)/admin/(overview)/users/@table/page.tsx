import dynamic from "next/dynamic";
import { Suspense } from "react";

import { z } from "zod";

import { parseFilters } from "~/lib/filters";
import { parseOrdering } from "~/lib/ordering";

import { UsersDefaultOrdering, UsersFiltersOptions, UsersFiltersSchemas } from "~/actions";

import { Loading } from "~/components/loading/Loading";
import { UsersTableColumns } from "~/features/users";
import { UsersTableFilterBar } from "~/features/users/components/tables/UsersTableFilterBar";

import { UsersTableBody } from "./UsersTableBody";
import { UsersTablePaginator } from "./UsersTablePaginator";

const UsersTableView = dynamic(() => import("~/features/users/components/tables/UsersTableView"), {
  loading: () => <Loading isLoading />,
});

export interface UsersTablePageProps {
  readonly searchParams: Record<string, string>;
}

export default function UsersTablePage({ searchParams }: UsersTablePageProps) {
  const page = z.coerce.number().int().positive().min(1).safeParse(searchParams?.page).data ?? 1;

  const filters = parseFilters(searchParams, UsersFiltersSchemas, UsersFiltersOptions);

  const ordering = parseOrdering(searchParams, {
    defaultOrdering: UsersDefaultOrdering,
    fields: UsersTableColumns.orderableColumns.map(c => c.id),
  });

  return (
    <UsersTableView
      filterBar={
        <Suspense>
          <UsersTableFilterBar />
        </Suspense>
      }
      pagination={
        <Suspense key={JSON.stringify(filters) + String(page)}>
          <UsersTablePaginator filters={filters} page={page} />
        </Suspense>
      }
    >
      <Suspense
        key={JSON.stringify(filters) + JSON.stringify(ordering) + String(page)}
        fallback={<Loading isLoading component="tbody" />}
      >
        <UsersTableBody filters={filters} page={page} ordering={ordering} />
      </Suspense>
    </UsersTableView>
  );
}
