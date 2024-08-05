/* eslint-disable */
import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumProductStatusNullableFilterObjectSchema } from './EnumProductStatusNullableFilter.schema';
import { ProductStatusSchema } from '../enums/ProductStatus.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { EnumProductCategoryFilterObjectSchema } from './EnumProductCategoryFilter.schema';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
import { EnumProductSubCategoryNullableListFilterObjectSchema } from './EnumProductSubCategoryNullableListFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { ProductRecordListRelationFilterObjectSchema } from './ProductRecordListRelationFilter.schema';
import { ProductNotificationConfigListRelationFilterObjectSchema } from './ProductNotificationConfigListRelationFilter.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductWhereInput>;
export const ProductWhereInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => ProductWhereInputObjectSchema),
    z.lazy(() => ProductWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => ProductWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => ProductWhereInputObjectSchema),
    z.lazy(() => ProductWhereInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), createdById: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), updatedById: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), name: z.union([z.lazy(() => StringNullableFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), slug: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), code: z.union([z.lazy(() => StringNullableFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), imageSrc: z.union([z.lazy(() => StringNullableFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), status: z.union([z.lazy(() => EnumProductStatusNullableFilterObjectSchema),
    z.lazy(() => ProductStatusSchema),
    z.null()]).optional().nullable(), statusRecordedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()]),
    z.null()]).optional().nullable(), price: z.union([z.lazy(() => FloatNullableFilterObjectSchema),
    z.number(),
    z.null()]).optional().nullable(), priceRecordedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()]),
    z.null()]).optional().nullable(), category: z.union([z.lazy(() => EnumProductCategoryFilterObjectSchema),
    z.lazy(() => ProductCategorySchema)]).optional(), subCategories: z.lazy(() => EnumProductSubCategoryNullableListFilterObjectSchema).optional(), createdBy: z.union([z.lazy(() => UserRelationFilterObjectSchema),
    z.lazy(() => UserWhereInputObjectSchema)]).optional(), updatedBy: z.union([z.lazy(() => UserRelationFilterObjectSchema),
    z.lazy(() => UserWhereInputObjectSchema)]).optional(), records: z.lazy(() => ProductRecordListRelationFilterObjectSchema).optional(), notificationConfigs: z.lazy(() => ProductNotificationConfigListRelationFilterObjectSchema).optional()
}).strict() as SchemaType;
