import {
  isScrapingDomError,
  type ApiElement,
  type DomApiType,
  type ScrapingDomError,
} from "~/scraping/dom/api";
import { ParsedDataError } from "~/scraping/errors";
import { Differences } from "~/lib/differences";

export type BaseScrapedModelDataValue = string | number | boolean;

export type BaseScrapedModelData = Record<string, BaseScrapedModelDataValue>;

abstract class BaseScrapedModel<T extends ApiElement | DomApiType> {
  protected readonly root: T;

  constructor(root: T) {
    this.root = root;
  }
}

export abstract class ScrapedModelDataCls<
  T extends ApiElement | DomApiType,
> extends BaseScrapedModel<T> {}

export type ScrapedModelDataError<E extends ScrapingDomError = ScrapingDomError> = {
  error: E;
  value?: never;
};

export type ScrapedModelDataValue<V extends BaseScrapedModelDataValue> = {
  error?: never;
  value: V;
};

export type ScrapedModelData<D extends BaseScrapedModelData> = {
  [key in keyof D & string]: ScrapedModelDataError | ScrapedModelDataValue<D[key]>;
};

type ParseScrapedModelDataOptions = {
  readonly strict?: boolean;
};

export type ScrapedModelParsedData<
  D extends BaseScrapedModelData,
  O extends ParseScrapedModelDataOptions,
> = O extends { strict: true } ? D : ScrapedModelData<D>;

export abstract class ScrapedModel<
  T extends ApiElement | DomApiType,
  D extends BaseScrapedModelData,
> extends BaseScrapedModel<T> {
  private __data__: D;
  private _data: ScrapedModelData<D> | null = null;
  protected abstract fields: readonly (keyof D & string)[];

  constructor(root: T, data: D) {
    super(root);
    this.__data__ = data;
  }

  protected get data() {
    if (this._data === null) {
      this._data = this.processData({ strict: false });
    }
    return this._data;
  }

  public get isProcessed() {
    return this._data !== null;
  }

  protected get processedData() {
    if (!this.isProcessed) {
      throw new Error("Cannot access this property or method before the data is parsed.");
    }
    return this.data;
  }

  public processData<O extends ParseScrapedModelDataOptions>({
    strict = false,
  }: O): ScrapedModelParsedData<D, O> {
    let errors: Partial<{ [key in keyof D & string]: ScrapingDomError }> = {};
    let data: ScrapedModelParsedData<D, O> = {} as ScrapedModelParsedData<D, O>;
    for (const f of this.fields) {
      try {
        data = { ...data, [f]: { value: this.__data__[f] } };
      } catch (e) {
        if (isScrapingDomError(e)) {
          errors = { ...errors, [f]: e };
          data = { ...data, [f]: { error: e } };
        } else {
          throw e;
        }
      }
    }
    if (Object.keys(errors).length !== 0 && strict) {
      throw new ParsedDataError(errors);
    }
    return data;
  }

  public compare(other: ScrapedModel<T, D>) {
    return Differences([this.processedData, other.data], [...this.fields]);
  }
}

export abstract class ScrapedElementModelDataCls extends ScrapedModelDataCls<ApiElement> {}

export abstract class ScrapedElementModel<D extends BaseScrapedModelData> extends ScrapedModel<
  ApiElement,
  D
> {
  public get element() {
    return this.root;
  }
}

export abstract class ScrapedApiModelDataCls extends ScrapedModelDataCls<DomApiType> {}

export abstract class ScrapedApiModel<D extends BaseScrapedModelData> extends ScrapedModel<
  DomApiType,
  D
> {
  public get api() {
    return this.root;
  }
}
