import { useRef, useState, useEffect, useCallback } from "react";

import { isEqual, uniqBy } from "lodash-es";

import { UnreachableCaseError } from "~/application/errors";
import { logger } from "~/internal/logger";

import * as types from "~/components/input/select/types";

import { useSelectValue, type UseSelectValueParams } from "./use-select-value";

export interface UseSelectModelValueParams<
  M extends types.DataSelectModel,
  O extends types.DataSelectOptions<M>,
> extends Omit<
    UseSelectValueParams<types.InferredDataSelectV<M, O>, types.InferredDataSelectB<M, O>>,
    "onChange" | "behavior"
  > {
  readonly data: M[];
  readonly options: O;
  readonly isReady?: boolean;
  readonly onChange?: types.DataSelectChangeHandler<M, O>;
}

const getInitialModelValue = <
  M extends types.DataSelectModel,
  O extends types.DataSelectOptions<M>,
>({
  options,
  initialValue,
  isReady = true,
  __private_controlled_value__,
  getModel,
}: Pick<
  UseSelectModelValueParams<M, O>,
  "options" | "initialValue" | "__private_controlled_value__" | "isReady"
> & { readonly getModel: (v: types.InferredDataSelectV<M, O>) => M }):
  | types.DataSelectModelValue<M, O>
  | types.NotSet => {
  // Distribute/flatten the conditional type to a union of its potential values.
  const value = __private_controlled_value__ as
    | types.InferredDataSelectV<M, O>
    | null
    | types.InferredDataSelectV<M, O>[]
    | undefined;

  /* If the Select is not yet in a "ready" state, it means the data is still loading asynchronously.
     Since the value of the Select will be present before the asynchronously loaded data is, and
     we need the asynchronously loaded data to determine the model value, we have to consider the
     Select's model value as being in an "unset" or indeterminate state.  Once the data finishes
     asynchronously loading, the Select's model value can be determined. */
  if (!isReady) {
    return types.NOTSET;
  } else if (value === undefined) {
    // Distribute/flatten the conditional type to a union of its potential values.
    const initial = initialValue as
      | types.InferredDataSelectV<M, O>
      | null
      | types.InferredDataSelectV<M, O>[]
      | undefined;
    if (initial === undefined) {
      if (options.behavior === types.SelectBehaviorTypes.SINGLE_NULLABLE) {
        return null as types.DataSelectModelValue<M, O>;
      } else if (options.behavior === types.SelectBehaviorTypes.MULTI) {
        return [] as M[] as types.DataSelectModelValue<M, O>;
      }
      /* Note: This error will also likely be thrown in the 'use-select-value' hook that this
         hook wraps. */
      throw new Error(
        "For a single, non-nullable select with, the 'initialValue' prop must be defined!",
      );
    } else if (Array.isArray(initial)) {
      return initial.map(v => getModel(v)) as types.DataSelectModelValue<M, O>;
    } else if (initial !== null) {
      return getModel(initial) as types.DataSelectModelValue<M, O>;
    }
    return null as types.DataSelectModelValue<M, O>;
  } else if (Array.isArray(value)) {
    return value.map(v => getModel(v)) as types.DataSelectModelValue<M, O>;
  } else if (value !== null) {
    return getModel(value) as types.DataSelectModelValue<M, O>;
  }
  return null as types.DataSelectModelValue<M, O>;
};

const getModel = <M extends types.DataSelectModel, O extends types.DataSelectOptions<M>>(
  v: types.InferredDataSelectV<M, O>,
  { data, getItemValue }: { getItemValue: (m: M) => types.InferredDataSelectV<M, O>; data: M[] },
): M => {
  const ms = data.filter(m => isEqual(getItemValue(m), v));
  if (ms.length === 0) {
    throw new Error(
      `The value, '${v}', does not match any of the models in the data. ` +
        "Did you forget to set the 'isReady' flag to false, until the data has been loaded?",
    );
  } else if (ms.length > 1) {
    logger.error(
      `The value, '${v}', points to multiple models in the Select's data.  This is ` +
        "likely a bug, and will lead to unexpected behavior.",
      { v },
    );
  }
  return ms[0];
};

const reduceModelValue = <M extends types.DataSelectModel, O extends types.DataSelectOptions<M>>(
  curr: types.DataSelectModelValue<M, O> | types.NotSet,
  value: types.DataSelectValue<M, O>,
  {
    getItemValue,
    options,
    data,
  }: { getItemValue: (m: M) => types.InferredDataSelectV<M, O>; options: O; data: M[] },
): types.DataSelectModelValue<M, O> | types.NotSet => {
  // Distribute/flatten the conditional type to a union of its potential values.
  const selectValue = value as
    | types.InferredDataSelectV<M, O>
    | types.InferredDataSelectV<M, O>[]
    | null;

  // Distribute/flatten the conditional type to a union of its potential values.
  const existing = curr as M | M[] | types.NotSet | null;

  switch (options.behavior) {
    case types.SelectBehaviorTypes.MULTI: {
      if (!Array.isArray(selectValue)) {
        logger.error(
          "Corrupted State: Detected non-array state value for multi-select! " +
            "The select's behavior may be compromised.",
          { value: selectValue },
        );
        return curr;
      } else if (curr === types.NOTSET) {
        logger.error(
          "Corrupted State: Detected an unset model value for an initialized select!" +
            "The select's model value should be set if the select has been initialized.",
          { curr },
        );
        return curr;
      } else if (!Array.isArray(curr)) {
        logger.error(
          "Corrupted State: Detected non-array state model value for multi-select! " +
            "The select's behavior may be compromised.",
          { curr },
        );
        return curr;
      }
      /* Lookup the model in the combined set of models provided to the Select via the 'data'
         prop and the models corresponding to the previous Select's value that are already
         maintained in state.  This guarantees that the model can be found in the set in
         the case that the data provided to the Select is filtered.

         See the docstring on the hook for more information. */
      return selectValue.map(vi =>
        getModel(vi, { data: uniqBy([...data, ...curr], m => getItemValue(m)), getItemValue }),
      ) as types.DataSelectModelValue<M, O>;
    }
    case types.SelectBehaviorTypes.SINGLE: {
      if (Array.isArray(selectValue)) {
        logger.error(
          "Corrupted State: Detected an array state value for a single-select! " +
            "The select's behavior may be compromised.",
          { value: selectValue },
        );
        return curr;
      } else if (selectValue === null) {
        logger.error(
          "Corrupted State: Detected a null state value for a non-nullable single-select! " +
            "The select's behavior may be compromised.",
          { value: selectValue },
        );
        return curr;
      } else if (existing === types.NOTSET) {
        logger.error(
          "Corrupted State: Detected an unset model value for an initialized select!" +
            "The select's model value should be set if the select has been initialized.",
          { existing },
        );
        return curr;
      } else if (Array.isArray(existing)) {
        logger.error(
          "Corrupted State: Detected an array state model value for a single-select! " +
            "The select's behavior may be compromised.",
          { existing },
        );
        return curr;
      } else if (existing === null) {
        logger.error(
          "Corrupted State: Detected a null state model value for a non-nullable " +
            "single-select! The select's behavior may be compromised.",
          { existing },
        );
        return curr;
      }
      /* Lookup the model in the combined set of models provided to the Select via the 'data'
         prop and the models corresponding to the previous Select's value that are already
         maintained in state.  This guarantees that the model can be found in the set in
         the case that the data provided to the Select is filtered.

         See the docstring on the hook for more information. */
      return getModel(selectValue, {
        data: uniqBy([...data, existing], m => getItemValue(m)),
        getItemValue,
      }) as types.DataSelectModelValue<M, O>;
    }
    case types.SelectBehaviorTypes.SINGLE_NULLABLE: {
      if (Array.isArray(selectValue)) {
        logger.error(
          "Corrupted State: Detected an array state value for a single-select! " +
            "The select's behavior may be compromised.",
          { value: selectValue },
        );
        return curr;
      } else if (existing === types.NOTSET) {
        logger.error(
          "Corrupted State: Detected an unset model value for an initialized select!" +
            "The select's model value should be set if the select has been initialized.",
          { existing },
        );
        return curr;
      } else if (Array.isArray(existing)) {
        logger.error(
          "Corrupted State: Detected an array state model value for a single-select! " +
            "The select's behavior may be compromised.",
          { existing },
        );
        return curr;
      } else if (selectValue === null) {
        return null as types.DataSelectModelValue<M, O>;
      }
      /* Lookup the model in the combined set of models provided to the Select via the 'data'
         prop and the models corresponding to the previous Select's value that are already
         maintained in state.  This guarantees that the model can be found in the set in
         the case that the data provided to the Select is filtered.

         See the docstring on the hook for more information. */
      return getModel(selectValue, {
        data: existing ? uniqBy([...data, existing], m => getItemValue(m)) : data,
        getItemValue,
      }) as types.DataSelectModelValue<M, O>;
    }
    default:
      throw new UnreachableCaseError();
  }
};

/**
 * A hook that is responsible for maintaining both the value of a Select component and the data
 * models associated with that value, {@link types.DataSelectModel}, based on the behavior
 * of the Select, {@link SelectBehaviorType}, and the value-related props provided to the
 * Select.
 *
 * Background
 * ----------
 * Certain Select component(s) are built such that they can be provided with an array of data, or
 * models, each of which is associated with a value that is used to determine the overall value of
 * the Select when the menu items associated with those models are selected, deselected or cleared.
 *
 * The value of each model, or element in the array of data provided to the Select, can be defined
 * by either attributing the model with a `value` attribute or providing a `getItemValue` callback
 * prop to the Select.
 *
 * The overall value of the Select is managed by the `use-select-value` hook, which is responsible
 * for managing the value based on select, deselect and clear events.  However, it is also useful
 * to be aware of the model or models in the data that are associated with the Select's value, as
 * they can be included in callback props and other logic to streamline the Select's mechanics and
 * improve type-safety of the Select's usage.
 *
 * For example, in the following code snippet, when the Select's value changes, we not only have
 * access to the updated value of the Select but also the models (or data) that are associated with
 * the Select's value:
 *
 * >>> const bills = useBills();
 * >>>
 * >>> return (
 * >>>   <DataSelect
 * >>>     data={bills}
 * >>>     getItemValue={(b: Bill) => b.id}
 * >>>     onChange={(value, bills) => ...}
 * >>>   />
 * >>> )
 * />
 *
 * In order for the Select to be aware of the models in the data that are associated with its
 * current value, they have to be maintained in state in parallel to the Select's management of its
 * overall value in state (which is done by the 'use-select-value' hook).
 *
 * What about Asynchronously Loaded Data?
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * When the Select's data is loaded asynchronously, and the value of the Select is controlled
 * (i.e. the 'value' prop is provided to the Select), the value of the Select may be defined before
 * the data that the value corresponds to is loaded.  For instance, in the following snippet,
 * the value of the Select is known before the data that the value corresponds to is received from
 * the API:
 *
 * >>> const bills = useBills();
 * >>>
 * >>> return (
 * >>>   <DataSelect
 * >>      value={[1, 2, 4]}
 * >>>     data={bills}
 * >>>     getItemValue={(b: Bill) => b.id}
 * >>>     onChange={(value, bills) => ...}
 * >>>   />
 * >>> )
 * />
 *
 * This means that the Select cannot determine what model or models the value corresponds to,
 * because it needs to make that determination by comparing the value or values of the models in
 * the provided data with the value of the Select (which is provided as a prop).  If the data
 * is an empty array, and the Select tries to find the model(s) in the data that correspond to its
 * value, nothing will be found - and an {@link Error} will be thrown.
 *
 * In these cases, to avoid an {@link Error} being thrown, the Select should be provided with the
 * 'isReady' prop - that is initially 'false' but then set to 'true' once the applicable data
 * has been loaded.  This will force the Select to wait until the data is available before trying
 * to determine what model or models in the data are associated with the Select's value.  The
 * Select will be in a disabled state until the 'isReady' flag is set to 'true' - preventing
 * select, deselect and clear events from changing the Select's value when it does not have the data
 * it needs to keep the value in sync with the set of models in state that are associated with that
 * value.
 *
 * What About Filtering/Searching?
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * If the data that the Select's is displaying is filtered or searched before it is provided to
 * the Select, it is possible (and likely) that the models that are associated with the Select's
 * value are filtered out of the data.  This means that the Select will not be able to determine
 * what model or models in the data are associated with the Select's value if a select or deselect
 * event occurs and the Select's value is updated accordingly.
 *
 * To avoid this, when the Select's value changes due to a select and/or deselect event, the
 * Select will update it's model value in state by looking up the model or models in both the data
 * that is currently present AND the models that are already maintained in state that are associated
 * with the Select's value just before the change occurred.  This way, since a select or deselect
 * event can only occur for a model that is currently visible in the Select's content, it is
 * guaranteed that the model will - at least for that short period of time - be in the combined set
 * of the visible models and the models that are already maintained in state.
 *
 * This is also why the 'modelValue' of the Select is managed in state, and updated in response to
 * changes to the Select's value, rather than being derived from the Select's value directly in a
 * 'useMemo' hook.
 */
export const useSelectModelValue = <
  M extends types.DataSelectModel,
  O extends types.DataSelectOptions<M>,
>({
  data,
  options,
  isReady = true,
  onChange,
  onSelect,
  onDeselect,
  onClear,
  ...params
}: UseSelectModelValueParams<M, O>): types.ManagedSelectModelValue<
  M,
  O,
  types.DataSelectModelValue<M, O> | types.NotSet
> => {
  /* Keep track of whether or not the Select's model value has been initially set yet, based on
     the readiness of the Select's potentially asynchronously loaded data. */
  const wasInitialized = useRef(isReady);

  const getItemValue = useCallback(
    (m: M) => {
      if (options.getItemValue !== undefined) {
        return options.getItemValue(m) as types.InferredDataSelectV<M, O>;
      } else if ("value" in m && m.value !== undefined) {
        return m.value as types.InferredDataSelectV<M, O>;
      }
      throw new Error(
        "If the 'getItemValue' callback prop is not provided, each model must be attributed " +
          "with a defined 'value' property!",
      );
    },
    [options],
  );

  /* Manage the Select's model value in state in parallel to the Select's value.  See docstring
     on hook for more information. */
  const [modelValue, setModelValue] = useState<types.DataSelectModelValue<M, O> | types.NotSet>(
    () =>
      getInitialModelValue({
        options,
        isReady,
        getModel: v => getModel(v, { data, getItemValue }),
        ...params,
      }),
  );

  const { isSelected, toggle, select, deselect, value, ...rest } = useSelectValue<
    types.InferredDataSelectV<M, O>,
    O["behavior"]
  >({
    ...params,
    behavior: options.behavior,
    onChange: v => {
      const mv = reduceModelValue(modelValue, v, { getItemValue, options, data });
      /* This should only be called if the Select's model value is not "NOTSET" to begin with,
         because the Select will disable selection if it is not in a "ready" state. */
      if (mv !== types.NOTSET) {
        onChange?.(v, { modelValue: mv });
      } else {
        logger.warn("The Select should not allow change events if the model value is not set!");
      }
    },
    onSelect,
    onClear,
    onDeselect,
  });

  useEffect(() => {
    /* If the Select's model value has not yet been initialized, do not update it.  The effect
       should wait until the Select's model value has been initialized, which occurs when it is
       set in a "ready" state. */
    if (wasInitialized.current) {
      setModelValue(curr => reduceModelValue(curr, value, { getItemValue, options, data }));
    }
  }, [value, options, data, getItemValue]);

  useEffect(() => {
    /* If the Select was not initially in a "ready" state, the model value has to be set after it
       changes to a "ready" state. */
    if (isReady && wasInitialized.current === false) {
      setModelValue(
        getInitialModelValue({
          options,
          isReady,
          getModel: v => getModel(v, { data, getItemValue }),
          ...params,
        }),
      );
      wasInitialized.current = true;
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [isReady]);

  return {
    ...rest,
    value,
    modelValue,
    isSelected,
    select,
    toggle,
    deselect,
    isModelSelected: (m: M) => isSelected(getItemValue(m)),
    toggleModel: (m: M) => toggle(getItemValue(m)),
    selectModel: (m: M) => select(getItemValue(m)),
    deselectModel: (m: M) => deselect(getItemValue(m)),
  };
};
