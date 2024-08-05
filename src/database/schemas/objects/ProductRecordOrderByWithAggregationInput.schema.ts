/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ProductRecordCountOrderByAggregateInputObjectSchema } from './ProductRecordCountOrderByAggregateInput.schema';
import { ProductRecordAvgOrderByAggregateInputObjectSchema } from './ProductRecordAvgOrderByAggregateInput.schema';
import { ProductRecordMaxOrderByAggregateInputObjectSchema } from './ProductRecordMaxOrderByAggregateInput.schema';
import { ProductRecordMinOrderByAggregateInputObjectSchema } from './ProductRecordMinOrderByAggregateInput.schema';
import { ProductRecordSumOrderByAggregateInputObjectSchema } from './ProductRecordSumOrderByAggregateInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductRecordOrderByWithAggregationInput>;
export const ProductRecordOrderByWithAggregationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), createdAt: z.lazy(() => SortOrderSchema).optional(), createdById: z.lazy(() => SortOrderSchema).optional(), updatedAt: z.lazy(() => SortOrderSchema).optional(), updatedById: z.lazy(() => SortOrderSchema).optional(), timestamp: z.lazy(() => SortOrderSchema).optional(), productId: z.lazy(() => SortOrderSchema).optional(), price: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), rawPrice: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), status: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), wasManuallyCreated: z.lazy(() => SortOrderSchema).optional(), manuallyChangedFields: z.lazy(() => SortOrderSchema).optional(), _count: z.lazy(() => ProductRecordCountOrderByAggregateInputObjectSchema).optional(), _avg: z.lazy(() => ProductRecordAvgOrderByAggregateInputObjectSchema).optional(), _max: z.lazy(() => ProductRecordMaxOrderByAggregateInputObjectSchema).optional(), _min: z.lazy(() => ProductRecordMinOrderByAggregateInputObjectSchema).optional(), _sum: z.lazy(() => ProductRecordSumOrderByAggregateInputObjectSchema).optional()
}).strict() as SchemaType;
