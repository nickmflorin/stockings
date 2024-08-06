/* eslint-disable */
import { z } from 'zod';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema';
import { ProductUpdateWithoutNotificationEventsInputObjectSchema } from './ProductUpdateWithoutNotificationEventsInput.schema';
import { ProductUncheckedUpdateWithoutNotificationEventsInputObjectSchema } from './ProductUncheckedUpdateWithoutNotificationEventsInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutNotificationEventsInput>;
export const ProductUpdateToOneWithWhereWithoutNotificationEventsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductWhereInputObjectSchema).optional(), data: z.union([z.lazy(() => ProductUpdateWithoutNotificationEventsInputObjectSchema),
    z.lazy(() => ProductUncheckedUpdateWithoutNotificationEventsInputObjectSchema)])
}).strict() as SchemaType;
