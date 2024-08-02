import type * as types from "./types";

import { Differences } from "~/lib/differences";
import { type ApiElement, type DomApiType } from "~/scraping/dom";
import { isScrapingDomError } from "~/scraping/errors";

export interface ValidScrapedModelCls<
  D extends types.BaseScrapedModelData,
  V extends ValidScrapedModel<D>,
  O extends Record<string, unknown> = Record<string, unknown>,
> {
  new (data: D, fields: readonly types.ScrapedModelField<D>[], options: O): V;
}

interface InvalidScrapedModelCls<
  D extends types.BaseScrapedModelData,
  I extends InvalidScrapedModel<D>,
  O extends Record<string, unknown> = Record<string, unknown>,
> {
  new (
    data: types.InvalidScrapedModelData<D>,
    fields: readonly types.ScrapedModelField<D>[],
    options: O,
  ): I;
}

export class BaseScrapedModel<T extends ApiElement | DomApiType> {
  protected readonly root: T;

  constructor(root: T) {
    this.root = root;
  }
}

export abstract class ScrapedModel<
  T extends ApiElement | DomApiType,
  D extends types.BaseScrapedModelData,
  V extends ValidScrapedModel<D> = ValidScrapedModel<D>,
  I extends InvalidScrapedModel<D> = InvalidScrapedModel<D>,
  O extends Record<string, unknown> = Record<string, unknown>,
> extends BaseScrapedModel<T> {
  private __data__: D;
  protected options: O;

  protected abstract fields: readonly types.ScrapedModelField<D>[];
  protected abstract ValidCls: ValidScrapedModelCls<D, V, O>;
  protected abstract InvalidCls: InvalidScrapedModelCls<D, I, O>;

  constructor(root: T, data: D, options: O) {
    super(root);
    this.__data__ = data;
    this.options = options;
  }

  public validate(): V | I {
    let data: types.InvalidScrapedModelData<D> = {} as types.InvalidScrapedModelData<D>;
    for (const f of this.fields) {
      try {
        data = { ...data, [f]: { value: this.__data__[f] } };
      } catch (e) {
        if (isScrapingDomError(e)) {
          data = { ...data, [f]: { error: e } };
        } else {
          throw e;
        }
      }
    }
    if (Object.entries(data).every(([_, v]) => v.error === undefined)) {
      const d: D = Object.entries(data).reduce((curr, [k, v]) => {
        if (v.error) {
          throw new Error(
            "Unexpectedly encountered scraped data value with 'error' key in object that was " +
              "previously checked for the omission of errors!",
          );
        }
        return { ...curr, [k]: v.value };
      }, {} as D);
      return new this.ValidCls(d, this.fields, this.options);
    }
    return new this.InvalidCls(data, this.fields, this.options);
  }
}

interface ProcessedScrapedModelConfig {
  readonly data: types.ScrapedModelData<D, V>;
  readonly isValid: V;
  readonly fields: readonly types.ScrapedModelField<D>[];
  readonly options: O;
}

interface BaseProcessedScrapedModelCls<
  D extends types.BaseScrapedModelData,
  I extends InvalidScrapedModel<D>,
  O extends Record<string, unknown> = Record<string, unknown>,
> {
  new (
    data: types.InvalidScrapedModelData<D>,
    fields: readonly types.ScrapedModelField<D>[],
    options: O,
  ): I;
}

export abstract class BaseProcessedScrapedModel<
  D extends types.BaseScrapedModelData,
  V extends boolean = boolean,
  O extends Record<string, unknown> = Record<string, unknown>,
> {
  protected fields: readonly (keyof D & string)[];
  public readonly isValid: V;
  private readonly _data: types.ScrapedModelData<D, V>;
  protected readonly options: O;

  constructor(
    data: types.ScrapedModelData<D, V>,
    isValid: V,
    fields: readonly types.ScrapedModelField<D>[],
    options: O,
  ) {
    this._data = data;
    this.isValid = isValid;
    this.fields = fields;
    this.options = options;
  }

  public get data() {
    return this._data;
  }
}

export const createValidScrapedModel;

export class ValidScrapedModel<
  D extends types.BaseScrapedModelData,
  O extends Record<string, unknown> = Record<string, unknown>,
> extends BaseProcessedScrapedModel<D, true, O> {
  constructor(
    data: types.ScrapedModelData<D, true>,
    fields: readonly types.ScrapedModelField<D>[],
    options: O,
  ) {
    super(data, true, fields, options);
  }

  public compare(other: ValidScrapedModel<D>) {
    return Differences([this.data, other.data], [...this.fields]);
  }
}

export class InvalidScrapedModel<
  D extends types.BaseScrapedModelData,
  O extends Record<string, unknown> = Record<string, unknown>,
> extends BaseProcessedScrapedModel<D, false, O> {
  constructor(
    data: types.ScrapedModelData<D, false>,
    fields: readonly types.ScrapedModelField<D>[],
    options: O,
  ) {
    super(data, false, fields, options);
  }

  public get errors(): types.ScrapedModelFieldErrors<D> {
    return Object.entries(this.data).reduce((curr, [k, v]) => {
      if (v.error) {
        return { ...curr, [k]: v };
      }
      return curr;
    }, {} as types.ScrapedModelFieldErrors<D>);
  }
}
