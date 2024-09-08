import { type NextRequest } from "next/server";

import { z } from "zod";

import type { UserIncludes } from "~/database/model";
import { db } from "~/database/prisma";

import { parseQueryParams } from "~/integrations/http";
import { parseOrdering } from "~/lib/ordering";

import {
  UsersFiltersObj,
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

  const filters = UsersFiltersObj.parse(query);

  const ordering = parseOrdering(query, {
    defaultOrdering: UsersDefaultOrdering,
    fields: [...UserOrderableFields],
  });
  const fetcher = fetchUsers(includes);
  const { error, data } = await fetcher(
    { filters, ordering, limit, visibility: "admin" },
    { scope: "api" },
  );
  if (error) {
    return error.response;
  }
  return ClientResponse.OK(data).response;
};
