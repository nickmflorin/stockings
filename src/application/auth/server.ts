"use server";
import { getAuth, auth } from "@clerk/nextjs/server";

import { db } from "~/database";
import { type User } from "~/database/model";
import { logger } from "~/internal/logger";

import { ApiClientGlobalError } from "~/api";

type StrictUserPayload = Readonly<{ user: User; clerkUserId: string; error?: never }>;
type NullUserPayload = Readonly<{ user?: never; clerkUserId?: never; error: ApiClientGlobalError }>;

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

type GetAuthedUserRT<O extends GetAuthedUserOpts> = O extends { strict: true }
  ? StrictUserPayload
  : StrictUserPayload | NullUserPayload;

export const getAuthedUser = async <O extends GetAuthedUserOpts>(
  opts?: O,
): Promise<GetAuthedUserRT<O>> => {
  const clerkUserId = await getClerkUserId(opts?.request);
  if (!clerkUserId) {
    if (opts?.strict !== true) {
      return { error: ApiClientGlobalError.NotAuthenticated({}) } as GetAuthedUserRT<O>;
    }
    throw ApiClientGlobalError.NotAuthenticated({});
  }
  const user = await db.user.findUnique({ where: { clerkId: clerkUserId } });
  if (!user) {
    logger.error("The user exists in Clerk but does not have an associated user in the database.", {
      clerkUserId,
    });
    if (opts?.strict !== true) {
      return { error: ApiClientGlobalError.NotAuthenticated({}) } as GetAuthedUserRT<O>;
    }
    throw ApiClientGlobalError.NotAuthenticated({});
  }
  return { user, clerkUserId } as GetAuthedUserRT<O>;
};
