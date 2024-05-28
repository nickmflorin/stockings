import { type ChildNode, type Text } from "domhandler";
import { ElementType } from "htmlparser2";

import type * as cheerio from "cheerio";

export const isElement = (child: ChildNode): child is cheerio.Element =>
  [ElementType.Tag, ElementType.Script, ElementType.Style].includes(child.type);

export const isText = (child: ChildNode): child is Text => [ElementType.Text].includes(child.type);

export type ElementAttribute = "href" | "src" | "value" | "data-ga-product-name";

export const isApiValidElement = (element: ChildNode): element is cheerio.Element =>
  // Ignore ElementType.Script and ElementType.Style
  isElement(element) && element.type === ElementType.Tag;
