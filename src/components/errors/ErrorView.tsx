import { View, type ViewProps } from "~/components/structural/View";
import { type ComponentProps } from "~/components/types";

import { ErrorDetail, type ErrorDetailProps } from "./ErrorDetail";

export type ErrorViewProps = Pick<ViewProps, "fillScreen" | "fill" | keyof ComponentProps> &
  Omit<ErrorDetailProps, keyof ComponentProps>;

export const ErrorView = ({ fill = "parent", fillScreen, ...props }: ErrorViewProps) => (
  <View {...props} fill={fillScreen ? "screen" : fill} centerChildren overflow="hidden" absolute>
    <ErrorDetail {...props} />
  </View>
);
