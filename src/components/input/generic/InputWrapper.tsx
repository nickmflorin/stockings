import { forwardRef, type ForwardedRef } from "react";

import { UnreachableCaseError } from "~/application/errors";

import {
  type InputSize,
  InputSizes,
  InputVariants,
  type InputVariant,
} from "~/components/input/types";
import { classNames } from "~/components/types";
import {
  type ComponentProps,
  type HTMLElementProps,
  BorderRadii,
  type BorderRadius,
} from "~/components/types";

type WrapperComponentName = "div" | "textarea";

type WrapperElement<C extends WrapperComponentName> = {
  div: HTMLDivElement;
  textarea: HTMLTextAreaElement;
}[C];

export type InputWrapperProps<C extends WrapperComponentName> = ComponentProps &
  HTMLElementProps<C> & {
    readonly component: C;
    readonly size?: InputSize;
    readonly variant?: InputVariant;
    readonly isActive?: boolean;
    readonly isDisabled?: boolean;
    readonly isLocked?: boolean;
    readonly isLoading?: boolean;
    readonly isReadOnly?: boolean;
    readonly dynamicHeight?: boolean;
    readonly radius?: BorderRadius;
  };

export const InputWrapper = forwardRef(
  <C extends WrapperComponentName>(
    {
      children,
      component,
      isDisabled = false,
      isActive = false,
      dynamicHeight = false,
      size = InputSizes.LARGE,
      radius = BorderRadii.SM,
      isLoading = false,
      isLocked = false,
      isReadOnly = false,
      variant = InputVariants.PRIMARY,
      ...props
    }: InputWrapperProps<C>,
    ref: ForwardedRef<WrapperElement<C>>,
  ): JSX.Element => {
    const ps = {
      ...props,
      ref,
      children,
      className: classNames(
        "input",
        `input--size-${size}`,
        `input--variant-${variant}`,
        `input--radius-${radius}`,
        {
          disabled: isDisabled,
          "input--dynamic-height": dynamicHeight,
          "input--locked": isLocked,
          "input--loading": isLoading,
          "input--active": isActive,
          "input--read-only": isReadOnly,
        },
        props.className,
      ),
    };
    switch (component) {
      case "div":
        return <div {...(ps as HTMLElementProps<"div">)} />;
      case "textarea": {
        const className = classNames("text-area", ps.className);
        return (
          <textarea
            disabled={isDisabled}
            {...(ps as HTMLElementProps<"textarea">)}
            className={className}
          />
        );
      }
      default:
        throw new UnreachableCaseError(`Invalid 'component' provided: ${component}!`);
    }
  },
) as {
  <C extends WrapperComponentName>(
    props: InputWrapperProps<C> & { readonly ref?: ForwardedRef<WrapperElement<C>> },
  ): JSX.Element;
};
