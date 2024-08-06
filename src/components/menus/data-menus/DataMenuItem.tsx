import { forwardRef, type ForwardedRef, type ReactNode, useMemo } from "react";

import { type IconProp, type IconName } from "~/components/icons";
import * as types from "~/components/menus";
import { MenuItem } from "~/components/menus/MenuItem";
import { classNames, type QuantitativeSize } from "~/components/types";

export type DataMenuItemProps<M extends types.DataMenuModel> = types.MenuItemFlagProps<M> & {
  readonly datum: M;
  readonly id: string | number;
  readonly isCurrentNavigation?: boolean;
  readonly itemClassName?: types.DataMenuItemClassName<M>;
  readonly itemHeight?: QuantitativeSize<"px">;
  readonly itemNavigatedClassName?: types.DataMenuItemClassName<M>;
  readonly itemSpinnerClassName?: types.DataMenuItemClassName<M>;
  readonly itemIconClassName?: types.DataMenuItemClassName<M>;
  readonly itemIconProps?: types.MenuItemIconProps;
  readonly itemIconSize?: QuantitativeSize<"px">;
  readonly itemDisabledClassName?: types.DataMenuItemClassName<M>;
  readonly itemLoadingClassName?: types.DataMenuItemClassName<M>;
  readonly itemLockedClassName?: types.DataMenuItemClassName<M>;
  readonly itemSelectedClassName?: types.DataMenuItemClassName<M>;
  readonly selectionIndicator?: types.MenuItemSelectionIndicator;
  readonly getItemLabel?: (datum: M) => ReactNode;
  readonly getItemIcon?: (datum: M) => IconProp | IconName | JSX.Element | undefined;
  readonly onClick?: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    instance: types.MenuItemInstance,
  ) => void;
  readonly children?: (datum: M) => ReactNode;
};

export const DataMenuItem = forwardRef(
  <M extends types.DataMenuModel>(
    {
      datum,
      id,
      itemClassName,
      itemIconSize,
      itemDisabledClassName,
      itemSelectedClassName,
      itemSpinnerClassName,
      itemIconClassName,
      itemIconProps,
      itemLoadingClassName,
      itemLockedClassName,
      selectionIndicator,
      itemHeight,
      itemNavigatedClassName,
      itemIsDisabled,
      itemIsSelected,
      itemIsLoading,
      itemIsLocked,
      itemIsVisible,
      onClick,
      getItemLabel,
      getItemIcon,
      children,
      ...props
    }: DataMenuItemProps<M>,
    ref: ForwardedRef<types.MenuItemInstance>,
  ) => {
    const label = useMemo(() => {
      if (getItemLabel) {
        return getItemLabel(datum);
      }
      return datum.label;
    }, [datum, getItemLabel]);

    const icon = useMemo(() => {
      let icon: JSX.Element | IconProp | IconName | undefined = datum.icon;
      if (getItemIcon) {
        icon = getItemIcon(datum);
      }
      return icon ?? datum.icon;
    }, [datum, getItemIcon]);

    return (
      <MenuItem
        {...props}
        id={String(id)}
        ref={ref}
        actions={datum.actions}
        height={itemHeight}
        icon={icon}
        iconSize={datum.iconSize ?? itemIconSize}
        selectionIndicator={selectionIndicator}
        iconProps={{ ...itemIconProps, ...datum.iconProps }}
        iconClassName={classNames(
          typeof itemIconClassName === "function" ? itemIconClassName(datum) : itemIconClassName,
          datum.iconClassName,
        )}
        navigatedClassName={classNames(
          typeof itemNavigatedClassName === "function"
            ? itemNavigatedClassName(datum)
            : itemNavigatedClassName,
        )}
        spinnerClassName={classNames(
          typeof itemSpinnerClassName === "function"
            ? itemSpinnerClassName(datum)
            : itemSpinnerClassName,
          datum.spinnerClassName,
        )}
        className={classNames(
          typeof itemClassName === "function" ? itemClassName(datum) : itemClassName,
          datum.className,
        )}
        disabledClassName={classNames(
          typeof itemDisabledClassName === "function"
            ? itemDisabledClassName(datum)
            : itemDisabledClassName,
          datum.disabledClassName,
        )}
        loadingClassName={classNames(
          typeof itemLoadingClassName === "function"
            ? itemLoadingClassName(datum)
            : itemLoadingClassName,
          datum.loadingClassName,
        )}
        selectedClassName={classNames(
          typeof itemSelectedClassName === "function"
            ? itemSelectedClassName(datum)
            : itemSelectedClassName,
          datum.selectedClassName,
        )}
        lockedClassName={classNames(
          typeof itemLockedClassName === "function"
            ? itemLockedClassName(datum)
            : itemLockedClassName,
          datum.lockedClassName,
        )}
        isDisabled={types.evalMenuItemFlag("isDisabled", itemIsDisabled, datum) || datum.isDisabled}
        isVisible={
          types.evalMenuItemFlag("isVisible", itemIsVisible, datum) !== false &&
          datum.isVisible !== false
        }
        isLocked={types.evalMenuItemFlag("isLocked", itemIsLocked, datum) || datum.isLocked}
        isLoading={types.evalMenuItemFlag("isLoading", itemIsLoading, datum) || datum.isLoading}
        isSelected={Boolean(
          types.evalMenuItemFlag("isSelected", itemIsSelected, datum) || datum.isSelected,
        )}
        onClick={(e, instance) => {
          onClick?.(e, instance);
          datum.onClick?.(e, instance);
        }}
      >
        {children ? children(datum) : label}
      </MenuItem>
    );
  },
) as {
  <M extends types.DataMenuModel>(
    props: DataMenuItemProps<M> & {
      readonly ref: ForwardedRef<types.MenuItemInstance>;
    },
  ): JSX.Element;
};
