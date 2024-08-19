import { type ReactNode } from "react";

import { Loading } from "~/components/loading/Loading";
import { type ComponentProps, classNames } from "~/components/types";

const BooleanToTruthyFlag = (v: boolean | undefined): true | undefined => v === false ? undefined : v

export interface FormBodyProps extends ComponentProps {
  readonly contentClassName?: ComponentProps["className"];
  readonly isLoading?: boolean;
  readonly isDisabled?: boolean;
  readonly isScrollable?: boolean;
  readonly children?: ReactNode;
}

export const FormBody = ({
  isLoading = false,
  isScrollable = true,
  contentClassName,
  isDisabled,
  children,
  ...props
}: FormBodyProps) => (
  <div
    {...props}
    className={classNames(
      "flex flex-col grow relative",
      { "overflow-y-auto pr-[18px]": isScrollable },
      props.className,
    )}
  >
    <Loading isLoading={isLoading} isDisabled={BooleanToTruthyFlag(isDisabled)} dim={BooleanToTruthyFlag(isLoading || isDisabled)}>
      <div className={classNames("flex flex-col gap-[8px]", contentClassName)}>{children}</div>
    </Loading>
  </div>
);
