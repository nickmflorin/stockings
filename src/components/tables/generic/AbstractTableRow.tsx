import {
  classNames,
  type ComponentProps,
  sizeToString,
  type QuantitativeSize,
  type HTMLElementProps,
} from "~/components/types";

export interface AbstractTableRowProps
  extends ComponentProps,
    Omit<HTMLElementProps<"tr">, keyof ComponentProps> {
  readonly height?: QuantitativeSize<"px">;
}

export const AbstractTableRow = ({ height, ...props }: AbstractTableRowProps) => (
  <tr
    {...props}
    className={classNames("table__row", props.className)}
    style={{
      ...props.style,
      height: height ? sizeToString(height, "px") : props.style?.height,
      maxHeight: height ? sizeToString(height, "px") : props.style?.maxHeight,
    }}
  />
);

export default AbstractTableRow;
