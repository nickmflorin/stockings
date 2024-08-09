import type { ApiProductSubscription, ProductSubscription } from "~/database/model";

import { isUuid } from "~/lib/typeguards";

import { useSWR, type SWRConfig } from "./use-swr";

export const useProductSubscription = (
  id: string | null,
  config: SWRConfig<ApiProductSubscription>,
) => useSWR<ApiProductSubscription>(isUuid(id) ? `/api/products/${id}/subscription` : null, config);