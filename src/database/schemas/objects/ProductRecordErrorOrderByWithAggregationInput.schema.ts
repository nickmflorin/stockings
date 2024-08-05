/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProductRecordErrorCountOrderByAggregateInputObjectSchema } from './ProductRecordErrorCountOrderByAggregateInput.schema';
import { ProductRecordErrorMaxOrderByAggregateInputObjectSchema } from './ProductRecordErrorMaxOrderByAggregateInput.schema';
import { ProductRecordErrorMinOrderByAggregateInputObjectSchema } from './ProductRecordErrorMinOrderByAggregateInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductRecordErrorOrderByWithAggregationInput>;
export const ProductRecordErrorOrderByWithAggregationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), errorId: z.lazy(() => SortOrderSchema).optional(), errorCode: z.lazy(() => SortOrderSchema).optional(), recordId: z.lazy(() => SortOrderSchema).optional(), field: z.lazy(() => SortOrderSchema).optional(), message: z.lazy(() => SortOrderSchema).optional(), _count: z.lazy(() => ProductRecordErrorCountOrderByAggregateInputObjectSchema).optional(), _max: z.lazy(() => ProductRecordErrorMaxOrderByAggregateInputObjectSchema).optional(), _min: z.lazy(() => ProductRecordErrorMinOrderByAggregateInputObjectSchema).optional()
}).strict() as SchemaType;
