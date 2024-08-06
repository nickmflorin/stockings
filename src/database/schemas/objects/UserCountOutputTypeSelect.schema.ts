/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserCountOutputTypeSelect>;
export const UserCountOutputTypeSelectObjectSchema: SchemaType = z.object({
    createdProducts: z.boolean().optional(), updatedProducts: z.boolean().optional(), createdProductRecords: z.boolean().optional(), updatedProductRecords: z.boolean().optional(), createdNotificationEvents: z.boolean().optional(), updatedNotificationEvents: z.boolean().optional(), notificationEvents: z.boolean().optional(), delegate_aux_User_createdNotificationEvents_PriceCh_0: z.boolean().optional(), delegate_aux_User_createdNotificationEvents_StatusC_0: z.boolean().optional(), delegate_aux_User_updatedNotificationEvents_PriceCh_0: z.boolean().optional(), delegate_aux_User_updatedNotificationEvents_StatusC_0: z.boolean().optional(), delegate_aux_User_notificationEvents_PriceChangeEve_0: z.boolean().optional(), delegate_aux_User_notificationEvents_StatusChangeEv_0: z.boolean().optional()
}).strict() as SchemaType;
