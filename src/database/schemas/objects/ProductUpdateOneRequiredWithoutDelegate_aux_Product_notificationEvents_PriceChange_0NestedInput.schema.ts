/* eslint-disable */
import { z } from 'zod';
import { ProductCreateWithoutDelegate_aux_Product_notificationEvents_PriceChange_0InputObjectSchema } from './ProductCreateWithoutDelegate_aux_Product_notificationEvents_PriceChange_0Input.schema';
import { ProductUncheckedCreateWithoutDelegate_aux_Product_notificationEvents_PriceChange_0InputObjectSchema } from './ProductUncheckedCreateWithoutDelegate_aux_Product_notificationEvents_PriceChange_0Input.schema';
import { ProductCreateOrConnectWithoutDelegate_aux_Product_notificationEvents_PriceChange_0InputObjectSchema } from './ProductCreateOrConnectWithoutDelegate_aux_Product_notificationEvents_PriceChange_0Input.schema';
import { ProductUpsertWithoutDelegate_aux_Product_notificationEvents_PriceChange_0InputObjectSchema } from './ProductUpsertWithoutDelegate_aux_Product_notificationEvents_PriceChange_0Input.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateToOneWithWhereWithoutDelegate_aux_Product_notificationEvents_PriceChange_0InputObjectSchema } from './ProductUpdateToOneWithWhereWithoutDelegate_aux_Product_notificationEvents_PriceChange_0Input.schema';
import { ProductUpdateWithoutDelegate_aux_Product_notificationEvents_PriceChange_0InputObjectSchema } from './ProductUpdateWithoutDelegate_aux_Product_notificationEvents_PriceChange_0Input.schema';
import { ProductUncheckedUpdateWithoutDelegate_aux_Product_notificationEvents_PriceChange_0InputObjectSchema } from './ProductUncheckedUpdateWithoutDelegate_aux_Product_notificationEvents_PriceChange_0Input.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductUpdateOneRequiredWithoutDelegate_aux_Product_notificationEvents_PriceChange_0NestedInput>;
export const ProductUpdateOneRequiredWithoutDelegate_aux_Product_notificationEvents_PriceChange_0NestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => ProductCreateWithoutDelegate_aux_Product_notificationEvents_PriceChange_0InputObjectSchema),
    z.lazy(() => ProductUncheckedCreateWithoutDelegate_aux_Product_notificationEvents_PriceChange_0InputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutDelegate_aux_Product_notificationEvents_PriceChange_0InputObjectSchema).optional(), upsert: z.lazy(() => ProductUpsertWithoutDelegate_aux_Product_notificationEvents_PriceChange_0InputObjectSchema).optional(), connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(), update: z.union([z.lazy(() => ProductUpdateToOneWithWhereWithoutDelegate_aux_Product_notificationEvents_PriceChange_0InputObjectSchema),
    z.lazy(() => ProductUpdateWithoutDelegate_aux_Product_notificationEvents_PriceChange_0InputObjectSchema),
    z.lazy(() => ProductUncheckedUpdateWithoutDelegate_aux_Product_notificationEvents_PriceChange_0InputObjectSchema)]).optional()
}).strict() as SchemaType;
