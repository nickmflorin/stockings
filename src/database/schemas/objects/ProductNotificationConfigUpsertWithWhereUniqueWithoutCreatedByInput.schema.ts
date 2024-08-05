/* eslint-disable */
import { z } from 'zod';
import { ProductNotificationConfigWhereUniqueInputObjectSchema } from './ProductNotificationConfigWhereUniqueInput.schema';
import { ProductNotificationConfigUpdateWithoutCreatedByInputObjectSchema } from './ProductNotificationConfigUpdateWithoutCreatedByInput.schema';
import { ProductNotificationConfigUncheckedUpdateWithoutCreatedByInputObjectSchema } from './ProductNotificationConfigUncheckedUpdateWithoutCreatedByInput.schema';
import { ProductNotificationConfigCreateWithoutCreatedByInputObjectSchema } from './ProductNotificationConfigCreateWithoutCreatedByInput.schema';
import { ProductNotificationConfigUncheckedCreateWithoutCreatedByInputObjectSchema } from './ProductNotificationConfigUncheckedCreateWithoutCreatedByInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigUpsertWithWhereUniqueWithoutCreatedByInput>;
export const ProductNotificationConfigUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema), update: z.union([z.lazy(() => ProductNotificationConfigUpdateWithoutCreatedByInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUncheckedUpdateWithoutCreatedByInputObjectSchema)]), create: z.union([z.lazy(() => ProductNotificationConfigCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict() as SchemaType;
