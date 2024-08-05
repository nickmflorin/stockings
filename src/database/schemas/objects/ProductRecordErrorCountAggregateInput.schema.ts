/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductRecordErrorCountAggregateInputType>;
export const ProductRecordErrorCountAggregateInputObjectSchema: SchemaType = z.object({
    id: z.literal(true).optional(), errorId: z.literal(true).optional(), errorCode: z.literal(true).optional(), recordId: z.literal(true).optional(), field: z.literal(true).optional(), message: z.literal(true).optional(), _all: z.literal(true).optional()
}).strict() as SchemaType;
