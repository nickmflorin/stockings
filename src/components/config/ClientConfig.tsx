"use client";
import dynamic from "next/dynamic";
import React, { type ReactNode } from "react";

import { SWRConfig } from "./SWRConfig";

const MantineProvider = dynamic(() => import("./MantineProvider"), { ssr: false });
const StylesProvider = dynamic(() => import("./StylesProvider"), { ssr: false });

export interface ClientConfigProps {
  readonly children: ReactNode;
}

export const ClientConfig = (props: ClientConfigProps) => (
  <SWRConfig>
    <MantineProvider>
      <StylesProvider>{props.children}</StylesProvider>
    </MantineProvider>
  </SWRConfig>
);

export default ClientConfig;
