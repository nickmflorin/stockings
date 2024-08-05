import dynamic from "next/dynamic";
import React, { useState, useCallback } from "react";

import type * as types from "../types";

import { Loading } from "~/components/loading/Loading";

import { type DrawerDynamicProps } from "./drawers";

const DrawerRenderer = dynamic(() => import("./DrawerRenderer"), {
  loading: () => <Loading isLoading={true} />,
});

export const useDrawersManager = (): Omit<types.DrawersManager, "isReady"> => {
  const [drawer, setDrawer] = useState<JSX.Element | null>(null);

  const close = useCallback(() => {
    setDrawer(null);
  }, []);

  const open = useCallback(
    <D extends types.DrawerId>(id: D, props: DrawerDynamicProps<D>) => {
      const newDrawer = <DrawerRenderer id={id} props={props} onClose={() => close()} />;
      setDrawer(newDrawer);
    },
    [close],
  );

  return { drawer, open, close };
};
