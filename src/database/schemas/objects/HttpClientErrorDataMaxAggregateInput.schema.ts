/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.HttpClientErrorDataMaxAggregateInputType>;
export const HttpClientErrorDataMaxAggregateInputObjectSchema: SchemaType = z.object({
    id: z.literal(true).optional(), url: z.literal(true).optional(), status: z.literal(true).optional()
}).strict() as SchemaType;
