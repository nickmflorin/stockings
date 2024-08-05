/* eslint-disable */
import { z } from 'zod';
import { ProductNotificationConfigScalarWhereInputObjectSchema } from './ProductNotificationConfigScalarWhereInput.schema';
import { ProductNotificationConfigUpdateManyMutationInputObjectSchema } from './ProductNotificationConfigUpdateManyMutationInput.schema';
import { ProductNotificationConfigUncheckedUpdateManyWithoutUserInputObjectSchema } from './ProductNotificationConfigUncheckedUpdateManyWithoutUserInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigUpdateManyWithWhereWithoutUserInput>;
export const ProductNotificationConfigUpdateManyWithWhereWithoutUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductNotificationConfigScalarWhereInputObjectSchema), data: z.union([z.lazy(() => ProductNotificationConfigUpdateManyMutationInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict() as SchemaType;
