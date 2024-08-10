import { useEffect, useRef } from "react";

import { ProductStatus, productStatusesAreAny } from "~/database/model";

import { Checkbox } from "~/components/input/Checkbox";
import { SelectBehaviorTypes } from "~/components/input/select";
import { classNames, type ComponentProps } from "~/components/types";

import { ProductStatusSelect } from "./ProductStatusSelect";

export interface ProductTransitionStatusInputProps extends ComponentProps {
  readonly value: ProductStatus[];
  readonly disabledStatuses?: ProductStatus[];
  readonly inPortal?: boolean;
  readonly onChange: (value: ProductStatus[]) => void;
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
    if (!productStatusesAreAny(value)) {
      lastSelectedStatuses.current = value;
    }
  }, [value]);

  return (
    <div className={classNames("flex flex-row items-center gap-2", props.className)}>
      <Checkbox
        label="Any"
        value={productStatusesAreAny(value)}
        onChange={e => {
          if (e.target.checked) {
            onChange(Object.values(ProductStatus));
          } else {
            onChange(lastSelectedStatuses.current);
          }
        }}
      />
      <ProductStatusSelect
        inPortal={inPortal}
        behavior={SelectBehaviorTypes.MULTI}
        value={value}
        disabledStatuses={disabledStatuses}
        onChange={v => {
          if (!productStatusesAreAny(value)) {
            lastSelectedStatuses.current = v;
          }
          onChange(v);
        }}
      />
    </div>
  );
};
