import { ScrapingErrorCode } from "~/prisma/model";
import { ScrapingError } from "~/scraping/errors";

export abstract class ScrapingHttpError extends ScrapingError {
  protected readonly url: string;

  constructor(url: string) {
    super();
    this.url = url;
  }

  public get message() {
    return `There was an error making a request to ${this.url}.`;
  }
}

export class ScrapingNetworkError extends ScrapingHttpError {
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

export class ScrapingClientError extends ScrapingHttpError {
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

export class ScrapingSerializationError extends ScrapingHttpError {
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
