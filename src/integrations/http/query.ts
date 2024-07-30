import urlModule from "url";

import qs, { type ParsedQs } from "qs";
import { type z } from "zod";

export type QueryParamValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | QueryParamObj
  | QueryParamValue[];

export type QueryParamObj = {
  [k: string]: QueryParamValue;
};

type Pruneable = "empty-strings" | "empty-arrays" | "empty-objects" | null;

const DEFAULT_PRUNEABLES: Pruneable[] = ["empty-strings", "empty-objects", "empty-arrays", null];

const OMIT = "___OMIT___" as const;
type Omit = typeof OMIT;

interface PruneQueryParamsOptions {
  /**
   * Defines the general forms of values that should be considered empty and pruned from the
   * query parameters, {@link QueryParamObj}.
   */
  readonly prune?: Pruneable[];
}

/**
 * Prunes the provided set of query parameters, {@link QueryParamObj}, by removing nullish or
 * empty values from the object.  The determination of whether or not a value should be removed
 * from the object depends on the options, {@link PruneQueryParamsOptions}, that are provided
 * to the method.
 *
 * @param {QueryParamObj} query
 *   The query parameters that should be pruned.
 *
 * @param {PruneQueryParamsOptions} options
 *   Optional options that dictate how the query parameters should be pruned.
 *
 * @returns {QueryParamObj}
 *   The query parameters with empty and/or nullish values removed.
 */
export const pruneQueryParams = (
  query: QueryParamObj,
  options?: PruneQueryParamsOptions,
): QueryParamObj => {
  const pruneables = options?.prune ?? DEFAULT_PRUNEABLES;

  const pruneObj = (obj: QueryParamObj): QueryParamObj => {
    const newObj: QueryParamObj = {};
    for (const [k, v] of Object.entries(obj)) {
      const pruned = pruneValue(v);
      if (pruned !== OMIT) {
        newObj[k] = pruned;
      }
    }
    return newObj;
  };

  const pruneValue = (v: QueryParamValue): QueryParamValue | Omit => {
    if (v === null) {
      return pruneables.includes(null) ? OMIT : null;
    } else if (v === undefined) {
      return OMIT;
    } else if (typeof v === "string") {
      return v.trim().length === 0 && pruneables.includes("empty-strings") ? OMIT : v;
    } else if (Array.isArray(v)) {
      const pruned = v.map(pruneValue).filter(v => v !== OMIT);
      if (pruned.length === 0 && pruneables.includes("empty-arrays")) {
        return OMIT;
      }
      return pruned;
    } else if (typeof v === "object") {
      const pruned = pruneObj(v);
      if (Object.keys(pruned).length === 0 && pruneables.includes("empty-objects")) {
        return OMIT;
      }
      return pruned;
    } else {
      return v;
    }
  };
  return pruneObj(query);
};

export const parseQueryParams = (value: string) => qs.parse(value, { parseArrays: true });

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export const stringifyQueryParams = (query: any) =>
  qs.stringify(query, { arrayFormat: "brackets" });

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
type QueryParamsObjFieldDefinition<V = any> = { schema?: z.ZodType<V>; defaultValue?: V };

type QueryParamsObjDefinition<K extends string = string> = {
  [key in K]: QueryParamsObjFieldDefinition;
};

type ParsedQueryParamsObjectValue<
  K extends keyof D,
  D extends QueryParamsObjDefinition,
> = D extends { [key in K]: { schema: z.ZodType<infer V>; defaultValue: infer DEFAULT } }
  ? DEFAULT | V
  : D extends { [key in K]: { schema: z.ZodType<infer V> } }
    ? V | undefined
    : D extends { [key in K]: { defaultValue: infer DEFAULT } }
      ? DEFAULT | undefined
      : string | undefined;

type ParsedQueryParamsObject<D extends QueryParamsObjDefinition> = {
  [key in keyof D]: ParsedQueryParamsObjectValue<key, D>;
};

/**
 * Parses the provided query string into an object of query parameters,
 * {@link ParsedQueryParamsObject<D>}, based on the provided definitions for each field of the
 * expected object, {@link QueryParamsObjDefinition}.
 *
 * @param {string | string[] | undefined} value
 *   The query parameter value read directly from the URL.
 *
 * @param {QueryParamsObjDefinition} definition
 *   The schema and/or default values for each field of the expected query parameters object.  If
 *   a field is not included in the provided definition, it will not be included in the resulting
 *   object, {@link ParsedQueryParamsObject}, that the method returns.
 *
 *   Each field in the definition can have an optional 'schema' and/or 'defaultValue' property:
 *
 *   (1) Schema
 *       A Zod schema that should be used to parse the raw value of the query parameter.
 *       If the schema validation fails, either the 'defaultValue' will be used or 'undefined' will
 *       be used for that specific field in the resulting object.
 *
 *   (2) Default Value
 *       The default value that should be used for that specific field if the field is not present
 *       in the raw query or the schema validation for that field fails.  If a default value is not
 *       provided, 'undefined' will be used.
 *
 * @returns {ParsedQueryParamsObject}
 *   The parsed query parameters object that contains the fields and values associated with the
 *   provided definition, {@link QueryParamsObjDefinition}.
 */
export const parseQueryParamsObject = <D extends QueryParamsObjDefinition>(
  value: string | string[] | undefined,
  definition: D,
): ParsedQueryParamsObject<D> => {
  const v = Array.isArray(value) ? value[0] : value;
  const parsed = v ? parseQueryParams(v) : {};

  let p: Record<string, string | undefined> = {};
  if (typeof parsed === "object" && parsed !== null && !Array.isArray(parsed)) {
    p = parsed as Record<string, string | undefined>;
  }
  const result: { [key in string]: unknown } = {};
  for (const [k, def] of Object.entries(definition)) {
    const kv = p[k];
    if (def.schema) {
      const parsed = def.schema.safeParse(kv);
      if (parsed.success) {
        result[k] = parsed.data;
      } else {
        result[k] = def.defaultValue;
      }
    } else if (kv === undefined) {
      result[k] = def.defaultValue;
    } else {
      result[k] = kv;
    }
  }
  return result as ParsedQueryParamsObject<D>;
};

/**
 * Parses the query parameters from the provided URL and returns the query parameters as an object.
 *
 * @param {string} url The URL that the query parameters should be parsed from.
 *
 * @returns {Record<string, string>}
 * 	 An object that represents the parameter names and values that are in the URL.
 */
export const getQueryParams = (url: string): ParsedQs => {
  const queryString = urlModule.parse(url).query;
  if (queryString) {
    return parseQueryParams(queryString);
  }
  return {};
};

interface AddQueryParamsToUrlOptions {
  readonly prune?: true | Pruneable[];
}

export function addQueryParamsToUrl(
  url: string,
  query?: QueryParamObj,
  options?: AddQueryParamsToUrlOptions,
): string;
export function addQueryParamsToUrl(url: string, query: string): string;
export function addQueryParamsToUrl(url: string, query: URLSearchParams): string;

/**
 * Adds the provided query parameters to the provided URL or path, overwriting existing query
 * parameters that may already exist on the provided URL or path.
 *
 * @param {string} url The URL or path that the query parameters should be added to.
 *
 * @param {QueryParamObj} query The query parameters that should be added to the URL or path.
 *
 * @param {AddQueryParamsToUrlOptions} options
 *   The options that dictate how the query parameters should be pruned before being included in
 *   the resulting URL.
 *
 * @returns {string} The URL or path with the query parameters added.
 */
export function addQueryParamsToUrl(
  url: string,
  query?: QueryParamObj | string | URLSearchParams,
  options?: AddQueryParamsToUrlOptions,
): string {
  if (typeof query === "string" || query instanceof URLSearchParams) {
    const q = typeof query === "string" ? query : query.toString();
    if (q.startsWith("?")) {
      return url.split("?")[0] + q;
    } else if (q.length !== 0) {
      return url.split("?")[0] + "?" + q;
    }
    return url;
  } else if (!query) {
    return url;
  }
  if (options?.prune !== undefined) {
    query = pruneQueryParams(query, { prune: options.prune === true ? undefined : options.prune });
  }
  return addQueryParamsToUrl(url, stringifyQueryParams(query));
}
