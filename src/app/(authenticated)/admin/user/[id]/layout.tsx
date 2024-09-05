import { redirect } from "next/navigation";
import { type ReactNode } from "react";

import { type ApiUser } from "~/database/model";
import { logger } from "~/internal/logger";

import { fetchUser } from "~/actions/users/fetch-user";

import { DetailBreadcrumb } from "~/components/DetailBreadcrumb";
import { ErrorView } from "~/components/errors/ErrorView";
import { Tabs } from "~/components/layout/Tabs";

import { ApiClientGlobalErrorCodes } from "~/api";

interface AdminUserLayoutProps {
  readonly children: ReactNode;
  readonly params: { id: string };
}

export default async function AdminUserLayout({ children, params }: AdminUserLayoutProps) {
  let user: ApiUser<[]>;
  try {
    const { error, data } = await fetchUser(params.id, { includes: [] }, { strict: false });
    if (error) {
      if (error.code === ApiClientGlobalErrorCodes.NOT_FOUND) {
        console.error("BLAH");
        // return redirect("/404");
      }
      logger.error(error, "There was an error fetching the user in the admin.");
      return (
        <ErrorView>There was an error loading the user. Do not worry - we are on it.</ErrorView>
      );
    }
    user = data;
  } catch (e) {
    logger.errorUnsafe(e, "There was an error fetching the user in the admin.");
    return <ErrorView>There was an error loading the user. Do not worry - we are on it.</ErrorView>;
  }

  return (
    <div className="flex flex-col gap-[16px] w-full h-full max-h-full overflow-hidden">
      <DetailBreadcrumb returnHref="/admin/users" returnLabel="Users">
        {`${user.firstName} ${user.lastName}`}
      </DetailBreadcrumb>
      <Tabs
        items={[
          {
            label: "Subscriptions",
            path: `/admin/user/${user.id}/subscriptions`,
            activePaths: { leadingPath: "/admin/user/:id/subscriptions" },
            icon: "mailbox",
          },
        ]}
      />
      <div className="grow min-h-0 max-h-full h-full flex flex-col">{children}</div>
    </div>
  );
}
