/* eslint-disable */
import { z } from 'zod';
import { ProductStatusSchema } from '../enums/ProductStatus.schema';
import { NestedEnumProductStatusNullableWithAggregatesFilterObjectSchema } from './NestedEnumProductStatusNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumProductStatusNullableFilterObjectSchema } from './NestedEnumProductStatusNullableFilter.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.EnumProductStatusNullableWithAggregatesFilter>;
export const EnumProductStatusNullableWithAggregatesFilterObjectSchema: SchemaType = z.object({
    equals: z.union([z.lazy(() => ProductStatusSchema),
    z.null()]).optional().nullable(), in: z.union([z.lazy(() => ProductStatusSchema).array(),
    z.null()]).optional().nullable(), notIn: z.union([z.lazy(() => ProductStatusSchema).array(),
    z.null()]).optional().nullable(), not: z.union([z.lazy(() => ProductStatusSchema),
    z.lazy(() => NestedEnumProductStatusNullableWithAggregatesFilterObjectSchema),
    z.null()]).optional().nullable(), _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(), _min: z.lazy(() => NestedEnumProductStatusNullableFilterObjectSchema).optional(), _max: z.lazy(() => NestedEnumProductStatusNullableFilterObjectSchema).optional()
}).strict() as SchemaType;
