/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.HttpClientErrorDataAvgAggregateInputType>;
export const HttpClientErrorDataAvgAggregateInputObjectSchema: SchemaType = z.object({
    status: z.literal(true).optional()
}).strict() as SchemaType;
