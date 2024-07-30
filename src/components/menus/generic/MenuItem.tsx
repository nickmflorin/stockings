"use client";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import { type ReactNode, useImperativeHandle, forwardRef } from "react";

import { isFragment } from "react-is";

import { type SpinnerProps, type IconProp, type IconName, isIconProp } from "~/components/icons";
import * as types from "~/components/menus";
import { type Action } from "~/components/structural/Actions";
import { classNames } from "~/components/types";
import { type ComponentProps, type HTMLElementProps } from "~/components/types";
import { sizeToString, sizeToNumber, type QuantitativeSize } from "~/components/types/sizes";
import { ShowHide } from "~/components/util";

import { MenuItemIcon } from "./MenuItemIcon";

const Spinner = dynamic(() => import("~/components/icons/Spinner").then(mod => mod.Spinner));
const Checkbox = dynamic(() => import("~/components/input/Checkbox").then(mod => mod.Checkbox));
const Actions = dynamic(() => import("~/components/structural/Actions").then(mod => mod.Actions));

export interface MenuItemProps extends ComponentProps, Omit<HTMLElementProps<"div">, "onClick"> {
  readonly icon?: IconProp | IconName | JSX.Element;
  readonly iconClassName?: ComponentProps["className"];
  readonly iconProps?: types.MenuItemIconProps;
  readonly spinnerProps?: Omit<SpinnerProps, "size" | "className" | "isLoading">;
  readonly iconSize?: QuantitativeSize<"px">;
  readonly spinnerClassName?: ComponentProps["className"];
  readonly isLocked?: boolean;
  readonly isLoading?: boolean;
  readonly isSelected?: boolean;
  readonly isDisabled?: boolean;
  readonly isCurrentNavigation?: boolean;
  readonly isVisible?: boolean;
  readonly actions?: Action[];
  readonly height?: QuantitativeSize<"px">;
  readonly contentClassName?: ComponentProps["className"];
  readonly selectedClassName?: ComponentProps["className"];
  readonly navigatedClassName?: ComponentProps["className"];
  readonly disabledClassName?: ComponentProps["className"];
  readonly lockedClassName?: ComponentProps["className"];
  readonly loadingClassName?: ComponentProps["className"];
  readonly selectionIndicator?: types.MenuItemSelectionIndicator;
  readonly children: ReactNode;
  readonly onClick?: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    instance: types.MenuItemInstance,
  ) => void;
}

export const MenuItem = forwardRef<types.MenuItemInstance, MenuItemProps>(
  (
    {
      height,
      actions = [],
      isSelected = false,
      selectedClassName,
      loadingClassName,
      lockedClassName,
      disabledClassName,
      spinnerClassName,
      spinnerProps,
      contentClassName,
      children,
      isDisabled = false,
      isLocked = false,
      isVisible = true,
      isCurrentNavigation = false,
      icon,
      iconClassName,
      navigatedClassName,
      iconSize,
      iconProps,
      isLoading = false,
      selectionIndicator,
      ...props
    }: MenuItemProps,
    ref,
  ): JSX.Element => {
    const localRef = useRef<HTMLDivElement | null>(null);

    const [_isLoading, setLoading] = useState(false);
    const [_isDisabled, setDisabled] = useState(false);
    const [_isLocked, setLocked] = useState(false);

    useImperativeHandle(ref, () => ({
      setLoading,
      setDisabled,
      setLocked,
    }));

    return (
      <ShowHide show={isVisible}>
        <div
          {...props}
          ref={localRef}
          onClick={e => {
            if (!isDisabled && !isLocked && !isLoading) {
              props.onClick?.(e, {
                ...(localRef.current as HTMLDivElement),
                setLoading,
                setDisabled,
                setLocked,
              });
            }
          }}
          className={classNames(
            "menu__item",
            { "pointer-events-auto cursor-pointer": props.onClick !== undefined },
            {
              "menu__item--selected":
                isSelected && types.menuItemHasSelectionIndicator(selectionIndicator, "highlight"),
              [classNames("menu__item--navigated", navigatedClassName)]: isCurrentNavigation,
              [classNames(selectedClassName)]: isSelected,
              [classNames("menu__item--loading", loadingClassName)]: isLoading || _isLoading,
              [classNames("disabled", disabledClassName)]: isDisabled || _isDisabled,
              [classNames("menu__item--locked", lockedClassName)]: isLocked || _isLocked,
            },
            props.className,
          )}
          style={
            height !== undefined
              ? {
                  ...props.style,
                  height: sizeToString(height, "px"),
                  lineHeight: `${sizeToNumber(height) - 2 * 6}px`,
                }
              : props.style
          }
        >
          <ShowHide show={types.menuItemHasSelectionIndicator(selectionIndicator, "checkbox")}>
            <Checkbox readOnly value={isSelected} isDisabled={isDisabled} isLocked={isLocked} />
          </ShowHide>
          {typeof icon === "string" || isIconProp(icon) ? (
            <MenuItemIcon
              icon={icon as IconProp | IconName | undefined}
              iconProps={iconProps}
              iconSize={iconSize}
              iconClassName={iconClassName}
              isLoading={isLoading}
              spinnerClassName={spinnerClassName}
              spinnerProps={spinnerProps}
            />
          ) : (
            icon
          )}
          {children !== null && children !== undefined && !isFragment(children) && (
            <div className={classNames("menu__item__content", contentClassName)}>{children}</div>
          )}
          {/* Only show the spinner to the right (instead of over the icon) if the icon is not
              defined.  This avoids text/content shifting when the Spinner appears and disappears.
              */}
          {icon === undefined && (
            <Spinner
              {...spinnerProps}
              className={classNames("text-gray-600", iconClassName, spinnerClassName)}
              isLoading={isLoading}
              size={iconSize}
            />
          )}
          <Actions actions={actions} />
        </div>
      </ShowHide>
    );
  },
);
