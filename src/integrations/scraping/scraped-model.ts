import type * as types from "./types";

import { type ApiElement } from "./dom";
import { isScrapingDomError } from "./errors";

export class BaseScrapedModel<T extends ApiElement | types.DomApiType> {
  protected readonly root: T;

  constructor(root: T) {
    this.root = root;
  }
}

export abstract class ScrapedModel<
  T extends ApiElement | types.DomApiType,
  D extends types.BaseScrapedModelData,
  F extends readonly types.ScrapedModelField<D>[],
  O extends Record<string, unknown> = Record<string, unknown>,
  P extends ProcessedScrapedModel<D, O, F> = ProcessedScrapedModel<D, O, F>,
> extends BaseScrapedModel<T> {
  private __data__: D;
  private _strictFields: F;
  protected options: O;

  protected abstract fields: readonly types.ScrapedModelField<D>[];
  protected abstract ProcessedCls: ProcessedScrapedModelCls<D, O, P, F>;

  constructor(root: T, data: D, strictFields: F, options: O) {
    super(root);
    this.__data__ = data;
    this.options = options;
    this._strictFields = strictFields;
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
    return new this.ProcessedCls({
      data,
      fields: this.fields,
      options: this.options,
      strictFields: this._strictFields,
    });
  }
}

export interface ProcessedScrapedModelConfig<
  D extends types.BaseScrapedModelData,
  O extends Record<string, unknown>,
  F extends readonly types.ScrapedModelField<D>[],
> {
  readonly data: types.ScrapedModelData<D>;
  readonly fields: readonly types.ScrapedModelField<D>[];
  readonly options: O;
  readonly strictFields: F;
}

interface ProcessedScrapedModelCls<
  D extends types.BaseScrapedModelData,
  O extends Record<string, unknown>,
  I extends ProcessedScrapedModel<D, O, F>,
  F extends readonly types.ScrapedModelField<D>[],
> {
  new (config: ProcessedScrapedModelConfig<D, O, F>): I;
}

export abstract class ProcessedScrapedModel<
  D extends types.BaseScrapedModelData,
  O extends Record<string, unknown>,
  F extends readonly types.ScrapedModelField<D>[],
> {
  protected readonly _config: ProcessedScrapedModelConfig<D, O, F>;

  constructor(config: ProcessedScrapedModelConfig<D, O, F>) {
    this._config = config;
  }

  public get data() {
    return this._config.data;
  }

  private get strictFields() {
    return this._config.strictFields;
  }

  public get errors(): types.ScrapedModelFieldErrors<D> {
    return Object.entries(this.data).reduce((curr, [k, v]) => {
      if (v.error) {
        return { ...curr, [k]: v.error };
      }
      return curr;
    }, {} as types.ScrapedModelFieldErrors<D>);
  }

  public enumeratedErrors(): string {
    const errs = Object.entries(this.data).reduce((acc, [k, v], index) => {
      if (v.error) {
        return [...acc, `${index + 1}. ${k}: ${v.error.message}`];
      }
      return acc;
    }, [] as string[]);
    return errs.join("\n");
  }

  public get unvalidatedData(): Partial<D> {
    return Object.entries(this.data).reduce((curr, [k, v]) => {
      if (v.value !== undefined) {
        return { ...curr, [k]: v.value };
      }
      return { ...curr, [k]: undefined };
    }, {} as D);
  }

  public get partiallyValidatedData(): types.PartiallyValidData<D, F> {
    if (!this.isPartiallyValid) {
      throw new Error(
        "Cannot access partially validated data when the model is partially invalid.",
      );
    }
    return Object.entries(this.data).reduce(
      (curr, [k, v]) => {
        if (v.value !== undefined) {
          return { ...curr, [k]: v.value };
        }
        return { ...curr, [k]: undefined };
      },
      {} as types.PartiallyValidData<D, F>,
    );
  }

  public get validatedData(): D {
    if (!this.isValid) {
      throw new Error("Cannot access validated data when the model is invalid.");
    }
    return Object.entries(this.data).reduce((curr, [k, v]) => {
      if (v.value !== undefined) {
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

  public get hasErrors() {
    return !this.isValid;
  }

  public hasErrorsForAny(fields: types.ScrapedModelField<D>[]): boolean {
    return fields.some(f => this.errors[f] !== undefined);
  }

  public get isPartiallyValid() {
    return this.strictFields.every(f => this.data[f].value !== undefined);
  }
}
