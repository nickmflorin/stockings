/* eslint-disable */
import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumProductStatusNullableFilterObjectSchema } from './EnumProductStatusNullableFilter.schema';
import { ProductStatusSchema } from '../enums/ProductStatus.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { EnumProductRecordDataFieldNullableListFilterObjectSchema } from './EnumProductRecordDataFieldNullableListFilter.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductRecordScalarWhereInput>;
export const ProductRecordScalarWhereInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => ProductRecordScalarWhereInputObjectSchema),
    z.lazy(() => ProductRecordScalarWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => ProductRecordScalarWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => ProductRecordScalarWhereInputObjectSchema),
    z.lazy(() => ProductRecordScalarWhereInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), createdById: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), updatedById: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), timestamp: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), productId: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), price: z.union([z.lazy(() => FloatNullableFilterObjectSchema),
    z.number(),
    z.null()]).optional().nullable(), rawPrice: z.union([z.lazy(() => StringNullableFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), status: z.union([z.lazy(() => EnumProductStatusNullableFilterObjectSchema),
    z.lazy(() => ProductStatusSchema),
    z.null()]).optional().nullable(), wasManuallyCreated: z.union([z.lazy(() => BoolFilterObjectSchema),
    z.boolean()]).optional(), manuallyChangedFields: z.lazy(() => EnumProductRecordDataFieldNullableListFilterObjectSchema).optional()
}).strict() as SchemaType;
