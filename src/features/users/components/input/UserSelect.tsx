import { forwardRef, type ForwardedRef, useState } from "react";

import { type ApiUser } from "~/database/model";
import { logger } from "~/internal/logger";

import { type HttpNetworkError, type HttpSerializationError } from "~/integrations/http";

import { UsersDefaultOrdering, type UsersControls } from "~/actions";

import type { SelectBehaviorType, DataSelectInstance } from "~/components/input/select";
import { DataSelect, type DataSelectProps } from "~/components/input/select/DataSelect";
import { useUsers } from "~/hooks/api";

import { type ApiClientError } from "~/api";

const getItemValue = (m: ApiUser<[]>) => m.id;

export interface UserSelectProps<B extends SelectBehaviorType>
  extends Omit<
    DataSelectProps<ApiUser<[]>, { behavior: B; getItemValue: typeof getItemValue }>,
    "options" | "data" | "itemIsDisabled"
  > {
  readonly behavior: B;
  readonly ordering?: UsersControls["ordering"];
  readonly onError?: (e: ApiClientError | HttpNetworkError | HttpSerializationError) => void;
}

export const UserSelect = forwardRef(
  <B extends SelectBehaviorType>(
    { behavior, ordering = UsersDefaultOrdering, onError, ...props }: UserSelectProps<B>,
    ref: ForwardedRef<
      DataSelectInstance<ApiUser<[]>, { behavior: B; getItemValue: typeof getItemValue }>
    >,
  ): JSX.Element => {
    const [search, setSearch] = useState<string>("");

    const {
      data: products,
      isLoading,
      error,
    } = useUsers({
      query: { ...ordering, search, limit: 20 },
      onError: e => {
        logger.error(e, "There was an error loading the users via the API.", {
          ordering,
          search,
        });
        onError?.(e);
      },
    });

    return (
      <DataSelect<ApiUser<[]>, { behavior: B; getItemValue: typeof getItemValue }>
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
        getItemValueLabel={m =>
          m.firstName.length !== 0 ? `${m.firstName[0]}. ${m.lastName}` : m.lastName
        }
        itemRenderer={m =>
          m.firstName.length !== 0 ? `${m.firstName[0]}. ${m.lastName}` : m.lastName
        }
      />
    );
  },
) as {
  <B extends SelectBehaviorType>(
    props: UserSelectProps<B> & {
      readonly ref?: ForwardedRef<
        DataSelectInstance<ApiUser<[]>, { behavior: B; getItemValue: typeof getItemValue }>
      >;
    },
  ): JSX.Element;
};
