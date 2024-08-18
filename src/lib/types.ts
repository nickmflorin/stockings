export type Equals<A, B, T = true, F = false> = [A] extends [B] ? ([B] extends [A] ? T : F) : F;

export type Prettify<T> = {
  [K in keyof T]: T[K];
  /* eslint-disable-next-line @typescript-eslint/ban-types */
} & {};

export type SingleOrArray<T> = T | T[];
