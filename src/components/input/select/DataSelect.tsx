"use client";
import dynamic from "next/dynamic";
import React, { forwardRef, type ForwardedRef, type ReactNode, useRef, useCallback } from "react";

import type * as types from "~/components//input/select/types";
import { Loading } from "~/components/loading/Loading";
import {
  type MenuItemSelectionIndicator,
  type DataMenuContentInstance,
  type MenuItemRenderProps,
} from "~/components/menus";
import { type DataMenuComponent, type DataMenuProps } from "~/components/menus/DataMenu";
import { classNames } from "~/components/types";

import { DataSelectBase, type DataSelectBaseProps } from "./DataSelectBase";

const DataMenu = dynamic(() => import("~/components/menus/DataMenu"), {
  loading: () => <Loading isLoading={true} spinnerSize="16px" />,
}) as DataMenuComponent;

export interface DataSelectProps<
  M extends types.DataSelectModel,
  O extends types.DataSelectOptions<M>,
> extends Omit<DataSelectBaseProps<M, O>, "content">,
    Pick<
      DataMenuProps<M>,
      | "groups"
      | "header"
      | "footer"
      | "enableKeyboardInteractions"
      | "hideEmptyGroups"
      | "hideGrouplessItems"
      | "selectionIndicator"
      | "getItemIcon"
      | "onItemClick"
      | (`group${string}` & keyof DataMenuProps<M>)
      | Exclude<`item${string}` & keyof DataMenuProps<M>, "itemIsSelected">
    > {
  readonly itemRenderer?: (model: M, params: MenuItemRenderProps) => ReactNode;
}

export const DataSelect = forwardRef(
  <M extends types.DataSelectModel, O extends types.DataSelectOptions<M>>(
    {
      menuClassName,
      itemClassName,
      itemHeight,
      itemSpinnerClassName,
      itemIconClassName,
      itemIconProps,
      itemIconSize,
      itemDisabledClassName,
      itemLoadingClassName,
      itemLockedClassName,
      itemSelectedClassName,
      selectionIndicator: _selectionIndicator,
      header,
      footer,
      hideEmptyGroups,
      hideGrouplessItems,
      enableKeyboardInteractions = true,
      groups,
      groupContentClassName,
      groupLabelClassName,
      groupLabelContainerClassName,
      groupLabelProps,
      groupsAreBordered,
      getItemIcon,
      itemIsDisabled,
      itemIsLoading,
      itemIsLocked,
      itemIsVisible,
      onItemClick,
      itemRenderer,
      children,
      ...props
    }: DataSelectProps<M, O>,
    ref: ForwardedRef<types.DataSelectInstance<M, O>>,
  ): JSX.Element => {
    const innerRef = useRef<types.DataSelectInstance<M, O> | null>(null);
    const menuContentRef = useRef<DataMenuContentInstance>(null);

    const getItemValue = useCallback(
      (m: M) => {
        if (props.options.getItemValue !== undefined) {
          return props.options.getItemValue(m);
        } else if ("value" in m && m.value !== undefined) {
          return m.value;
        }
        throw new Error(
          "If the 'getItemValue' callback prop is not provided, each model must be attributed " +
            "with a defined 'value' property!",
        );
      },
      [props.options],
    );

    const defaultSelectionIndicator =
      props.options.behavior === "multi"
        ? (["checkbox", "highlight"] as MenuItemSelectionIndicator)
        : (["highlight"] as MenuItemSelectionIndicator);

    const selectionIndicator = _selectionIndicator ?? defaultSelectionIndicator;

    return (
      <DataSelectBase<M, O>
        ref={instance => {
          innerRef.current = instance;
          if (typeof ref === "function") {
            ref(instance);
          } else if (ref) {
            ref.current = instance;
          }
        }}
        {...props}
        content={(_, { toggle, isSelected }) => (
          <DataMenu<M>
            hideEmptyGroups={hideEmptyGroups}
            hideGrouplessItems={hideGrouplessItems}
            groups={groups}
            contentRef={menuContentRef}
            className={classNames("z-50 h-full rounded-sm", menuClassName)}
            data={props.data}
            enableKeyboardInteractions={enableKeyboardInteractions}
            itemClassName={itemClassName}
            itemHeight={itemHeight}
            itemSpinnerClassName={itemSpinnerClassName}
            itemIconClassName={itemIconClassName}
            itemIconProps={itemIconProps}
            itemIconSize={itemIconSize}
            itemDisabledClassName={itemDisabledClassName}
            itemLoadingClassName={itemLoadingClassName}
            itemLockedClassName={itemLockedClassName}
            itemSelectedClassName={itemSelectedClassName}
            selectionIndicator={selectionIndicator}
            header={header}
            footer={footer}
            groupContentClassName={groupContentClassName}
            groupLabelClassName={groupLabelClassName}
            groupLabelContainerClassName={groupLabelContainerClassName}
            groupLabelProps={groupLabelProps}
            groupsAreBordered={groupsAreBordered}
            getItemIcon={getItemIcon}
            getItemId={props.getItemId}
            itemIsDisabled={itemIsDisabled}
            itemIsLoading={itemIsLoading}
            itemIsLocked={itemIsLocked}
            itemIsVisible={itemIsVisible}
            itemIsSelected={m => {
              const fn = getItemValue as (m: M) => types.InferredDataSelectV<M, O>;
              return isSelected(fn(m));
            }}
            onItemClick={(e, m: M, instance) => {
              const fn = getItemValue as (m: M) => types.InferredDataSelectV<M, O>;
              toggle(fn(m));
              onItemClick?.(e, m, instance);
            }}
            onKeyboardNavigationExit={() => {
              innerRef.current?.focusInput();
            }}
          >
            {itemRenderer ? (m, params) => itemRenderer(m, params) : undefined}
          </DataMenu>
        )}
      >
        {children}
      </DataSelectBase>
    );
  },
) as {
  <M extends types.DataSelectModel, O extends types.DataSelectOptions<M>>(
    props: DataSelectProps<M, O> & { readonly ref?: ForwardedRef<types.DataSelectInstance<M, O>> },
  ): JSX.Element;
};
