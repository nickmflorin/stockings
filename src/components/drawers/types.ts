import { enumeratedLiterals, type EnumeratedLiteralsType } from "enumerated-literals";

import type { DrawerDynamicProps } from "./drawers";

export const DrawerIds = enumeratedLiterals(
  ["subscribe-to-product", "update-product-subscription"] as const,
  {},
);

export type DrawerId = EnumeratedLiteralsType<typeof DrawerIds>;

export interface DrawersManager {
  readonly isReady: boolean;
  readonly drawer: JSX.Element | null;
  readonly close: () => void;
  readonly open: <D extends DrawerId>(id: D, props: DrawerDynamicProps<D>) => void;
}

export interface ExtendingDrawerProps {
  readonly onClose: () => void;
}
