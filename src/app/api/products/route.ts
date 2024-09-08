import { type NextRequest } from "next/server";

import { z } from "zod";

import type { ProductIncludes } from "~/database/model";
import { db } from "~/database/prisma";

import { parseQueryParams } from "~/integrations/http";
import { parseOrdering } from "~/lib/ordering";

import {
  ProductsFiltersObj,
  ProductsDefaultOrdering,
  ProductOrderableFields,
  ProductIncludesSchema,
} from "~/actions";
import { fetchProducts } from "~/actions/products";

import { ClientResponse } from "~/api";

export async function generateStaticParams() {
  const subscriptions = await db.statusChangeSubscription.findMany();
  return subscriptions.map(s => ({
    id: s.id,
  }));
}

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;

  const query = parseQueryParams(searchParams.toString());
  const parsed = ProductIncludesSchema.safeParse(query.includes);

  const limit = z.coerce.number().int().positive().safeParse(query.limit).data;

  let includes: ProductIncludes = [];
  if (parsed.success) {
    includes = parsed.data;
  }

  const filters = ProductsFiltersObj.parse(query);

  const ordering = parseOrdering(query, {
    defaultOrdering: ProductsDefaultOrdering,
    fields: [...ProductOrderableFields],
  });

  const fetcher = fetchProducts(includes);
  const { error, data } = await fetcher(
    { filters, ordering, limit, visibility: "public" },
    { scope: "api" },
  );
  if (error) {
    return error.response;
  }
  return ClientResponse.OK(data).response;
};
