/* eslint-disable */
import { z } from 'zod';
import { ProductUpdateWithoutDelegate_aux_Product_notificationEvents_StatusChang_0InputObjectSchema } from './ProductUpdateWithoutDelegate_aux_Product_notificationEvents_StatusChang_0Input.schema';
import { ProductUncheckedUpdateWithoutDelegate_aux_Product_notificationEvents_StatusChang_0InputObjectSchema } from './ProductUncheckedUpdateWithoutDelegate_aux_Product_notificationEvents_StatusChang_0Input.schema';
import { ProductCreateWithoutDelegate_aux_Product_notificationEvents_StatusChang_0InputObjectSchema } from './ProductCreateWithoutDelegate_aux_Product_notificationEvents_StatusChang_0Input.schema';
import { ProductUncheckedCreateWithoutDelegate_aux_Product_notificationEvents_StatusChang_0InputObjectSchema } from './ProductUncheckedCreateWithoutDelegate_aux_Product_notificationEvents_StatusChang_0Input.schema';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductUpsertWithoutDelegate_aux_Product_notificationEvents_StatusChang_0Input>;
export const ProductUpsertWithoutDelegate_aux_Product_notificationEvents_StatusChang_0InputObjectSchema: SchemaType = z.object({
    update: z.union([z.lazy(() => ProductUpdateWithoutDelegate_aux_Product_notificationEvents_StatusChang_0InputObjectSchema),
    z.lazy(() => ProductUncheckedUpdateWithoutDelegate_aux_Product_notificationEvents_StatusChang_0InputObjectSchema)]), create: z.union([z.lazy(() => ProductCreateWithoutDelegate_aux_Product_notificationEvents_StatusChang_0InputObjectSchema),
    z.lazy(() => ProductUncheckedCreateWithoutDelegate_aux_Product_notificationEvents_StatusChang_0InputObjectSchema)]), where: z.lazy(() => ProductWhereInputObjectSchema).optional()
}).strict() as SchemaType;
