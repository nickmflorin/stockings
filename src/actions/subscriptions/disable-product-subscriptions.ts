"use server";
import { uniq } from "lodash-es";

import { getAuthedUser } from "~/application/auth/server";
import { enhance } from "~/database/model";
import { db } from "~/database/prisma";
import { logger } from "~/internal/logger";

import { isUuid } from "~/lib/typeguards";

import { type MutationActionResponse } from "~/actions";

import { ApiClientGlobalError } from "~/api";

export const disableProductSubscriptions = async (
  _ids: string[],
): Promise<MutationActionResponse<{ success: true }>> => {
  const { user, error } = await getAuthedUser();
  if (error) {
    return { error: error.json };
  }

  const ids = uniq(_ids);
  if (ids.length === 0) {
    return {
      error: ApiClientGlobalError.BadRequest({
        message: "At least one subscription ID must be included.",
      }).json,
    };
  } else if (ids.filter(id => !isUuid(id)).length > 0) {
    return {
      error: ApiClientGlobalError.BadRequest({
        message: "All subscription IDs must be valid UUIDs.",
      }).json,
    };
  }

  const enhanced = enhance(db, { user }, { kinds: ["delegate"] });

  const subscriptions = await enhanced.productSubscription.findMany({
    where: { id: { in: ids }, enabled: true },
  });
  if (subscriptions.length !== ids.length) {
    logger.error(
      "The request contained subscription IDs that either do not exist or are already disabled.",
    );
  }
  await enhanced.productSubscription.updateMany({
    where: { id: { in: subscriptions.map(sub => sub.id) } },
    data: { enabled: false, updatedById: user.id },
  });
  return { data: { success: true } };
};
