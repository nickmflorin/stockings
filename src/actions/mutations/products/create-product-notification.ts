"use server";
import { type z } from "zod";

import { getAuthedUser } from "~/application/auth/server";
import { db } from "~/database";
import { enhance } from "~/database/zenstack/generated/enhance";

import { type ProductNotificationSchema } from "~/actions/schemas";

export const createProductNotification = async (req: z.infer<typeof ProductNotificationSchema>) => {
  const { user, error } = await getAuthedUser();
  if (error) {
    return error.json;
  }
  const enhanced = enhance(db, { user }, { kinds: ["delegate"] });
  const products = await enhanced.product.findMany({});
};
