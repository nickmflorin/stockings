import type * as types from "./types";

import { type ApiElement, type DomApiType } from "~/scraping/dom";
import { isScrapingDomError } from "~/scraping/errors";

export class BaseScrapedModel<T extends ApiElement | DomApiType> {
  protected readonly root: T;

  constructor(root: T) {
    this.root = root;
  }
}

export abstract class ScrapedModel<
  T extends ApiElement | DomApiType,
  D extends types.BaseScrapedModelData,
  O extends Record<string, unknown> = Record<string, unknown>,
  P extends ProcessedScrapedModel<D, O> = ProcessedScrapedModel<D, O>,
> extends BaseScrapedModel<T> {
  private __data__: D;
  protected options: O;

  protected abstract fields: readonly types.ScrapedModelField<D>[];
  protected abstract ProcessedCls: ProcessedScrapedModelCls<D, O, P>;

  constructor(root: T, data: D, options: O) {
    super(root);
    this.__data__ = data;
    this.options = options;
  }

  public process(): P {
    let data: types.ScrapedModelData<D> = {} as types.ScrapedModelData<D>;
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
    return new this.ProcessedCls({ data, fields: this.fields, options: this.options });
  }
}

interface ProcessedScrapedModelConfig<
  D extends types.BaseScrapedModelData,
  O extends Record<string, unknown>,
> {
  readonly data: types.ScrapedModelData<D>;
  readonly fields: readonly types.ScrapedModelField<D>[];
  readonly options: O;
}

interface ProcessedScrapedModelCls<
  D extends types.BaseScrapedModelData,
  O extends Record<string, unknown>,
  I extends ProcessedScrapedModel<D, O>,
> {
  new (config: ProcessedScrapedModelConfig<D, O>): I;
}

export abstract class ProcessedScrapedModel<
  D extends types.BaseScrapedModelData,
  O extends Record<string, unknown>,
> {
  private readonly _config: ProcessedScrapedModelConfig<D, O>;

  constructor(config: ProcessedScrapedModelConfig<D, O>) {
    this._config = config;
  }

  public get data() {
    return this._config.data;
  }

  public get errors(): types.ScrapedModelFieldErrors<D> {
    return Object.entries(this.data).reduce((curr, [k, v]) => {
      if (v.error) {
        return { ...curr, [k]: v };
      }
      return curr;
    }, {} as types.ScrapedModelFieldErrors<D>);
  }

  public get validatedData(): D {
    if (!this.isValid) {
      throw new Error("Cannot access validated data when the model is invalid.");
    }
    return Object.entries(this.data).reduce((curr, [k, v]) => {
      if (v.value) {
        return { ...curr, [k]: v.value };
      }
      throw new Error(`Encountered error for field '${k}' after validity of model was checked!`);
    }, {} as D);
  }

  public get options() {
    return this._config.options;
  }

  public get isValid() {
    return Object.keys(this.errors).length === 0;
  }
}
