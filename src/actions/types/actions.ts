import { cache } from "react";

import { clamp } from "lodash-es";

import { getAuthedUser } from "~/application/auth/server";
import { type User } from "~/database/model";
import { logger } from "~/internal/logger";

import { convertToPlainObject, type ApiClientError, type ApiClientErrorJson } from "~/api";
import { isApiClientError, ApiClientGlobalError } from "~/api";

export type ActionVisibility = "admin" | "public";

export const visibilityIsAdmin = (visibility?: ActionVisibility) => visibility === "admin";

export const visibilityIsPublic = (visibility?: ActionVisibility) => !visibilityIsAdmin(visibility);

export type ServerSidePaginationParams = {
  readonly page: number;
  readonly pageSize: number;
  readonly count: number;
};

export const clampPagination = (params: ServerSidePaginationParams) => {
  const count = clamp(params.count, 0, Infinity);
  const pageSize = clamp(params.pageSize, 1, Infinity);
  const page = clamp(params.page, 1, clamp(Math.ceil(params.count / pageSize), 1, Infinity));
  return { page, pageSize, count };
};

export type FetchActionScope = "api" | "action";

export type FetchActionContext = {
  readonly scope?: FetchActionScope;
  readonly strict?: boolean;
};

export type FetchActionContextError<C extends FetchActionContext> = C extends { scope: "api" }
  ? ApiClientError
  : ApiClientErrorJson;

export type FetchActionResponseOrError<T, C extends FetchActionContext> =
  | { data: T; error?: never }
  | { data?: never; error: FetchActionContextError<C> };

export type FetchActionResponse<T, C extends FetchActionContext> = C extends {
  strict: true;
}
  ? { data: T; error?: never }
  : FetchActionResponseOrError<T, C>;

export type MutationActionResponse<T> =
  | { data: T; error?: never }
  | { data?: never; error: ApiClientErrorJson };

interface ErrorInFetchContextOptions {
  readonly logData?: Record<string, unknown>;
  readonly logMessage?: string;
  readonly log?: boolean;
}

export const errorInFetchContext = <C extends FetchActionContext>(
  error: ApiClientError,
  context: C,
  options?: ErrorInFetchContextOptions,
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
): FetchActionResponse<any, C> => {
  const { logData = {}, logMessage, log = true } = options ?? {};

  if (context.strict) {
    throw error;
  } else if (context.scope === "api") {
    if (log) {
      logger.error(error, logMessage ?? error.message, logData);
    }
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    return { error } as FetchActionResponse<any, C>;
  }
  if (log) {
    logger.error(error, logMessage ?? error.message, logData);
  }
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  return { error: error.json } as FetchActionResponse<any, C>;
};

export const dataInFetchContext = <T, C extends FetchActionContext>(
  data: T,
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  context: C,
): FetchActionResponse<T, C> => ({ data: convertToPlainObject(data) }) as FetchActionResponse<T, C>;

export type StandardFetchActionReturn<R> = Promise<R | ApiClientError>;

export type FetchActionFn<P extends { visibility: ActionVisibility }, R> = (
  params: P,
  user: User,
) => StandardFetchActionReturn<R>;

export const standardFetchAction = <P extends { visibility: ActionVisibility }, R>(
  fn: FetchActionFn<P, R>,
) => {
  const wrapped = async <C extends FetchActionContext>(
    params: P,
    context: C,
  ): Promise<FetchActionResponse<R, C>> => {
    const { error, user, isAdmin } = await getAuthedUser();
    if (error) {
      return errorInFetchContext(error, context);
    } else if (visibilityIsAdmin(params.visibility) && !isAdmin) {
      const error = ApiClientGlobalError.Forbidden({
        message: "The user does not have permission to access this data.",
      });
      return errorInFetchContext(error, context);
    }
    const result = await fn(params, user);
    if (isApiClientError(result)) {
      return errorInFetchContext(result, context);
    }
    return dataInFetchContext(result, context);
  };
  return cache(wrapped) as typeof wrapped;
};
