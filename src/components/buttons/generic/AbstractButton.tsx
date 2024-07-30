import url from "url";

import React, { forwardRef } from "react";

import { omit } from "lodash-es";

import type * as types from "~/components/buttons";
import { getButtonClassName, getButtonStyle } from "~/components/buttons/util";
import { type HTMLElementProps } from "~/components/types";

type InternalPropName = keyof types.AbstractInternalProps<
  types.ButtonType,
  types.ButtonElement,
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  any
>;

/* We use a map here for extra type safety, because it ensures that all of the internal props are
   accounted for in the map. */
const INTERNAL_BUTTON_PROPS = {
  className: true,
  style: true,
  size: true,
  icon: true,
  iconClassName: true,
  spinnerClassName: true,
  gap: true,
  spinnerSize: true,
  loadingLocation: true,
  component: true,
  element: true,
  variant: true,
  scheme: true,
  radius: true,
  isLocked: true,
  isActive: true,
  isDisabled: true,
  isLoading: true,
  iconSize: true,
  fontWeight: true,
  buttonType: true,
  fontSize: true,
  transform: true,
  fontFamily: true,
  lockedClassName: true,
  loadingClassName: true,
  activeClassName: true,
  disabledClassName: true,
} as const satisfies { [key in InternalPropName]: true };

const toNativeButtonProps = <
  T extends types.ButtonType,
  E extends types.ButtonElement,
  P extends types.ButtonComponentProps<E>,
>(
  props: types.AbstractProps<T, E, P>,
): types.PolymorphicAbstractButtonProps<E> => {
  const keys = Object.keys(INTERNAL_BUTTON_PROPS) as InternalPropName[];
  /* It is really annoying that we have to do the type coercion like this - but I cannot seem to
     find another way around it.  Something to look into in the future, but it is not a super
     risky coercion because of the type safety around the definition of 'INTERNAL_BUTTON_PROPS'. */
  return omit(props, keys) as unknown as types.PolymorphicAbstractButtonProps<E>;
};

const NativeButton = forwardRef<HTMLButtonElement, HTMLElementProps<"button">>((props, ref) => (
  <button {...props} ref={ref} />
));

const NativeAnchor = forwardRef<
  HTMLAnchorElement,
  Omit<HTMLElementProps<"a">, "href"> & { readonly href: url.UrlObject | string }
>(({ href, ...props }, ref) => (
  <a {...props} ref={ref} href={typeof href === "string" ? href : url.format(href)} />
));

const NativeDiv = forwardRef<HTMLDivElement, HTMLElementProps<"div">>((props, ref) => (
  <div {...props} ref={ref} />
));

export const AbstractButton = forwardRef(
  <
    T extends types.ButtonType,
    E extends types.ButtonElement,
    P extends types.ButtonComponentProps<E>,
  >(
    props: types.AbstractProps<T, E, P>,
    ref: types.PolymorphicButtonRef<E>,
  ): JSX.Element => {
    const className = getButtonClassName(props);
    const style = getButtonStyle(props);
    const nativeProps = toNativeButtonProps(props);

    switch (props.element) {
      case "a": {
        const Component =
          (props.component as
            | types.ButtonComponent<"a", types.ButtonComponentProps<"a">>
            | undefined) ?? NativeAnchor;
        return (
          <Component
            {...(nativeProps as types.ButtonComponentProps<"a">)}
            className={className}
            style={style}
            ref={ref as types.PolymorphicButtonRef<"a">}
          />
        );
      }
      case "div": {
        const Component =
          (props.component as
            | types.ButtonComponent<"div", types.ButtonComponentProps<"div">>
            | undefined) ?? NativeDiv;
        return (
          <Component
            {...(nativeProps as types.ButtonComponentProps<"div">)}
            className={className}
            style={style}
            ref={ref as types.PolymorphicButtonRef<"div">}
          />
        );
      }
      default: {
        const Component =
          (props.component as
            | types.ButtonComponent<"button", types.ButtonComponentProps<"button">>
            | undefined) ?? NativeButton;
        return (
          <Component
            type="button"
            {...(nativeProps as types.ButtonComponentProps<"button">)}
            className={className}
            disabled={props.isDisabled}
            style={style}
            ref={ref as types.PolymorphicButtonRef<"button">}
          />
        );
      }
    }
  },
) as {
  <
    T extends types.ButtonType,
    E extends types.ButtonElement,
    P extends types.ButtonComponentProps<E>,
  >(
    props: types.AbstractProps<T, E, P> & { readonly ref?: types.PolymorphicButtonRef<E> },
  ): JSX.Element;
};
