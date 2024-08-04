import { useContext } from "react";

import { DrawersContext } from "../provider/drawers-context";
import { DrawerIds } from "../types";

export const useDrawers = () => {
  const ctx = useContext(DrawersContext);
  if (!ctx.isReady) {
    throw new Error("The 'useDrawers' hook must be called within the 'DrawersProvider'!");
  }
  return { ...ctx, ids: DrawerIds };
};
