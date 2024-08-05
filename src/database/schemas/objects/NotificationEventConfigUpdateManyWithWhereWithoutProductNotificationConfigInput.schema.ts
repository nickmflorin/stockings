/* eslint-disable */
import { z } from 'zod';
import { NotificationEventConfigScalarWhereInputObjectSchema } from './NotificationEventConfigScalarWhereInput.schema';
import { NotificationEventConfigUpdateManyMutationInputObjectSchema } from './NotificationEventConfigUpdateManyMutationInput.schema';
import { NotificationEventConfigUncheckedUpdateManyWithoutProductNotificationConfigInputObjectSchema } from './NotificationEventConfigUncheckedUpdateManyWithoutProductNotificationConfigInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventConfigUpdateManyWithWhereWithoutProductNotificationConfigInput>;
export const NotificationEventConfigUpdateManyWithWhereWithoutProductNotificationConfigInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => NotificationEventConfigScalarWhereInputObjectSchema), data: z.union([z.lazy(() => NotificationEventConfigUpdateManyMutationInputObjectSchema),
    z.lazy(() => NotificationEventConfigUncheckedUpdateManyWithoutProductNotificationConfigInputObjectSchema)])
}).strict() as SchemaType;
