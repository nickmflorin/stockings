/* eslint-disable */
import { z } from 'zod';
import { ProductNotificationConfigCreateWithoutCreatedByInputObjectSchema } from './ProductNotificationConfigCreateWithoutCreatedByInput.schema';
import { ProductNotificationConfigUncheckedCreateWithoutCreatedByInputObjectSchema } from './ProductNotificationConfigUncheckedCreateWithoutCreatedByInput.schema';
import { ProductNotificationConfigCreateOrConnectWithoutCreatedByInputObjectSchema } from './ProductNotificationConfigCreateOrConnectWithoutCreatedByInput.schema';
import { ProductNotificationConfigUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from './ProductNotificationConfigUpsertWithWhereUniqueWithoutCreatedByInput.schema';
import { ProductNotificationConfigCreateManyCreatedByInputEnvelopeObjectSchema } from './ProductNotificationConfigCreateManyCreatedByInputEnvelope.schema';
import { ProductNotificationConfigWhereUniqueInputObjectSchema } from './ProductNotificationConfigWhereUniqueInput.schema';
import { ProductNotificationConfigUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from './ProductNotificationConfigUpdateWithWhereUniqueWithoutCreatedByInput.schema';
import { ProductNotificationConfigUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from './ProductNotificationConfigUpdateManyWithWhereWithoutCreatedByInput.schema';
import { ProductNotificationConfigScalarWhereInputObjectSchema } from './ProductNotificationConfigScalarWhereInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigUncheckedUpdateManyWithoutCreatedByNestedInput>;
export const ProductNotificationConfigUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => ProductNotificationConfigCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => ProductNotificationConfigCreateWithoutCreatedByInputObjectSchema).array(),
    z.lazy(() => ProductNotificationConfigUncheckedCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => ProductNotificationConfigCreateOrConnectWithoutCreatedByInputObjectSchema),
    z.lazy(() => ProductNotificationConfigCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => ProductNotificationConfigUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(), createMany: z.lazy(() => ProductNotificationConfigCreateManyCreatedByInputEnvelopeObjectSchema).optional(), set: z.union([z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema),
    z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema),
    z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema),
    z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema),
    z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => ProductNotificationConfigUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => ProductNotificationConfigUpdateManyWithWhereWithoutCreatedByInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => ProductNotificationConfigScalarWhereInputObjectSchema),
    z.lazy(() => ProductNotificationConfigScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
