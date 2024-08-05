/* eslint-disable */
import { z } from 'zod';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
import { NestedEnumProductCategoryWithAggregatesFilterObjectSchema } from './NestedEnumProductCategoryWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumProductCategoryFilterObjectSchema } from './NestedEnumProductCategoryFilter.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.EnumProductCategoryWithAggregatesFilter>;
export const EnumProductCategoryWithAggregatesFilterObjectSchema: SchemaType = z.object({
    equals: z.lazy(() => ProductCategorySchema).optional(), in: z.lazy(() => ProductCategorySchema).array().optional(), notIn: z.lazy(() => ProductCategorySchema).array().optional(), not: z.union([z.lazy(() => ProductCategorySchema),
    z.lazy(() => NestedEnumProductCategoryWithAggregatesFilterObjectSchema)]).optional(), _count: z.lazy(() => NestedIntFilterObjectSchema).optional(), _min: z.lazy(() => NestedEnumProductCategoryFilterObjectSchema).optional(), _max: z.lazy(() => NestedEnumProductCategoryFilterObjectSchema).optional()
}).strict() as SchemaType;
