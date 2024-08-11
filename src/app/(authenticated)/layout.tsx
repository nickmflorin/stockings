import { type ReactNode } from "react";

import { Layout } from "~/components/layout/Layout";

/* Need to update NextJS
   export const experimental_ppr = true; */

interface AuthenticatedLayoutProps {
  readonly children: ReactNode;
}

export default function AuthenticatedLayout({ children }: AuthenticatedLayoutProps) {
  return (
    <Layout
      nav={[
        {
          tooltipLabel: "Dashboard",
          icon: { name: "grid" },
          path: "/dashboard",
          activePaths: [{ leadingPath: "/dashboard" }],
        },
        {
          tooltipLabel: "Products",
          icon: { name: "toolbox" },
          path: "/products",
          activePaths: [{ leadingPath: "/products" }],
        },
      ]}
    >
      {children}
    </Layout>
  );
}
