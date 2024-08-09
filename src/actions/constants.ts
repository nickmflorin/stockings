import type { Brand, BrandModel } from "~/database/model";
import { constructOrSearch } from "~/database/util";

type TabledBrand = Extract<Brand, "product">;

// Note: These may eventually have to be replaced with a dynamic page size query param.
export const PAGE_SIZES = {
  product: 20,
} as const satisfies { [key in TabledBrand]: number };

export const SEARCH_FIELDS = {
  product: ["slug", "name", "code"],
} as const satisfies {
  [key in TabledBrand]: (keyof BrandModel<key>)[];
};

export const constructTableSearchClause = (brand: TabledBrand, search: string) =>
  constructOrSearch(search, [...SEARCH_FIELDS[brand]]);
