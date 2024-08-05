/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductCountOutputTypeSelect>;
export const ProductCountOutputTypeSelectObjectSchema: SchemaType = z.object({
    records: z.boolean().optional(), notificationConfigs: z.boolean().optional()
}).strict() as SchemaType;
