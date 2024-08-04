import dynamic from "next/dynamic";
import React, { useState, useCallback } from "react";

import type * as types from "../types";

import { publish } from "~/events/drawer-state-change-event";

import { Loading } from "~/components/loading/Loading";

import { type DrawerDynamicProps } from "./drawers";

const DrawerRenderer = dynamic(() => import("./DrawerRenderer"), {
  loading: () => <Loading isLoading={true} />,
});

export const useDrawersManager = (): Omit<types.DrawersManager, "isReady"> => {
  const [drawer, setDrawer] = useState<JSX.Element | null>(null);

  const close = useCallback(() => {
    setTimeout(() => {
      publish({ state: "closed" });
    });
  }, []);

  const open = useCallback(
    <D extends DrawerId>(id: D, props: DrawerDynamicProps<D>) => {
      const newDrawer = <DrawerRenderer id={id} props={props} onClose={() => close()} />;
      setDrawer(newDrawer);
      setTimeout(() => {
        publish({ state: "opened", id, props });
      });
    },
    [close],
  );

  return { drawer, open, close };
};
