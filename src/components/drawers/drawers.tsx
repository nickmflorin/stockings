import dynamic from "next/dynamic";
import React from "react";

import { Loading } from "~/components/loading/Loading";

import { DrawerIds, type DrawerId } from "./types";

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export const Drawer = <D extends DrawerId, C extends React.ComponentType<any>>(
  id: D,
  component: C,
) => ({
  id,
  component,
});

const SubscribeToProductDrawer = dynamic(
  () => import("~/features/notifications/components/drawers/SubscribeToProductDrawer"),
  { loading: () => <Loading isLoading={true} /> },
);

const UpdateProductSubscriptionDrawer = dynamic(
  () => import("~/features/notifications/components/drawers/UpdateProductSubscriptionDrawer"),
  { loading: () => <Loading isLoading={true} /> },
);

export const Drawers = {
  [DrawerIds.SUBSCRIBE_TO_PRODUCT]: Drawer(
    DrawerIds.SUBSCRIBE_TO_PRODUCT,
    SubscribeToProductDrawer,
  ),
  [DrawerIds.UPDATE_PRODUCT_SUBSCRIPTION]: Drawer(
    DrawerIds.UPDATE_PRODUCT_SUBSCRIPTION,
    UpdateProductSubscriptionDrawer,
  ),
} as const satisfies {
  [key in DrawerId]: {
    id: key;
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    component: React.ComponentType<any>;
  };
};

export type DrawerComponent<D extends DrawerId> = (typeof Drawers)[D]["component"];

export type DrawerDynamicProps<D extends DrawerId> = Omit<
  React.ComponentProps<(typeof Drawers)[D]["component"]>,
  "onClose"
>;

type DrawerConfig<D extends DrawerId> = (typeof Drawers)[D];

export const getDrawerConfig = <D extends DrawerId>(id: D): DrawerConfig<D> =>
  Drawers[id] as DrawerConfig<D>;

export const getDrawerComponent = <D extends DrawerId>(id: D): DrawerComponent<D> =>
  getDrawerConfig(id).component;
