/* eslint-disable */
import { z } from 'zod';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
import { NestedEnumProductCategoryFilterObjectSchema } from './NestedEnumProductCategoryFilter.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.EnumProductCategoryFilter>;
export const EnumProductCategoryFilterObjectSchema: SchemaType = z.object({
    equals: z.lazy(() => ProductCategorySchema).optional(), in: z.lazy(() => ProductCategorySchema).array().optional(), notIn: z.lazy(() => ProductCategorySchema).array().optional(), not: z.union([z.lazy(() => ProductCategorySchema),
    z.lazy(() => NestedEnumProductCategoryFilterObjectSchema)]).optional()
}).strict() as SchemaType;
