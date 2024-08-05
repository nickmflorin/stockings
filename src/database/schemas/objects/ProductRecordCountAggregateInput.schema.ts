/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductRecordCountAggregateInputType>;
export const ProductRecordCountAggregateInputObjectSchema: SchemaType = z.object({
    id: z.literal(true).optional(), createdAt: z.literal(true).optional(), createdById: z.literal(true).optional(), updatedAt: z.literal(true).optional(), updatedById: z.literal(true).optional(), timestamp: z.literal(true).optional(), productId: z.literal(true).optional(), price: z.literal(true).optional(), rawPrice: z.literal(true).optional(), status: z.literal(true).optional(), wasManuallyCreated: z.literal(true).optional(), manuallyChangedFields: z.literal(true).optional(), _all: z.literal(true).optional()
}).strict() as SchemaType;
