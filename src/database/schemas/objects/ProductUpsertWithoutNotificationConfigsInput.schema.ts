/* eslint-disable */
import { z } from 'zod';
import { ProductUpdateWithoutNotificationConfigsInputObjectSchema } from './ProductUpdateWithoutNotificationConfigsInput.schema';
import { ProductUncheckedUpdateWithoutNotificationConfigsInputObjectSchema } from './ProductUncheckedUpdateWithoutNotificationConfigsInput.schema';
import { ProductCreateWithoutNotificationConfigsInputObjectSchema } from './ProductCreateWithoutNotificationConfigsInput.schema';
import { ProductUncheckedCreateWithoutNotificationConfigsInputObjectSchema } from './ProductUncheckedCreateWithoutNotificationConfigsInput.schema';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductUpsertWithoutNotificationConfigsInput>;
export const ProductUpsertWithoutNotificationConfigsInputObjectSchema: SchemaType = z.object({
    update: z.union([z.lazy(() => ProductUpdateWithoutNotificationConfigsInputObjectSchema),
    z.lazy(() => ProductUncheckedUpdateWithoutNotificationConfigsInputObjectSchema)]), create: z.union([z.lazy(() => ProductCreateWithoutNotificationConfigsInputObjectSchema),
    z.lazy(() => ProductUncheckedCreateWithoutNotificationConfigsInputObjectSchema)]), where: z.lazy(() => ProductWhereInputObjectSchema).optional()
}).strict() as SchemaType;
