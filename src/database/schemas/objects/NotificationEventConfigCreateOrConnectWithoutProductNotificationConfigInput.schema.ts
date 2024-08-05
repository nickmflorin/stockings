/* eslint-disable */
import { z } from 'zod';
import { NotificationEventConfigWhereUniqueInputObjectSchema } from './NotificationEventConfigWhereUniqueInput.schema';
import { NotificationEventConfigCreateWithoutProductNotificationConfigInputObjectSchema } from './NotificationEventConfigCreateWithoutProductNotificationConfigInput.schema';
import { NotificationEventConfigUncheckedCreateWithoutProductNotificationConfigInputObjectSchema } from './NotificationEventConfigUncheckedCreateWithoutProductNotificationConfigInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventConfigCreateOrConnectWithoutProductNotificationConfigInput>;
export const NotificationEventConfigCreateOrConnectWithoutProductNotificationConfigInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => NotificationEventConfigWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => NotificationEventConfigCreateWithoutProductNotificationConfigInputObjectSchema),
    z.lazy(() => NotificationEventConfigUncheckedCreateWithoutProductNotificationConfigInputObjectSchema)])
}).strict() as SchemaType;
