import { forwardRef } from "react";

import { capitalize } from "~/lib/formatters";

import * as types from "~/components/buttons";

import { AbstractButton } from "./AbstractButton";
import { ButtonContent } from "./ButtonContent";

export type LinkProps<
  E extends types.ButtonElement,
  P extends types.ButtonComponentProps<E> = types.ButtonComponentProps<E>,
> = Omit<types.AbstractProps<"link", E, P>, "buttonType">;

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
const Base = AbstractButton as React.FC<types.AbstractProps<"link", any, any>>;

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
const LocalLink = forwardRef<types.PolymorphicButtonElement<any>, LinkProps<any, any>>(
  <E extends types.ButtonElement, P extends types.ButtonComponentProps<E>>(
    { children, icon, gap, iconClassName, loadingLocation, ...props }: LinkProps<E, P>,
    ref: types.PolymorphicButtonRef<E>,
  ) => {
    const ps = { ...props, buttonType: "link", ref } as types.AbstractProps<
      "link",
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
      any,
      P
    > & {
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
      readonly ref?: types.PolymorphicButtonRef<any>;
    };
    return (
      <Base {...ps}>
        <ButtonContent
          gap={gap}
          iconSize={props.iconSize}
          iconClassName={iconClassName}
          isLoading={props.isLoading}
          icon={icon}
          loadingLocation={loadingLocation}
        >
          {children}
        </ButtonContent>
      </Base>
    );
  },
) as {
  <E extends types.ButtonElement, P extends types.ButtonComponentProps<E>>(
    props: LinkProps<E, P> & { readonly ref?: types.PolymorphicButtonRef<E> },
  ): JSX.Element;
};

type ColorSchemePartial = {
  <E extends types.ButtonElement, P extends types.ButtonComponentProps<E>>(
    props: Omit<LinkProps<E, P>, "scheme"> & { readonly ref?: types.PolymorphicButtonRef<E> },
  ): JSX.Element;
};

type WithColorSchemes = { [key in Capitalize<types.ButtonColorScheme>]: ColorSchemePartial };

const withColorSchemes = types.ButtonColorSchemes.values.reduce<WithColorSchemes>(
  (acc, scheme) => ({
    ...acc,
    [capitalize(scheme)]: forwardRef(
      <E extends types.ButtonElement, P extends types.ButtonComponentProps<E>>(
        props: Omit<LinkProps<E, P>, "scheme">,
        ref: types.PolymorphicButtonRef<E>,
      ) => <LocalLink<E, P> {...({ ...props, scheme } as LinkProps<E, P>)} ref={ref} />,
    ),
  }),
  {} as WithColorSchemes,
);

export const Link = Object.assign(LocalLink, withColorSchemes);

export type LinkComponent = typeof LocalLink & WithColorSchemes;

export default Link;
