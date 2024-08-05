"use server";
import { getAuth, auth } from "@clerk/nextjs/server";
import { enhance } from "@zenstackhq/runtime";
import { type z } from "zod";

import { db } from "~/database";

import { type ProductNotificationSchema } from "~/actions/schemas";

export const createProductNotification = async (req: z.infer<typeof ProductNotificationSchema>) => {
  const enhanced = enhance(db, { user: req.user }, { kind: ["delegate"] });
};
