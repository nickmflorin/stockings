import isEqual from "lodash.isequal";

export type DifferenceField<
  T1 extends Record<string, unknown>,
  T2 extends Record<string, unknown>,
> = keyof T1 & keyof T2;

export type AttributeDifference<
  T1 extends Record<string, unknown>,
  T2 extends Record<string, unknown>,
  K extends DifferenceField<T1, T2>,
> = [T1[K], T2[K]];

export type AttributeDifferences<
  T1 extends Record<string, unknown>,
  T2 extends Record<string, unknown>,
  K extends DifferenceField<T1, T2>,
> = {
  [key in K]: AttributeDifference<T1, T2, key>;
};

export interface IDifferences<
  T1 extends Record<string, unknown>,
  T2 extends Record<string, unknown>,
  K extends DifferenceField<T1, T2>,
> {
  readonly hasDifferences: boolean;
  readonly differences: AttributeDifferences<T1, T2, K>;
  toString(): string;
}

export const Differences = <
  T1 extends Record<string, unknown>,
  T2 extends Record<string, unknown>,
  K extends DifferenceField<T1, T2>,
>(
  objs: [T1, T2],
  fields: K[],
): IDifferences<T1, T2, K> => {
  const differences = {} as AttributeDifferences<T1, T2, K>;
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
    toString(this: IDifferences<T1, T2, K>) {
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
