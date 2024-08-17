"use client";
import dynamic from "next/dynamic";
import { useRef, useState, useMemo } from "react";
import { type ReactNode, useImperativeHandle, forwardRef } from "react";

import { isFragment } from "react-is";

import { type SpinnerProps, type IconProp, type IconName, isIconProp } from "~/components/icons";
import { Spinner } from "~/components/icons/Spinner";
import { LoadingText } from "~/components/loading/LoadingText";
import * as types from "~/components/menus";
import { type Action } from "~/components/structural/Actions";
import { classNames } from "~/components/types";
import { type ComponentProps, type HTMLElementProps } from "~/components/types";
import { sizeToString, sizeToNumber, type QuantitativeSize } from "~/components/types/sizes";
import { Description } from "~/components/typography";
import { ShowHide } from "~/components/util";

import { MenuItemIcon } from "./MenuItemIcon";

const Checkbox = dynamic(() => import("~/components/input/Checkbox").then(mod => mod.Checkbox));
const Actions = dynamic(() => import("~/components/structural/Actions").then(mod => mod.Actions));

type MenuItemRenderCallback<V> = V | ((params: types.MenuItemRenderProps) => V);

export interface MenuItemProps
  extends ComponentProps,
    Omit<HTMLElementProps<"div">, "children" | "onClick"> {
  readonly icon?: MenuItemRenderCallback<IconProp | IconName | JSX.Element | undefined>;
  readonly description?: MenuItemRenderCallback<ReactNode>;
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
  readonly loadingText?: string;
  readonly actions?: Action[];
  readonly height?: QuantitativeSize<"px">;
  readonly contentClassName?: ComponentProps["className"];
  readonly selectedClassName?: ComponentProps["className"];
  readonly navigatedClassName?: ComponentProps["className"];
  readonly disabledClassName?: ComponentProps["className"];
  readonly lockedClassName?: ComponentProps["className"];
  readonly loadingClassName?: ComponentProps["className"];
  readonly selectionIndicator?: types.MenuItemSelectionIndicator;
  readonly children: ReactNode | ((params: types.MenuItemRenderProps) => ReactNode);
  readonly onClick?: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    instance: types.MenuItemInstance,
  ) => void;
}

interface MenuItemInnerProps
  extends Pick<
    MenuItemProps,
    | "icon"
    | "iconProps"
    | "iconSize"
    | "iconClassName"
    | "spinnerClassName"
    | "spinnerProps"
    | "children"
    | "actions"
    | "loadingText"
  > {
  readonly isLoading: boolean;
  readonly isDisabled: boolean;
  readonly isLocked: boolean;
}

const MenuItemInner = ({
  isLocked,
  isLoading,
  isDisabled,
  icon: _icon,
  children: _children,
  actions = [],
  loadingText,
  ...rest
}: MenuItemInnerProps) => {
  const icon = useMemo(() => {
    const ic = typeof _icon === "function" ? _icon({ isLocked, isLoading, isDisabled }) : _icon;
    if (typeof ic === "string" || isIconProp(ic)) {
      return (
        <MenuItemIcon
          {...rest}
          icon={ic as IconProp | IconName | undefined}
          isLoading={isLoading}
        />
      );
    }
    return ic;
  }, [_icon, rest, isLoading, isLocked, isDisabled]);

  const leftIcon = useMemo(() => {
    if (icon === undefined || isLoading) {
      return (
        <Spinner
          {...rest.spinnerProps}
          className={classNames("text-gray-600", rest.iconClassName, rest.spinnerClassName)}
          isLoading={isLoading}
          size={rest.iconSize ?? "16px"}
        />
      );
    }
    return icon;
  }, [icon, isLoading, rest]);

  const children = useMemo(() => {
    if (typeof _children === "function") {
      return _children({ isLocked, isLoading, isDisabled });
    }
    return _children;
  }, [_children, isLocked, isLoading, isDisabled]);

  return (
    <>
      {leftIcon}
      {children !== null && children !== undefined && !isFragment(children) && (
        <div className="menu__item__inner-content">
          {isLoading && loadingText ? <LoadingText>{loadingText}</LoadingText> : children}
        </div>
      )}
      <Actions actions={actions} />
    </>
  );
};

interface MenuItemContentProps
  extends Pick<
      MenuItemProps,
      "description" | "contentClassName" | "isSelected" | "selectionIndicator"
    >,
    MenuItemInnerProps {}

const MenuItemContent = ({
  contentClassName,
  description: _description,
  isSelected,
  selectionIndicator,
  ...rest
}: MenuItemContentProps) => {
  const description = useMemo(
    () =>
      typeof _description === "function"
        ? _description({
            isLocked: rest.isLocked,
            isLoading: rest.isLoading,
            isDisabled: rest.isDisabled,
          })
        : _description,
    [_description, rest.isLocked, rest.isLoading, rest.isDisabled],
  );

  if (description) {
    return (
      <div className={classNames("menu__item__content-wrapper", contentClassName)}>
        <div className="menu__item__content">
          <ShowHide show={types.menuItemHasSelectionIndicator(selectionIndicator, "checkbox")}>
            <Checkbox
              readOnly
              value={isSelected}
              isDisabled={rest.isDisabled}
              isLocked={rest.isLocked}
            />
          </ShowHide>
          <MenuItemInner {...rest} />
        </div>
        <Description component="div" className="menu__item__description">
          {description}
        </Description>
      </div>
    );
  }
  return (
    <div className={classNames("menu__item__content", contentClassName)}>
      <ShowHide show={types.menuItemHasSelectionIndicator(selectionIndicator, "checkbox")}>
        <Checkbox
          readOnly
          value={isSelected}
          isDisabled={rest.isDisabled}
          isLocked={rest.isLocked}
        />
      </ShowHide>
      <MenuItemInner {...rest} />
    </div>
  );
};

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
      isVisible = true,
      isCurrentNavigation = false,
      description,
      icon,
      iconClassName,
      navigatedClassName,
      iconSize,
      iconProps,
      isLoading: propIsLoading,
      isLocked: propIsLocked,
      isDisabled: propIsDisabled,
      selectionIndicator,
      loadingText,
      ...props
    }: MenuItemProps,
    ref,
  ): JSX.Element => {
    const localRef = useRef<HTMLDivElement | null>(null);

    const [_isLoading, setLoading] = useState(false);
    const [_isDisabled, setDisabled] = useState(false);
    const [_isLocked, setLocked] = useState(false);

    const isLocked = propIsLocked || _isLocked;
    const isLoading = propIsLoading || _isLoading;
    const isDisabled = propIsDisabled || _isDisabled;

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
              [classNames("menu__item--loading", loadingClassName)]: isLoading,
              [classNames("disabled", disabledClassName)]: isDisabled,
              [classNames("menu__item--locked", lockedClassName)]: isLocked,
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
          <MenuItemContent
            actions={actions}
            spinnerClassName={spinnerClassName}
            spinnerProps={spinnerProps}
            icon={icon}
            description={description}
            iconClassName={iconClassName}
            iconProps={iconProps}
            iconSize={iconSize}
            contentClassName={contentClassName}
            isLoading={isLoading}
            isDisabled={isDisabled}
            isLocked={isLocked}
            selectionIndicator={selectionIndicator}
            isSelected={isSelected}
            loadingText={loadingText}
          >
            {children}
          </MenuItemContent>
        </div>
      </ShowHide>
    );
  },
);
