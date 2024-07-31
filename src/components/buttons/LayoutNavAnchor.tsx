"use client";
import Link, { type LinkProps } from "next/link";
import { forwardRef } from "react";

import clsx from "clsx";

import type * as types from "./types";

import { Tooltip } from "~/components/floating/Tooltip";
import { type ILayoutNavItem } from "~/components/layout/types";
import { useNavigatable } from "~/hooks";

import { IconButton, type IconButtonProps } from "./generic";

export interface LayoutNavAnchorProps
  extends Omit<IconButtonProps<"a">, "options" | "isActive" | "icon" | "href" | "component"> {
  readonly item: Pick<ILayoutNavItem, "activePaths" | "icon" | "path" | "tooltipLabel">;
}

export const LayoutNavAnchor = forwardRef<
  types.PolymorphicButtonElement<"a">,
  LayoutNavAnchorProps
>(({ item, ...props }: LayoutNavAnchorProps, forwardedRef: types.PolymorphicButtonRef<"a">) => {
  const { isActive, href, isPending, setActiveOptimistically } = useNavigatable({ item });
  return (
    <Tooltip content={item.tooltipLabel} placement="right" inPortal>
      {({ ref, params }) => (
        <IconButton<"a", LinkProps>
          {...props}
          {...params}
          component={Link}
          isLoading={isPending}
          onClick={() => setActiveOptimistically()}
          className={clsx("z-0", props.className)}
          ref={instance => {
            ref(instance);
            if (typeof forwardedRef === "function") {
              forwardedRef(instance);
            } else if (forwardedRef) {
              forwardedRef.current = instance;
            }
          }}
          href={href}
          size="xlarge"
          iconSize="medium"
          icon={item.icon}
          isActive={isActive}
        />
      )}
    </Tooltip>
  );
});
