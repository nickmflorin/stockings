/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProductRecordOrderByWithRelationInputObjectSchema } from './ProductRecordOrderByWithRelationInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductRecordErrorOrderByWithRelationInput>;
export const ProductRecordErrorOrderByWithRelationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), errorId: z.lazy(() => SortOrderSchema).optional(), errorCode: z.lazy(() => SortOrderSchema).optional(), recordId: z.lazy(() => SortOrderSchema).optional(), field: z.lazy(() => SortOrderSchema).optional(), message: z.lazy(() => SortOrderSchema).optional(), record: z.lazy(() => ProductRecordOrderByWithRelationInputObjectSchema).optional()
}).strict() as SchemaType;
