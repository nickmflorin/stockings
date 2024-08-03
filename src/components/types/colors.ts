type HexAlphaChar = "a" | "b" | "c" | "d" | "e" | "f";
type HexInteger = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type HexChar = HexAlphaChar | HexInteger;

/* Note: We cannot use the 'HexChar' type to represent all 6 characters of a Hexidecimal string.
   This is because after 2 characters, the number of enumerations becomes too large for TS to
   represent.  However, we still get a lot of type safety from representing the beginning of the
   hexidecimal string more strictly, with the 'HexChar' type - type safety that will catch a lot of
   typos or bugs.

   If we notice this slows the compiler down substantially over time, we can always reduce the
   number of strictly typed characters in the 'HexColor' representation.
   */
type _HexColor = `#${HexChar}${HexChar}${string}`;

/**
 * Represents a hexidecimal color string.
 */
export type HexColor = Uppercase<_HexColor> | _HexColor;

export type TailwindPaletteColor =
  | "blue"
  | "cyan"
  | "purple"
  | "blue"
  | "red"
  | "yellow"
  | "green"
  | "gray"
  | "pink"
  | "orange"
  | "indigo";

export type TailwindDirectColor = "description" | "body" | "label" | "title" | "border" | "primary";

export type TailwindPaletteColorShade =
  | "50"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

export type TailwindTextColorClassName =
  | `text-${TailwindPaletteColor}-${TailwindPaletteColorShade}`
  | `text-${TailwindDirectColor}`;

export type TailwindBgColorClassName =
  | `bg-${TailwindPaletteColor}-${TailwindPaletteColorShade}`
  | `bg-${TailwindDirectColor}`;
