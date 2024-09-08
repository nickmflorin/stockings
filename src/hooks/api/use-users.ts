import type { ApiUser, UserIncludes } from "~/database/model";

import { type FlattenedUserControls } from "~/actions";

import { useSWR, type SWRConfig } from "./use-swr";

export const useUsers = <I extends UserIncludes>(
  config: SWRConfig<ApiUser<I>[], Partial<FlattenedUserControls<I>>>,
) => useSWR<ApiUser<I>[], Partial<FlattenedUserControls<I>>>("/api/users", config);
