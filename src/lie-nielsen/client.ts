import * as cheerio from "cheerio";

import { logger } from "~/application/logger";
import { WrappedElement } from "~/dom";

import * as errors from "./errors";
import * as paths from "./paths";

/**
 *
 * @param element
 *
 * ```html
 * <div class="thumbnail">
 *   <a><img /></a>
 *   <div class="caption">
 *     <h5 class="center">
 *       <a></a>
 *     </h5>
 *     <h6>$285.00</h6>
 *   </div>
 * </div>
 * ```
 */

export type Thumbnail = {
  readonly productPath: string;
  readonly productPrice: string;
  readonly imageSrc: string;
  readonly productName: string;
};

const parseThumbnail = (element: cheerio.Element) => {
  const anchor = WrappedElement(element).find({ tag: "a" });
  const img = anchor.find({ tag: "img" });

  const caption = WrappedElement(element).find({ className: "caption" });

  const h5 = caption.find({ tag: "h5" });
  const link = h5.find({ tag: "a" });

  if (anchor.attribs.href === undefined) {
    throw new Error("");
  } else if (img.attribs.src === undefined) {
    throw new Error("");
  }
  return {
    productPath: anchor.attribs.href,
    productPrice: caption.find({ tag: "h6" }).text,
    imageSrc: img.attribs.src,
    productName: link.text,
  };
};

export class LieNielsenClient {
  private async request(url: string): Promise<string> {
    let response: Response;
    try {
      response = await fetch(url);
    } catch (e) {
      logger.error(`There was a network error making a request to ${url}:\n${e}`);
      throw new errors.LieNielsenNetworkError(url);
    }
    if (!response.ok) {
      logger.error(`There was a ${response.status} client error making a request to ${url}.`, {
        response,
      });
      throw new errors.LieNielsenClientError(url);
    }
    let text: string;
    try {
      text = await response.text();
    } catch (e) {
      logger.error(
        `There was an error deserializing the response from the request to ${url}:\n${e}`,
        { response },
      );
      throw new errors.LieNielsenSerializationError(url);
    }
    return text;
  }

  public async fetchProductPageThumbnails(id: paths.ProductPageId) {
    const url = paths.getProductPageUrl(id);
    const html = await this.request(url);
    const selector = cheerio.load(html);
    return [...selector(".product-list > .product-list-item > .thumbnail").map((i, el) => el)].map(
      c => parseThumbnail(c),
    );
  }
}

export const client = new LieNielsenClient();
