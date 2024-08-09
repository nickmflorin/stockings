import { cache } from "react";

import { getAuthedUser } from "~/application/auth/server";
import { db } from "~/database";
import { conditionalFilters } from "~/database/util";

import { constructTableSearchClause } from "~/actions";

import { type ProductsTableControls } from "~/features/products";

import { convertToPlainObject } from "~/api/serialization";

const filtersClause = (filters: Partial<ProductsTableControls["filters"]>) =>
  conditionalFilters([
    filters.search ? constructTableSearchClause("product", filters.search) : undefined,
    filters.categories && filters.categories.length !== 0
      ? { category: { in: filters.categories } }
      : undefined,
    filters.subCategories && filters.subCategories.length !== 0
      ? { subCategories: { hasSome: filters.subCategories } }
      : undefined,
    filters.statuses && filters.statuses.length !== 0
      ? { status: { in: filters.statuses } }
      : undefined,
  ] as const);

const whereClause = ({ filters }: Pick<ProductsTableControls, "filters">) => {
  const clause = filtersClause(filters);
  if (clause.length === 0) {
    return undefined;
  }
  return {
    OR: clause,
  };
};

export const fetchProductsCount = cache(
  async ({ filters }: Pick<ProductsTableControls, "filters">) => {
    await getAuthedUser({ strict: true });
    return await db.product.count({
      where: whereClause({ filters }),
    });
  },
);

export const fetchProducts = cache(async ({ filters, ordering, page }: ProductsTableControls) => {
  await getAuthedUser({ strict: true });
  const data = await db.product.findMany({
    where: whereClause({ filters }),
    orderBy: [{ [ordering.field]: ordering.order }],
  });
  return data.map(convertToPlainObject);
});
