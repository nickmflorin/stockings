import { clamp } from "lodash-es";

import {
  classNames,
  getTypographyClassName,
  sizeToNumber,
  sizeToString,
  type ComponentProps,
  type QuantitativeSize,
  type TypographyCharacteristics,
} from "~/components/types";

export interface CircleNumberProps extends ComponentProps, TypographyCharacteristics {
  readonly children: number;
  readonly size?: QuantitativeSize<"px">;
  readonly isActive?: boolean;
}

export const CircleNumber = ({
  children,
  isActive = false,
  size = "24px",
  ...props
}: CircleNumberProps): JSX.Element => (
  <div
    className={classNames(
      "typography-component",
      "flex items-center justify-center rounded-full p-[2px]",
      { "bg-blue-700 text-white": isActive, "bg-gray-300 text-body": !isActive },
      getTypographyClassName({ fontWeight: "medium", ...props }),
      props.className,
    )}
    style={{
      ...props.style,
      height: sizeToString(clamp(sizeToNumber(size), 12, 64), "px"),
      width: sizeToString(clamp(sizeToNumber(size), 12, 64), "px"),
      aspectRatio: "1/1",
      lineHeight: sizeToString(sizeToNumber(size) - 4, "px"),
    }}
  >
    {children}
  </div>
);
