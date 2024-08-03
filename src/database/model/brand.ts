export type ToBrandedModel<M, T extends string> = M & {
  readonly $kind: T;
};

export type Brands = {
  foo: never;
};

export type BrandedModels = { [key in keyof Brands]: ToBrandedModel<Brands[key], key> };
export type Brand = keyof Brands;

export type BrandModel<T extends Brand> = T extends Brand ? BrandedModels[T] : never;
