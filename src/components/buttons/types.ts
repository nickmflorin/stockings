import { type UrlObject } from "url";

import type React from "react";
import { type ForwardedRef } from "react";

import { type EnumeratedLiteralsType, enumeratedLiterals } from "enumerated-literals";

import { type IconProp, type IconName } from "~/components/icons";
import { type ComponentProps, type HTMLElementProps } from "~/components/types";
import type { BorderRadius } from "~/components/types/borders";
import { type QuantitativeSize, type Size } from "~/components/types/sizes";
import { type TypographyCharacteristics } from "~/components/types/typography";

export const ButtonLoadingLocations = enumeratedLiterals(["left", "over", "right"] as const, {});
export type ButtonLoadingLocation = EnumeratedLiteralsType<typeof ButtonLoadingLocations>;

export const ButtonTypes = enumeratedLiterals(
  ["button", "icon-button", "link", "inline-link"] as const,
  {},
);
export type ButtonType = EnumeratedLiteralsType<typeof ButtonTypes>;

export const ButtonColorSchemes = enumeratedLiterals(
  ["primary", "danger", "light", "success", "secondary"] as const,
  {},
);
export type ButtonColorScheme = EnumeratedLiteralsType<typeof ButtonColorSchemes>;

export const ButtonButtonVariants = enumeratedLiterals(
  ["solid", "outlined", "transparent"] as const,
  {},
);
export type ButtonButtonVariant = EnumeratedLiteralsType<typeof ButtonButtonVariants>;

export const IconButtonVariants = enumeratedLiterals(
  ["solid", "outlined", "transparent"] as const,
  {},
);
export type IconButtonVariant = EnumeratedLiteralsType<typeof IconButtonVariants>;

export type ButtonVariant<T extends ButtonType = ButtonType> = {
  button: ButtonButtonVariant;
  "icon-button": IconButtonVariant;
  link: never;
  "inline-link": never;
}[T];

export const ButtonVariants = {
  button: ButtonButtonVariants,
  "icon-button": IconButtonVariants,
};

export const ButtonDiscreteSizes = enumeratedLiterals(
  ["xsmall", "small", "medium", "large", "xlarge"] as const,
  {},
);
export type ButtonDiscreteSize = EnumeratedLiteralsType<typeof ButtonDiscreteSizes>;

export type ButtonSize<T extends ButtonType = ButtonType> = {
  button: ButtonDiscreteSize | Size;
  "icon-button": ButtonDiscreteSize | Size;
  link: never;
  "inline-link": never;
}[T];

export const ButtonDiscreteIconSizes = enumeratedLiterals(
  ["xsmall", "small", "medium", "large", "xlarge", "full"] as const,
  {},
);
export type ButtonDiscreteIconSize = EnumeratedLiteralsType<typeof ButtonDiscreteIconSizes>;

// Represents the size of the Icon inside of the Button.
export type ButtonIconSize = ButtonDiscreteIconSize | QuantitativeSize<"px">;

export const ButtonElements = enumeratedLiterals(["button", "a", "div"] as const, {});
export type ButtonElement = EnumeratedLiteralsType<typeof ButtonElements>;

type ButtonFontSize<T extends ButtonType> = {
  button: TypographyCharacteristics["fontSize"];
  "icon-button": never;
  link: TypographyCharacteristics["fontSize"];
  "inline-link": TypographyCharacteristics["fontSize"];
}[T];

export const ButtonEventPropNames = [
  "onMouseEnter",
  "onMouseLeave",
  "onFocus",
  "onBlur",
  "onPointerDown",
  "onPointerEnter",
  "onMouseMove",
  "onClick",
] as const;
export type ButtonEventPropName = (typeof ButtonEventPropNames)[number];

type ButtonCommonProp = "id" | "children" | ButtonEventPropName;

export type AbstractButtonProps = Pick<HTMLElementProps<"button">, ButtonCommonProp> & {
  readonly type?: "submit" | "button";
  readonly disabled?: boolean;
};

export type AbstractDivProps = Pick<HTMLElementProps<"div">, ButtonCommonProp>;

export type AbstractAnchorProps = Pick<HTMLElementProps<"a">, ButtonCommonProp> & {
  readonly href: UrlObject | string;
  readonly target?: string;
  readonly rel?: string;
};

export type PolymorphicAbstractButtonProps<E extends ButtonElement> = E extends ButtonElement
  ? {
      button: AbstractButtonProps;
      a: AbstractAnchorProps;
      div: AbstractDivProps;
    }[E]
  : never;

export type ButtonComponentProps<E extends ButtonElement> = PolymorphicAbstractButtonProps<E> & {
  readonly className?: string;
  readonly style?: React.CSSProperties;
  readonly ref?: PolymorphicButtonRef<E>;
};

export type ButtonComponent<
  E extends ButtonElement,
  P extends ButtonComponentProps<E>,
> = React.ComponentType<P>;

export type PolymorphicButtonElement<E extends ButtonElement> = {
  a: HTMLAnchorElement;
  button: HTMLButtonElement;
  div: HTMLDivElement;
}[E];

export type PolymorphicButtonRef<E extends ButtonElement> = {
  a: ForwardedRef<HTMLAnchorElement>;
  button: ForwardedRef<HTMLButtonElement>;
  div: ForwardedRef<HTMLDivElement>;
}[E];

export type ButtonIconProp<
  T extends IconProp | IconName | JSX.Element = IconProp | IconName | JSX.Element,
> = T | { left?: T; right: T };

export const parseButtonIcon = <T extends IconProp | IconName | JSX.Element>(
  prop: ButtonIconProp<T>,
  location: "left" | "right",
): T | null => {
  if (typeof prop === "object" && prop !== null && (prop as { right: T }).right !== undefined) {
    return location === "left" ? (prop as { left?: T }).left || null : (prop as { right: T }).right;
  } else if (location === "left") {
    return prop as T;
  }
  return null;
};

export const parseButtonIcons = <T extends IconProp | IconName | JSX.Element>(
  prop: ButtonIconProp<T>,
): [T | null, T | null] => [parseButtonIcon(prop, "left"), parseButtonIcon(prop, "right")];

type IfNotIconButton<V, T extends ButtonType, R = never> = T extends
  | "button"
  | "link"
  | "inline-link"
  ? V
  : R;

type IfButtonOrLink<V, T extends ButtonType, R = never> = T extends "button" | "link" ? V : R;

type IfNotInlineLink<V, T extends ButtonType, R = never> = T extends
  | "button"
  | "link"
  | "icon-button"
  ? V
  : R;

export type AbstractInternalProps<
  T extends ButtonType,
  E extends ButtonElement,
  P extends ButtonComponentProps<E>,
> = ComponentProps & {
  readonly buttonType: T;
  readonly element?: E;
  readonly component?: ButtonComponent<E, P>;
  readonly scheme?: ButtonColorScheme;
  readonly variant?: ButtonVariant<T>;
  readonly fontFamily?: IfNotIconButton<TypographyCharacteristics["fontFamily"], T, never>;
  readonly fontWeight?: IfNotIconButton<TypographyCharacteristics["fontWeight"], T, never>;
  readonly transform?: IfNotIconButton<TypographyCharacteristics["transform"], T, never>;
  readonly fontSize?: ButtonFontSize<T>;
  /**
   * Sets the element in a "locked" state, which is a state in which the non-visual characteristics
   * of the "disabled" state will be used, but the element will not appear as if it is "disabled".
   *
   * In other words, the element will prevent click/interaction events, but it will appear as if
   * it is in a normal state.
   *
   * This prop should be used for cases where the click behavior of the element should be
   * restricted, but we do not want to treat the element, visually, as being disabled.  For
   * instance, if the element is in a "loading" state, we do not want it to look as if it is
   * disabled - but we do not want to allow click events.
   */
  readonly isLocked?: boolean;
  readonly isLoading?: IfNotInlineLink<boolean, T>;
  readonly isDisabled?: boolean;
  readonly isActive?: boolean;
  readonly size?: ButtonSize<T>;
  readonly disabledClassName?: ComponentProps["className"];
  readonly lockedClassName?: ComponentProps["className"];
  readonly loadingClassName?: ComponentProps["className"];
  readonly activeClassName?: ComponentProps["className"];
  readonly radius?: BorderRadius;
  readonly iconClassName?: IfButtonOrLink<ComponentProps["className"], T>;
  readonly spinnerClassName?: IfNotInlineLink<ComponentProps["className"], T>;
  readonly icon?: IfNotInlineLink<
    IfButtonOrLink<ButtonIconProp, T, IconName | IconProp | JSX.Element>,
    T
  >;
  readonly gap?: IfButtonOrLink<Size, T>;
  readonly iconSize?: IfNotInlineLink<ButtonIconSize, T>;
  readonly spinnerSize?: IfNotInlineLink<QuantitativeSize<"px">, T>;
  readonly loadingLocation?: IfButtonOrLink<ButtonLoadingLocation, T>;
};

export type AbstractProps<
  T extends ButtonType,
  E extends ButtonElement,
  P extends ButtonComponentProps<E>,
> = AbstractInternalProps<T, E, P> & Omit<PolymorphicAbstractButtonProps<E>, "disabled">;
