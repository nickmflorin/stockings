/* eslint-disable */
import { z } from 'zod';
import { ProductNotificationConfigWhereUniqueInputObjectSchema } from './ProductNotificationConfigWhereUniqueInput.schema';
import { ProductNotificationConfigCreateWithoutProductInputObjectSchema } from './ProductNotificationConfigCreateWithoutProductInput.schema';
import { ProductNotificationConfigUncheckedCreateWithoutProductInputObjectSchema } from './ProductNotificationConfigUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigCreateOrConnectWithoutProductInput>;
export const ProductNotificationConfigCreateOrConnectWithoutProductInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => ProductNotificationConfigCreateWithoutProductInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUncheckedCreateWithoutProductInputObjectSchema)])
}).strict() as SchemaType;
