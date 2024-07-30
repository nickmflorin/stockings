import { forwardRef } from "react";

import { capitalize } from "~/lib/formatters";

import * as types from "~/components/buttons/types";

import { AbstractButton } from "./AbstractButton";

export type InlineLinkProps<
  E extends types.ButtonElement,
  P extends types.ButtonComponentProps<E> = types.ButtonComponentProps<E>,
> = Omit<types.AbstractProps<"inline-link", E, P>, "buttonType">;

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
const Base = AbstractButton as React.FC<types.AbstractProps<"inline-link", any, any>>;

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
const LocalInlineLink = forwardRef<types.PolymorphicButtonElement<any>, InlineLinkProps<any, any>>(
  <E extends types.ButtonElement, P extends types.ButtonComponentProps<E>>(
    { children, ...props }: InlineLinkProps<E, P>,
    ref: types.PolymorphicButtonRef<E>,
  ) => {
    const ps = { ...props, buttonType: "inline-link", ref } as types.AbstractProps<
      "inline-link",
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
      any,
      P
    > & {
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
      readonly ref?: types.PolymorphicButtonRef<any>;
    };
    return <Base {...ps}>{children}</Base>;
  },
) as {
  <E extends types.ButtonElement, P extends types.ButtonComponentProps<E>>(
    props: InlineLinkProps<E, P> & { readonly ref?: types.PolymorphicButtonRef<E> },
  ): JSX.Element;
};

type ColorSchemePartial = {
  <E extends types.ButtonElement, P extends types.ButtonComponentProps<E>>(
    props: Omit<InlineLinkProps<E, P>, "scheme"> & { readonly ref?: types.PolymorphicButtonRef<E> },
  ): JSX.Element;
};

type WithColorSchemes = { [key in Capitalize<types.ButtonColorScheme>]: ColorSchemePartial };

const withColorSchemes = types.ButtonColorSchemes.values.reduce<WithColorSchemes>(
  (acc, scheme) => ({
    ...acc,
    [capitalize(scheme)]: forwardRef(
      <E extends types.ButtonElement, P extends types.ButtonComponentProps<E>>(
        props: Omit<InlineLinkProps<E, P>, "scheme">,
        ref: types.PolymorphicButtonRef<E>,
      ) => <LocalInlineLink<E, P> {...({ ...props, scheme } as InlineLinkProps<E, P>)} ref={ref} />,
    ),
  }),
  {} as WithColorSchemes,
);

export const InlineLink = Object.assign(LocalInlineLink, withColorSchemes);

export type InlineLinkComponent = typeof LocalInlineLink & WithColorSchemes;

export default InlineLink;
