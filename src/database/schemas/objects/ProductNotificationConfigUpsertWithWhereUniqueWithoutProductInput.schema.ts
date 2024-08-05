/* eslint-disable */
import { z } from 'zod';
import { ProductNotificationConfigWhereUniqueInputObjectSchema } from './ProductNotificationConfigWhereUniqueInput.schema';
import { ProductNotificationConfigUpdateWithoutProductInputObjectSchema } from './ProductNotificationConfigUpdateWithoutProductInput.schema';
import { ProductNotificationConfigUncheckedUpdateWithoutProductInputObjectSchema } from './ProductNotificationConfigUncheckedUpdateWithoutProductInput.schema';
import { ProductNotificationConfigCreateWithoutProductInputObjectSchema } from './ProductNotificationConfigCreateWithoutProductInput.schema';
import { ProductNotificationConfigUncheckedCreateWithoutProductInputObjectSchema } from './ProductNotificationConfigUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigUpsertWithWhereUniqueWithoutProductInput>;
export const ProductNotificationConfigUpsertWithWhereUniqueWithoutProductInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema), update: z.union([z.lazy(() => ProductNotificationConfigUpdateWithoutProductInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUncheckedUpdateWithoutProductInputObjectSchema)]), create: z.union([z.lazy(() => ProductNotificationConfigCreateWithoutProductInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUncheckedCreateWithoutProductInputObjectSchema)])
}).strict() as SchemaType;
