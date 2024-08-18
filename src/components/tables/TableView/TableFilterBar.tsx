"use client";
import { type ReactNode, useRef } from "react";

import { IconButton } from "~/components/buttons";
import { TextInput } from "~/components/input/TextInput";
import type { ComponentProps } from "~/components/types";
import { classNames } from "~/components/types";
import { useDebounceCallback } from "~/hooks";

export interface TableFilterBarProps extends ComponentProps {
  readonly children?: ReactNode;
  readonly isSearchable?: boolean;
  readonly searchPlaceholder?: string;
  readonly searchDebounceInterval?: number;
  readonly search?: string;
  readonly onSearch?: (search: string) => void;
  readonly onClear?: () => void;
}

export const TableFilterBar = ({
  children,
  isSearchable = true,
  searchPlaceholder = "Search...",
  searchDebounceInterval = 0,
  search = "",
  onSearch: _onSearch,
  onClear,
  ...props
}: TableFilterBarProps): JSX.Element => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onSearch = useDebounceCallback((search: string) => {
    _onSearch?.(search);
  }, searchDebounceInterval);

  return (
    <div {...props} className={classNames("flex flex-row items-center gap-2", props.className)}>
      {isSearchable && (
        <TextInput
          ref={inputRef}
          defaultValue={search}
          onChange={e => onSearch(e.target.value)}
          placeholder={searchPlaceholder}
          className="grow"
          onClear={() => {
            if (inputRef.current) {
              inputRef.current.value = "";
            }
            _onSearch?.("");
          }}
        />
      )}
      {children}
      <IconButton.Transparent
        icon="xmark"
        radius="full"
        element="button"
        className="text-gray-400 h-full aspect-square w-auto p-[4px] hover:text-gray-500"
        onClick={() => {
          if (inputRef.current) {
            inputRef.current.value = "";
          }
          onClear?.();
        }}
      />
    </div>
  );
};
