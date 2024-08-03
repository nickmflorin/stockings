import { Text, type TextProps, type TextComponent } from "./Text";

export enum CurrencyCode {
  USD = "USD",
}

export type CurrencyTextProps<C extends TextComponent> = Omit<TextProps<C>, "children" | "ref"> & {
  readonly children: number;
  readonly currency?: CurrencyCode;
};

export const CurrencyText = <C extends TextComponent>({
  children,
  currency = CurrencyCode.USD,
  ...props
}: CurrencyTextProps<C>) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  });
  return <Text {...props}>{formatter.format(children)}</Text>;
};
