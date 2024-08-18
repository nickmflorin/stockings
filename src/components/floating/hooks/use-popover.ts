import { useRef, useMemo } from "react";

import { arrow, size, offset as offsetMiddleware, type OffsetOptions } from "@floating-ui/react";

import type * as types from "~/components/floating/types";
import { type QuantitativeSize, type Size, sizeToNumber, sizeToString } from "~/components/types";

import { useFloating, type UseFloatingConfig } from "./use-floating";

export interface UsePopoverConfig extends Omit<UseFloatingConfig, "triggers"> {
  readonly offset?: OffsetOptions;
  readonly width?: QuantitativeSize<"px"> | "target" | "available" | "fit-content";
  readonly maxHeight?: Size<"px">;
  readonly triggers?: ["click", "hover"] | ["click"] | ["hover"] | ["hover", "click"];
}

export const usePopover = ({
  maxHeight,
  offset,
  width,
  ...config
}: UsePopoverConfig): types.PopoverContext => {
  const arrowRef = useRef<SVGSVGElement>(null);

  const floating = useFloating({
    ...config,
    middleware: [
      arrow({
        element: arrowRef,
      }),
      offset ? offsetMiddleware(offset) : undefined,
      size({
        apply({ availableHeight, availableWidth, rects, elements }) {
          if (width !== undefined) {
            /* eslint-disable prettier/prettier */
            // prettier-ignore
            Object.assign(elements.floating.style, {
              width:
                width === "target"
                  ? `${rects.reference.width}px`
                  : width === "available"
                  ? sizeToString(availableWidth, "px")
                  : width === "fit-content"
                  ? "fit-content"
                  : sizeToString(Math.min(sizeToNumber(width), availableWidth), "px"),
            /* eslint-enable prettier/prettier */
            });
          }
          if (maxHeight === undefined) {
            Object.assign(elements.floating.style, {
              maxHeight: `${availableHeight - 10}px`,
            });
            // flushSync(() => setMaxHeight(`${availableHeight - 10}px`));
          } else {
            Object.assign(elements.floating.style, {
              maxHeight: maxHeight !== "fit-content" ? `${sizeToNumber(maxHeight)}px` : maxHeight,
            });
          }
        },
      }),
      ...(config.middleware ?? []),
    ],
  });

  return useMemo(
    () => ({
      arrowRef,
      ...floating,
    }),
    [floating, arrowRef],
  );
};
