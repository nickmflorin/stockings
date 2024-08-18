import { ReadonlyURLSearchParams } from "next/navigation";

import { type z } from "zod";

import { parseQueryParams } from "~/integrations/http";

export type FiltersSchemas = {
  [key in string]: z.ZodType;
};

export type ParsedFilters<S extends FiltersSchemas> = { [key in keyof S]: z.infer<S[key]> };

export type ParseFiltersOptions<S extends FiltersSchemas> = {
  [key in keyof S]: {
    readonly defaultValue: z.infer<S[key]>;
    readonly excludeWhen?: (v: z.infer<S[key]>) => boolean;
  };
};

export const addFilter = <S extends FiltersSchemas, K extends keyof S>(
  f: ParsedFilters<S>,
  field: K,
  value: z.infer<S[K]>,
  options: ParseFiltersOptions<S>,
) => {
  if (options[field]?.excludeWhen?.(value)) {
    f = { ...f, [field]: options[field].defaultValue };
  } else {
    f = { ...f, [field]: value };
  }
  return f;
};

export const pruneFilters = <S extends FiltersSchemas>(
  filters: ParsedFilters<S>,
  options: ParseFiltersOptions<S>,
) => {
  let pruned: Partial<ParsedFilters<S>> = {};
  for (const [field, value] of Object.entries(filters)) {
    const excl = options[field].excludeWhen;
    if (!excl || excl(value) === false) {
      pruned = { ...pruned, [field]: value };
    }
  }
  return pruned;
};

export const parseFilters = <S extends FiltersSchemas>(
  params: ReadonlyURLSearchParams | Record<string, string | string[] | undefined>,
  schemas: S,
  options: ParseFiltersOptions<S>,
) => {
  let f: ParsedFilters<S> = {} as ParsedFilters<S>;
  const parsed =
    params instanceof ReadonlyURLSearchParams ? parseQueryParams(params.toString()) : params;

  for (const [field, schema] of Object.entries(schemas)) {
    if (parsed[field] !== undefined) {
      const parsedField = schema.safeParse(parsed[field]);
      if (parsedField.success) {
        f = addFilter(f, field, parsedField.data, options);
      } else {
        f = { ...f, [field]: options[field].defaultValue };
      }
    } else {
      f = { ...f, [field]: options[field].defaultValue };
    }
  }
  return f;
};
