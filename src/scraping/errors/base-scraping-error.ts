import { type ScrapingErrorCode, type ScrapingErrorData } from "~/prisma/model";

export abstract class BaseScrapingError<E extends ScrapingErrorCode> extends Error {
  public abstract message: string;
  public abstract errorCode: E;
  public abstract errorData: ScrapingErrorData<E>;
}
