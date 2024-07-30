export const isError = (e: unknown): e is Error =>
  typeof e === "object" &&
  e !== null &&
  (e as Error).stack !== undefined &&
  (e as Error).message !== undefined;

export type ErrorAssertion = (e: unknown) => asserts e is Error;

export const assertError: ErrorAssertion = e => {
  if (!isError(e)) {
    throw new Error(`The provided object ${e} is not an error object!`);
  }
};

export const parseError = (e: unknown): Error => {
  assertError(e);
  return e;
};
