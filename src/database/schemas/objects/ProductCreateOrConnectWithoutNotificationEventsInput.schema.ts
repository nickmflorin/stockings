/* eslint-disable */
import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutNotificationEventsInputObjectSchema } from './ProductCreateWithoutNotificationEventsInput.schema';
import { ProductUncheckedCreateWithoutNotificationEventsInputObjectSchema } from './ProductUncheckedCreateWithoutNotificationEventsInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductCreateOrConnectWithoutNotificationEventsInput>;
export const ProductCreateOrConnectWithoutNotificationEventsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => ProductCreateWithoutNotificationEventsInputObjectSchema),
    z.lazy(() => ProductUncheckedCreateWithoutNotificationEventsInputObjectSchema)])
}).strict() as SchemaType;
