import type { ProductStatus } from "~/database/model";

import type { SelectBehaviorType } from "~/components/input/select";
import { DataSelect, type DataSelectProps } from "~/components/input/select/DataSelect";

type M = {
  readonly label: string;
  readonly value: ProductStatus;
};

export interface ProductStatusSelectProps<B extends SelectBehaviorType>
  extends DataSelectProps<M, { behavior: B }> {}
