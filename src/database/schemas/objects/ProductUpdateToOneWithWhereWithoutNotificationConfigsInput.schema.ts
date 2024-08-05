/* eslint-disable */
import { z } from 'zod';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema';
import { ProductUpdateWithoutNotificationConfigsInputObjectSchema } from './ProductUpdateWithoutNotificationConfigsInput.schema';
import { ProductUncheckedUpdateWithoutNotificationConfigsInputObjectSchema } from './ProductUncheckedUpdateWithoutNotificationConfigsInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutNotificationConfigsInput>;
export const ProductUpdateToOneWithWhereWithoutNotificationConfigsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductWhereInputObjectSchema).optional(), data: z.union([z.lazy(() => ProductUpdateWithoutNotificationConfigsInputObjectSchema),
    z.lazy(() => ProductUncheckedUpdateWithoutNotificationConfigsInputObjectSchema)])
}).strict() as SchemaType;
