/* eslint-disable */
import { z } from 'zod';
import { NotificationEventContentTypeSchema } from '../enums/NotificationEventContentType.schema';
import { UserCreateNestedOneWithoutCreatedNotificationEventsInputObjectSchema } from './UserCreateNestedOneWithoutCreatedNotificationEventsInput.schema';
import { UserCreateNestedOneWithoutUpdatedNotificationEventsInputObjectSchema } from './UserCreateNestedOneWithoutUpdatedNotificationEventsInput.schema';
import { UserCreateNestedOneWithoutNotificationEventsInputObjectSchema } from './UserCreateNestedOneWithoutNotificationEventsInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventCreateWithoutProductInput>;
export const NotificationEventCreateWithoutProductInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]), contentType: z.lazy(() => NotificationEventContentTypeSchema), createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatedNotificationEventsInputObjectSchema), updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdatedNotificationEventsInputObjectSchema), user: z.lazy(() => UserCreateNestedOneWithoutNotificationEventsInputObjectSchema)
}).strict() as SchemaType;
