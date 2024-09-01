import { type ReactNode } from "react";

import { auth } from "@clerk/nextjs/server";

import { SITE_ADMIN_ORG_SLUG } from "~/application/auth/constants";

import { Layout } from "~/components/layout/Layout";

interface AuthenticatedLayoutProps {
  readonly children: ReactNode;
}

export default async function AuthenticatedLayout({ children }: AuthenticatedLayoutProps) {
  const { orgSlug } = auth();
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
          tooltipLabel: "Subscriptions",
          icon: "mailbox",
          path: "/subscriptions",
          activePaths: [{ leadingPath: "/subscriptions" }],
        },
        {
          tooltipLabel: "Notifications",
          icon: "envelope",
          path: "/notifications",
          activePaths: [{ leadingPath: "/notifications" }],
        },
        {
          tooltipLabel: "Admin",
          icon: "gear",
          path: "/admin",
          visible: orgSlug === SITE_ADMIN_ORG_SLUG,
          activePaths: [{ leadingPath: "/admin", endPath: false }],
        },
      ]}
    >
      {children}
    </Layout>
  );
}
