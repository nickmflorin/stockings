import { NextResponse } from "next/server";

import { type z } from "zod";

import { HttpClientError, type HttpClientErrorConfig, type JsonObject } from "~/integrations/http";

import {
  ApiClientGlobalErrorCodes,
  type ApiClientGlobalErrorCode,
  type ApiClientGlobalErrorStatusCode,
} from "../codes";
import {
  type ApiClientFormErrorJson,
  type ApiClientErrorJson,
  type ApiClientGlobalErrorJson,
  type ApiClientFieldErrorsObj,
  type RawApiClientFieldErrorsObj,
} from "../types";

import { ApiClientFieldErrors, type IssueLookup } from "./api-client-field-errors";

export type ApiClientErrorResponse = NextResponse<ApiClientErrorJson>;

const removeUndefined = <T extends Record<string, unknown>>(obj: T): T =>
  Object.keys(obj).reduce((prev: T, key: string) => {
    const v = obj[key as keyof T];
    if (v !== undefined) {
      return { ...prev, [key as keyof T]: v } as T;
    }
    return prev;
  }, {} as T);

export interface ApiClientErrorConfig<C extends ApiClientGlobalErrorCode>
  extends Omit<HttpClientErrorConfig, "status"> {
  readonly code: C;
}

export abstract class ApiClientError<
  J extends JsonObject,
  C extends ApiClientGlobalErrorCode,
> extends HttpClientError {
  public readonly code: C;

  constructor({ code, ...config }: ApiClientErrorConfig<C>) {
    super({
      ...config,
      status: ApiClientGlobalErrorCodes.getAttribute(code, "status"),
    });
    this.code = code;
  }

  public abstract get json(): J;

  public get response(): NextResponse<J> {
    return NextResponse.json<J>(this.json, { status: this.status });
  }
}
export interface ApiClientFormErrorConfig<E extends string = string>
  extends Omit<
    ApiClientErrorConfig<typeof ApiClientGlobalErrorCodes.BAD_REQUEST>,
    "status" | "code"
  > {
  readonly errors: RawApiClientFieldErrorsObj<E> | ApiClientFieldErrors<E>;
}

export class ApiClientFormError<E extends string = string> extends ApiClientError<
  ApiClientFormErrorJson,
  typeof ApiClientGlobalErrorCodes.BAD_REQUEST
> {
  private readonly _errors: RawApiClientFieldErrorsObj<E> | ApiClientFieldErrors<E>;

  constructor({ errors, ...config }: ApiClientFormErrorConfig<E>) {
    super({
      ...config,
      code: ApiClientGlobalErrorCodes.BAD_REQUEST,
    });
    this._errors = errors;
  }

  public get errors(): ApiClientFieldErrorsObj<E> {
    if (this._errors instanceof ApiClientFieldErrors) {
      return this._errors.errors;
    }
    return new ApiClientFieldErrors(this._errors).errors;
  }

  public static create<Ei extends string>(
    config: ApiClientFormErrorConfig<Ei>,
  ): ApiClientFormError<Ei> {
    return new ApiClientFormError(config);
  }

  public static fromZodError<O extends z.ZodObject<{ [key in string]: z.ZodTypeAny }>>({
    error,
    schema,
    lookup,
    ...config
  }: Omit<ApiClientFormErrorConfig<keyof O["shape"] & string>, "errors"> & {
    readonly error: z.ZodError;
    readonly schema: O;
    readonly lookup?: IssueLookup<keyof O["shape"] & string>;
  }): ApiClientFormError<keyof O["shape"] & string> {
    return new ApiClientFormError({
      ...config,
      errors: ApiClientFieldErrors.fromZodError(error, schema, lookup),
    });
  }

  public get json() {
    return removeUndefined({
      errors: this.errors,
      status: this.status as ApiClientFormErrorJson["status"],
      code: this.code,
      message: this.message,
    });
  }
}

export class ApiClientGlobalError<
  C extends ApiClientGlobalErrorCode = ApiClientGlobalErrorCode,
> extends ApiClientError<ApiClientGlobalErrorJson<C>, C> {
  public static BadRequest = (
    config: Omit<ApiClientErrorConfig<typeof ApiClientGlobalErrorCodes.BAD_REQUEST>, "code">,
  ) =>
    new ApiClientGlobalError({
      ...config,
      code: ApiClientGlobalErrorCodes.BAD_REQUEST,
    });

  public static NotAuthenticated = (
    config: Omit<ApiClientErrorConfig<typeof ApiClientGlobalErrorCodes.NOT_AUTHENTICATED>, "code">,
  ) =>
    new ApiClientGlobalError({
      ...config,
      code: ApiClientGlobalErrorCodes.NOT_AUTHENTICATED,
    });

  public static Forbidden = (
    config: Omit<ApiClientErrorConfig<typeof ApiClientGlobalErrorCodes.FORBIDDEN>, "code">,
  ) =>
    new ApiClientGlobalError({
      ...config,
      code: ApiClientGlobalErrorCodes.FORBIDDEN,
    });

  public static NotFound = (
    config: Omit<ApiClientErrorConfig<typeof ApiClientGlobalErrorCodes.NOT_FOUND>, "code">,
  ) =>
    new ApiClientGlobalError({
      ...config,
      code: ApiClientGlobalErrorCodes.NOT_FOUND,
    });

  public get json() {
    return removeUndefined({
      status: this.status as ApiClientGlobalErrorStatusCode<C>,
      code: this.code,
      message: this.message,
    });
  }
}
