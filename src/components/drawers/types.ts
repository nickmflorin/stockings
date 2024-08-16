import { enumeratedLiterals, type EnumeratedLiteralsType } from "enumerated-literals";

import type { DrawerDynamicProps } from "./drawers";

export const DrawerIds = enumeratedLiterals(
  [
    "subscribe-to-price-changes",
    "subscribe-to-status-changes",
    "update-status-change-subscription",
    "update-price-change-subscription",
  ] as const,
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
