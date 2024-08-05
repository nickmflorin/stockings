/* eslint-disable */
import { z } from 'zod';
import { NotificationEventConfigCreateWithoutProductNotificationConfigInputObjectSchema } from './NotificationEventConfigCreateWithoutProductNotificationConfigInput.schema';
import { NotificationEventConfigUncheckedCreateWithoutProductNotificationConfigInputObjectSchema } from './NotificationEventConfigUncheckedCreateWithoutProductNotificationConfigInput.schema';
import { NotificationEventConfigCreateOrConnectWithoutProductNotificationConfigInputObjectSchema } from './NotificationEventConfigCreateOrConnectWithoutProductNotificationConfigInput.schema';
import { NotificationEventConfigUpsertWithWhereUniqueWithoutProductNotificationConfigInputObjectSchema } from './NotificationEventConfigUpsertWithWhereUniqueWithoutProductNotificationConfigInput.schema';
import { NotificationEventConfigCreateManyProductNotificationConfigInputEnvelopeObjectSchema } from './NotificationEventConfigCreateManyProductNotificationConfigInputEnvelope.schema';
import { NotificationEventConfigWhereUniqueInputObjectSchema } from './NotificationEventConfigWhereUniqueInput.schema';
import { NotificationEventConfigUpdateWithWhereUniqueWithoutProductNotificationConfigInputObjectSchema } from './NotificationEventConfigUpdateWithWhereUniqueWithoutProductNotificationConfigInput.schema';
import { NotificationEventConfigUpdateManyWithWhereWithoutProductNotificationConfigInputObjectSchema } from './NotificationEventConfigUpdateManyWithWhereWithoutProductNotificationConfigInput.schema';
import { NotificationEventConfigScalarWhereInputObjectSchema } from './NotificationEventConfigScalarWhereInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.NotificationEventConfigUncheckedUpdateManyWithoutProductNotificationConfigNestedInput>;
export const NotificationEventConfigUncheckedUpdateManyWithoutProductNotificationConfigNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => NotificationEventConfigCreateWithoutProductNotificationConfigInputObjectSchema),
    z.lazy(() => NotificationEventConfigCreateWithoutProductNotificationConfigInputObjectSchema).array(),
    z.lazy(() => NotificationEventConfigUncheckedCreateWithoutProductNotificationConfigInputObjectSchema),
    z.lazy(() => NotificationEventConfigUncheckedCreateWithoutProductNotificationConfigInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => NotificationEventConfigCreateOrConnectWithoutProductNotificationConfigInputObjectSchema),
    z.lazy(() => NotificationEventConfigCreateOrConnectWithoutProductNotificationConfigInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => NotificationEventConfigUpsertWithWhereUniqueWithoutProductNotificationConfigInputObjectSchema),
    z.lazy(() => NotificationEventConfigUpsertWithWhereUniqueWithoutProductNotificationConfigInputObjectSchema).array()]).optional(), createMany: z.lazy(() => NotificationEventConfigCreateManyProductNotificationConfigInputEnvelopeObjectSchema).optional(), set: z.union([z.lazy(() => NotificationEventConfigWhereUniqueInputObjectSchema),
    z.lazy(() => NotificationEventConfigWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => NotificationEventConfigWhereUniqueInputObjectSchema),
    z.lazy(() => NotificationEventConfigWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => NotificationEventConfigWhereUniqueInputObjectSchema),
    z.lazy(() => NotificationEventConfigWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => NotificationEventConfigWhereUniqueInputObjectSchema),
    z.lazy(() => NotificationEventConfigWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => NotificationEventConfigUpdateWithWhereUniqueWithoutProductNotificationConfigInputObjectSchema),
    z.lazy(() => NotificationEventConfigUpdateWithWhereUniqueWithoutProductNotificationConfigInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => NotificationEventConfigUpdateManyWithWhereWithoutProductNotificationConfigInputObjectSchema),
    z.lazy(() => NotificationEventConfigUpdateManyWithWhereWithoutProductNotificationConfigInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => NotificationEventConfigScalarWhereInputObjectSchema),
    z.lazy(() => NotificationEventConfigScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
