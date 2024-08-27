type HumanizeListIteree = string | number;

type HumanizeListInSegmentsOptions = {
  readonly conjunction?: "and" | "or";
  readonly oxfordComma?: boolean;
  readonly delimiter?: string;
};

type HumanizedListVariableSegment<T> = {
  readonly value: T;
  readonly segment?: never;
};

type HumanizedListConstantSegment = {
  readonly value?: never;
  readonly segment: string;
};

export type HumanizedListSegment<T> =
  | HumanizedListConstantSegment
  | HumanizedListVariableSegment<T>;

export const humanizeListInSegments = <T>(
  values: T[],
  options?: HumanizeListInSegmentsOptions,
): HumanizedListSegment<T>[] => {
  const { conjunction = "and", oxfordComma = true, delimiter = "," } = options || {};
  if (values.length === 0) {
    return [];
  } else if (values.length === 1) {
    return [{ value: values[0] }];
  }
  let segments: HumanizedListSegment<T>[] = [{ value: values[0] }];
  for (let i = 1; i < values.length - 1; i++) {
    segments = [...segments, { segment: delimiter.trim() }, { segment: " " }, { value: values[i] }];
  }
  if (values.length >= 3 && oxfordComma) {
    segments = [...segments, { segment: delimiter.trim() }];
  }
  segments = [
    ...segments,
    { segment: " " },
    { segment: conjunction.trim() },
    { segment: " " },
    { value: values[values.length - 1] },
  ];
  return segments;
};

type HumanizeListOptions<T extends HumanizeListIteree> = HumanizeListInSegmentsOptions & {
  readonly formatter?: (value: T) => string;
};

export const humanizeList = <T extends HumanizeListIteree>(
  values: T[],
  options?: HumanizeListOptions<T>,
) => {
  const {
    conjunction = "and",
    oxfordComma = true,
    delimiter = ",",
    formatter = (value: T) => value.toString(),
  } = options || {};
  if (values.length === 0) {
    return "";
  } else if (values.length === 1) {
    return formatter(values[0]);
  }
  let humanized = values
    .slice(0, values.length - 1)
    .map(v => formatter(v))
    .join(delimiter.trim() + " ");
  if (values.length >= 3 && oxfordComma) {
    humanized += delimiter.trim();
  }
  return [humanized, conjunction.trim(), formatter(values[values.length - 1])].join(" ");
};
