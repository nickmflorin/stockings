import { z } from "zod";

export const ProductNotificationSchema = z.object({
  name: z.string(),
});
