/* eslint-disable */
import { z } from 'zod';
import { ProductNotificationConfigScalarWhereInputObjectSchema } from './ProductNotificationConfigScalarWhereInput.schema';
import { ProductNotificationConfigUpdateManyMutationInputObjectSchema } from './ProductNotificationConfigUpdateManyMutationInput.schema';
import { ProductNotificationConfigUncheckedUpdateManyWithoutCreatedByInputObjectSchema } from './ProductNotificationConfigUncheckedUpdateManyWithoutCreatedByInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigUpdateManyWithWhereWithoutCreatedByInput>;
export const ProductNotificationConfigUpdateManyWithWhereWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductNotificationConfigScalarWhereInputObjectSchema), data: z.union([z.lazy(() => ProductNotificationConfigUpdateManyMutationInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUncheckedUpdateManyWithoutCreatedByInputObjectSchema)])
}).strict() as SchemaType;
