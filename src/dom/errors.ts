import { type ElementAttribute } from "~/dom/types";

import { type IWrappedElement } from "./element";
import { type ISelector } from "./selector";

interface ElementErrorConfig {
  readonly parent?: IWrappedElement;
}

export abstract class ElementError extends Error {
  protected readonly parent: IWrappedElement | undefined;
  public abstract message: string;

  constructor(config?: ElementErrorConfig) {
    super();
    this.parent = config?.parent;
  }
}

export class MissingElementError extends ElementError {
  private readonly selector: ISelector;

  constructor(selector: ISelector, config?: ElementErrorConfig) {
    super(config);
    this.selector = selector;
  }

  public get message() {
    if (this.parent) {
      return `The selector '${this.selector.toString()}' did not match any children in ${this.parent.toString()}.`;
    }
    return `The selector '${this.selector.toString()}' did not match any children.`;
  }
}

export class NonUniqueElementError extends ElementError {
  private readonly selector: ISelector;

  constructor(selector: ISelector, config?: ElementErrorConfig) {
    super(config);
    this.selector = selector;
  }

  public get message() {
    if (this.parent) {
      return `The selector '${this.selector.toString()}' unexpectedly matched multiple children in ${this.parent.toString()}.`;
    }
    return `The selector '${this.selector.toString()}' unexpectedly matched multiple children.`;
  }
}

export class MissingTextError extends ElementError {
  public get message() {
    if (this.parent) {
      return `The parent '${this.parent.toString()}' did not have a child text node.`;
    }
    return "The parent did not have a child text node.";
  }
}

export class NonUniqueTextError extends ElementError {
  public get message() {
    if (this.parent) {
      return `The parent '${this.parent.toString()}' had multiple child text nodes when only 1 was expected.`;
    }
    return "The parent had multiple child text nodes when only 1 was expected.";
  }
}

export class InvalidTextError extends ElementError {
  private readonly value: string;

  constructor(value: string, config?: ElementErrorConfig) {
    super(config);
    this.value = value;
  }

  public get message() {
    if (this.parent) {
      return `The element ${this.parent.toString()} had an invalid text value, '${this.value}'.`;
    }
    return `The element had an invalid text value, '${this.value}'.`;
  }
}

export abstract class AttributeError extends ElementError {
  protected readonly attribute: ElementAttribute;

  constructor(attribute: ElementAttribute, config?: ElementErrorConfig) {
    super(config);
    this.attribute = attribute;
  }
}

export class MissingAttributeError extends AttributeError {
  public get message() {
    if (this.parent) {
      return `The element ${this.parent.toString()} did not have the attribute '${this.attribute}'.`;
    }
    return `The element did not have the attribute '${this.attribute}'.`;
  }
}

export class InvalidAttributeError extends AttributeError {
  private readonly value: string;

  constructor(attribute: ElementAttribute, value: string, config?: ElementErrorConfig) {
    super(attribute, config);
    this.value = value;
  }

  public get message() {
    if (this.parent) {
      return `The element ${this.parent.toString()} had an invalid value, '${this.value}', for the attribute '${this.attribute}'.`;
    }
    return `The element had an invalid value, '${this.value}', for the attribute '${this.attribute}'.`;
  }
}
