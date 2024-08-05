/* eslint-disable */
import { z } from 'zod';
import { ProductNotificationConfigScalarWhereInputObjectSchema } from './ProductNotificationConfigScalarWhereInput.schema';
import { ProductNotificationConfigUpdateManyMutationInputObjectSchema } from './ProductNotificationConfigUpdateManyMutationInput.schema';
import { ProductNotificationConfigUncheckedUpdateManyWithoutUpdatedByInputObjectSchema } from './ProductNotificationConfigUncheckedUpdateManyWithoutUpdatedByInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigUpdateManyWithWhereWithoutUpdatedByInput>;
export const ProductNotificationConfigUpdateManyWithWhereWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductNotificationConfigScalarWhereInputObjectSchema), data: z.union([z.lazy(() => ProductNotificationConfigUpdateManyMutationInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUncheckedUpdateManyWithoutUpdatedByInputObjectSchema)])
}).strict() as SchemaType;
