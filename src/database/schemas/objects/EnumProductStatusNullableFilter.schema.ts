/* eslint-disable */
import { z } from 'zod';
import { ProductStatusSchema } from '../enums/ProductStatus.schema';
import { NestedEnumProductStatusNullableFilterObjectSchema } from './NestedEnumProductStatusNullableFilter.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.EnumProductStatusNullableFilter>;
export const EnumProductStatusNullableFilterObjectSchema: SchemaType = z.object({
    equals: z.union([z.lazy(() => ProductStatusSchema),
    z.null()]).optional().nullable(), in: z.union([z.lazy(() => ProductStatusSchema).array(),
    z.null()]).optional().nullable(), notIn: z.union([z.lazy(() => ProductStatusSchema).array(),
    z.null()]).optional().nullable(), not: z.union([z.lazy(() => ProductStatusSchema),
    z.lazy(() => NestedEnumProductStatusNullableFilterObjectSchema),
    z.null()]).optional().nullable()
}).strict() as SchemaType;
