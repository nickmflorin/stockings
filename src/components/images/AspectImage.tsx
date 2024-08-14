import Image, { type ImageProps } from "next/image";

import { type Required } from "utility-types";

import { UnreachableCaseError } from "~/application/errors";

import { classNames } from "~/components/types";
import {
  type ComponentProps,
  type QuantitativeSize,
  sizeToNumber,
  sizeToString,
} from "~/components/types";

export type AspectImageSize =
  | { width: QuantitativeSize<"px">; height?: never }
  | { height: QuantitativeSize<"px">; width?: never };

export type AspectRatio = { height: number; width: number };

export interface AspectImageProps
  extends ComponentProps,
    Required<Omit<ImageProps, "className" | "height" | "width" | "style">, "alt"> {
  readonly size?: AspectImageSize;
  readonly aspectRatio: AspectRatio;
}

const toAspectRatioSize = ({
  aspectRatio,
  size,
}: Pick<AspectImageProps, "aspectRatio" | "size">): { width: number; height: number } => {
  const ar = typeof aspectRatio === "number" ? aspectRatio : aspectRatio.height / aspectRatio.width;
  if (!size) {
    // If the size is not provided, it will default to the sizes defined on the aspect ratio.
    return aspectRatio;
  } else if (size.width) {
    return { width: sizeToNumber(size.width), height: sizeToNumber(size.width) * ar };
  } else if (size.height) {
    return { height: sizeToNumber(size.height), width: sizeToNumber(size.height) / ar };
  }
  throw new UnreachableCaseError("Invalid size provided!");
};

/**
 * An image component that maintains a specific aspect ratio, requiring that only one of the
 * dimensions be specified (instead of both).
 *
 * NextJS requires that both the 'width' and 'height' be provided for a given <Image />, so that
 * it can properly optimize the loading and rendering of the image.  In some cases, however, we
 * want to just adjust one dimension, and keep the aspect-ratio constant.
 */
export const AspectImage = ({ size, aspectRatio, ...props }: AspectImageProps): JSX.Element => {
  const { width, height } = toAspectRatioSize({ aspectRatio, size });
  return (
    /* eslint-disable-next-line jsx-a11y/alt-text -- The 'alt' prop is required, so this rule can be ignored. */
    <Image
      {...props}
      className={classNames(props.className)}
      priority
      width={width}
      height={height}
      style={{
        maxWidth: "unset",
        ...props.style,
        height: sizeToString(height, "px"),
        width: sizeToString(width, "px"),
      }}
    />
  );
};
