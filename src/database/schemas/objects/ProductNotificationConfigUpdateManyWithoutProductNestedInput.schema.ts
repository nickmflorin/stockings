/* eslint-disable */
import { z } from 'zod';
import { ProductNotificationConfigCreateWithoutProductInputObjectSchema } from './ProductNotificationConfigCreateWithoutProductInput.schema';
import { ProductNotificationConfigUncheckedCreateWithoutProductInputObjectSchema } from './ProductNotificationConfigUncheckedCreateWithoutProductInput.schema';
import { ProductNotificationConfigCreateOrConnectWithoutProductInputObjectSchema } from './ProductNotificationConfigCreateOrConnectWithoutProductInput.schema';
import { ProductNotificationConfigUpsertWithWhereUniqueWithoutProductInputObjectSchema } from './ProductNotificationConfigUpsertWithWhereUniqueWithoutProductInput.schema';
import { ProductNotificationConfigCreateManyProductInputEnvelopeObjectSchema } from './ProductNotificationConfigCreateManyProductInputEnvelope.schema';
import { ProductNotificationConfigWhereUniqueInputObjectSchema } from './ProductNotificationConfigWhereUniqueInput.schema';
import { ProductNotificationConfigUpdateWithWhereUniqueWithoutProductInputObjectSchema } from './ProductNotificationConfigUpdateWithWhereUniqueWithoutProductInput.schema';
import { ProductNotificationConfigUpdateManyWithWhereWithoutProductInputObjectSchema } from './ProductNotificationConfigUpdateManyWithWhereWithoutProductInput.schema';
import { ProductNotificationConfigScalarWhereInputObjectSchema } from './ProductNotificationConfigScalarWhereInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigUpdateManyWithoutProductNestedInput>;
export const ProductNotificationConfigUpdateManyWithoutProductNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => ProductNotificationConfigCreateWithoutProductInputObjectSchema),
    z.lazy(() => ProductNotificationConfigCreateWithoutProductInputObjectSchema).array(),
    z.lazy(() => ProductNotificationConfigUncheckedCreateWithoutProductInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUncheckedCreateWithoutProductInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => ProductNotificationConfigCreateOrConnectWithoutProductInputObjectSchema),
    z.lazy(() => ProductNotificationConfigCreateOrConnectWithoutProductInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => ProductNotificationConfigUpsertWithWhereUniqueWithoutProductInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUpsertWithWhereUniqueWithoutProductInputObjectSchema).array()]).optional(), createMany: z.lazy(() => ProductNotificationConfigCreateManyProductInputEnvelopeObjectSchema).optional(), set: z.union([z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema),
    z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema),
    z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema),
    z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema),
    z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => ProductNotificationConfigUpdateWithWhereUniqueWithoutProductInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUpdateWithWhereUniqueWithoutProductInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => ProductNotificationConfigUpdateManyWithWhereWithoutProductInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUpdateManyWithWhereWithoutProductInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => ProductNotificationConfigScalarWhereInputObjectSchema),
    z.lazy(() => ProductNotificationConfigScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
