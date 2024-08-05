/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductRecordCountOutputTypeSelect>;
export const ProductRecordCountOutputTypeSelectObjectSchema: SchemaType = z.object({
    errors: z.boolean().optional()
}).strict() as SchemaType;
