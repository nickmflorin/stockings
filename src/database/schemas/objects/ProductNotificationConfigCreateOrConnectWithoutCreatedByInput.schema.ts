/* eslint-disable */
import { z } from 'zod';
import { ProductNotificationConfigWhereUniqueInputObjectSchema } from './ProductNotificationConfigWhereUniqueInput.schema';
import { ProductNotificationConfigCreateWithoutCreatedByInputObjectSchema } from './ProductNotificationConfigCreateWithoutCreatedByInput.schema';
import { ProductNotificationConfigUncheckedCreateWithoutCreatedByInputObjectSchema } from './ProductNotificationConfigUncheckedCreateWithoutCreatedByInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigCreateOrConnectWithoutCreatedByInput>;
export const ProductNotificationConfigCreateOrConnectWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => ProductNotificationConfigCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict() as SchemaType;
