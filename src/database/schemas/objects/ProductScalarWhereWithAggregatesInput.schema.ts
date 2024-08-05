/* eslint-disable */
import { z } from 'zod';
import { UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumProductStatusNullableWithAggregatesFilterObjectSchema } from './EnumProductStatusNullableWithAggregatesFilter.schema';
import { ProductStatusSchema } from '../enums/ProductStatus.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { FloatNullableWithAggregatesFilterObjectSchema } from './FloatNullableWithAggregatesFilter.schema';
import { EnumProductCategoryWithAggregatesFilterObjectSchema } from './EnumProductCategoryWithAggregatesFilter.schema';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
import { EnumProductSubCategoryNullableListFilterObjectSchema } from './EnumProductSubCategoryNullableListFilter.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductScalarWhereWithAggregatesInput>;
export const ProductScalarWhereWithAggregatesInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => ProductScalarWhereWithAggregatesInputObjectSchema),
    z.lazy(() => ProductScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), OR: z.lazy(() => ProductScalarWhereWithAggregatesInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => ProductScalarWhereWithAggregatesInputObjectSchema),
    z.lazy(() => ProductScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema),
    z.string()]).optional(), createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), createdById: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema),
    z.string()]).optional(), updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), updatedById: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema),
    z.string()]).optional(), name: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), slug: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
    z.string()]).optional(), code: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), imageSrc: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), status: z.union([z.lazy(() => EnumProductStatusNullableWithAggregatesFilterObjectSchema),
    z.lazy(() => ProductStatusSchema),
    z.null()]).optional().nullable(), statusRecordedAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()]),
    z.null()]).optional().nullable(), price: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema),
    z.number(),
    z.null()]).optional().nullable(), priceRecordedAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()]),
    z.null()]).optional().nullable(), category: z.union([z.lazy(() => EnumProductCategoryWithAggregatesFilterObjectSchema),
    z.lazy(() => ProductCategorySchema)]).optional(), subCategories: z.lazy(() => EnumProductSubCategoryNullableListFilterObjectSchema).optional()
}).strict() as SchemaType;
