import { isError } from "~/application/errors";
import { ScrapingErrorCode } from "~/prisma/model";

import { HttpNetworkError, HttpClientError, HttpSerializationError } from "~/integrations/http";

export class ScrapingNetworkError extends HttpNetworkError {
  public errorCode = ScrapingErrorCode.HTTP_NETWORK;

  public get errorData() {
    return { url: this.url };
  }
}

export class ScrapingClientError extends HttpClientError {
  public errorCode = ScrapingErrorCode.HTTP_CLIENT;

  public get errorData() {
    return { url: this.url, status: this.status };
  }
}

export class ScrapingSerializationError extends HttpSerializationError {
  public errorCode = ScrapingErrorCode.HTTP_SERIALIZATION;
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
