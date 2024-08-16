import { isEqual } from "lodash-es";
import { DateTime } from "luxon";

import { ensureItIsDefined } from "./typeguards";

const evaluateFrequency = (frequency = 0): boolean => {
  if (frequency > 1.0 || frequency < 0) {
    throw new TypeError("The frequency must be between 0 and 1.");
  }
  return randomInt({ min: 0, max: 100 }) / 100.0 < frequency;
};

export const randomlyNull =
  <T>(func: () => T, nullChance: number): (() => T | null) =>
  (): T | null =>
    evaluateFrequency(nullChance) ? null : func();

type MinMaxObj = {
  min: number;
  max: number;
};

export type RandomInterval = MinMaxObj | [number, number];
export type RandomLength = RandomInterval | number;

const lengthIsInterval = (l: RandomLength): l is RandomInterval => typeof l !== "number";

export const getLength = (l: RandomLength): number => (lengthIsInterval(l) ? randomInt(l) : l);

export const getMinLength = (l: RandomLength): number =>
  lengthIsInterval(l) ? (Array.isArray(l) ? l[0] : l.min) : l;

export const getMaxLength = (l: RandomLength): number =>
  lengthIsInterval(l) ? (Array.isArray(l) ? l[1] : l.max) : l;

export const mapOverLength = <T>(l: RandomLength, func: (i: number) => T): T[] =>
  Array(getLength(l))
    .fill(0)
    .map((_, i) => func(i));

export function randomInt(min: number, max: number): number;
export function randomInt(params: RandomInterval): number;
export function randomInt(min: number | RandomInterval, max?: number) {
  if (typeof min === "number") {
    if (typeof max !== "number") {
      throw new TypeError("The max value was either not provided or is not valid.");
    }
    return randomInt({ max, min });
  } else if (Array.isArray(min)) {
    return randomInt({ min: min[0], max: min[1] });
  }
  return Math.floor(
    Math.random() * (Math.floor(min.max) - Math.ceil(min.min) + 1) + Math.ceil(min.min),
  );
}

export const MinMax = <T extends number>(min: T, max: T) => ({
  min,
  max,
  random: () => randomInt(min, max),
});

type PositiveRandomBoolOptions = {
  readonly positiveFrequency: number;
  readonly negativeFrequency?: never;
};

type NegativeRandomBoolOptions = {
  readonly positiveFrequency?: never;
  readonly negativeFrequency: number;
};

export const randomBoolean = (
  opts?: PositiveRandomBoolOptions | NegativeRandomBoolOptions,
): boolean => {
  if (
    opts?.negativeFrequency !== undefined &&
    (opts.negativeFrequency < 0 || opts?.negativeFrequency > 1)
  ) {
    throw new TypeError("The negative frequency must be between 0 and 1.");
  } else if (
    opts?.positiveFrequency !== undefined &&
    (opts.positiveFrequency < 0 || opts?.positiveFrequency > 1)
  ) {
    throw new TypeError("The positive frequency must be between 0 and 1.");
  }
  const positiveFrequency =
    opts?.negativeFrequency !== undefined
      ? 1 - opts.negativeFrequency
      : (opts?.positiveFrequency ?? 0.5);
  return evaluateFrequency(positiveFrequency);
};

type GenerateRandomDateParams = {
  min?: Date | DateTime;
  max?: Date | DateTime;
  nullFrequency?: number;
};

const _toDateTime = (value: Date | DateTime) =>
  value instanceof Date ? DateTime.fromJSDate(value) : value;

type GenerateRandomDateRT<P extends GenerateRandomDateParams> = P extends { nullFrequency: number }
  ? Date | null
  : Date;

export const generateRandomDate = <P extends GenerateRandomDateParams>(
  params?: P,
): GenerateRandomDateRT<P> => {
  if (params?.nullFrequency !== undefined && evaluateFrequency(params?.nullFrequency)) {
    return null as GenerateRandomDateRT<P>;
  }
  const max: DateTime = params?.max === undefined ? DateTime.now() : _toDateTime(params.max);
  const min: DateTime =
    params?.min === undefined ? max.minus({ months: 36 }) : _toDateTime(params.min);
  if (max <= min) {
    throw new TypeError("The max date must be after the min date.");
  }
  const diff = max.diff(min, ["seconds"]).seconds * (randomInt({ min: 0, max: 100 }) / 100.0);
  return min.plus({ seconds: Math.floor(diff) }).toJSDate();
};

type FrequencyDatum<T> = { value: T; frequency: number };
type CumulativeFrequencyDatum<T> = { value: T; frequency: number; cumulativeFrequency: number };

const accumulateFrequencies = <T>(data: FrequencyDatum<T>[]): CumulativeFrequencyDatum<T>[] => {
  const total = data.reduce((prev, { frequency }) => (prev += frequency), 0.0);
  const normalized = data.map(d => ({ ...d, frequency: d.frequency / total }));
  const accumulated = normalized
    .slice(1)
    .reduce(
      (acc: number[], freq: FrequencyDatum<T>): number[] => [
        ...acc,
        ensureItIsDefined(acc[acc.length - 1]) + freq.frequency,
      ],
      [ensureItIsDefined(normalized[0]).frequency],
    );
  return normalized.map((d, i) => ({
    ...d,
    cumulativeFrequency: ensureItIsDefined(accumulated[i]),
  }));
};

const selectFromCumulativeFrequencies = <T>(frequencies: CumulativeFrequencyDatum<T>[]): T => {
  const control = randomInt({ min: 0, max: 100 }) / 100.0;

  for (const frequency of frequencies) {
    /* It is important that the comparison include an equality for cases where the control is
         exactly 1.0. */
    if (control <= frequency.cumulativeFrequency) {
      return frequency.value;
    }
  }
  throw new Error(
    `Unexpected Condition: No result was found for frequency value = '${control}'.  ` +
      `Population data was: \n${JSON.stringify(frequencies)}\n` +
      `The cumulative, normalized frequencies are:\n${JSON.stringify(frequencies)}`,
  );
};

const isDeepEqualIn = <T>(value: T, others: T[]) => others.some(o => isEqual(o, value));

type SelectAtRandomOpts = {
  readonly length?: RandomLength;
  readonly withFrequencies?: boolean;
  readonly unique?: boolean;
};

export function selectAtRandom<T>(
  data: T[],
  opts?: {
    unique?: boolean;
    length?: never;
    withFrequencies?: false;
  },
): T;
export function selectAtRandom<T>(
  data: FrequencyDatum<T>[],
  opts: {
    unique?: boolean;
    length?: never;
    withFrequencies: true;
  },
): T;
export function selectAtRandom<T>(
  data: T[],
  opts: {
    unique?: boolean;
    length: RandomLength;
    withFrequencies?: false;
  },
): T[];
export function selectAtRandom<T>(
  data: FrequencyDatum<T>[],
  opts: {
    unique?: boolean;
    length: RandomLength;
    withFrequencies: true;
  },
): T[];
/**
 * Makes selections at random with the provided frequencies, returning either an array of multiple
 * selections (if the 'length' option is provided) or a single selection (if the 'length' option is
 * not provided).
 *
 * @param {FrequencyDatum<T>[] | MultipleFrequencyDatum<T>[] | T[]} data
 *   The data that defines both the values to select from and the frequencies at which those values
 *   should be selected.
 *
 * @param {SelectAtRandomMultipleOpts<T, V>} options
 *   If multiple selections are desired, the options that include the desired 'length' of the
 *   resulting array, and optionally a 'duplicationKey' that is used to identify whether or not
 *   duplicate elements are in the resulting array.
 *
 * @returns {T | T[]}
 *
 * @example
 * type Fruit = "Apple" | "Banana" | "Strawberry";
 * const data: Fruit[] = selectAtRandom([
 *   { value: "Apple", frequency: 0.5 },
 *   { value: "Banana": frequency: 0.1, maxCount: 2 },
 *   { value: "Strawberry", frequency: 0.4 }
 * ], { length: { min: 10, max: 30 }})
 *
 * Note that the frequencies do not need to sum to 1, they will be normalized relative to each
 * other.
 */
export function selectAtRandom<T>(data: T[] | FrequencyDatum<T>[], options?: SelectAtRandomOpts) {
  if (data.length === 0) {
    throw new Error("");
  }

  if (options?.withFrequencies) {
    const d = data as FrequencyDatum<T>[];
    if (d.filter(di => di.frequency < 0).length > 0) {
      throw new Error(
        `Detected negative numbers in frequency data: ${JSON.stringify(d)}. ` +
          "Frequencies must be >= 0.",
      );
    }
    const cumulative = accumulateFrequencies(d);
    if (options?.length !== undefined) {
      // This check will prevent an infinite recursion in the while loop.
      if (options.unique && getMaxLength(options.length) > d.length) {
        throw new Error(
          `The maximum length of '${getMaxLength(options.length)}' is greater than the number ` +
            "of elements in the provided data.",
        );
      }

      let result: T[] = [];
      let processedCumulative: CumulativeFrequencyDatum<T>[] = [...cumulative];

      const desiredLength = getLength(options.length);
      while (result.length < desiredLength) {
        const selected = selectFromCumulativeFrequencies(processedCumulative);
        if (options.unique && isDeepEqualIn(selected, result)) {
          /* This should be prevented by the preemptive filtering of the processed cumulative values
             at the end of this while loop's block. */
          throw new Error("Unexpectedly encountered duplicate value in the resulting array!");
        }
        result = [...result, selected];

        /* If the unique option is provided, we are only interested in unique values from the
           data.  Instead of continuing to iterate until a unique value is generated, it is faster
           to pre-emptively filter out values that have already been added to the results. */
        processedCumulative = options.unique
          ? processedCumulative.filter(d => !isDeepEqualIn(d.value, result))
          : processedCumulative;
      }
      return result;
    }
    return selectFromCumulativeFrequencies(cumulative);
  } else if (options?.length !== undefined) {
    let result: T[] = [];
    const desiredLength = getLength(options.length);
    let processedData = [...(data as T[])];

    while (result.length < desiredLength) {
      const selected = selectAtRandom(processedData as T[]);
      if (options.unique && isDeepEqualIn(selected, result)) {
        /* This should be prevented by the preemptive filtering of the processed cumulative values
           at the end of this while loop's block. */
        throw new Error("Unexpectedly encountered duplicate value in the resulting array!");
      }
      result = [...result, selected];

      /* If the unique option is provided, we are only interested in unique values from the
         data.  Instead of continuing to iterate until a unique value is generated, it is faster
         to pre-emptively filter out values that have already been added to the results. */
      processedData = options.unique
        ? processedData.filter(d => !isDeepEqualIn(d, result))
        : processedData;
    }
    return result;
  }
  const ind = randomInt(0, (data as T[]).length - 1);
  const datum = (data as T[])[ind];
  if (datum === undefined) {
    throw new Error(`Data unexpectedly returned undefined value at index ${ind}!`);
  }
  return datum;
}
