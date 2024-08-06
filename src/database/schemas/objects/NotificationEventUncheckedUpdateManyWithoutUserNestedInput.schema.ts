/* eslint-disable */
import { z } from 'zod';
import { NotificationEventCreateWithoutUserInputObjectSchema } from './NotificationEventCreateWithoutUserInput.schema';
import { NotificationEventUncheckedCreateWithoutUserInputObjectSchema } from './NotificationEventUncheckedCreateWithoutUserInput.schema';
import { NotificationEventCreateOrConnectWithoutUserInputObjectSchema } from './NotificationEventCreateOrConnectWithoutUserInput.schema';
import { NotificationEventUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './NotificationEventUpsertWithWhereUniqueWithoutUserInput.schema';
import { NotificationEventCreateManyUserInputEnvelopeObjectSchema } from './NotificationEventCreateManyUserInputEnvelope.schema';
import { NotificationEventWhereUniqueInputObjectSchema } from './NotificationEventWhereUniqueInput.schema';
import { NotificationEventUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './NotificationEventUpdateWithWhereUniqueWithoutUserInput.schema';
import { NotificationEventUpdateManyWithWhereWithoutUserInputObjectSchema } from './NotificationEventUpdateManyWithWhereWithoutUserInput.schema';
import { NotificationEventScalarWhereInputObjectSchema } from './NotificationEventScalarWhereInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventUncheckedUpdateManyWithoutUserNestedInput>;
export const NotificationEventUncheckedUpdateManyWithoutUserNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => NotificationEventCreateWithoutUserInputObjectSchema),
    z.lazy(() => NotificationEventCreateWithoutUserInputObjectSchema).array(),
    z.lazy(() => NotificationEventUncheckedCreateWithoutUserInputObjectSchema),
    z.lazy(() => NotificationEventUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => NotificationEventCreateOrConnectWithoutUserInputObjectSchema),
    z.lazy(() => NotificationEventCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => NotificationEventUpsertWithWhereUniqueWithoutUserInputObjectSchema),
    z.lazy(() => NotificationEventUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(), createMany: z.lazy(() => NotificationEventCreateManyUserInputEnvelopeObjectSchema).optional(), set: z.union([z.lazy(() => NotificationEventWhereUniqueInputObjectSchema),
    z.lazy(() => NotificationEventWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => NotificationEventWhereUniqueInputObjectSchema),
    z.lazy(() => NotificationEventWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => NotificationEventWhereUniqueInputObjectSchema),
    z.lazy(() => NotificationEventWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => NotificationEventWhereUniqueInputObjectSchema),
    z.lazy(() => NotificationEventWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => NotificationEventUpdateWithWhereUniqueWithoutUserInputObjectSchema),
    z.lazy(() => NotificationEventUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => NotificationEventUpdateManyWithWhereWithoutUserInputObjectSchema),
    z.lazy(() => NotificationEventUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => NotificationEventScalarWhereInputObjectSchema),
    z.lazy(() => NotificationEventScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
