"use client";
import dynamic from "next/dynamic";
import React, { forwardRef, type ForwardedRef, type ReactNode, useRef } from "react";

import type * as types from "~/components//input/select/types";
import { type IconProp, type IconName } from "~/components/icons";
import { useSelectModelAccessors } from "~/components/input/select/hooks";
import { Loading } from "~/components/loading/Loading";
import {
  type MenuItemSelectionIndicator,
  type MenuItemInstance,
  type DataMenuContentInstance,
} from "~/components/menus";
import { type DataMenuComponent, type DataMenuProps } from "~/components/menus/data-menus/DataMenu";
import { classNames } from "~/components/types";

import { DataSelectBase, type DataSelectBaseProps } from "./DataSelectBase";

const DataMenu = dynamic(() => import("~/components/menus/data-menus/DataMenu"), {
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
      | (`group${string}` & keyof DataMenuProps<M>)
      | Exclude<`item${string}` & keyof DataMenuProps<M>, "itemIsSelected">
    > {
  readonly getModelIcon?: (datum: M) => IconProp | IconName | JSX.Element | undefined;
  readonly onItemClick?: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent> | KeyboardEvent,
    datum: M,
    instance: MenuItemInstance,
  ) => void;
  readonly itemRenderer?: (model: M) => ReactNode;
}

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export const DataSelect = forwardRef<types.SelectInstance, DataSelectProps<any, any>>(
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
      getModelIcon,
      itemIsDisabled,
      itemIsLoading,
      itemIsLocked,
      itemIsVisible,
      onItemClick,
      itemRenderer,
      children,
      ...props
    }: DataSelectProps<M, O>,
    ref: ForwardedRef<types.SelectInstance>,
  ): JSX.Element => {
    const innerRef = useRef<types.SelectInstance | null>(null);
    const menuContentRef = useRef<DataMenuContentInstance>(null);

    const { getModelValue, getModelLabel, getModelId } = useSelectModelAccessors({
      getModelValue: props.options.getModelValue,
      getModelLabel: props.getModelLabel,
      getModelId: props.getModelId,
    });

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
            getItemLabel={getModelLabel}
            getItemIcon={getModelIcon}
            getItemId={getModelId}
            itemIsDisabled={itemIsDisabled}
            itemIsLoading={itemIsLoading}
            itemIsLocked={itemIsLocked}
            itemIsVisible={itemIsVisible}
            itemIsSelected={m => {
              const fn = getModelValue as (m: M) => types.InferredDataSelectV<M, O>;
              return isSelected(fn(m));
            }}
            onItemClick={(e, m: M, instance) => {
              const fn = getModelValue as (m: M) => types.InferredDataSelectV<M, O>;
              toggle(fn(m));
              onItemClick?.(e, m, instance);
            }}
            onKeyboardNavigationExit={() => {
              innerRef.current?.focusInput();
            }}
          >
            {itemRenderer ? (m: M) => itemRenderer(m) : undefined}
          </DataMenu>
        )}
      >
        {children}
      </DataSelectBase>
    );
  },
) as {
  <M extends types.DataSelectModel, O extends types.DataSelectOptions<M>>(
    props: DataSelectProps<M, O> & { readonly ref?: ForwardedRef<types.SelectInstance> },
  ): JSX.Element;
};
