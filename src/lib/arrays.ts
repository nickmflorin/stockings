/**
 * Returns the provided array, {@link T[]}, with the provided value either replaced in the array or
 * appended to the array, depending on whether or not the 'predicate' indicates the value is in the
 * array.
 *
 * @template {T} Element The type of the elements inside of the array.
 *
 * @param {T[]} arr The array for which the value should be appended to or replaced in.
 *
 * @param {{ value: T } | ((v: T | undefined) => T)} value
 *   The value that should be appended to or replaced in the array.  If defined as an array, each
 *   value in the array will be replaced in or appended to the array based on the result of the
 *   'predicate'.  If the value being inserted into the array, {@link T[]}, depends on the
 *   potentially existing value in the array, {@link T}, this parameter can be provided as a
 *   callback method.
 *
 * @param {(v: T) => boolean} predicate Indicates whether or not the value exists in the array.
 *
 * @returns {T[]}
 */
export const replaceInOrAppendToArray = <T>(
  arr: T[],
  value: { value: T } | ((v: T | undefined) => T),
  predicate: (v: T) => boolean,
): T[] => {
  const ind = arr.findIndex((v: T) => predicate(v) === true);
  if (ind !== -1) {
    return [
      ...arr.slice(0, ind),
      typeof value === "function" ? value(arr[ind] as T) : value.value,
      ...arr.slice(ind + 1),
    ];
  }
  return [...arr, typeof value === "function" ? value(undefined) : value.value];
};

/**
 * Replaces the provided 'value' in the array, {@link T[]}, if the 'value' exists in the array,
 * where existence is determined based on the provided 'predicate'.  Returns an indication of
 * whether or not the value was replaced, the potentially replaced value, and the resulting
 * array with the value replaced.
 *
 * @template {T} Element The type of the elements inside of the array.
 *
 * @param {T[]} arr The array for which the value should be appended to or replaced in.
 *
 * @param {{ value: T } | ((v: P) => T)} value
 *   The value that should be inserted into the array in place of a potentially existing value.  If
 *   the value being inserted into the array {@link T[]}, depends on the potentially existing value
 *   in the array, {@link T}, this parameter can be provided as a callback.
 *
 * @param {(v: T) => boolean} predicate Indicates whether or not the value exists in the array.
 *
 * @returns {[true, T, T[]] | [false, undefined, T[]]}
 */
export const replaceInArray = <T, P extends T>(
  arr: T[],
  value: { value: T } | ((v: P) => T),
  predicate: ((v: T) => v is P) | ((v: T) => boolean),
): [true, T, T[]] | [false, undefined, T[]] => {
  const ind = arr.findIndex((v: T) => predicate(v) === true);
  if (ind !== -1) {
    const currentV = arr[ind] as P;
    return [
      true,
      currentV,
      [
        ...arr.slice(0, ind),
        typeof value === "function" ? value(currentV) : value.value,
        ...arr.slice(ind + 1),
      ],
    ];
  }
  return [false, undefined, arr];
};
