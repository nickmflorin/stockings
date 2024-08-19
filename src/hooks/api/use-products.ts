import type { ApiProduct, ProductIncludes } from "~/database/model";

import { type FlattenedProductsControls } from "~/actions";

import { useSWR, type SWRConfig } from "./use-swr";

export const useProducts = <I extends ProductIncludes>(
  config: SWRConfig<ApiProduct<I>[], Partial<FlattenedProductsControls<I>>>,
) => useSWR<ApiProduct<I>[], Partial<FlattenedProductsControls<I>>>("/api/products", config);
