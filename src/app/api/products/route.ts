import { type NextRequest } from "next/server";

import { z } from "zod";

import type { ProductIncludes } from "~/database/model";
import { db } from "~/database/prisma";

import { parseQueryParams } from "~/integrations/http";
import { parseFilters } from "~/lib/filters";
import { parseOrdering } from "~/lib/ordering";

import {
  ProductsFiltersSchemas,
  ProductsFiltersOptions,
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

  const filters = parseFilters(query, ProductsFiltersSchemas, ProductsFiltersOptions);

  const ordering = parseOrdering(query, {
    defaultOrdering: ProductsDefaultOrdering,
    fields: [...ProductOrderableFields],
  });

  const { error, data } = await fetchProducts(
    { filters, ordering, includes, limit },
    { scope: "api" },
  );
  if (error) {
    return error.response;
  }
  return ClientResponse.OK(data).response;
};
