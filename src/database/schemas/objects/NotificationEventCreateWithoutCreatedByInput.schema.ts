/* eslint-disable */
import { z } from 'zod';
import { NotificationEventContentTypeSchema } from '../enums/NotificationEventContentType.schema';
import { UserCreateNestedOneWithoutUpdatedNotificationEventsInputObjectSchema } from './UserCreateNestedOneWithoutUpdatedNotificationEventsInput.schema';
import { ProductCreateNestedOneWithoutNotificationEventsInputObjectSchema } from './ProductCreateNestedOneWithoutNotificationEventsInput.schema';
import { UserCreateNestedOneWithoutNotificationEventsInputObjectSchema } from './UserCreateNestedOneWithoutNotificationEventsInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventCreateWithoutCreatedByInput>;
export const NotificationEventCreateWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]), contentType: z.lazy(() => NotificationEventContentTypeSchema), updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdatedNotificationEventsInputObjectSchema), product: z.lazy(() => ProductCreateNestedOneWithoutNotificationEventsInputObjectSchema), user: z.lazy(() => UserCreateNestedOneWithoutNotificationEventsInputObjectSchema)
}).strict() as SchemaType;
