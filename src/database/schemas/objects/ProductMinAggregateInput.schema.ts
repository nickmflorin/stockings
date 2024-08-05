/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductMinAggregateInputType>;
export const ProductMinAggregateInputObjectSchema: SchemaType = z.object({
    id: z.literal(true).optional(), createdAt: z.literal(true).optional(), createdById: z.literal(true).optional(), updatedAt: z.literal(true).optional(), updatedById: z.literal(true).optional(), name: z.literal(true).optional(), slug: z.literal(true).optional(), code: z.literal(true).optional(), imageSrc: z.literal(true).optional(), status: z.literal(true).optional(), statusRecordedAt: z.literal(true).optional(), price: z.literal(true).optional(), priceRecordedAt: z.literal(true).optional(), category: z.literal(true).optional()
}).strict() as SchemaType;
