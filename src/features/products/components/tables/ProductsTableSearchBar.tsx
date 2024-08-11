"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

import { useDebouncedCallback } from "use-debounce";

import { TextInput } from "~/components/input/TextInput";
import type { ComponentProps } from "~/components/types";
import { classNames } from "~/components/types";

export interface ProductsTableSearchBarProps extends ComponentProps {}

export const ProductsTableSearchBar = (props: ProductsTableSearchBarProps): JSX.Element => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const onSearch = useDebouncedCallback((search: string) => {
    const params = new URLSearchParams(searchParams);
    if (search) {
      params.set("search", search);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 200);

  return (
    <div className={classNames("flex flex-row items-center", props.className)}>
      <TextInput
        defaultValue={searchParams.get("search")?.toString() ?? ""}
        onChange={e => onSearch(e.target.value)}
        placeholder="Search"
      />
    </div>
  );
};
