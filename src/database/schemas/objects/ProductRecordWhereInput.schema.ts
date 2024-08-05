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
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { ProductRelationFilterObjectSchema } from './ProductRelationFilter.schema';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema';
import { ProductRecordErrorListRelationFilterObjectSchema } from './ProductRecordErrorListRelationFilter.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductRecordWhereInput>;
export const ProductRecordWhereInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => ProductRecordWhereInputObjectSchema),
    z.lazy(() => ProductRecordWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => ProductRecordWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => ProductRecordWhereInputObjectSchema),
    z.lazy(() => ProductRecordWhereInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => UuidFilterObjectSchema),
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
    z.boolean()]).optional(), manuallyChangedFields: z.lazy(() => EnumProductRecordDataFieldNullableListFilterObjectSchema).optional(), createdBy: z.union([z.lazy(() => UserRelationFilterObjectSchema),
    z.lazy(() => UserWhereInputObjectSchema)]).optional(), updatedBy: z.union([z.lazy(() => UserRelationFilterObjectSchema),
    z.lazy(() => UserWhereInputObjectSchema)]).optional(), product: z.union([z.lazy(() => ProductRelationFilterObjectSchema),
    z.lazy(() => ProductWhereInputObjectSchema)]).optional(), errors: z.lazy(() => ProductRecordErrorListRelationFilterObjectSchema).optional()
}).strict() as SchemaType;
