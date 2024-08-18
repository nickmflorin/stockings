import { enumeratedLiterals, type EnumeratedLiteralsMember } from "enumerated-literals";

import { classNames } from "~/components/types";
import { sizeToString, type ComponentProps, type QuantitativeSize } from "~/components/types";

export const DividerDiscreteThicknesses = enumeratedLiterals(
  ["thin", "medium", "thick"] as const,
  {},
);
export type DividerDiscreteThickness = EnumeratedLiteralsMember<typeof DividerDiscreteThicknesses>;

const DividerThicknessMap: { [key in DividerDiscreteThickness]: QuantitativeSize<"px"> } = {
  thin: "1px",
  medium: "2px",
  thick: "3px",
};

export type DividerThickness = QuantitativeSize<"px"> | DividerDiscreteThickness;

export interface DividerProps extends ComponentProps {
  readonly thickness?: DividerThickness;
}

export const Divider = ({ thickness, ...props }: DividerProps): JSX.Element => (
  <div
    {...props}
    className={classNames("divider", props.className)}
    style={
      thickness
        ? {
            ...props.style,
            height: DividerDiscreteThicknesses.contains(thickness)
              ? DividerThicknessMap[thickness]
              : sizeToString(thickness, "px"),
          }
        : props.style
    }
  />
);
