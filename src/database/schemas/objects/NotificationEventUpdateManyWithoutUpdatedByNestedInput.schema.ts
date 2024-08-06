/* eslint-disable */
import { z } from 'zod';
import { NotificationEventCreateWithoutUpdatedByInputObjectSchema } from './NotificationEventCreateWithoutUpdatedByInput.schema';
import { NotificationEventUncheckedCreateWithoutUpdatedByInputObjectSchema } from './NotificationEventUncheckedCreateWithoutUpdatedByInput.schema';
import { NotificationEventCreateOrConnectWithoutUpdatedByInputObjectSchema } from './NotificationEventCreateOrConnectWithoutUpdatedByInput.schema';
import { NotificationEventUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './NotificationEventUpsertWithWhereUniqueWithoutUpdatedByInput.schema';
import { NotificationEventCreateManyUpdatedByInputEnvelopeObjectSchema } from './NotificationEventCreateManyUpdatedByInputEnvelope.schema';
import { NotificationEventWhereUniqueInputObjectSchema } from './NotificationEventWhereUniqueInput.schema';
import { NotificationEventUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './NotificationEventUpdateWithWhereUniqueWithoutUpdatedByInput.schema';
import { NotificationEventUpdateManyWithWhereWithoutUpdatedByInputObjectSchema } from './NotificationEventUpdateManyWithWhereWithoutUpdatedByInput.schema';
import { NotificationEventScalarWhereInputObjectSchema } from './NotificationEventScalarWhereInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventUpdateManyWithoutUpdatedByNestedInput>;
export const NotificationEventUpdateManyWithoutUpdatedByNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => NotificationEventCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => NotificationEventCreateWithoutUpdatedByInputObjectSchema).array(),
    z.lazy(() => NotificationEventUncheckedCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => NotificationEventUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => NotificationEventCreateOrConnectWithoutUpdatedByInputObjectSchema),
    z.lazy(() => NotificationEventCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => NotificationEventUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema),
    z.lazy(() => NotificationEventUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(), createMany: z.lazy(() => NotificationEventCreateManyUpdatedByInputEnvelopeObjectSchema).optional(), set: z.union([z.lazy(() => NotificationEventWhereUniqueInputObjectSchema),
    z.lazy(() => NotificationEventWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => NotificationEventWhereUniqueInputObjectSchema),
    z.lazy(() => NotificationEventWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => NotificationEventWhereUniqueInputObjectSchema),
    z.lazy(() => NotificationEventWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => NotificationEventWhereUniqueInputObjectSchema),
    z.lazy(() => NotificationEventWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => NotificationEventUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema),
    z.lazy(() => NotificationEventUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => NotificationEventUpdateManyWithWhereWithoutUpdatedByInputObjectSchema),
    z.lazy(() => NotificationEventUpdateManyWithWhereWithoutUpdatedByInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => NotificationEventScalarWhereInputObjectSchema),
    z.lazy(() => NotificationEventScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
