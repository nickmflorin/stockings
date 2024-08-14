import { type ReactNode } from "react";

import { Layout } from "~/components/layout/Layout";

interface AuthenticatedLayoutProps {
  readonly children: ReactNode;
}

export default function AuthenticatedLayout({ children }: AuthenticatedLayoutProps) {
  return (
    <Layout
      nav={[
        {
          tooltipLabel: "Dashboard",
          icon: "grid",
          path: "/dashboard",
          activePaths: [{ leadingPath: "/dashboard" }],
        },
        {
          tooltipLabel: "Products",
          icon: "toolbox",
          path: "/products",
          activePaths: [{ leadingPath: "/products" }, { leadingPath: "/product/:id" }],
        },
        {
          tooltipLabel: "Notifications",
          icon: "envelope",
          path: "/notifications",
          activePaths: [{ leadingPath: "/notifications" }],
        },
      ]}
    >
      {children}
    </Layout>
  );
}
