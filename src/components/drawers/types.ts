import { enumeratedLiterals, type EnumeratedLiteralsType } from "enumerated-literals";

import type { DrawerDynamicProps } from "./provider/drawers";

export const DrawerIds = enumeratedLiterals(["modify-product-subscription"] as const, {});

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
