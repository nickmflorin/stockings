import type { HttpMethod } from "./types";

import { isError } from "~/application/errors";

interface HttpErrorConfig {
  readonly message?: string;
  readonly url: string;
  readonly method: HttpMethod;
}

export abstract class BaseHttpError extends Error {
  protected readonly url: string;
  public readonly method: HttpMethod;

  constructor({ url, message, method }: HttpErrorConfig) {
    super(
      message
        ? `[${method}] ${message}`
        : `[${method}] There was an error making a request to ${url}.`,
    );
    this.name = "HttpError";
    this.url = url;
    this.method = method;
  }
}

export type NetworkErrorClass<C extends HttpNetworkError> = {
  new (error: Error, config: HttpErrorConfig): C;
};

export class HttpNetworkError extends BaseHttpError {
  public readonly error: Error;

  constructor(error: Error, config: HttpErrorConfig) {
    super({
      ...config,
      message:
        config.message ?? `There was a network error making a request to ${config.url}: ${error}`,
    });
    this.error = error;
    this.name = "HttpNetworkError";
  }

  public get logData() {
    return {
      url: this.url,
      method: this.method,
      error: this.error,
      message: this.message,
    };
  }
}

export type ClientErrorClass<C extends HttpClientError> = {
  new (config: HttpErrorConfig & { readonly status: number }): C;
};

export class HttpClientError extends BaseHttpError {
  public readonly status: number;

  constructor({ status, ...config }: HttpErrorConfig & { readonly status: number }) {
    super({
      ...config,
      message: config.message
        ? `[${status}] ${config.message}`
        : `[${status}] There was a client error making a request to ${config.url}.`,
    });
    this.status = status;
    this.name = "HttpClientError";
  }

  public get logData() {
    return {
      url: this.url,
      method: this.method,
      status: this.status,
      message: this.message,
    };
  }
}

export type SerializationErrorClass<C extends HttpSerializationError> = {
  new (config: HttpErrorConfig & { readonly status: number }): C;
};

export class HttpSerializationError extends HttpClientError {
  constructor(config: HttpErrorConfig & { readonly status: number }) {
    super({
      ...config,
      message: config.message
        ? `[${config.status}] ${config.message}`
        : `[${config.status}] There was an error serializing/processing the response for the request to ${config.url}.`,
    });
    this.name = "HttpSerializationError";
  }
}

export type HttpError = HttpNetworkError | HttpClientError | HttpSerializationError;

export const isHttpError = (e: unknown): e is HttpError =>
  isError(e) &&
  (e instanceof HttpNetworkError ||
    e instanceof HttpClientError ||
    e instanceof HttpSerializationError);
