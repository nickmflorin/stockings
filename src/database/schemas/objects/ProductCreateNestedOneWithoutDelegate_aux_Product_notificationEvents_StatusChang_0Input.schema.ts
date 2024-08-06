/* eslint-disable */
import { z } from 'zod';
import { ProductCreateWithoutDelegate_aux_Product_notificationEvents_StatusChang_0InputObjectSchema } from './ProductCreateWithoutDelegate_aux_Product_notificationEvents_StatusChang_0Input.schema';
import { ProductUncheckedCreateWithoutDelegate_aux_Product_notificationEvents_StatusChang_0InputObjectSchema } from './ProductUncheckedCreateWithoutDelegate_aux_Product_notificationEvents_StatusChang_0Input.schema';
import { ProductCreateOrConnectWithoutDelegate_aux_Product_notificationEvents_StatusChang_0InputObjectSchema } from './ProductCreateOrConnectWithoutDelegate_aux_Product_notificationEvents_StatusChang_0Input.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductCreateNestedOneWithoutDelegate_aux_Product_notificationEvents_StatusChang_0Input>;
export const ProductCreateNestedOneWithoutDelegate_aux_Product_notificationEvents_StatusChang_0InputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => ProductCreateWithoutDelegate_aux_Product_notificationEvents_StatusChang_0InputObjectSchema),
    z.lazy(() => ProductUncheckedCreateWithoutDelegate_aux_Product_notificationEvents_StatusChang_0InputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutDelegate_aux_Product_notificationEvents_StatusChang_0InputObjectSchema).optional(), connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional()
}).strict() as SchemaType;
