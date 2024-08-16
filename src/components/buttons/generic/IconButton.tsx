import { forwardRef, type ReactNode } from "react";

import { capitalize } from "~/lib/formatters";

import * as types from "~/components/buttons";
import { toIconSize } from "~/components/buttons/util";
import { isIconProp } from "~/components/icons";
import { Icon } from "~/components/icons/Icon";
import Spinner from "~/components/icons/Spinner";
import {
  classNames,
  type ClassName,
  sizeToString,
  type QuantitativeSize,
} from "~/components/types";

import { AbstractButton } from "./AbstractButton";

export type IconButtonProps<
  E extends types.ButtonElement,
  P extends types.ButtonComponentProps<E> = types.ButtonComponentProps<E>,
> = Omit<types.AbstractProps<"icon-button", E, P>, "buttonType"> & {
  readonly tight?: boolean;
};

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
const Base = AbstractButton as React.FC<types.AbstractProps<"icon-button", any, any>>;

interface WithLoadingProps {
  readonly children: ReactNode;
  readonly isLoading?: boolean;
  readonly iconSize?: types.ButtonIconSize;
  readonly spinnerSize?: QuantitativeSize<"px">;
  readonly spinnerClassName?: ClassName;
  readonly iconClassName?: ClassName;
}

const WithLoading = ({
  children,
  isLoading,
  spinnerSize,
  iconSize,
  iconClassName,
  spinnerClassName,
}: WithLoadingProps): JSX.Element => {
  if (isLoading) {
    return (
      <Spinner
        className={classNames(iconClassName, spinnerClassName)}
        isLoading
        size={spinnerSize ?? toIconSize(iconSize)}
      />
    );
  }
  return <>{children}</>;
};

const LocalIconButton = forwardRef(
  <E extends types.ButtonElement, P extends types.ButtonComponentProps<E>>(
    {
      children,
      icon,
      iconClassName,
      spinnerSize,
      spinnerClassName,
      tight = false,
      ...props
    }: IconButtonProps<E, P>,
    ref: types.PolymorphicButtonRef<E>,
  ) => {
    const ps = { ...props, buttonType: "icon-button", ref } as types.AbstractProps<
      "icon-button",
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
      any,
      P
    > & {
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
      readonly ref?: types.PolymorphicButtonRef<any>;
    };
    return (
      <Base {...ps} className={classNames({ "button--tight": tight }, ps.className)}>
        <div className="button__content">
          {children ? (
            <WithLoading
              isLoading={props.isLoading}
              iconSize={props.iconSize}
              spinnerSize={spinnerSize}
              iconClassName={iconClassName}
              spinnerClassName={spinnerClassName}
            >
              {children}
            </WithLoading>
          ) : isIconProp(icon) || typeof icon === "string" ? (
            <Icon
              className={iconClassName}
              loadingClassName={spinnerClassName}
              icon={icon}
              isLoading={props.isLoading}
              fit="square"
              dimension="height"
              spinnerSize={spinnerSize}
              size={
                props.iconSize !== undefined &&
                !types.ButtonDiscreteIconSizes.contains(props.iconSize)
                  ? sizeToString(props.iconSize, "px")
                  : undefined
              }
            />
          ) : (
            <WithLoading
              isLoading={props.isLoading}
              iconSize={props.iconSize}
              iconClassName={iconClassName}
              spinnerSize={spinnerSize}
              spinnerClassName={spinnerClassName}
            >
              {icon}
            </WithLoading>
          )}
        </div>
      </Base>
    );
  },
) as {
  <E extends types.ButtonElement, P extends types.ButtonComponentProps<E>>(
    props: IconButtonProps<E, P> & { readonly ref?: types.PolymorphicButtonRef<E> },
  ): JSX.Element;
};

type VariantPartial = {
  <E extends types.ButtonElement, P extends types.ButtonComponentProps<E>>(
    props: Omit<IconButtonProps<E, P>, "variant"> & {
      readonly ref?: types.PolymorphicButtonRef<E>;
    },
  ): JSX.Element;
};

type WithVariants = { [key in Capitalize<types.ButtonVariant<"icon-button">>]: VariantPartial };

const withVariants = types.ButtonVariants["icon-button"].values.reduce<WithVariants>(
  (acc, variant) => ({
    ...acc,
    [capitalize(variant)]: forwardRef(
      <E extends types.ButtonElement, P extends types.ButtonComponentProps<E>>(
        props: Omit<IconButtonProps<E, P>, "variant">,
        ref: types.PolymorphicButtonRef<E>,
      ) => (
        <LocalIconButton<E, P> {...({ ...props, variant } as IconButtonProps<E, P>)} ref={ref} />
      ),
    ),
  }),
  {} as WithVariants,
);

export const IconButton = Object.assign(LocalIconButton, withVariants);
