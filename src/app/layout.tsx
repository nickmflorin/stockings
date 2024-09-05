import type { Metadata } from "next";
import { type ReactNode } from "react";

import { environment } from "~/environment";

import { AppConfig } from "~/components/config/AppConfig";

import { HtmlRoot } from "./HtmlRoot";

export const metadata: Metadata = {
  title: environment.get("APP_NAME_FORMAL"),
  description: "Stock Alerts for Lie-Nielsen Toolworks",
};

interface RootLayoutProps {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <HtmlRoot>
      <AppConfig>
        <div className="root">{children}</div>
      </AppConfig>
    </HtmlRoot>
  );
}
