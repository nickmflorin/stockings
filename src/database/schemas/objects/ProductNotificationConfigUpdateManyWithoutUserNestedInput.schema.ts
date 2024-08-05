/* eslint-disable */
import { z } from 'zod';
import { ProductNotificationConfigCreateWithoutUserInputObjectSchema } from './ProductNotificationConfigCreateWithoutUserInput.schema';
import { ProductNotificationConfigUncheckedCreateWithoutUserInputObjectSchema } from './ProductNotificationConfigUncheckedCreateWithoutUserInput.schema';
import { ProductNotificationConfigCreateOrConnectWithoutUserInputObjectSchema } from './ProductNotificationConfigCreateOrConnectWithoutUserInput.schema';
import { ProductNotificationConfigUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './ProductNotificationConfigUpsertWithWhereUniqueWithoutUserInput.schema';
import { ProductNotificationConfigCreateManyUserInputEnvelopeObjectSchema } from './ProductNotificationConfigCreateManyUserInputEnvelope.schema';
import { ProductNotificationConfigWhereUniqueInputObjectSchema } from './ProductNotificationConfigWhereUniqueInput.schema';
import { ProductNotificationConfigUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './ProductNotificationConfigUpdateWithWhereUniqueWithoutUserInput.schema';
import { ProductNotificationConfigUpdateManyWithWhereWithoutUserInputObjectSchema } from './ProductNotificationConfigUpdateManyWithWhereWithoutUserInput.schema';
import { ProductNotificationConfigScalarWhereInputObjectSchema } from './ProductNotificationConfigScalarWhereInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigUpdateManyWithoutUserNestedInput>;
export const ProductNotificationConfigUpdateManyWithoutUserNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => ProductNotificationConfigCreateWithoutUserInputObjectSchema),
    z.lazy(() => ProductNotificationConfigCreateWithoutUserInputObjectSchema).array(),
    z.lazy(() => ProductNotificationConfigUncheckedCreateWithoutUserInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => ProductNotificationConfigCreateOrConnectWithoutUserInputObjectSchema),
    z.lazy(() => ProductNotificationConfigCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => ProductNotificationConfigUpsertWithWhereUniqueWithoutUserInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(), createMany: z.lazy(() => ProductNotificationConfigCreateManyUserInputEnvelopeObjectSchema).optional(), set: z.union([z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema),
    z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema),
    z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema),
    z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema),
    z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => ProductNotificationConfigUpdateWithWhereUniqueWithoutUserInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => ProductNotificationConfigUpdateManyWithWhereWithoutUserInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => ProductNotificationConfigScalarWhereInputObjectSchema),
    z.lazy(() => ProductNotificationConfigScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
