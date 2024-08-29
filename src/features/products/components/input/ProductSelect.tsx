import { forwardRef, type ForwardedRef, useState } from "react";

import { type ApiProduct } from "~/database/model";
import { logger } from "~/internal/logger";

import { type HttpNetworkError, type HttpSerializationError } from "~/integrations/http";

import type { ProductsControls } from "~/actions";

import type { SelectBehaviorType, SelectInstance } from "~/components/input/select";
import { DataSelect, type DataSelectProps } from "~/components/input/select/DataSelect";
import { useProducts } from "~/hooks/api/use-products";

import { type ApiClientError } from "~/api";

const getItemValue = (m: ApiProduct<[]>) => m.id;

export interface ProductSelectProps<B extends SelectBehaviorType>
  extends Omit<
    DataSelectProps<ApiProduct<[]>, { behavior: B; getItemValue: typeof getItemValue }>,
    "options" | "data" | "itemIsDisabled"
  > {
  readonly behavior: B;
  readonly filters?: Omit<Partial<ProductsControls["filters"]>, "search">;
  readonly ordering?: ProductsControls["ordering"];
  readonly onError?: (e: ApiClientError | HttpNetworkError | HttpSerializationError) => void;
}

export const ProductSelect = forwardRef<SelectInstance, ProductSelectProps<SelectBehaviorType>>(
  <B extends SelectBehaviorType>(
    {
      behavior,
      filters,
      ordering = { orderBy: "name", order: "asc" },
      onError,
      ...props
    }: ProductSelectProps<B>,
    ref: ForwardedRef<SelectInstance>,
  ): JSX.Element => {
    const [search, setSearch] = useState<string>("");

    const {
      data: products,
      isLoading,
      error,
    } = useProducts({
      query: { ...ordering, ...filters, search, limit: 20 },
      onError: e => {
        logger.error(e, "There was an error loading the products via the API.", {
          ordering,
          filters,
        });
        onError?.(e);
      },
    });
    return (
      <DataSelect<ApiProduct<[]>, { behavior: B; getItemValue: typeof getItemValue }>
        {...props}
        ref={ref}
        search={search}
        onSearch={e => setSearch(e.target.value)}
        data={products ?? []}
        isReady={products !== undefined}
        isDisabled={error !== undefined}
        isLocked={isLoading}
        isLoading={isLoading}
        options={{ behavior, getItemValue }}
        getItemValueLabel={m => m.name}
        itemRenderer={m => m.name}
      />
    );
  },
) as {
  <B extends SelectBehaviorType>(
    props: ProductSelectProps<B> & { readonly ref?: ForwardedRef<SelectInstance> },
  ): JSX.Element;
};
