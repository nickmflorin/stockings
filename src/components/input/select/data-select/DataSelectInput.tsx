import React, { type ForwardedRef, forwardRef, useMemo, type ReactNode } from "react";

import { useSelectModelAccessors } from "~/components/input/select/hooks";
import * as types from "~/components/input/select/types";

import { BasicSelectInput, type BasicSelectInputProps } from "../generic/BasicSelectInput";
import { MultiValueRenderer, type MultiValueRendererProps } from "../MultiValueRenderer";

export interface DataSelectInputProps<
  M extends types.DataSelectModel,
  O extends types.DataSelectOptions<M>,
> extends Omit<BasicSelectInputProps, "showPlaceholder" | "children">,
    Pick<
      MultiValueRendererProps<M>,
      | "chipClassName"
      | "badgeProps"
      | "chipSize"
      | "onBadgeClose"
      | "getBadgeIcon"
      | "getBadgeProps"
      | "maximumValuesToRender"
    > {
  readonly value: types.DataSelectValue<M, O>;
  readonly modelValue: types.DataSelectModelValue<M, O> | types.NotSet;
  readonly options: O;
  readonly modelValueRenderer?: (m: M) => JSX.Element;
  readonly valueRenderer?: types.DataSelectValueRenderer<M, O>;
  readonly getModelLabel?: (m: M) => ReactNode;
  readonly getModelValueLabel?: (m: M) => ReactNode;
  readonly getModelId?: (m: M) => string | number | undefined;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export const DataSelectInput = forwardRef<HTMLDivElement, DataSelectInputProps<any, any>>(
  <M extends types.DataSelectModel, O extends types.DataSelectOptions<M>>(
    {
      value,
      dynamicHeight = true,
      maximumValuesToRender,
      modelValue,
      options,
      chipClassName,
      chipSize,
      badgeProps,
      onBadgeClose,
      valueRenderer,
      modelValueRenderer,
      getModelLabel: _getModelLabel,
      getModelValueLabel: _getModelValueLabel,
      getBadgeIcon,
      getBadgeProps,
      getModelId,
      ...props
    }: DataSelectInputProps<M, O>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const { getModelValueLabel, getModelKey } = useSelectModelAccessors({
      getModelLabel: _getModelLabel,
      getModelId,
      getModelValue: options.getModelValue,
      getModelValueLabel: _getModelValueLabel,
    });

    const showPlaceholder = useMemo(
      () => (Array.isArray(modelValue) && modelValue.length === 0) || modelValue === null,
      [modelValue],
    );

    const renderedValue = useMemo(() => {
      if (showPlaceholder || modelValue === types.NOTSET) {
        // This value will be hidden in favor of the placeholder anyways.
        return <></>;
      } else if (Array.isArray(modelValue)) {
        if (valueRenderer) {
          return valueRenderer(value, { modelValue });
        }
        const sorted = modelValue
          .map((m, i) => ({ model: m, index: i }))
          .sort((a, b) => {
            const aKey = getModelKey(a.model, a.index);
            const bKey = getModelKey(b.model, b.index);
            return aKey > bKey ? 1 : -1;
          })
          .map((m): M => m.model);
        return (
          <MultiValueRenderer<M>
            data={sorted}
            dynamicHeight={dynamicHeight}
            maximumValuesToRender={maximumValuesToRender}
            badgeProps={badgeProps}
            chipSize={chipSize}
            chipClassName={chipClassName}
            getBadgeLabel={getModelValueLabel}
            getBadgeIcon={getBadgeIcon}
            getBadgeProps={getBadgeProps}
            onBadgeClose={onBadgeClose}
            renderer={modelValueRenderer}
          />
        );
      }
      return getModelValueLabel(modelValue as M);
    }, [
      value,
      modelValue,
      maximumValuesToRender,
      dynamicHeight,
      showPlaceholder,
      chipClassName,
      badgeProps,
      chipSize,
      getBadgeProps,
      onBadgeClose,
      getModelKey,
      valueRenderer,
      modelValueRenderer,
      getBadgeIcon,
      getModelValueLabel,
    ]);

    return (
      <BasicSelectInput
        {...props}
        dynamicHeight={dynamicHeight}
        ref={ref}
        showPlaceholder={showPlaceholder}
      >
        <>{renderedValue}</>
      </BasicSelectInput>
    );
  },
) as {
  <M extends types.DataSelectModel, O extends types.DataSelectOptions<M>>(
    props: DataSelectInputProps<M, O> & { readonly ref?: ForwardedRef<HTMLDivElement> },
  ): JSX.Element;
};
