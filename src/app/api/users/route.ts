import { type NextRequest } from "next/server";

import { z } from "zod";

import type { UserIncludes } from "~/database/model";
import { db } from "~/database/prisma";

import { parseQueryParams } from "~/integrations/http";
import { parseFilters } from "~/lib/filters";
import { parseOrdering } from "~/lib/ordering";

import {
  UsersFiltersSchemas,
  UsersFiltersOptions,
  UsersDefaultOrdering,
  UserOrderableFields,
  UserIncludesSchema,
} from "~/actions";
import { fetchUsers } from "~/actions/users/fetch-users";

import { ClientResponse } from "~/api";

export async function generateStaticParams() {
  const users = await db.user.findMany();
  return users.map(u => ({
    id: u.id,
  }));
}

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;

  const query = parseQueryParams(searchParams.toString());
  const parsed = UserIncludesSchema.safeParse(query.includes);

  const limit = z.coerce.number().int().positive().safeParse(query.limit).data;

  let includes: UserIncludes = [];
  if (parsed.success) {
    includes = parsed.data;
  }

  const filters = parseFilters(query, UsersFiltersSchemas, UsersFiltersOptions);

  const ordering = parseOrdering(query, {
    defaultOrdering: UsersDefaultOrdering,
    fields: [...UserOrderableFields],
  });

  const { error, data } = await fetchUsers(
    { filters, ordering, includes, limit },
    { scope: "api" },
  );
  if (error) {
    return error.response;
  }
  return ClientResponse.OK(data).response;
};
