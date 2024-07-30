import { DateTime, type DateTimeFormatOptions } from "luxon";

import { logger } from "~/internal/logger";

import { Text, type TextComponent, type TextProps } from "./Text";

type BaseDateTimeTextProps<C extends TextComponent> = Omit<TextProps<C>, "children" | "ref"> & {
  readonly format?: DateTimeFormatOptions | string;
  readonly strict?: boolean;
};

type DateTimeProp = DateTime | string | Date;

type DateTimeValueProps<C extends TextComponent> = BaseDateTimeTextProps<C> & {
  readonly value: DateTimeProp;
  readonly children?: never;
};

type DateTimeChildrenProps<C extends TextComponent> = BaseDateTimeTextProps<C> & {
  readonly children: string;
  readonly value?: never;
};

type DateTimeRenderProps<C extends TextComponent> = BaseDateTimeTextProps<C> & {
  readonly value: DateTimeProp;
  readonly children: (params: { value: DateTime; text: string }) => JSX.Element;
};

export type DateTimeProps<C extends TextComponent> =
  | DateTimeChildrenProps<C>
  | DateTimeValueProps<C>
  | DateTimeRenderProps<C>;

const parser = <C extends TextComponent>(
  value: DateTimeProp,
  { strict }: Required<Pick<BaseDateTimeTextProps<C>, "strict">>,
): DateTime | null => {
  if (value instanceof DateTime) {
    if (!value.isValid) {
      throw new Error(
        "The provided DateTime object is not valid!  Validity must be checked before providing " +
          "to the DateTimeText component.",
      );
    }
    return value;
  } else if (value instanceof Date) {
    const dt = DateTime.fromJSDate(value);
    if (!dt.isValid) {
      if (strict) {
        throw new Error(
          `An invalid date, '${value}', was provided to the DateTimeText component.  The component ` +
            "cannot render.",
        );
      }
      logger.warn(
        `An invalid date, '${value}', was provided to the DateTimeText component.  The component ` +
          "cannot render.",
        { value },
      );
      return null;
    }
    return dt;
  }
  const dt = DateTime.fromISO(value);
  if (!dt.isValid) {
    if (strict) {
      throw new Error(
        `An invalid date, '${value}', was provided to the DateTimeText component.  The component ` +
          "cannot render.",
      );
    }
    logger.warn(
      `An invalid date, '${value}', was provided to the DateTimeText component.  The component ` +
        "cannot render.",
      { value },
    );
    return null;
  }
  return dt;
};

export const DateTimeText = <C extends TextComponent>({
  value,
  children,
  format = DateTime.DATETIME_MED,
  strict = false,
  ...props
}: DateTimeProps<C>): JSX.Element => {
  if (typeof children === "function") {
    const obj = parser(value, { strict });
    if (obj) {
      return children({
        value: obj,
        text: typeof format === "string" ? obj.toFormat(format) : obj.toLocaleString(format),
      });
    }
    return <></>;
  }
  const obj = parser(value ?? children, { strict });
  if (obj) {
    return (
      <Text {...props}>
        {typeof format === "string" ? obj.toFormat(format) : obj.toLocaleString(format)}
      </Text>
    );
  }
  return <></>;
};
