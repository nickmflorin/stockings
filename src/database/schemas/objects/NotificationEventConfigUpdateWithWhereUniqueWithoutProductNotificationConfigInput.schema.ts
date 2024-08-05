/* eslint-disable */
import { z } from 'zod';
import { NotificationEventConfigWhereUniqueInputObjectSchema } from './NotificationEventConfigWhereUniqueInput.schema';
import { NotificationEventConfigUpdateWithoutProductNotificationConfigInputObjectSchema } from './NotificationEventConfigUpdateWithoutProductNotificationConfigInput.schema';
import { NotificationEventConfigUncheckedUpdateWithoutProductNotificationConfigInputObjectSchema } from './NotificationEventConfigUncheckedUpdateWithoutProductNotificationConfigInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventConfigUpdateWithWhereUniqueWithoutProductNotificationConfigInput>;
export const NotificationEventConfigUpdateWithWhereUniqueWithoutProductNotificationConfigInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => NotificationEventConfigWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => NotificationEventConfigUpdateWithoutProductNotificationConfigInputObjectSchema),
    z.lazy(() => NotificationEventConfigUncheckedUpdateWithoutProductNotificationConfigInputObjectSchema)])
}).strict() as SchemaType;
