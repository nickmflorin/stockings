import { type ChildNode, type Text } from "domhandler";
import { ElementType } from "htmlparser2";

import type * as cheerio from "cheerio";

export const isElement = (child: ChildNode): child is cheerio.Element =>
  [ElementType.Tag, ElementType.Script, ElementType.Style].includes(child.type);

export const isText = (child: ChildNode): child is Text => [ElementType.Text].includes(child.type);
