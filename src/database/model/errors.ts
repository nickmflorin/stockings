import type { Transaction } from "../prisma";

import { type ScrapingDomError } from "~/integrations/scraping";

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
  ScrapingErrorCode,
} from "./generated";

export type ScrapingDomErrorCode = Exclude<
  ScrapingErrorCode,
  "HTTP_NETWORK" | "HTTP_SERIALIZATION" | "HTTP_CLIENT"
>;

export type ScrapingHttpErrorCode = Extract<
  ScrapingErrorCode,
  "HTTP_NETWORK" | "HTTP_SERIALIZATION" | "HTTP_CLIENT"
>;

export type ScrapingErrorData<E extends ScrapingErrorCode = ScrapingErrorCode> = {
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

export const createScrapingErrorData = async <E extends ScrapingDomErrorCode>(
  tx: Transaction,
  error: ScrapingDomError<E>,
): Promise<ScrapingErrorData<E>> => {
  switch (error.errorCode) {
    case ScrapingErrorCode.MISSING_ELEMENT: {
      const result = await tx.missingElementErrorData.create({ data: error.errorData });
      return result as ScrapingErrorData<"MISSING_ELEMENT"> as ScrapingErrorData<E>;
    }
    case ScrapingErrorCode.MISSING_TEXT: {
      const result = await tx.missingTextErrorData.create({ data: error.errorData });
      return result as ScrapingErrorData<"MISSING_TEXT"> as ScrapingErrorData<E>;
    }
    case ScrapingErrorCode.NONUNIQUE_ELEMENT: {
      const result = await tx.nonUniqueElementErrorData.create({ data: error.errorData });
      return result as ScrapingErrorData<"NONUNIQUE_ELEMENT"> as ScrapingErrorData<E>;
    }
    case ScrapingErrorCode.INVALID_ATTRIBUTE: {
      const result = await tx.invalidAttributeErrorData.create({ data: error.errorData });
      return result as ScrapingErrorData<"INVALID_ATTRIBUTE"> as ScrapingErrorData<E>;
    }
    case ScrapingErrorCode.INVALID_TEXT: {
      const result = await tx.invalidTextErrorData.create({ data: error.errorData });
      return result as ScrapingErrorData<"INVALID_TEXT"> as ScrapingErrorData<E>;
    }
    case ScrapingErrorCode.MISSING_ATTRIBUTE: {
      const result = await tx.missingAttributeErrorData.create({ data: error.errorData });
      return result as ScrapingErrorData<"MISSING_ATTRIBUTE"> as ScrapingErrorData<E>;
    }
    case ScrapingErrorCode.NONUNIQUE_TEXT: {
      const result = await tx.nonUniqueTextErrorData.create({ data: error.errorData });
      return result as ScrapingErrorData<"NONUNIQUE_TEXT"> as ScrapingErrorData<E>;
    }
  }
};
