/* eslint-disable */
import { z } from 'zod';
import { ProductNotificationConfigCreateWithoutEventConfigsInputObjectSchema } from './ProductNotificationConfigCreateWithoutEventConfigsInput.schema';
import { ProductNotificationConfigUncheckedCreateWithoutEventConfigsInputObjectSchema } from './ProductNotificationConfigUncheckedCreateWithoutEventConfigsInput.schema';
import { ProductNotificationConfigCreateOrConnectWithoutEventConfigsInputObjectSchema } from './ProductNotificationConfigCreateOrConnectWithoutEventConfigsInput.schema';
import { ProductNotificationConfigUpsertWithoutEventConfigsInputObjectSchema } from './ProductNotificationConfigUpsertWithoutEventConfigsInput.schema';
import { ProductNotificationConfigWhereUniqueInputObjectSchema } from './ProductNotificationConfigWhereUniqueInput.schema';
import { ProductNotificationConfigUpdateToOneWithWhereWithoutEventConfigsInputObjectSchema } from './ProductNotificationConfigUpdateToOneWithWhereWithoutEventConfigsInput.schema';
import { ProductNotificationConfigUpdateWithoutEventConfigsInputObjectSchema } from './ProductNotificationConfigUpdateWithoutEventConfigsInput.schema';
import { ProductNotificationConfigUncheckedUpdateWithoutEventConfigsInputObjectSchema } from './ProductNotificationConfigUncheckedUpdateWithoutEventConfigsInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigUpdateOneRequiredWithoutEventConfigsNestedInput>;
export const ProductNotificationConfigUpdateOneRequiredWithoutEventConfigsNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => ProductNotificationConfigCreateWithoutEventConfigsInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUncheckedCreateWithoutEventConfigsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => ProductNotificationConfigCreateOrConnectWithoutEventConfigsInputObjectSchema).optional(), upsert: z.lazy(() => ProductNotificationConfigUpsertWithoutEventConfigsInputObjectSchema).optional(), connect: z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema).optional(), update: z.union([z.lazy(() => ProductNotificationConfigUpdateToOneWithWhereWithoutEventConfigsInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUpdateWithoutEventConfigsInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUncheckedUpdateWithoutEventConfigsInputObjectSchema)]).optional()
}).strict() as SchemaType;
