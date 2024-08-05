/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductRecordMinAggregateInputType>;
export const ProductRecordMinAggregateInputObjectSchema: SchemaType = z.object({
    id: z.literal(true).optional(), createdAt: z.literal(true).optional(), createdById: z.literal(true).optional(), updatedAt: z.literal(true).optional(), updatedById: z.literal(true).optional(), timestamp: z.literal(true).optional(), productId: z.literal(true).optional(), price: z.literal(true).optional(), rawPrice: z.literal(true).optional(), status: z.literal(true).optional(), wasManuallyCreated: z.literal(true).optional()
}).strict() as SchemaType;
