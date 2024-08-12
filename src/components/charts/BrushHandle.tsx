import React from "react";

import { type BrushHandleRenderProps } from "@visx/brush/lib/BrushHandle";
import { Group } from "@visx/group";

import * as constants from "./constants";

export interface BrushHandleProps extends BrushHandleRenderProps {}

// We need to manually offset the handles for them to be rendered at the right position
export const BrushHandle = ({ x, height, isBrushActive }: BrushHandleProps) => {
  const pathWidth = 8;
  const pathHeight = 15;
  if (!isBrushActive) {
    return null;
  }
  return (
    <Group left={x + pathWidth / 2} top={(height - pathHeight) / 2}>
      <path
        fill={constants.BrushHandleFillColor}
        /* eslint-disable-next-line max-len */
        d="M -4.5 0.5 L 3.5 0.5 L 3.5 15.5 L -4.5 15.5 L -4.5 0.5 M -1.5 4 L -1.5 12 M 0.5 4 L 0.5 12"
        stroke="#999999"
        strokeWidth="1"
        style={{ cursor: "ew-resize" }}
      />
    </Group>
  );
};
