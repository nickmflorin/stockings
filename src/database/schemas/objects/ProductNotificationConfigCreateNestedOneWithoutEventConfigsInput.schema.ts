/* eslint-disable */
import { z } from 'zod';
import { ProductNotificationConfigCreateWithoutEventConfigsInputObjectSchema } from './ProductNotificationConfigCreateWithoutEventConfigsInput.schema';
import { ProductNotificationConfigUncheckedCreateWithoutEventConfigsInputObjectSchema } from './ProductNotificationConfigUncheckedCreateWithoutEventConfigsInput.schema';
import { ProductNotificationConfigCreateOrConnectWithoutEventConfigsInputObjectSchema } from './ProductNotificationConfigCreateOrConnectWithoutEventConfigsInput.schema';
import { ProductNotificationConfigWhereUniqueInputObjectSchema } from './ProductNotificationConfigWhereUniqueInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigCreateNestedOneWithoutEventConfigsInput>;
export const ProductNotificationConfigCreateNestedOneWithoutEventConfigsInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => ProductNotificationConfigCreateWithoutEventConfigsInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUncheckedCreateWithoutEventConfigsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => ProductNotificationConfigCreateOrConnectWithoutEventConfigsInputObjectSchema).optional(), connect: z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema).optional()
}).strict() as SchemaType;
