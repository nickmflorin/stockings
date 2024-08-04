import { type IconProps } from "~/components/icons/types";
import { classNames } from "~/components/types";

import { getNativeIconStyle, type DynamicIconClassNamePropName } from "./util";

export const NativeIcon = (
  props: { children?: JSX.Element } & Pick<
    IconProps,
    "style" | "className" | DynamicIconClassNamePropName
  >,
) => (
  <i
    className={classNames(props.className)}
    style={{ ...props.style, ...getNativeIconStyle(props) }}
  >
    {props.children}
  </i>
);
