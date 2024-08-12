import { enumeratedLiterals, type EnumeratedLiteralsType } from "enumerated-literals";

export type ProductPriceChartDataPoint = {
  readonly price: number;
  readonly date: Date;
};

export const TimeGranularities = enumeratedLiterals(
  [
    { value: "minute", label: "Minute", plural: "Minutes" },
    { value: "hour", label: "Hour", plural: "Hours" },
    { value: "6-hour", label: "6 Hour", plural: "6 Hours" },
    { value: "12-hour", label: "12 Hour", plural: "12 Hours" },
    { value: "daily", label: "Daily", plural: "Daily" },
    { value: "weekly", label: "Weekly", plural: "Weekly" },
    { value: "monthly", label: "Monthly", plural: "Monthly" },
  ] as const,
  {},
);

export type TimeGranularity = EnumeratedLiteralsType<typeof TimeGranularities>;

export const TimeHorizon = enumeratedLiterals(
  [
    { value: "day", label: "Day", plural: "Days" },
    { value: "week", label: "Week", plural: "Weeks" },
    { value: "month", label: "Month", plural: "Months" },
    { value: "6-month", label: "6 Month", plural: "6 Months" },
    { value: "year", label: "Year", plural: "Years" },
  ] as const,
  {},
);

export type TimeHorizon = EnumeratedLiteralsType<typeof TimeHorizon>;
