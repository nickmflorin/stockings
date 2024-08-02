import {
  type NonUniqueElementErrorData,
  type NonUniqueTextErrorData,
  type MissingAttributeErrorData,
  type MissingElementErrorData,
  type MissingTextErrorData,
  type HttpClientErrorData,
  type HttpNetworkErrorData,
  type HttpSerializationErrorData,
  type InvalidAttributeErrorData,
  type InvalidTextErrorData,
  type ScrapingErrorCode,
} from "./generated";

export type ScrapingErrorDataModels<E extends ScrapingErrorCode = ScrapingErrorCode> = {
  [ScrapingErrorCode.HTTP_CLIENT]: HttpClientErrorData;
  [ScrapingErrorCode.HTTP_NETWORK]: HttpNetworkErrorData;
  [ScrapingErrorCode.HTTP_SERIALIZATION]: HttpSerializationErrorData;
  [ScrapingErrorCode.INVALID_ATTRIBUTE]: InvalidAttributeErrorData;
  [ScrapingErrorCode.INVALID_TEXT]: InvalidTextErrorData;
  [ScrapingErrorCode.MISSING_ATTRIBUTE]: MissingAttributeErrorData;
  [ScrapingErrorCode.MISSING_ELEMENT]: MissingElementErrorData;
  [ScrapingErrorCode.MISSING_TEXT]: MissingTextErrorData;
  [ScrapingErrorCode.NONUNIQUE_ELEMENT]: NonUniqueElementErrorData;
  [ScrapingErrorCode.NONUNIQUE_TEXT]: NonUniqueTextErrorData;
}[E];

export type ScrapingErrorData<E extends ScrapingErrorCode = ScrapingErrorCode> = Omit<
  ScrapingErrorDataModels<E>,
  "id"
>;
