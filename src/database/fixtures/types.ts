import type { Brand } from "~/database/model";

export type JsonifiableModel = Extract<Brand, "product">;
