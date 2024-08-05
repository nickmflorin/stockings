/* eslint-disable */
import { z } from 'zod';
import { NotificationEventConfigCreateWithoutUpdatedByInputObjectSchema } from './NotificationEventConfigCreateWithoutUpdatedByInput.schema';
import { NotificationEventConfigUncheckedCreateWithoutUpdatedByInputObjectSchema } from './NotificationEventConfigUncheckedCreateWithoutUpdatedByInput.schema';
import { NotificationEventConfigCreateOrConnectWithoutUpdatedByInputObjectSchema } from './NotificationEventConfigCreateOrConnectWithoutUpdatedByInput.schema';
import { NotificationEventConfigUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './NotificationEventConfigUpsertWithWhereUniqueWithoutUpdatedByInput.schema';
import { NotificationEventConfigCreateManyUpdatedByInputEnvelopeObjectSchema } from './NotificationEventConfigCreateManyUpdatedByInputEnvelope.schema';
import { NotificationEventConfigWhereUniqueInputObjectSchema } from './NotificationEventConfigWhereUniqueInput.schema';
import { NotificationEventConfigUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './NotificationEventConfigUpdateWithWhereUniqueWithoutUpdatedByInput.schema';
import { NotificationEventConfigUpdateManyWithWhereWithoutUpdatedByInputObjectSchema } from './NotificationEventConfigUpdateManyWithWhereWithoutUpdatedByInput.schema';
import { NotificationEventConfigScalarWhereInputObjectSchema } from './NotificationEventConfigScalarWhereInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventConfigUpdateManyWithoutUpdatedByNestedInput>;
export const NotificationEventConfigUpdateManyWithoutUpdatedByNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => NotificationEventConfigCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => NotificationEventConfigCreateWithoutUpdatedByInputObjectSchema).array(),
    z.lazy(() => NotificationEventConfigUncheckedCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => NotificationEventConfigUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => NotificationEventConfigCreateOrConnectWithoutUpdatedByInputObjectSchema),
    z.lazy(() => NotificationEventConfigCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => NotificationEventConfigUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema),
    z.lazy(() => NotificationEventConfigUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(), createMany: z.lazy(() => NotificationEventConfigCreateManyUpdatedByInputEnvelopeObjectSchema).optional(), set: z.union([z.lazy(() => NotificationEventConfigWhereUniqueInputObjectSchema),
    z.lazy(() => NotificationEventConfigWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => NotificationEventConfigWhereUniqueInputObjectSchema),
    z.lazy(() => NotificationEventConfigWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => NotificationEventConfigWhereUniqueInputObjectSchema),
    z.lazy(() => NotificationEventConfigWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => NotificationEventConfigWhereUniqueInputObjectSchema),
    z.lazy(() => NotificationEventConfigWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => NotificationEventConfigUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema),
    z.lazy(() => NotificationEventConfigUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => NotificationEventConfigUpdateManyWithWhereWithoutUpdatedByInputObjectSchema),
    z.lazy(() => NotificationEventConfigUpdateManyWithWhereWithoutUpdatedByInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => NotificationEventConfigScalarWhereInputObjectSchema),
    z.lazy(() => NotificationEventConfigScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
