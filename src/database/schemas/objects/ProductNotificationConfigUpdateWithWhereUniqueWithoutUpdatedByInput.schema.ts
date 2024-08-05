/* eslint-disable */
import { z } from 'zod';
import { ProductNotificationConfigWhereUniqueInputObjectSchema } from './ProductNotificationConfigWhereUniqueInput.schema';
import { ProductNotificationConfigUpdateWithoutUpdatedByInputObjectSchema } from './ProductNotificationConfigUpdateWithoutUpdatedByInput.schema';
import { ProductNotificationConfigUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './ProductNotificationConfigUncheckedUpdateWithoutUpdatedByInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigUpdateWithWhereUniqueWithoutUpdatedByInput>;
export const ProductNotificationConfigUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => ProductNotificationConfigUpdateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUncheckedUpdateWithoutUpdatedByInputObjectSchema)])
}).strict() as SchemaType;
