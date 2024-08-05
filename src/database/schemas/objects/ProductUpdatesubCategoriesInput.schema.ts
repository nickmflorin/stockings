/* eslint-disable */
import { z } from 'zod';
import { ProductSubCategorySchema } from '../enums/ProductSubCategory.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductUpdatesubCategoriesInput>;
export const ProductUpdatesubCategoriesInputObjectSchema: SchemaType = z.object({
    set: z.lazy(() => ProductSubCategorySchema).array().optional(), push: z.union([z.lazy(() => ProductSubCategorySchema),
    z.lazy(() => ProductSubCategorySchema).array()]).optional()
}).strict() as SchemaType;
