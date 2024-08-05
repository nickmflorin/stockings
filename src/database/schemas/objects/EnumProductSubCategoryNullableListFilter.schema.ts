/* eslint-disable */
import { z } from 'zod';
import { ProductSubCategorySchema } from '../enums/ProductSubCategory.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.EnumProductSubCategoryNullableListFilter>;
export const EnumProductSubCategoryNullableListFilterObjectSchema: SchemaType = z.object({
    equals: z.union([z.lazy(() => ProductSubCategorySchema).array(),
    z.null()]).optional().nullable(), has: z.union([z.lazy(() => ProductSubCategorySchema),
    z.null()]).optional().nullable(), hasEvery: z.lazy(() => ProductSubCategorySchema).array().optional(), hasSome: z.lazy(() => ProductSubCategorySchema).array().optional(), isEmpty: z.boolean().optional()
}).strict() as SchemaType;
