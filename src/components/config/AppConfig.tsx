/* eslint-disable import/order */
import { type ReactNode } from "react";
import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/nextjs";

import { Loading } from "~/components/loading/Loading";
import { CookiesProvider } from "./CookiesProvider";
import ClientConfig from "./ClientConfig";

import "@mantine/core/styles.layer.css";
import "@mantine/dates/styles.css";

import "~/styles/globals/index.scss"; // Import this last.

export interface AppConfigProps {
  readonly children: ReactNode;
}

export const AppConfig = ({ children }: AppConfigProps): JSX.Element => (
  <ClerkProvider>
    <ClerkLoading>
      <Loading fullScreen isLoading />
    </ClerkLoading>
    <ClerkLoaded>
      <CookiesProvider>
        <ClientConfig>{children}</ClientConfig>
      </CookiesProvider>
    </ClerkLoaded>
  </ClerkProvider>
);
