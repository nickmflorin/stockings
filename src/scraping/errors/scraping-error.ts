import { type ScrapingDomError, isScrapingDomError } from "~/scraping/errors";

import { isScrapingHttpError, type ScrapingHttpError } from "./http-errors";

export type ScrapingError = ScrapingDomError | ScrapingHttpError;

export const isScrapingError = (e: unknown): e is ScrapingError =>
  isScrapingDomError(e) || isScrapingHttpError(e);
