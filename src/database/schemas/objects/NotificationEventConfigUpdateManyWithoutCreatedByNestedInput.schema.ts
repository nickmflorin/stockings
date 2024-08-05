/* eslint-disable */
import { z } from 'zod';
import { NotificationEventConfigCreateWithoutCreatedByInputObjectSchema } from './NotificationEventConfigCreateWithoutCreatedByInput.schema';
import { NotificationEventConfigUncheckedCreateWithoutCreatedByInputObjectSchema } from './NotificationEventConfigUncheckedCreateWithoutCreatedByInput.schema';
import { NotificationEventConfigCreateOrConnectWithoutCreatedByInputObjectSchema } from './NotificationEventConfigCreateOrConnectWithoutCreatedByInput.schema';
import { NotificationEventConfigUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from './NotificationEventConfigUpsertWithWhereUniqueWithoutCreatedByInput.schema';
import { NotificationEventConfigCreateManyCreatedByInputEnvelopeObjectSchema } from './NotificationEventConfigCreateManyCreatedByInputEnvelope.schema';
import { NotificationEventConfigWhereUniqueInputObjectSchema } from './NotificationEventConfigWhereUniqueInput.schema';
import { NotificationEventConfigUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from './NotificationEventConfigUpdateWithWhereUniqueWithoutCreatedByInput.schema';
import { NotificationEventConfigUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from './NotificationEventConfigUpdateManyWithWhereWithoutCreatedByInput.schema';
import { NotificationEventConfigScalarWhereInputObjectSchema } from './NotificationEventConfigScalarWhereInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventConfigUpdateManyWithoutCreatedByNestedInput>;
export const NotificationEventConfigUpdateManyWithoutCreatedByNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => NotificationEventConfigCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => NotificationEventConfigCreateWithoutCreatedByInputObjectSchema).array(),
    z.lazy(() => NotificationEventConfigUncheckedCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => NotificationEventConfigUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => NotificationEventConfigCreateOrConnectWithoutCreatedByInputObjectSchema),
    z.lazy(() => NotificationEventConfigCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => NotificationEventConfigUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema),
    z.lazy(() => NotificationEventConfigUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(), createMany: z.lazy(() => NotificationEventConfigCreateManyCreatedByInputEnvelopeObjectSchema).optional(), set: z.union([z.lazy(() => NotificationEventConfigWhereUniqueInputObjectSchema),
    z.lazy(() => NotificationEventConfigWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => NotificationEventConfigWhereUniqueInputObjectSchema),
    z.lazy(() => NotificationEventConfigWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => NotificationEventConfigWhereUniqueInputObjectSchema),
    z.lazy(() => NotificationEventConfigWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => NotificationEventConfigWhereUniqueInputObjectSchema),
    z.lazy(() => NotificationEventConfigWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => NotificationEventConfigUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema),
    z.lazy(() => NotificationEventConfigUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => NotificationEventConfigUpdateManyWithWhereWithoutCreatedByInputObjectSchema),
    z.lazy(() => NotificationEventConfigUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => NotificationEventConfigScalarWhereInputObjectSchema),
    z.lazy(() => NotificationEventConfigScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
