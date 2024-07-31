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
          icon: { name: "grid" },
          path: "/dashboard",
          activePaths: [{ leadingPath: "/dashboard" }],
        },
      ]}
    >
      {children}
    </Layout>
  );
}
