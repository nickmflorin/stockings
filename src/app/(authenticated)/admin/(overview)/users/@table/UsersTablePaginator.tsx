import { Suspense } from "react";

import { type UsersFilters } from "~/actions";
import { fetchUsersPagination } from "~/actions/users/fetch-users";

import { Paginator } from "~/components/pagination/Paginator";

export interface UsersTablePaginatorProps {
  readonly filters: UsersFilters;
  readonly page: number;
}

export const UsersTablePaginator = async ({
  filters,
  page: _page,
}: UsersTablePaginatorProps): Promise<JSX.Element> => {
  const {
    data: { count, page, pageSize },
  } = await fetchUsersPagination({ filters, page: _page }, { strict: true });
  return (
    <Suspense>
      <Paginator count={count} pageSize={pageSize} page={page} />
    </Suspense>
  );
};
