import { forwardRef } from "react";

import { classNames } from "~/components/types";
import { Text } from "~/components/typography/Text";

import { PopoverContent, type PopoverContentProps } from "./PopoverContent";

export type TooltipContentProps = PopoverContentProps;

export const TooltipContent = forwardRef<HTMLDivElement, TooltipContentProps>(
  (
    {
      children,
      className = "py-[6px] px-[10px] text-md leading-[14px]",
      ...props
    }: TooltipContentProps,
    ref,
  ) => (
    <PopoverContent {...props} ref={ref} className={classNames(className)}>
      {typeof children === "string" ? (
        <Text inherit className="whitespace-nowrap">
          {children}
        </Text>
      ) : (
        children
      )}
    </PopoverContent>
  ),
);
