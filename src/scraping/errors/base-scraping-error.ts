import { type ScrapingErrorCode } from "~/prisma/model";

export abstract class BaseScrapingError extends Error {
  public abstract message: string;
  public abstract errorCode: ScrapingErrorCode;
}
