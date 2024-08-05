/* eslint-disable */
import { z } from 'zod';
import { UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { FloatNullableWithAggregatesFilterObjectSchema } from './FloatNullableWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { EnumProductStatusNullableWithAggregatesFilterObjectSchema } from './EnumProductStatusNullableWithAggregatesFilter.schema';
import { ProductStatusSchema } from '../enums/ProductStatus.schema';
import { BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { EnumProductRecordDataFieldNullableListFilterObjectSchema } from './EnumProductRecordDataFieldNullableListFilter.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductRecordScalarWhereWithAggregatesInput>;
export const ProductRecordScalarWhereWithAggregatesInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => ProductRecordScalarWhereWithAggregatesInputObjectSchema),
    z.lazy(() => ProductRecordScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), OR: z.lazy(() => ProductRecordScalarWhereWithAggregatesInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => ProductRecordScalarWhereWithAggregatesInputObjectSchema),
    z.lazy(() => ProductRecordScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema),
    z.string()]).optional(), createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), createdById: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema),
    z.string()]).optional(), updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), updatedById: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema),
    z.string()]).optional(), timestamp: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), productId: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema),
    z.string()]).optional(), price: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema),
    z.number(),
    z.null()]).optional().nullable(), rawPrice: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), status: z.union([z.lazy(() => EnumProductStatusNullableWithAggregatesFilterObjectSchema),
    z.lazy(() => ProductStatusSchema),
    z.null()]).optional().nullable(), wasManuallyCreated: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema),
    z.boolean()]).optional(), manuallyChangedFields: z.lazy(() => EnumProductRecordDataFieldNullableListFilterObjectSchema).optional()
}).strict() as SchemaType;
