import type { ApiElement, DomApiType } from "~/dom/api";

import { DomDifferences } from "./differences";

export abstract class ScrapedModel<
  T extends ApiElement | DomApiType,
  D extends Record<string, unknown>,
> {
  protected readonly root: T;
  private __data__: D | null = null;
  protected abstract comparisonFields: readonly (keyof D)[];

  constructor(root: T, options?: { readonly lazy?: boolean }) {
    this.root = root;
    if (options?.lazy !== true) {
      this.instantiate();
    }
  }

  protected abstract parseData(): D;

  public get data() {
    if (this.__data__ === null) {
      this.__data__ = this.parseData();
    }
    return this.__data__;
  }

  protected instantiate() {
    this.__data__ = this.parseData();
  }

  public compare(other: ScrapedModel<T, D>) {
    return DomDifferences([this.data, other.data], [...this.comparisonFields]);
  }
}

export abstract class ScrapedElementModel<D extends Record<string, unknown>> extends ScrapedModel<
  ApiElement,
  D
> {
  public get element() {
    return this.root;
  }
}

export abstract class ScrapedApiModel<D extends Record<string, unknown>> extends ScrapedModel<
  DomApiType,
  D
> {
  public get api() {
    return this.root;
  }
}
