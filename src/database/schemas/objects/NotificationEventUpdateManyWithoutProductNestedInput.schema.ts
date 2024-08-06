/* eslint-disable */
import { z } from 'zod';
import { NotificationEventCreateWithoutProductInputObjectSchema } from './NotificationEventCreateWithoutProductInput.schema';
import { NotificationEventUncheckedCreateWithoutProductInputObjectSchema } from './NotificationEventUncheckedCreateWithoutProductInput.schema';
import { NotificationEventCreateOrConnectWithoutProductInputObjectSchema } from './NotificationEventCreateOrConnectWithoutProductInput.schema';
import { NotificationEventUpsertWithWhereUniqueWithoutProductInputObjectSchema } from './NotificationEventUpsertWithWhereUniqueWithoutProductInput.schema';
import { NotificationEventCreateManyProductInputEnvelopeObjectSchema } from './NotificationEventCreateManyProductInputEnvelope.schema';
import { NotificationEventWhereUniqueInputObjectSchema } from './NotificationEventWhereUniqueInput.schema';
import { NotificationEventUpdateWithWhereUniqueWithoutProductInputObjectSchema } from './NotificationEventUpdateWithWhereUniqueWithoutProductInput.schema';
import { NotificationEventUpdateManyWithWhereWithoutProductInputObjectSchema } from './NotificationEventUpdateManyWithWhereWithoutProductInput.schema';
import { NotificationEventScalarWhereInputObjectSchema } from './NotificationEventScalarWhereInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventUpdateManyWithoutProductNestedInput>;
export const NotificationEventUpdateManyWithoutProductNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => NotificationEventCreateWithoutProductInputObjectSchema),
    z.lazy(() => NotificationEventCreateWithoutProductInputObjectSchema).array(),
    z.lazy(() => NotificationEventUncheckedCreateWithoutProductInputObjectSchema),
    z.lazy(() => NotificationEventUncheckedCreateWithoutProductInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => NotificationEventCreateOrConnectWithoutProductInputObjectSchema),
    z.lazy(() => NotificationEventCreateOrConnectWithoutProductInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => NotificationEventUpsertWithWhereUniqueWithoutProductInputObjectSchema),
    z.lazy(() => NotificationEventUpsertWithWhereUniqueWithoutProductInputObjectSchema).array()]).optional(), createMany: z.lazy(() => NotificationEventCreateManyProductInputEnvelopeObjectSchema).optional(), set: z.union([z.lazy(() => NotificationEventWhereUniqueInputObjectSchema),
    z.lazy(() => NotificationEventWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => NotificationEventWhereUniqueInputObjectSchema),
    z.lazy(() => NotificationEventWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => NotificationEventWhereUniqueInputObjectSchema),
    z.lazy(() => NotificationEventWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => NotificationEventWhereUniqueInputObjectSchema),
    z.lazy(() => NotificationEventWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => NotificationEventUpdateWithWhereUniqueWithoutProductInputObjectSchema),
    z.lazy(() => NotificationEventUpdateWithWhereUniqueWithoutProductInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => NotificationEventUpdateManyWithWhereWithoutProductInputObjectSchema),
    z.lazy(() => NotificationEventUpdateManyWithWhereWithoutProductInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => NotificationEventScalarWhereInputObjectSchema),
    z.lazy(() => NotificationEventScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
