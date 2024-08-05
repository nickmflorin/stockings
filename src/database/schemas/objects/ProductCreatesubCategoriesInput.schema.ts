/* eslint-disable */
import { z } from 'zod';
import { ProductSubCategorySchema } from '../enums/ProductSubCategory.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductCreatesubCategoriesInput>;
export const ProductCreatesubCategoriesInputObjectSchema: SchemaType = z.object({
    set: z.lazy(() => ProductSubCategorySchema).array()
}).strict() as SchemaType;
