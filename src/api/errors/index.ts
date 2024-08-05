import { isError } from "~/application/errors";

import { HttpNetworkError, HttpSerializationError } from "~/integrations/http";

import { ApiClientFormError, ApiClientGlobalError } from "./api-client-error";
import { ApiServerError } from "./server-error";

export * from "./server-error";
export * from "./api-client-error";
export * from "./api-client-field-errors";

export type ApiError =
  | HttpNetworkError
  | ApiServerError
  | ApiClientGlobalError
  | ApiClientFormError
  | HttpSerializationError;

export const isApiError = (e: unknown): e is ApiError =>
  isError(e) &&
  [
    ApiClientFormError,
    ApiClientGlobalError,
    ApiClientFormError,
    HttpNetworkError,
    ApiServerError,
    HttpSerializationError,
  ].some(cls => e instanceof cls);
