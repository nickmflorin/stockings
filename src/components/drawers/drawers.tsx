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

const ProductNotificationEventsDrawer = dynamic(
  () => import("~/features/notifications/components/drawers/ProductNotificationEventsDrawer"),
  { loading: () => <Loading isLoading={true} /> },
);

export const Drawers = {
  [DrawerIds.MANAGE_PRODUCT_NOTIFICATION_EVENTS]: Drawer(
    DrawerIds.MANAGE_PRODUCT_NOTIFICATION_EVENTS,
    ProductNotificationEventsDrawer,
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
