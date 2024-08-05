/* eslint-disable */
import { z } from 'zod';
import { ProductNotificationConfigScalarWhereInputObjectSchema } from './ProductNotificationConfigScalarWhereInput.schema';
import { ProductNotificationConfigUpdateManyMutationInputObjectSchema } from './ProductNotificationConfigUpdateManyMutationInput.schema';
import { ProductNotificationConfigUncheckedUpdateManyWithoutProductInputObjectSchema } from './ProductNotificationConfigUncheckedUpdateManyWithoutProductInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigUpdateManyWithWhereWithoutProductInput>;
export const ProductNotificationConfigUpdateManyWithWhereWithoutProductInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductNotificationConfigScalarWhereInputObjectSchema), data: z.union([z.lazy(() => ProductNotificationConfigUpdateManyMutationInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUncheckedUpdateManyWithoutProductInputObjectSchema)])
}).strict() as SchemaType;
