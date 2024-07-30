import { useCallback, type ReactNode } from "react";

import { v4 as uuid } from "uuid";

import type * as types from "~/components/input/select/types";

export interface UseSelectModelAccessorsProps<
  V extends types.AllowedSelectValue,
  M extends types.DataSelectModel<V>,
> {
  readonly getModelValue?: (m: M) => V;
  readonly getModelLabel?: (m: M) => ReactNode;
  readonly getModelId?: (m: M) => string | number | undefined;
  readonly getModelValueLabel?: (m: M) => ReactNode;
}

export const useSelectModelAccessors = <
  V extends types.AllowedSelectValue,
  M extends types.DataSelectModel<V>,
>({
  getModelValue: _getModelValue,
  getModelId: _getModelId,
  getModelLabel: _getModelLabel,
  getModelValueLabel: _getModelValueLabel,
}: UseSelectModelAccessorsProps<V, M>) => {
  const getModelValue = useCallback(
    (m: M) => {
      if (_getModelValue !== undefined) {
        return _getModelValue(m);
      } else if ("value" in m && m.value !== undefined) {
        return m.value;
      }
      throw new Error(
        "If the 'getModelValue' callback prop is not provided, each model must be attributed " +
          "with a defined 'value' property!",
      );
    },
    [_getModelValue],
  );

  const getModelLabel = useCallback(
    (m: M) => {
      if (_getModelLabel !== undefined) {
        return _getModelLabel(m);
      } else if ("label" in m && m.label !== undefined) {
        return m.label;
      }
      return "";
    },
    [_getModelLabel],
  );

  const getModelValueLabel = useCallback(
    (m: M) => {
      if (_getModelValueLabel !== undefined) {
        return _getModelValueLabel(m);
      } else if ("valueLabel" in m && m.valueLabel !== undefined) {
        return m.valueLabel;
      }
      return getModelLabel(m);
    },
    [getModelLabel, _getModelValueLabel],
  );

  const getModelRelaxedId = useCallback(
    (m: M) => {
      let id: string | number | undefined = undefined;
      if (_getModelId !== undefined) {
        id = _getModelId(m);
      }
      if (id === undefined && "id" in m && m.id !== undefined) {
        id = m.id;
      }
      return String(id);
    },
    [_getModelId],
  );

  const getModelId = useCallback(
    (m: M) => {
      const id: string | number | undefined = getModelRelaxedId(m);
      return id === undefined ? `model-${uuid()}` : String(id);
    },
    [getModelRelaxedId],
  );

  const getModelKey = useCallback(
    (m: M, index: number): string => {
      const id = getModelRelaxedId(m);
      if (id !== undefined) {
        return id;
      }
      const value = getModelValue(m);
      if (typeof value === "string" || typeof value === "number") {
        return String(value);
      }
      const label = getModelLabel(m);
      if (typeof label === "string" || typeof label === "number") {
        return String(label).toLocaleLowerCase();
      }
      return `model-${index}`;
    },
    [getModelLabel, getModelValue, getModelRelaxedId],
  );

  return { getModelKey, getModelId, getModelLabel, getModelValue, getModelValueLabel };
};
