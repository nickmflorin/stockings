/* eslint-disable */
import { z } from 'zod';
import { NotificationEventConfigWhereUniqueInputObjectSchema } from './NotificationEventConfigWhereUniqueInput.schema';
import { NotificationEventConfigUpdateWithoutProductNotificationConfigInputObjectSchema } from './NotificationEventConfigUpdateWithoutProductNotificationConfigInput.schema';
import { NotificationEventConfigUncheckedUpdateWithoutProductNotificationConfigInputObjectSchema } from './NotificationEventConfigUncheckedUpdateWithoutProductNotificationConfigInput.schema';
import { NotificationEventConfigCreateWithoutProductNotificationConfigInputObjectSchema } from './NotificationEventConfigCreateWithoutProductNotificationConfigInput.schema';
import { NotificationEventConfigUncheckedCreateWithoutProductNotificationConfigInputObjectSchema } from './NotificationEventConfigUncheckedCreateWithoutProductNotificationConfigInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventConfigUpsertWithWhereUniqueWithoutProductNotificationConfigInput>;
export const NotificationEventConfigUpsertWithWhereUniqueWithoutProductNotificationConfigInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => NotificationEventConfigWhereUniqueInputObjectSchema), update: z.union([z.lazy(() => NotificationEventConfigUpdateWithoutProductNotificationConfigInputObjectSchema),
    z.lazy(() => NotificationEventConfigUncheckedUpdateWithoutProductNotificationConfigInputObjectSchema)]), create: z.union([z.lazy(() => NotificationEventConfigCreateWithoutProductNotificationConfigInputObjectSchema),
    z.lazy(() => NotificationEventConfigUncheckedCreateWithoutProductNotificationConfigInputObjectSchema)])
}).strict() as SchemaType;
