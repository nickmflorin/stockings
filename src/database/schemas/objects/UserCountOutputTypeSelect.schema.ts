/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.UserCountOutputTypeSelect>;
export const UserCountOutputTypeSelectObjectSchema: SchemaType = z.object({
    createdProducts: z.boolean().optional(), updatedProducts: z.boolean().optional(), createdProductRecords: z.boolean().optional(), updatedProductRecords: z.boolean().optional(), productNotificationConfigs: z.boolean().optional(), createdProductNotificationConfigs: z.boolean().optional(), updatedProductNotificationConfigs: z.boolean().optional(), createdNotificationEventConfigs: z.boolean().optional(), updatedNotificationEventConfigs: z.boolean().optional(), delegate_aux_User_createdNotificationEventConfigs_P_0: z.boolean().optional(), delegate_aux_User_createdNotificationEventConfigs_S_0: z.boolean().optional(), delegate_aux_User_updatedNotificationEventConfigs_P_0: z.boolean().optional(), delegate_aux_User_updatedNotificationEventConfigs_S_0: z.boolean().optional()
}).strict() as SchemaType;
