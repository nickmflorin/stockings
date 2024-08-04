import { View, type ViewProps } from "~/components/structural/View";
import { type ComponentProps } from "~/components/types";

import { ErrorDetail, type ErrorDetailProps } from "./ErrorDetail";

export type ErrorViewProps = Pick<ViewProps, "fullScreen" | "fill" | keyof ComponentProps> &
  Omit<ErrorDetailProps, keyof ComponentProps>;

export const ErrorView = ({ fill = "parent", fullScreen = false, ...props }: ErrorViewProps) => (
  <View {...props} fill={fullScreen ? "screen" : fill} centerChildren overflow="hidden" absolute>
    <ErrorDetail {...props} />
  </View>
);
