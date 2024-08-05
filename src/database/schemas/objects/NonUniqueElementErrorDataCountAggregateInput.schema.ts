/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.NonUniqueElementErrorDataCountAggregateInputType>;
export const NonUniqueElementErrorDataCountAggregateInputObjectSchema: SchemaType = z.object({
    id: z.literal(true).optional(), parentHtml: z.literal(true).optional(), selector: z.literal(true).optional(), _all: z.literal(true).optional()
}).strict() as SchemaType;
