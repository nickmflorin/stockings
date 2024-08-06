/* eslint-disable */
import { z } from 'zod';
import { ProductUpdateWithoutNotificationEventsInputObjectSchema } from './ProductUpdateWithoutNotificationEventsInput.schema';
import { ProductUncheckedUpdateWithoutNotificationEventsInputObjectSchema } from './ProductUncheckedUpdateWithoutNotificationEventsInput.schema';
import { ProductCreateWithoutNotificationEventsInputObjectSchema } from './ProductCreateWithoutNotificationEventsInput.schema';
import { ProductUncheckedCreateWithoutNotificationEventsInputObjectSchema } from './ProductUncheckedCreateWithoutNotificationEventsInput.schema';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductUpsertWithoutNotificationEventsInput>;
export const ProductUpsertWithoutNotificationEventsInputObjectSchema: SchemaType = z.object({
    update: z.union([z.lazy(() => ProductUpdateWithoutNotificationEventsInputObjectSchema),
    z.lazy(() => ProductUncheckedUpdateWithoutNotificationEventsInputObjectSchema)]), create: z.union([z.lazy(() => ProductCreateWithoutNotificationEventsInputObjectSchema),
    z.lazy(() => ProductUncheckedCreateWithoutNotificationEventsInputObjectSchema)]), where: z.lazy(() => ProductWhereInputObjectSchema).optional()
}).strict() as SchemaType;
