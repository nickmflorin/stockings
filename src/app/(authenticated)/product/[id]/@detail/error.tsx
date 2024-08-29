"use client";
import { ProductCategory } from "~/database/model";

import { ProductInfoTile } from "~/features/products/components/ProductInfoTile";

type RemoveLeadingChar<S extends string, CHAR extends string> = CHAR extends string
  ? S extends `${CHAR}${infer R}`
    ? RemoveLeadingChar<R, CHAR>
    : S
  : never;

type RemoveTrailingChar<S extends string, CHAR extends string> = CHAR extends string
  ? S extends `${infer L}${CHAR}`
    ? RemoveTrailingChar<L, CHAR>
    : S
  : never;

type RemoveSurroundingChars<
  S extends string,
  CHAR extends string,
> = S extends `${CHAR}${infer R}${CHAR}`
  ? RemoveSurroundingChars<R, CHAR>
  : S extends `${CHAR}${infer R}`
    ? RemoveSurroundingChars<R, CHAR>
    : S extends `${infer L}${CHAR}`
      ? RemoveSurroundingChars<L, CHAR>
      : S;

type TitleCase<S extends string> = S extends `${infer A}-${infer B}`
  ? `${TitleCase<A>}-${TitleCase<B>}`
  : S extends `${infer A} ${infer B}`
    ? `${TitleCase<A>} ${TitleCase<B>}`
    : Capitalize<Lowercase<S>>;

type FirstName<S extends string> = S extends `${infer C} ${string}`
  ? RemoveSurroundingChars<TitleCase<C>, "-" | " ">
  : "";

type LastName<S extends string> = S extends `${string} ${infer R}`
  ? RemoveSurroundingChars<TitleCase<R>, "-" | " ">
  : RemoveSurroundingChars<TitleCase<S>, "-" | " ">;

type First = FirstName<"-JOHN JACK-BERRY ">;
type Last = LastName<"-JOHN JACK-BERRY ">;

type FirstChar<S extends string> = S extends `${infer C}${string}` ? C : never;

type RemoveChar<S extends string, C extends string> = S extends `${infer L}${C}${infer R}`
  ? RemoveChar<`${L}${R}`, C>
  : S;

type UserName<S extends string> = S extends string
  ? Lowercase<RemoveChar<`${FirstChar<FirstName<S>>}${LastName<S>}`, "-" | " ">>
  : never;

type R = FirstChar<FirstName<"Jack Berry" | "Hope Smith">>;

type Check1 = UserName<"Jack Berry" | "Hope Smith">;

type L = LastName<"Jack Berry" | "Hope Smith">;

export default function Error() {
  return (
    <ProductInfoTile
      product={{
        subCategories: [],
        name: "",
        descriptions: [""],
        price: 0,
        status: null,
        category: ProductCategory.HandTools,
        statusAsOf: null,
        priceAsOf: null,
        imageSrc: null,
      }}
    />
  );
}
