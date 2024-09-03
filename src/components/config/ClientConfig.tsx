"use client";
import dynamic from "next/dynamic";
import React, { type ReactNode } from "react";

import { SWRConfig } from "./SWRConfig";

const DrawersProvider = dynamic(() => import("~/components/drawers/DrawersProvider"), {
  ssr: false,
});
const MantineProvider = dynamic(() => import("./MantineProvider"), { ssr: false });
const StylesProvider = dynamic(() => import("./StylesProvider"), { ssr: false });
const GlobalNavigatableProvider = dynamic(() => import("./GlobalNavigatableProvider"), {
  ssr: false,
});

export interface ClientConfigProps {
  readonly children: ReactNode;
}

export const ClientConfig = (props: ClientConfigProps) => (
  <SWRConfig>
    <MantineProvider>
      <StylesProvider>
        <GlobalNavigatableProvider>
          <DrawersProvider>{props.children}</DrawersProvider>
        </GlobalNavigatableProvider>
      </StylesProvider>
    </MantineProvider>
  </SWRConfig>
);

export default ClientConfig;
