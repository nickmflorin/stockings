/* eslint-disable */
import { z } from 'zod';
import { ProductRecordArgsObjectSchema } from './ProductRecordArgs.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductRecordErrorSelect>;
export const ProductRecordErrorSelectObjectSchema: SchemaType = z.object({
    id: z.boolean().optional(), errorId: z.boolean().optional(), errorCode: z.boolean().optional(), record: z.union([z.boolean(),
    z.lazy(() => ProductRecordArgsObjectSchema)]).optional(), recordId: z.boolean().optional(), field: z.boolean().optional(), message: z.boolean().optional()
}).strict() as SchemaType;
