"use client";
import { useState } from "react";

import { Button } from "~/components/buttons";
import { classNames, type ComponentProps } from "~/components/types";

export type SegmentedControlModel<V extends string = string> = {
  readonly value: V;
  readonly label: string;
};

export interface SegmentedControlProps<V extends string = string> extends ComponentProps {
  readonly data: SegmentedControlModel<V>[];
  readonly initialValue?: V;
  readonly value?: V;
  readonly onChange?: (v: V) => void;
}

export const SegmentedControl = <V extends string>({
  data,
  value: propValue,
  initialValue,
  onChange,
  ...props
}: SegmentedControlProps<V>): JSX.Element => {
  const [_value, setValue] = useState<V | null>(initialValue ?? null);
  const value = propValue ?? _value;

  return (
    <div {...props} className={classNames("segmented-control", props.className)}>
      {data.map(({ value: v, label }) => (
        <Button.Solid
          key={v}
          scheme="secondary"
          className="segmented-control__button"
          isActive={v === value}
          onClick={() => {
            setValue(v);
            onChange?.(v);
          }}
        >
          {label}
        </Button.Solid>
      ))}
    </div>
  );
};
