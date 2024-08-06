/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventMaxAggregateInputType>;
export const StatusChangeEventMaxAggregateInputObjectSchema: SchemaType = z.object({
    id: z.literal(true).optional(), createdAt: z.literal(true).optional(), createdById: z.literal(true).optional(), updatedAt: z.literal(true).optional(), updatedById: z.literal(true).optional(), productId: z.literal(true).optional(), userId: z.literal(true).optional(), contentType: z.literal(true).optional()
}).strict() as SchemaType;
