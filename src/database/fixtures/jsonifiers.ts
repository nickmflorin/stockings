import { type z } from "zod";

import type * as types from "./types";

import type { BrandProduct } from "~/database/model";
import type { Transaction } from "~/database/prisma";

import { type JsonSchemas } from "./schemas";
import { cleanModel } from "./util";

type JsonifierInputModel<T extends types.JsonifiableModel> = {
  product: BrandProduct;
}[T];

export type Jsonifier<T extends types.JsonifiableModel> = {
  readonly jsonify: (model: JsonifierInputModel<T>) => z.infer<(typeof JsonSchemas)[T]>;
  readonly data: (tx: Transaction) => Promise<JsonifierInputModel<T>[]>;
};

export const Jsonifiers: {
  [key in types.JsonifiableModel]: Jsonifier<key>;
} = {
  product: {
    data: async tx => await tx.product.findMany(),
    jsonify: model => cleanModel(model),
  },
};
