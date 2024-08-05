/* eslint-disable */
import { z } from 'zod';
import { NotificationEventConfigCreateWithoutProductNotificationConfigInputObjectSchema } from './NotificationEventConfigCreateWithoutProductNotificationConfigInput.schema';
import { NotificationEventConfigUncheckedCreateWithoutProductNotificationConfigInputObjectSchema } from './NotificationEventConfigUncheckedCreateWithoutProductNotificationConfigInput.schema';
import { NotificationEventConfigCreateOrConnectWithoutProductNotificationConfigInputObjectSchema } from './NotificationEventConfigCreateOrConnectWithoutProductNotificationConfigInput.schema';
import { NotificationEventConfigCreateManyProductNotificationConfigInputEnvelopeObjectSchema } from './NotificationEventConfigCreateManyProductNotificationConfigInputEnvelope.schema';
import { NotificationEventConfigWhereUniqueInputObjectSchema } from './NotificationEventConfigWhereUniqueInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.NotificationEventConfigUncheckedCreateNestedManyWithoutProductNotificationConfigInput>;
export const NotificationEventConfigUncheckedCreateNestedManyWithoutProductNotificationConfigInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => NotificationEventConfigCreateWithoutProductNotificationConfigInputObjectSchema),
    z.lazy(() => NotificationEventConfigCreateWithoutProductNotificationConfigInputObjectSchema).array(),
    z.lazy(() => NotificationEventConfigUncheckedCreateWithoutProductNotificationConfigInputObjectSchema),
    z.lazy(() => NotificationEventConfigUncheckedCreateWithoutProductNotificationConfigInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => NotificationEventConfigCreateOrConnectWithoutProductNotificationConfigInputObjectSchema),
    z.lazy(() => NotificationEventConfigCreateOrConnectWithoutProductNotificationConfigInputObjectSchema).array()]).optional(), createMany: z.lazy(() => NotificationEventConfigCreateManyProductNotificationConfigInputEnvelopeObjectSchema).optional(), connect: z.union([z.lazy(() => NotificationEventConfigWhereUniqueInputObjectSchema),
    z.lazy(() => NotificationEventConfigWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
