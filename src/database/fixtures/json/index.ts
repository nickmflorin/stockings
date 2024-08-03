import { type z } from "zod";

import * as schemas from "../schemas";

import products from "./products.json";

export const fixtures = {
  products: products.products.map(
    (c): z.infer<typeof schemas.ProductJsonSchema> => schemas.ProductJsonSchema.parse(c),
  ),
};
