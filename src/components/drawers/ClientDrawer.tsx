"use client";
import { useEffect, useRef } from "react";

import { useDrawers } from "./hooks/use-drawers";
import { type ClientDrawerProps } from "./types";

export const ClientDrawer = <D extends DrawerId>({
  id,
  props,
}: ClientDrawerProps<D>): JSX.Element => {
  const { open } = useDrawers();
  const wasOpened = useRef<boolean>(false);

  useEffect(() => {
    if (!wasOpened.current) {
      open(id, props);
      wasOpened.current = true;
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  return <></>;
};

export default ClientDrawer;
