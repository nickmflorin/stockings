/* eslint-disable */
import { z } from 'zod';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema';
import { ProductUpdateWithoutDelegate_aux_Product_notificationEvents_PriceChange_0InputObjectSchema } from './ProductUpdateWithoutDelegate_aux_Product_notificationEvents_PriceChange_0Input.schema';
import { ProductUncheckedUpdateWithoutDelegate_aux_Product_notificationEvents_PriceChange_0InputObjectSchema } from './ProductUncheckedUpdateWithoutDelegate_aux_Product_notificationEvents_PriceChange_0Input.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutDelegate_aux_Product_notificationEvents_PriceChange_0Input>;
export const ProductUpdateToOneWithWhereWithoutDelegate_aux_Product_notificationEvents_PriceChange_0InputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductWhereInputObjectSchema).optional(), data: z.union([z.lazy(() => ProductUpdateWithoutDelegate_aux_Product_notificationEvents_PriceChange_0InputObjectSchema),
    z.lazy(() => ProductUncheckedUpdateWithoutDelegate_aux_Product_notificationEvents_PriceChange_0InputObjectSchema)])
}).strict() as SchemaType;
