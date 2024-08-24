import Image from "next/image";
import { forwardRef } from "react";

import { pick } from "lodash-es";

import { type IconProps, isSvgIconProp } from "~/components/icons";
import { classNames } from "~/components/types";

import { Spinner } from "../Spinner";

import { NativeIcon } from "./NativeIcon";
import { getIconClassName, getInternalIconClassName, getNativeIconStyle } from "./util";

/**
 * Renders an icon element, <i>, with the appropriate class name, style and data-attributes.
 *
 * The icon can either be a Font Awesome icon (provided as either the 'icon' {@link IconProp} prop
 * or the 'name', {@link IconName}, 'family', {@link IconFamily}, and 'style', {@link IconStyle}
 * props), or a more general SVG component - provided as a child to the component.
 *
 * When the icon being rendered is a Font Awesome icon, the class names attributed to the <i>
 * element will allow the FontAwesome package to nest an <svg> element corresponding to the
 * appropriate Font Awesome icon inside of the <i> element.
 */
export const Icon = forwardRef<HTMLElement, IconProps>(
  (
    {
      icon,
      children,
      isLoading,
      style,
      iconStyle,
      loadingClassName,
      spinnerSize,
      family,
      ...props
    },
    ref,
  ): JSX.Element => {
    if (isLoading) {
      /* If the Icon is in a loading state, render the <Spinner /> animated SVG component with the
         exact same size as the <Icon /> component. */
      return (
        <Spinner
          isLoading
          {...pick(props, ["className", "style"])}
          size={spinnerSize ?? props.size}
          style={style}
          className={classNames(props.className, loadingClassName)}
        />
      );
    } else if (icon !== undefined) {
      if (isSvgIconProp(icon)) {
        return (
          <Image
            className={classNames("icon", props.className)}
            style={{ ...style, ...getNativeIconStyle(props) }}
            src={icon}
            height={typeof props.size === "number" ? props.size : 16}
            width={typeof props.size === "number" ? props.size : 16}
            alt="Icon"
          />
        );
      }
      const ic =
        typeof icon === "string"
          ? { name: icon, iconStyle, family }
          : { iconStyle, family, ...icon };
      return (
        <NativeIcon
          {...props}
          ref={ref}
          style={style}
          className={getIconClassName({
            ...props,
            icon: ic,
          })}
        />
      );
    }
    // Here, the icon is an internal SVG component that is provided via the 'children' prop.
    return (
      <NativeIcon {...props} ref={ref} style={style} className={getInternalIconClassName(props)}>
        {children}
      </NativeIcon>
    );
  },
);

export default Icon;
