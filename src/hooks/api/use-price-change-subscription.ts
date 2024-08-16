import type { PriceChangeSubscription } from "~/database/model";

import { isUuid } from "~/lib/typeguards";

import { useSWR, type SWRConfig } from "./use-swr";

export const usePriceChangeSubscription = (
  id: string | null,
  config: SWRConfig<PriceChangeSubscription>,
) =>
  useSWR<PriceChangeSubscription>(
    isUuid(id) ? `/api/price-change-subscriptions/${id}` : null,
    config,
  );
