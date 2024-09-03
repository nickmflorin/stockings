import { DateTime } from "luxon";

type DateArg = DateTime | Date | number | string;

const processDates = (dates: DateArg[]): number[] =>
  dates.map(date => {
    if (typeof date === "string") {
      const parsed = Date.parse(date);
      if (isNaN(parsed) || !isFinite(parsed)) {
        throw new Error(`Encountered invalid date string, '${date}'!`);
      }
      return parsed;
    } else if (typeof date === "number") {
      return date;
    } else if (date instanceof DateTime) {
      if (!date.isValid) {
        throw new Error(`Encountered invalid date-time object: '${date}'!`);
      }
      return Number(date.toJSDate());
    }
    return Number(date);
  });

export const minDate = (arg0: DateArg, arg1: DateArg, ...dates: DateArg[]): Date => {
  const arr = [arg0, arg1, ...dates];
  return new Date(Math.min(...processDates(arr)));
};

export const maxDate = (arg0: DateArg, arg1: DateArg, ...dates: DateArg[]): Date => {
  const arr = [arg0, arg1, ...dates];
  return new Date(Math.max(...processDates(arr)));
};
