import { type ChildNode } from "domhandler";

import type * as cheerio from "cheerio";

export class LieNielsenHttpError extends Error {
  private readonly url: string;

  constructor(url: string) {
    super();
    this.url = url;
  }

  public get error() {
    return `There was an error making a request to ${this.url}.`;
  }
}

export class LieNielsenNetworkError extends LieNielsenHttpError {}

export class LieNielsenClientError extends LieNielsenHttpError {}

export class LieNielsenSerializationError extends LieNielsenHttpError {}
