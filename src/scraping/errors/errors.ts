import { type ScrapingDomError, isScrapingDomError } from "~/scraping/dom/api";
import { isScrapingHttpError, type ScrapingHttpError } from "~/scraping/http";

export type ScrapingError = ScrapingDomError | ScrapingHttpError;

export const isScrapingError = (e: unknown): e is ScrapingError =>
  isScrapingDomError(e) || isScrapingHttpError(e);
