"use server";
import { getAuth, auth } from "@clerk/nextjs/server";

import { db } from "~/database";
import { type User } from "~/database/model";
import { logger } from "~/internal/logger";

type StrictClerkUserPayload = Readonly<{ clerkUserId: string; hasCMSAccess: boolean }>;
type NullClerkUserPayload = Readonly<{ clerkUserId: null; hasCMSAccess: false }>;

const NULL_CLERK_USER_PAYLOAD: NullClerkUserPayload = { clerkUserId: null, hasCMSAccess: false };

type ClerkUserPayload = StrictClerkUserPayload | NullClerkUserPayload;

type StrictUserPayload = Readonly<{ user: User; clerkUserId: string }>;
type NullUserPayload = Readonly<{ user: null; clerkUserId: null }>;

const NULL_USER_PAYLOAD: NullUserPayload = { user: null, clerkUserId: null };

type UserPayload = StrictUserPayload | NullUserPayload;

export async function getClerkUserId(req?: Parameters<typeof getAuth>[0]): Promise<string | null> {
  let userId: string | null;
  if (req) {
    ({ userId } = getAuth(req));
  } else {
    ({ userId } = auth());
  }
  return userId;
}

type GetAuthedUserOpts = {
  readonly strict?: boolean;
  readonly request?: Parameters<typeof getAuth>[0];
};

type GetAuthedUserRT<O extends GetAuthedUserOpts> = O extends { strict: false }
  ? UserPayload
  : StrictUserPayload;

export const getAuthedUser = async <O extends GetAuthedUserOpts>(
  opts?: O,
): Promise<GetAuthedUserRT<O>> => {
  const userId = await getClerkUserId(opts?.request);
  if (!clerkUserId) {
    if (opts?.strict === false) {
      return NULL_USER_PAYLOAD as GetAuthedUserRT<O>;
    }
    throw ApiClientGlobalError.NotAuthenticated();
  } else if (!hasCMSAccess) {
    if (opts?.strict === false) {
      return NULL_USER_PAYLOAD as GetAuthedUserRT<O>;
    }
    throw ApiClientGlobalError.Forbidden();
  }
  const user = await db.user.findUnique({ where: { clerkId: clerkUserId } });
  if (!user) {
    logger.error("The user exists in Clerk but does not have an associated user in the database.", {
      clerkUserId,
    });
    if (opts?.strict === false) {
      return NULL_USER_PAYLOAD as GetAuthedUserRT<O>;
    }
    throw ApiClientGlobalError.NotAuthenticated();
  }
  return { user, clerkUserId, hasCMSAccess } as GetAuthedUserRT<O>;
};
