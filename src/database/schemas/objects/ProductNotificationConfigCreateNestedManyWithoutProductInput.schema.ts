/* eslint-disable */
import { z } from 'zod';
import { ProductNotificationConfigCreateWithoutProductInputObjectSchema } from './ProductNotificationConfigCreateWithoutProductInput.schema';
import { ProductNotificationConfigUncheckedCreateWithoutProductInputObjectSchema } from './ProductNotificationConfigUncheckedCreateWithoutProductInput.schema';
import { ProductNotificationConfigCreateOrConnectWithoutProductInputObjectSchema } from './ProductNotificationConfigCreateOrConnectWithoutProductInput.schema';
import { ProductNotificationConfigCreateManyProductInputEnvelopeObjectSchema } from './ProductNotificationConfigCreateManyProductInputEnvelope.schema';
import { ProductNotificationConfigWhereUniqueInputObjectSchema } from './ProductNotificationConfigWhereUniqueInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigCreateNestedManyWithoutProductInput>;
export const ProductNotificationConfigCreateNestedManyWithoutProductInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => ProductNotificationConfigCreateWithoutProductInputObjectSchema),
    z.lazy(() => ProductNotificationConfigCreateWithoutProductInputObjectSchema).array(),
    z.lazy(() => ProductNotificationConfigUncheckedCreateWithoutProductInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUncheckedCreateWithoutProductInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => ProductNotificationConfigCreateOrConnectWithoutProductInputObjectSchema),
    z.lazy(() => ProductNotificationConfigCreateOrConnectWithoutProductInputObjectSchema).array()]).optional(), createMany: z.lazy(() => ProductNotificationConfigCreateManyProductInputEnvelopeObjectSchema).optional(), connect: z.union([z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema),
    z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
