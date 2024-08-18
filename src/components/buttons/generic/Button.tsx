import { forwardRef } from "react";

import { capitalize } from "~/lib/formatters";

import * as types from "~/components/buttons";

import { AbstractButton } from "./AbstractButton";
import { ButtonContent } from "./ButtonContent";

export type ButtonProps<
  E extends types.ButtonElement,
  P extends types.ButtonComponentProps<E> = types.ButtonComponentProps<E>,
> = Omit<types.AbstractProps<"button", E, P>, "buttonType">;

type LocalButtonType = {
  <E extends types.ButtonElement, P extends types.ButtonComponentProps<E>>(
    props: ButtonProps<E, P> & { readonly ref?: types.PolymorphicButtonRef<E> },
  ): JSX.Element;
};

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
const Base = AbstractButton as React.FC<types.AbstractProps<"button", any, any>>;

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
const LocalButton = forwardRef<types.PolymorphicButtonElement<any>, ButtonProps<any, any>>(
  <E extends types.ButtonElement, P extends types.ButtonComponentProps<E>>(
    { icon, loadingLocation, gap, iconClassName, spinnerSize, ...props }: ButtonProps<E, P>,
    ref: types.PolymorphicButtonRef<E>,
  ): JSX.Element => {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    const ps = { ...props, buttonType: "button", ref } as types.AbstractProps<"button", any, P> & {
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
      readonly ref?: types.PolymorphicButtonRef<any>;
    };
    return (
      <Base {...ps}>
        <ButtonContent
          isLoading={props.isLoading}
          iconSize={props.iconSize}
          iconClassName={iconClassName}
          spinnerSize={spinnerSize}
          gap={gap}
          icon={icon}
          loadingLocation={loadingLocation}
        >
          {props.children}
        </ButtonContent>
      </Base>
    );
  },
) as LocalButtonType;

type VariantPartial = {
  <E extends types.ButtonElement, P extends types.ButtonComponentProps<E>>(
    props: Omit<ButtonProps<E, P>, "variant"> & { readonly ref?: types.PolymorphicButtonRef<E> },
  ): JSX.Element;
};

type WithVariants = { [key in Capitalize<types.ButtonVariant<"button">>]: VariantPartial };

const withVariants = types.ButtonVariants.button.members.reduce<WithVariants>(
  (acc, variant) => ({
    ...acc,
    [capitalize(variant)]: forwardRef<
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
      types.PolymorphicButtonElement<any>,
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
      Omit<ButtonProps<any, any>, "variant">
    >(
      <E extends types.ButtonElement, P extends types.ButtonComponentProps<E>>(
        props: Omit<ButtonProps<E, P>, "variant">,
        ref: types.PolymorphicButtonRef<E>,
      ) => <LocalButton<E, P> {...({ ...props, variant } as ButtonProps<E, P>)} ref={ref} />,
    ) as VariantPartial,
  }),
  {} as WithVariants,
);

export const Button = Object.assign(LocalButton, withVariants) as LocalButtonType & WithVariants;
