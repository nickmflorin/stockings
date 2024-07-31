"use client";
import dynamic from "next/dynamic";
import React, { type ReactNode } from "react";

import { SWRConfig } from "./SWRConfig";

const MantineProvider = dynamic(() => import("./MantineProvider"), { ssr: false });

export interface ClientConfigProps {
  readonly children: ReactNode;
}

export const ClientConfig = (props: ClientConfigProps) => <SWRConfig>{props.children}</SWRConfig>;

export default ClientConfig;
