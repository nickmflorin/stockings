export type HyphenCaseToTitleCase<T extends string> = T extends `${infer F}-${infer R}`
  ? `${Capitalize<F>}${HyphenCaseToTitleCase<R>}`
  : Capitalize<T>;

export const hyphenCaseToTitleCase = <T extends string>(value: T): HyphenCaseToTitleCase<T> =>
  value
    .toLowerCase()
    .replace(/(?:^|[\s-/])\w/g, match => match.toUpperCase())
    .replaceAll("-", "") as HyphenCaseToTitleCase<T>;
