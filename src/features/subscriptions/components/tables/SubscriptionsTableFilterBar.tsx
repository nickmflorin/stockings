"use client";
import { useRef } from "react";

import { type SubscriptionType } from "~/database/model";

import { IconButton } from "~/components/buttons";
import type { SelectInstance } from "~/components/input/select";
import { TextInput } from "~/components/input/TextInput";
import type { ComponentProps } from "~/components/types";
import { classNames } from "~/components/types";
/* eslint-disable-next-line max-len */
import { SubscriptionTypeSelect } from "~/features/subscriptions/components/input/SubscriptionTypeSelect";
import {
  SubscriptionsTableFiltersOptions,
  SubscriptionsTableFiltersSchemas,
} from "~/features/subscriptions/types";
import { useDebounceCallback } from "~/hooks";
import { useFilters } from "~/hooks/use-filters";

export interface SubscriptionsTableFilterBarProps extends ComponentProps {}

export const SubscriptionsTableFilterBar = (
  props: SubscriptionsTableFilterBarProps,
): JSX.Element => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const typeSelectRef = useRef<SelectInstance | null>(null);

  const onSearch = useDebounceCallback((search: string) => {
    updateFilters({ search });
  }, 0);

  const [filters, updateFilters] = useFilters({
    schemas: SubscriptionsTableFiltersSchemas,
    options: SubscriptionsTableFiltersOptions,
  });

  return (
    <div className={classNames("flex flex-row items-center gap-2", props.className)}>
      <TextInput
        ref={inputRef}
        defaultValue={filters.search}
        onChange={e => onSearch(e.target.value)}
        placeholder="Search for subscriptions"
        className="grow"
        onClear={() => {
          if (inputRef.current) {
            inputRef.current.value = "";
          }
          updateFilters({ search: "" });
        }}
      />
      <SubscriptionTypeSelect
        ref={typeSelectRef}
        dynamicHeight={false}
        placeholder="Types"
        behavior="multi"
        inputClassName="max-w-[320px]"
        initialValue={filters.types}
        onChange={(types: SubscriptionType[]) => updateFilters({ types })}
        onClear={() => updateFilters({ types: [] })}
      />
      <IconButton.Transparent
        icon="xmark"
        radius="full"
        element="button"
        className="text-gray-400 h-full aspect-square w-auto p-[4px] hover:text-gray-500"
        onClick={() => {
          for (const r of [typeSelectRef]) {
            r.current?.clear();
          }
          if (inputRef.current) {
            inputRef.current.value = "";
          }
          updateFilters({ search: "", types: [] });
        }}
      />
    </div>
  );
};
