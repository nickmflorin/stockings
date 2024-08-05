/* eslint-disable */
import { z } from 'zod';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.EnumProductCategoryFieldUpdateOperationsInput>;
export const EnumProductCategoryFieldUpdateOperationsInputObjectSchema: SchemaType = z.object({
    set: z.lazy(() => ProductCategorySchema).optional()
}).strict() as SchemaType;
