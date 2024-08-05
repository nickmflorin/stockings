/* eslint-disable */
import { z } from 'zod';
import { ProductNotificationConfigCreateWithoutCreatedByInputObjectSchema } from './ProductNotificationConfigCreateWithoutCreatedByInput.schema';
import { ProductNotificationConfigUncheckedCreateWithoutCreatedByInputObjectSchema } from './ProductNotificationConfigUncheckedCreateWithoutCreatedByInput.schema';
import { ProductNotificationConfigCreateOrConnectWithoutCreatedByInputObjectSchema } from './ProductNotificationConfigCreateOrConnectWithoutCreatedByInput.schema';
import { ProductNotificationConfigCreateManyCreatedByInputEnvelopeObjectSchema } from './ProductNotificationConfigCreateManyCreatedByInputEnvelope.schema';
import { ProductNotificationConfigWhereUniqueInputObjectSchema } from './ProductNotificationConfigWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigCreateNestedManyWithoutCreatedByInput>;
export const ProductNotificationConfigCreateNestedManyWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => ProductNotificationConfigCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => ProductNotificationConfigCreateWithoutCreatedByInputObjectSchema).array(),
    z.lazy(() => ProductNotificationConfigUncheckedCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => ProductNotificationConfigCreateOrConnectWithoutCreatedByInputObjectSchema),
    z.lazy(() => ProductNotificationConfigCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(), createMany: z.lazy(() => ProductNotificationConfigCreateManyCreatedByInputEnvelopeObjectSchema).optional(), connect: z.union([z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema),
    z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
