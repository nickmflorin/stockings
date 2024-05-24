import isEqual from "lodash.isequal";

export type DomAttributeDifference<O extends Record<string, unknown>, K extends keyof O> = [
  O[K],
  O[K],
];
export type DomAttributeDifferences<O extends Record<string, unknown>, K extends keyof O> = {
  [key in K]: DomAttributeDifference<O, key>;
};

export interface IDomDifferences<O extends Record<string, unknown>, K extends keyof O> {
  readonly hasDifferences: boolean;
  readonly differences: DomAttributeDifferences<O, K>;
  toString(): string;
}

export const DomDifferences = <O extends Record<string, unknown>, K extends keyof O>(
  objs: [O, O],
  fields: K[],
): IDomDifferences<O, K> => {
  const differences = {} as DomAttributeDifferences<O, K>;
  for (const field of fields) {
    if (!isEqual(objs[0][field], objs[1][field])) {
      differences[field] = [objs[0][field], objs[1][field]];
    }
  }
  return {
    differences,
    get hasDifferences() {
      return Object.keys(this.differences).length > 0;
    },
    toString(this: IDomDifferences<O, K>) {
      if (!this.hasDifferences) {
        return "";
      }
      const attrs = Object.keys(this.differences)
        .map(k => `${k}: ${this.differences[k as K][0]} !== ${this.differences[k as K][1]}`)
        .join(", ");

      return `<Differences ${attrs}>`;
    },
  };
};
