import { type ScrapingDomError } from "~/scraping/dom/api";
import { humanizeList } from "~/lib/formatters";

export class ParsedDataError<
  D,
  E extends Record<keyof D & string, ScrapingDomError>,
> extends Error {
  public readonly errors: E;

  constructor(errors: E) {
    super();
    this.errors = errors;
  }

  public get message() {
    const fields = Object.keys(this.errors);
    const humanized = humanizeList(fields, { formatter: v => `'${v}'` });
    return `There was an error parsing the following field(s): ${humanized}.`;
  }
}
