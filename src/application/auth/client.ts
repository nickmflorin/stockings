import { type useUser } from "@clerk/nextjs";

import * as constants from "./constants";

type UserResource = NonNullable<ReturnType<typeof useUser>["user"]>;

export const clerkUserHasSiteAdminAccess = (user: UserResource): boolean => {
  const memberships = user.organizationMemberships.filter(
    membership => membership.organization.slug === constants.SITE_ADMIN_ORG_SLUG,
  );
  return memberships.length >= 1;
};
