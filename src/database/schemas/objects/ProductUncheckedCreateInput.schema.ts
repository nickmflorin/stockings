/* eslint-disable */
import { z } from 'zod';
import { ProductStatusSchema } from '../enums/ProductStatus.schema';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
import { ProductCreatesubCategoriesInputObjectSchema } from './ProductCreatesubCategoriesInput.schema';
import { ProductSubCategorySchema } from '../enums/ProductSubCategory.schema';
import { ProductRecordUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './ProductRecordUncheckedCreateNestedManyWithoutProductInput.schema';
import { ProductNotificationConfigUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './ProductNotificationConfigUncheckedCreateNestedManyWithoutProductInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductUncheckedCreateInput>;
export const ProductUncheckedCreateInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]), createdById: z.string(), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]), updatedById: z.string(), name: z.union([z.string(),
    z.null()]).optional().nullable(), slug: z.string(), code: z.union([z.string(),
    z.null()]).optional().nullable(), imageSrc: z.union([z.string(),
    z.null()]).optional().nullable(), status: z.union([z.lazy(() => ProductStatusSchema),
    z.null()]).optional().nullable(), statusRecordedAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.null()]).optional().nullable(), price: z.union([z.number(),
    z.null()]).optional().nullable(), priceRecordedAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.null()]).optional().nullable(), category: z.lazy(() => ProductCategorySchema), subCategories: z.union([z.lazy(() => ProductCreatesubCategoriesInputObjectSchema),
    z.lazy(() => ProductSubCategorySchema).array()]).optional(), records: z.lazy(() => ProductRecordUncheckedCreateNestedManyWithoutProductInputObjectSchema).optional(), notificationConfigs: z.lazy(() => ProductNotificationConfigUncheckedCreateNestedManyWithoutProductInputObjectSchema).optional()
}).strict() as SchemaType;
