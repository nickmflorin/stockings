/* eslint-disable */
import { z } from 'zod';
import { ProductNotificationConfigWhereUniqueInputObjectSchema } from './ProductNotificationConfigWhereUniqueInput.schema';
import { ProductNotificationConfigUpdateWithoutUpdatedByInputObjectSchema } from './ProductNotificationConfigUpdateWithoutUpdatedByInput.schema';
import { ProductNotificationConfigUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './ProductNotificationConfigUncheckedUpdateWithoutUpdatedByInput.schema';
import { ProductNotificationConfigCreateWithoutUpdatedByInputObjectSchema } from './ProductNotificationConfigCreateWithoutUpdatedByInput.schema';
import { ProductNotificationConfigUncheckedCreateWithoutUpdatedByInputObjectSchema } from './ProductNotificationConfigUncheckedCreateWithoutUpdatedByInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigUpsertWithWhereUniqueWithoutUpdatedByInput>;
export const ProductNotificationConfigUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema), update: z.union([z.lazy(() => ProductNotificationConfigUpdateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUncheckedUpdateWithoutUpdatedByInputObjectSchema)]), create: z.union([z.lazy(() => ProductNotificationConfigCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict() as SchemaType;
