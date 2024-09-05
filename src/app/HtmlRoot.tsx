import { Inter } from "next/font/google";
import Script from "next/script";
import { type ReactNode } from "react";

import { environment } from "~/environment";

const InterFont = Inter({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  display: "swap",
  subsets: ["latin"],
});

export interface HtmlRootProps {
  readonly children: ReactNode;
}

export const HtmlRoot = ({ children }: HtmlRootProps) => (
  <html lang="en">
    <head>
      <Script
        type="text/javascript"
        src={`https://kit.fontawesome.com/${environment.get("FONT_AWESOME_KIT_TOKEN")}.js`}
        /* Using "nest" instead of "replace" avoids errors related to
           NotFoundError: Failed to execute 'removeChild' on 'Node': The node to be removed is
           not a child of this node */
        data-auto-replace-svg="nest"
        strategy="beforeInteractive"
      />
    </head>
    <body className={InterFont.className}>{children}</body>
  </html>
);
