import { enumeratedLiterals } from "enumerated-literals";

import type { DrawerDynamicProps } from "./provider/drawers";

export const DrawerIds = enumeratedLiterals(["modify-product-subscription"] as const, {});

// Used for event mapping of drawers in the events.d.ts file.
export type TypeOfDrawerIds = typeof DrawerIds;

export type DrawerIdPropsPair<I extends DrawerId = DrawerId> = I extends DrawerId
  ? { id: I; props: DrawerDynamicProps<I> }
  : never;

export interface DrawersManager {
  readonly isReady: boolean;
  readonly drawer: JSX.Element | null;
  readonly close: () => void;
  readonly open: <D extends DrawerId>(id: D, props: DrawerDynamicProps<D>) => void;
}

export interface ExtendingDrawerProps {
  readonly onClose: () => void;
}

export interface ClientDrawerProps<D extends DrawerId> {
  readonly id: D;
  readonly props: DrawerDynamicProps<D>;
  readonly push?: boolean;
}

export type ClientDrawerComponent = {
  <D extends DrawerId>(props: ClientDrawerProps<D>): JSX.Element;
};
