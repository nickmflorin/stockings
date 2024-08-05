/* eslint-disable */
import { z } from 'zod';
import { ProductNotificationConfigUpdateWithoutEventConfigsInputObjectSchema } from './ProductNotificationConfigUpdateWithoutEventConfigsInput.schema';
import { ProductNotificationConfigUncheckedUpdateWithoutEventConfigsInputObjectSchema } from './ProductNotificationConfigUncheckedUpdateWithoutEventConfigsInput.schema';
import { ProductNotificationConfigCreateWithoutEventConfigsInputObjectSchema } from './ProductNotificationConfigCreateWithoutEventConfigsInput.schema';
import { ProductNotificationConfigUncheckedCreateWithoutEventConfigsInputObjectSchema } from './ProductNotificationConfigUncheckedCreateWithoutEventConfigsInput.schema';
import { ProductNotificationConfigWhereInputObjectSchema } from './ProductNotificationConfigWhereInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigUpsertWithoutEventConfigsInput>;
export const ProductNotificationConfigUpsertWithoutEventConfigsInputObjectSchema: SchemaType = z.object({
    update: z.union([z.lazy(() => ProductNotificationConfigUpdateWithoutEventConfigsInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUncheckedUpdateWithoutEventConfigsInputObjectSchema)]), create: z.union([z.lazy(() => ProductNotificationConfigCreateWithoutEventConfigsInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUncheckedCreateWithoutEventConfigsInputObjectSchema)]), where: z.lazy(() => ProductNotificationConfigWhereInputObjectSchema).optional()
}).strict() as SchemaType;
