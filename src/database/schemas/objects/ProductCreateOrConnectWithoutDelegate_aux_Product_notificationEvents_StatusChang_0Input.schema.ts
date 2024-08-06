/* eslint-disable */
import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutDelegate_aux_Product_notificationEvents_StatusChang_0InputObjectSchema } from './ProductCreateWithoutDelegate_aux_Product_notificationEvents_StatusChang_0Input.schema';
import { ProductUncheckedCreateWithoutDelegate_aux_Product_notificationEvents_StatusChang_0InputObjectSchema } from './ProductUncheckedCreateWithoutDelegate_aux_Product_notificationEvents_StatusChang_0Input.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductCreateOrConnectWithoutDelegate_aux_Product_notificationEvents_StatusChang_0Input>;
export const ProductCreateOrConnectWithoutDelegate_aux_Product_notificationEvents_StatusChang_0InputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => ProductCreateWithoutDelegate_aux_Product_notificationEvents_StatusChang_0InputObjectSchema),
    z.lazy(() => ProductUncheckedCreateWithoutDelegate_aux_Product_notificationEvents_StatusChang_0InputObjectSchema)])
}).strict() as SchemaType;
