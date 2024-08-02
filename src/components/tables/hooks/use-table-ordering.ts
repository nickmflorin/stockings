import { useState, useCallback, useMemo } from "react";

import { UnreachableCaseError } from "~/application/errors";

import type * as types from "~/components/tables/types";

const DEFAULT_ORDER = "asc";

export interface UseTableOrderingConfig<I extends string> {
  readonly defaultOrder?: types.TableOrder;
  readonly initialField?: I;
  readonly clearOrderingOnCycleComplete?: boolean;
  readonly initialOrder?: types.TableOrder;
}

const getOrderCycle = (defaultOrder: types.TableOrder): [types.TableOrder, types.TableOrder] =>
  defaultOrder === "asc" ? ["asc", "desc"] : ["desc", "asc"];

type UpdateOrderParams<I extends string> =
  | {
      readonly field: I;
      readonly order?: never;
      readonly defaultOrder?: types.TableOrder;
    }
  | {
      readonly field?: never;
      readonly order: types.TableOrder | null;
      readonly defaultOrder?: types.TableOrder;
    }
  | {
      readonly field: I;
      readonly order: types.TableOrder | null;
      readonly defaultOrder?: types.TableOrder;
    };

export const useTableOrdering = <I extends string>(config?: UseTableOrderingConfig<I>) => {
  const {
    defaultOrder = DEFAULT_ORDER,
    initialField,
    initialOrder = DEFAULT_ORDER,
    clearOrderingOnCycleComplete = false,
  } = useMemo(() => config ?? {}, [config]);

  const [ordering, setOrdering] = useState<types.TableOrdering<I> | null>(
    initialField ? { field: initialField, order: initialOrder } : null,
  );

  const updateOrdering = useCallback(
    (
      ording: types.TableOrdering<I> | null,
      { field, order, defaultOrder: _defaultOrder }: UpdateOrderParams<I>,
    ): types.TableOrdering<I> | null => {
      if (ording === null) {
        if (field) {
          return { field, order: order ?? _defaultOrder ?? defaultOrder };
        }
        /* Here, we cannot update the ordering without a field because there is no existing field
           in the existing order in state. */
        return ording;
      } else if (field && order) {
        return { field, order };
      } else if (field) {
        if (field === ording.field) {
          const cycle = getOrderCycle(defaultOrder);
          if (ording.order === cycle[0]) {
            return { ...ording, order: cycle[1] };
          } else if (clearOrderingOnCycleComplete) {
            return null;
          }
          return { ...ording, order: cycle[0] };
        }
        return { field, order: _defaultOrder ?? defaultOrder };
      } else if (order) {
        return { ...ording, order };
      }
      throw new UnreachableCaseError();
    },
    [defaultOrder, clearOrderingOnCycleComplete],
  );

  const updateOrderingInState = useCallback(
    (params: UpdateOrderParams<I>) => {
      setOrdering(curr => updateOrdering(curr, params));
    },
    [updateOrdering],
  );

  return [ordering, updateOrderingInState, updateOrdering] as const;
};
