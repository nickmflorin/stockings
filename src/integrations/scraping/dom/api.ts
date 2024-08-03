import type * as cheerio from "cheerio";

import { MissingElementError, NonUniqueElementError } from "../errors";
import {
  type FindInDomOptions,
  type ApiSelectorParams,
  type DomApiType,
  type DomApiRT,
} from "../types";

import { ApiElement } from "./element";
import { ApiSelector } from "./selector";

export const DomApi =
  (api: cheerio.CheerioAPI): DomApiType =>
  <O extends FindInDomOptions>(
    selector: ApiSelector | ApiSelectorParams | string,
    options?: O,
  ): DomApiRT<O> => {
    const sel = typeof selector === "string" ? selector : ApiSelector.create(selector).toString();

    /* This type coercion is not ideal, but we are only using the WrappedApi to make selections of
       traditional HTML nodes, not things like the Document object. */
    const elements = [
      ...api(sel.toString()).map((i, el) => ApiElement.create(el as cheerio.Element)),
    ];
    return ApiElement.findReturn(
      elements,
      {
        nonUniqueError: () => new NonUniqueElementError(sel),
        missingError: () => new MissingElementError(sel),
      },
      options,
    );
  };
