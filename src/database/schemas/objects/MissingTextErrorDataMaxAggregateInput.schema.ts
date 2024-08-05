/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.MissingTextErrorDataMaxAggregateInputType>;
export const MissingTextErrorDataMaxAggregateInputObjectSchema: SchemaType = z.object({
    id: z.literal(true).optional(), parentHtml: z.literal(true).optional()
}).strict() as SchemaType;
