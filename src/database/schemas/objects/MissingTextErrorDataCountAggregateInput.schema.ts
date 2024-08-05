/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.MissingTextErrorDataCountAggregateInputType>;
export const MissingTextErrorDataCountAggregateInputObjectSchema: SchemaType = z.object({
    id: z.literal(true).optional(), parentHtml: z.literal(true).optional(), _all: z.literal(true).optional()
}).strict() as SchemaType;
