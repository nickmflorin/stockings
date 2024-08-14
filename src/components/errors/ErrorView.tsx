import {
  View,
  type ViewSizeProps,
  type ViewFillProps,
  type ViewPositionProps,
} from "~/components/structural/View";
import { type ComponentProps } from "~/components/types";

import { ErrorDetail, type ErrorDetailProps } from "./ErrorDetail";

export interface ErrorViewProps
  extends ComponentProps,
    ViewSizeProps,
    ViewPositionProps,
    ViewFillProps,
    Omit<ErrorDetailProps, keyof ComponentProps> {}

export const ErrorView = ({ fill = "parent", ...props }: ErrorViewProps) => (
  <View {...props} fill={fill} centerChildren overflow="hidden" __default_position__="relative">
    <ErrorDetail {...props} />
  </View>
);
