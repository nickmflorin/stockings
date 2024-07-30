export const ensureItIsDefined = <T>(value: T | undefined, errorMessage?: string): T => {
  if (typeof value === "undefined") {
    throw new Error(errorMessage ?? "Unexpectedly encountered undefined value!");
  }
  return value;
};
