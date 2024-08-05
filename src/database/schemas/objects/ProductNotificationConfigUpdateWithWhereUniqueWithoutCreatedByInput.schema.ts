/* eslint-disable */
import { z } from 'zod';
import { ProductNotificationConfigWhereUniqueInputObjectSchema } from './ProductNotificationConfigWhereUniqueInput.schema';
import { ProductNotificationConfigUpdateWithoutCreatedByInputObjectSchema } from './ProductNotificationConfigUpdateWithoutCreatedByInput.schema';
import { ProductNotificationConfigUncheckedUpdateWithoutCreatedByInputObjectSchema } from './ProductNotificationConfigUncheckedUpdateWithoutCreatedByInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigUpdateWithWhereUniqueWithoutCreatedByInput>;
export const ProductNotificationConfigUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => ProductNotificationConfigUpdateWithoutCreatedByInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUncheckedUpdateWithoutCreatedByInputObjectSchema)])
}).strict() as SchemaType;
