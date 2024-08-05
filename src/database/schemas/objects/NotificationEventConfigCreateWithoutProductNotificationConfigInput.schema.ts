/* eslint-disable */
import { z } from 'zod';
import { NotificationEventConfigContentTypeSchema } from '../enums/NotificationEventConfigContentType.schema';
import { UserCreateNestedOneWithoutCreatedNotificationEventConfigsInputObjectSchema } from './UserCreateNestedOneWithoutCreatedNotificationEventConfigsInput.schema';
import { UserCreateNestedOneWithoutUpdatedNotificationEventConfigsInputObjectSchema } from './UserCreateNestedOneWithoutUpdatedNotificationEventConfigsInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventConfigCreateWithoutProductNotificationConfigInput>;
export const NotificationEventConfigCreateWithoutProductNotificationConfigInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]), contentType: z.lazy(() => NotificationEventConfigContentTypeSchema), createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatedNotificationEventConfigsInputObjectSchema), updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdatedNotificationEventConfigsInputObjectSchema)
}).strict() as SchemaType;
