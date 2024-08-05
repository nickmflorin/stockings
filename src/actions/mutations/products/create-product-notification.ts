"use server";
import { type z } from "zod";

import { type ProductNotificationSchema } from "~/actions/schemas";

export const createProductNotification = async (req: z.infer<typeof ProductNotificationSchema>) =>
  null;
