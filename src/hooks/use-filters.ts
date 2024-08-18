import qs from "querystring";

import {
  usePathname,
  useSearchParams,
  useRouter,
  type ReadonlyURLSearchParams,
} from "next/navigation";
import { useCallback, useMemo } from "react";

import { type z } from "zod";

import {
  type FiltersSchemas,
  type ParseFiltersOptions,
  type ParsedFilters,
  parseFilters as _parseFilters,
  addFilter as _addFilter,
  pruneFilters as _pruneFilters,
} from "~/lib/filters";

import { useReferentialCallback } from "~/hooks";

export interface UseFiltersOptions<S extends FiltersSchemas> {
  readonly schemas: S;
  readonly options: ParseFiltersOptions<S>;
  readonly maintainExisting?: boolean;
}

export type FiltersUpdate<S extends FiltersSchemas> = Partial<{
  [key in keyof S]: z.infer<S[key]>;
}>;

export const useFilters = <S extends FiltersSchemas>({
  schemas,
  options,
  maintainExisting = true,
}: UseFiltersOptions<S>) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const addFilter = useCallback(
    <K extends keyof S>(f: ParsedFilters<S>, field: K, value: z.infer<S[K]>) =>
      _addFilter(f, field, value, options),
    [options],
  );

  const parseFilters = useCallback(
    (params: ReadonlyURLSearchParams) => _parseFilters(params, schemas, options),
    [options, schemas],
  );

  const pruneFilters = useCallback(
    (filters: ParsedFilters<S>) => _pruneFilters(filters, options),
    [options],
  );

  const initialFilters = useMemo(
    () => parseFilters(searchParams),
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    [],
  );

  const setFilters = useReferentialCallback((update: FiltersUpdate<S>) => {
    let currentFilters = parseFilters(searchParams);
    for (const [field, value] of Object.entries(update)) {
      currentFilters = addFilter(currentFilters, field, value);
    }
    let pruned = pruneFilters(currentFilters);

    if (maintainExisting) {
      const all = qs.parse(searchParams.toString());
      for (const [field, value] of Object.entries(all)) {
        if (!Object.keys(schemas).includes(field)) {
          pruned = { ...pruned, [field]: value };
        }
      }
    }
    replace(`${pathname}?${qs.stringify(pruned)}`);
  });

  return [initialFilters, setFilters] as const;
};
