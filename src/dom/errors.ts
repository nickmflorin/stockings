import { type ElementAttribute } from "~/dom/types";

import { type IWrappedElement } from "./element";
import { type IElementSelector } from "./selector";

interface ElementErrorConfig {
  readonly parent: IWrappedElement;
}

export abstract class ElementError extends Error {
  protected readonly parent: IWrappedElement;
  public abstract message: string;

  constructor(config: ElementErrorConfig) {
    super();
    this.parent = config.parent;
  }
}

export class MissingElementError extends ElementError {
  private readonly selector: IElementSelector;

  constructor(selector: IElementSelector, config: ElementErrorConfig) {
    super(config);
    this.selector = selector;
  }

  public get message() {
    return `The selector '${this.selector.toString()}' did not match any children in ${this.parent.toString()}.`;
  }
}

export class MissingTextError extends ElementError {
  public get message() {
    return `The parent '${this.parent.toString()}' did not have a child text node.`;
  }
}

export class InvalidTextError extends ElementError {
  private readonly value: string;

  constructor(value: string, config: ElementErrorConfig) {
    super(config);
    this.value = value;
  }

  public get message() {
    return `The element ${this.parent.toString()} had an invalid text value, '${this.value}'.`;
  }
}

export abstract class AttributeError extends ElementError {
  protected readonly attribute: ElementAttribute;

  constructor(attribute: ElementAttribute, config: ElementErrorConfig) {
    super(config);
    this.attribute = attribute;
  }
}

export class MissingAttributeError extends AttributeError {
  public get message() {
    return `The element ${this.parent.toString()} did not have the attribute '${this.attribute}'.`;
  }
}

export class InvalidAttributeError extends AttributeError {
  private readonly value: string;

  constructor(attribute: ElementAttribute, value: string, config: ElementErrorConfig) {
    super(attribute, config);
    this.value = value;
  }

  public get message() {
    return `The element ${this.parent.toString()} had an invalid value, '${this.value}', for the attribute '${this.attribute}'.`;
  }
}
