/* eslint-disable */
import { z } from 'zod';
import { ProductNotificationConfigCreateWithoutUpdatedByInputObjectSchema } from './ProductNotificationConfigCreateWithoutUpdatedByInput.schema';
import { ProductNotificationConfigUncheckedCreateWithoutUpdatedByInputObjectSchema } from './ProductNotificationConfigUncheckedCreateWithoutUpdatedByInput.schema';
import { ProductNotificationConfigCreateOrConnectWithoutUpdatedByInputObjectSchema } from './ProductNotificationConfigCreateOrConnectWithoutUpdatedByInput.schema';
import { ProductNotificationConfigUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './ProductNotificationConfigUpsertWithWhereUniqueWithoutUpdatedByInput.schema';
import { ProductNotificationConfigCreateManyUpdatedByInputEnvelopeObjectSchema } from './ProductNotificationConfigCreateManyUpdatedByInputEnvelope.schema';
import { ProductNotificationConfigWhereUniqueInputObjectSchema } from './ProductNotificationConfigWhereUniqueInput.schema';
import { ProductNotificationConfigUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './ProductNotificationConfigUpdateWithWhereUniqueWithoutUpdatedByInput.schema';
import { ProductNotificationConfigUpdateManyWithWhereWithoutUpdatedByInputObjectSchema } from './ProductNotificationConfigUpdateManyWithWhereWithoutUpdatedByInput.schema';
import { ProductNotificationConfigScalarWhereInputObjectSchema } from './ProductNotificationConfigScalarWhereInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigUncheckedUpdateManyWithoutUpdatedByNestedInput>;
export const ProductNotificationConfigUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => ProductNotificationConfigCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => ProductNotificationConfigCreateWithoutUpdatedByInputObjectSchema).array(),
    z.lazy(() => ProductNotificationConfigUncheckedCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => ProductNotificationConfigCreateOrConnectWithoutUpdatedByInputObjectSchema),
    z.lazy(() => ProductNotificationConfigCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => ProductNotificationConfigUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(), createMany: z.lazy(() => ProductNotificationConfigCreateManyUpdatedByInputEnvelopeObjectSchema).optional(), set: z.union([z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema),
    z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema),
    z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema),
    z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema),
    z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => ProductNotificationConfigUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => ProductNotificationConfigUpdateManyWithWhereWithoutUpdatedByInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUpdateManyWithWhereWithoutUpdatedByInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => ProductNotificationConfigScalarWhereInputObjectSchema),
    z.lazy(() => ProductNotificationConfigScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
