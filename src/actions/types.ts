import { type ApiClientError, type ApiClientErrorJson } from "~/api";

export type FetchActionScope = "api" | "action";

export type FetchActionContext = {
  readonly scope?: FetchActionScope;
};

export type FetchActionResponseOrError<T, E> =
  | { data: T; error?: never }
  | { data?: never; error: E };

export type FetchActionResponse<T, C extends FetchActionContext> = C extends { scope: "api" }
  ? FetchActionResponseOrError<T, ApiClientError>
  : FetchActionResponseOrError<T, ApiClientErrorJson>;

export type MutationActionResponse<T> = FetchActionResponseOrError<T, ApiClientErrorJson>;

export const returnErrorInFetchContext = <T, C extends FetchActionContext>(
  error: ApiClientError,
  context: C,
): FetchActionResponse<T, C> => {
  if (context.scope === "api") {
    return { error } as FetchActionResponse<T, C>;
  }
  return { error: error.json } as FetchActionResponse<T, C>;
};
