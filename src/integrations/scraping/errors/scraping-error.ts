import { isScrapingHttpError, type ScrapingHttpError } from "./http-errors";

import { type ScrapingDomError, isScrapingDomError } from ".";

export type ScrapingError = ScrapingDomError | ScrapingHttpError;

export const isScrapingError = (e: unknown): e is ScrapingError =>
  isScrapingDomError(e) || isScrapingHttpError(e);
