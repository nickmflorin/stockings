/* eslint-disable */
import { z } from 'zod';
import { NotificationEventCreateWithoutCreatedByInputObjectSchema } from './NotificationEventCreateWithoutCreatedByInput.schema';
import { NotificationEventUncheckedCreateWithoutCreatedByInputObjectSchema } from './NotificationEventUncheckedCreateWithoutCreatedByInput.schema';
import { NotificationEventCreateOrConnectWithoutCreatedByInputObjectSchema } from './NotificationEventCreateOrConnectWithoutCreatedByInput.schema';
import { NotificationEventUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from './NotificationEventUpsertWithWhereUniqueWithoutCreatedByInput.schema';
import { NotificationEventCreateManyCreatedByInputEnvelopeObjectSchema } from './NotificationEventCreateManyCreatedByInputEnvelope.schema';
import { NotificationEventWhereUniqueInputObjectSchema } from './NotificationEventWhereUniqueInput.schema';
import { NotificationEventUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from './NotificationEventUpdateWithWhereUniqueWithoutCreatedByInput.schema';
import { NotificationEventUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from './NotificationEventUpdateManyWithWhereWithoutCreatedByInput.schema';
import { NotificationEventScalarWhereInputObjectSchema } from './NotificationEventScalarWhereInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventUpdateManyWithoutCreatedByNestedInput>;
export const NotificationEventUpdateManyWithoutCreatedByNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => NotificationEventCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => NotificationEventCreateWithoutCreatedByInputObjectSchema).array(),
    z.lazy(() => NotificationEventUncheckedCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => NotificationEventUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => NotificationEventCreateOrConnectWithoutCreatedByInputObjectSchema),
    z.lazy(() => NotificationEventCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => NotificationEventUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema),
    z.lazy(() => NotificationEventUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(), createMany: z.lazy(() => NotificationEventCreateManyCreatedByInputEnvelopeObjectSchema).optional(), set: z.union([z.lazy(() => NotificationEventWhereUniqueInputObjectSchema),
    z.lazy(() => NotificationEventWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => NotificationEventWhereUniqueInputObjectSchema),
    z.lazy(() => NotificationEventWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => NotificationEventWhereUniqueInputObjectSchema),
    z.lazy(() => NotificationEventWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => NotificationEventWhereUniqueInputObjectSchema),
    z.lazy(() => NotificationEventWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => NotificationEventUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema),
    z.lazy(() => NotificationEventUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => NotificationEventUpdateManyWithWhereWithoutCreatedByInputObjectSchema),
    z.lazy(() => NotificationEventUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => NotificationEventScalarWhereInputObjectSchema),
    z.lazy(() => NotificationEventScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
