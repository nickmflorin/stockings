import React, { forwardRef, type ForwardedRef } from "react";

import { isFragment } from "react-is";

import {
  type ComponentProps,
  type HTMLElementProps,
  type TypographyCharacteristics,
  getTypographyClassName,
  classNames,
} from "~/components/types";

export type DescriptionComponent = "span" | "div" | "p";

type PolymorphicDescriptionProps<T extends DescriptionComponent> = Omit<
  HTMLElementProps<T>,
  keyof ComponentProps
>;

type PolymorphicDescriptionRef<T extends DescriptionComponent> = {
  div: ForwardedRef<HTMLDivElement>;
  p: ForwardedRef<HTMLParagraphElement>;
  span: ForwardedRef<HTMLSpanElement>;
}[T];

export type DescriptionProps<C extends DescriptionComponent> = TypographyCharacteristics &
  ComponentProps &
  PolymorphicDescriptionProps<C> & {
    readonly component?: DescriptionComponent;
    readonly inherit?: boolean;
  };

export const Description = forwardRef<HTMLDivElement, DescriptionProps<DescriptionComponent>>(
  <C extends DescriptionComponent>(
    {
      component = "div",
      inherit = false,
      fontSize,
      fontWeight,
      transform,
      fontFamily,
      lineClamp,
      truncate,
      align,
      ...props
    }: DescriptionProps<C>,
    ref: PolymorphicDescriptionRef<C>,
  ): JSX.Element => {
    if (
      isFragment(props.children) ||
      props.children === undefined ||
      props.children === null ||
      typeof props.children === "boolean" ||
      (typeof props.children === "string" && props.children.trim() === "")
    ) {
      return <></>;
    }
    const ps = {
      ...props,
      className: classNames(
        "description",
        { "description--inherit": inherit },
        getTypographyClassName({
          fontSize,
          fontWeight,
          transform,
          fontFamily,
          lineClamp,
          truncate,
          align,
        }),
        props.className,
      ),
    };
    switch (component) {
      case "span": {
        const p = ps as HTMLElementProps<"span">;
        return <span {...p} ref={ref as PolymorphicDescriptionRef<"span">} />;
      }
      case "div": {
        const p = ps as HTMLElementProps<"div">;
        return <div {...p} ref={ref as PolymorphicDescriptionRef<"div">} />;
      }
      case "p": {
        const p = ps as HTMLElementProps<"p">;
        return <p {...p} ref={ref as PolymorphicDescriptionRef<"p">} />;
      }
    }
  },
) as {
  <C extends DescriptionComponent>(
    props: DescriptionProps<C> & { readonly ref?: PolymorphicDescriptionRef<C> },
  ): JSX.Element;
};
