/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigCountOutputTypeSelect>;
export const ProductNotificationConfigCountOutputTypeSelectObjectSchema: SchemaType = z.object({
    eventConfigs: z.boolean().optional(), delegate_aux_ProductNotificationConfig_eventConfigs_0: z.boolean().optional(), delegate_aux_ProductNotificationConfig_eventConfigs_1: z.boolean().optional()
}).strict() as SchemaType;
