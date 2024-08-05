/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductRecordErrorMaxAggregateInputType>;
export const ProductRecordErrorMaxAggregateInputObjectSchema: SchemaType = z.object({
    id: z.literal(true).optional(), errorId: z.literal(true).optional(), errorCode: z.literal(true).optional(), recordId: z.literal(true).optional(), field: z.literal(true).optional(), message: z.literal(true).optional()
}).strict() as SchemaType;
