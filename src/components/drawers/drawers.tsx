import dynamic from "next/dynamic";
import React from "react";

import { Loading } from "~/components/loading/Loading";
import type { QuantitativeSize } from "~/components/types";

import { DrawerIds, type DrawerId } from "./types";

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export const Drawer = <D extends DrawerId, C extends React.ComponentType<any>>(
  id: D,
  component: C,
  width: QuantitativeSize<"px"> = "400px",
) => ({
  id,
  component,
  width,
});

const UpdatePriceChangeSubscriptionDrawer = dynamic(
  () => import("~/features/subscriptions/components/drawers/UpdatePriceChangeSubscriptionDrawer"),
  { loading: () => <Loading isLoading={true} /> },
);

const UpdateStatusChangeSubscriptionDrawer = dynamic(
  () => import("~/features/subscriptions/components/drawers/UpdateStatusChangeSubscriptionDrawer"),
  { loading: () => <Loading isLoading={true} /> },
);

const SubscribeToPriceChangesDrawer = dynamic(
  () => import("~/features/subscriptions/components/drawers/SubscribeToPriceChangesDrawer"),
  { loading: () => <Loading isLoading={true} /> },
);

const SubscribeToStatusChangesDrawer = dynamic(
  () => import("~/features/subscriptions/components/drawers/SubscribeToStatusChangesDrawer"),
  { loading: () => <Loading isLoading={true} /> },
);

export const Drawers = {
  [DrawerIds.SUBSCRIBE_TO_PRICE_CHANGES]: Drawer(
    DrawerIds.SUBSCRIBE_TO_PRICE_CHANGES,
    SubscribeToPriceChangesDrawer,
    "400px",
  ),
  [DrawerIds.SUBSCRIBE_TO_STATUS_CHANGES]: Drawer(
    DrawerIds.SUBSCRIBE_TO_STATUS_CHANGES,
    SubscribeToStatusChangesDrawer,
    "500px",
  ),
  [DrawerIds.UPDATE_PRICE_CHANGE_SUBSCRIPTION]: Drawer(
    DrawerIds.UPDATE_PRICE_CHANGE_SUBSCRIPTION,
    UpdatePriceChangeSubscriptionDrawer,
    "400px",
  ),
  [DrawerIds.UPDATE_STATUS_CHANGE_SUBSCRIPTION]: Drawer(
    DrawerIds.UPDATE_STATUS_CHANGE_SUBSCRIPTION,
    UpdateStatusChangeSubscriptionDrawer,
    "500px",
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

export const getDrawerWidth = <D extends DrawerId>(id: D): QuantitativeSize<"px"> =>
  getDrawerConfig(id).width;
