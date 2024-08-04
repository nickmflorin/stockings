import clsx from "clsx";

import { Popover, type PopoverProps } from "~/components/floating/Popover";
import { PopoverContent } from "~/components/floating/PopoverContent";
import type { ComponentProps } from "~/components/types";

export interface DropdownMenuProps
  extends Pick<
    PopoverProps,
    | "placement"
    | "inPortal"
    | "autoUpdate"
    | "middleware"
    | "offset"
    | "width"
    | "withArrow"
    | "isDisabled"
    | "maxHeight"
    | "triggers"
    | "children"
  > {
  readonly contentClassName?: ComponentProps["className"];
  readonly contentStyle?: ComponentProps["style"];
  readonly content: JSX.Element;
}

export const DropdownMenu = ({
  children,
  contentClassName,
  contentStyle,
  content,
  placement = "bottom",
  offset = { mainAxis: 4 },
  triggers = ["click"],
  ...props
}: DropdownMenuProps) => (
  <Popover
    {...props}
    placement={placement}
    offset={offset}
    triggers={triggers}
    content={
      <PopoverContent
        style={contentStyle}
        className={clsx("p-[0px] rounded-md overflow-hidden", contentClassName)}
      >
        {content}
      </PopoverContent>
    }
  >
    {children}
  </Popover>
);
