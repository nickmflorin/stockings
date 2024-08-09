import { useRef, useEffect } from "react";

import { type ProductStatus } from "~/database/model";

import { Checkbox } from "~/components/input/Checkbox";
import { SelectBehaviorTypes } from "~/components/input/select";
import { classNames, type ComponentProps } from "~/components/types";

import { ProductStatusSelect } from "./ProductStatusSelect";

type ProductTransitionStatusValue = {
  readonly statuses: ProductStatus[];
  readonly anyStatus: boolean;
};

type OnChangeValue =
  | { statuses: ProductStatus[]; anyStatus?: never }
  | { statuses?: never; anyStatus: true };

export interface ProductTransitionStatusInputProps extends ComponentProps {
  readonly value: ProductTransitionStatusValue;
  readonly disabledStatuses?: ProductStatus[];
  readonly inPortal?: boolean;
  readonly onChange: (value: OnChangeValue) => void;
}

export const ProductTransitionStatusInput = ({
  disabledStatuses,
  value,
  inPortal,
  onChange,
  ...props
}: ProductTransitionStatusInputProps): JSX.Element => {
  const lastSelectedStatuses = useRef<ProductStatus[]>([]);

  useEffect(() => {
    if (!value.anyStatus) {
      lastSelectedStatuses.current = value.statuses;
    }
  }, [value]);

  return (
    <div className={classNames("flex flex-row items-center gap-2", props.className)}>
      <Checkbox
        label="Any"
        value={value.anyStatus}
        onChange={e => {
          if (e.target.checked) {
            onChange({ anyStatus: true });
          } else {
            onChange({ statuses: lastSelectedStatuses.current });
          }
        }}
      />
      <ProductStatusSelect
        inPortal={inPortal}
        isDisabled={value.anyStatus}
        behavior={SelectBehaviorTypes.MULTI}
        value={value.statuses}
        disabledStatuses={disabledStatuses}
        onChange={v => {
          lastSelectedStatuses.current = v;
          onChange({ statuses: v });
        }}
      />
    </div>
  );
};
