import { isError } from "~/application/errors";
import { ScrapingErrorCode } from "~/prisma/model";

import { BaseScrapingError } from "~/scraping/errors";

export abstract class ScrapingBaseHttpError extends BaseScrapingError {
  protected readonly url: string;

  constructor(url: string) {
    super();
    this.url = url;
  }

  public get message() {
    return `There was an error making a request to ${this.url}.`;
  }
}

export class ScrapingNetworkError extends ScrapingBaseHttpError {
  public readonly error: Error;
  public errorCode = ScrapingErrorCode.HTTP_NETWORK;

  constructor(url: string, error: Error) {
    super(url);
    this.error = error;
  }

  public get message() {
    return `There was a network error making a request to ${this.url}:\n${this.error}`;
  }
}

export class ScrapingClientError extends ScrapingBaseHttpError {
  public readonly status: number;
  public errorCode = ScrapingErrorCode.HTTP_CLIENT;

  constructor(url: string, status: number) {
    super(url);
    this.status = status;
  }

  public get message() {
    return `[${this.status}] There was a client error making a request to ${this.url}.`;
  }
}

export class ScrapingSerializationError extends ScrapingBaseHttpError {
  public readonly error: Error;
  public errorCode = ScrapingErrorCode.HTTP_SERIALIZATION;

  constructor(url: string, error: Error) {
    super(url);
    this.error = error;
  }

  public get message() {
    return `There was an error deserializing the response from the request to ${this.url}:\n${this.error}`;
  }
}

export type ScrapingHttpError =
  | ScrapingClientError
  | ScrapingNetworkError
  | ScrapingSerializationError;

export const isScrapingHttpError = (e: unknown) =>
  isError(e) &&
  [ScrapingClientError, ScrapingNetworkError, ScrapingSerializationError].some(
    cls => e instanceof cls,
  );
