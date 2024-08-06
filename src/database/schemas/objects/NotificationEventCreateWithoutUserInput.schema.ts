/* eslint-disable */
import { z } from 'zod';
import { NotificationEventContentTypeSchema } from '../enums/NotificationEventContentType.schema';
import { UserCreateNestedOneWithoutCreatedNotificationEventsInputObjectSchema } from './UserCreateNestedOneWithoutCreatedNotificationEventsInput.schema';
import { UserCreateNestedOneWithoutUpdatedNotificationEventsInputObjectSchema } from './UserCreateNestedOneWithoutUpdatedNotificationEventsInput.schema';
import { ProductCreateNestedOneWithoutNotificationEventsInputObjectSchema } from './ProductCreateNestedOneWithoutNotificationEventsInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventCreateWithoutUserInput>;
export const NotificationEventCreateWithoutUserInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]), contentType: z.lazy(() => NotificationEventContentTypeSchema), createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatedNotificationEventsInputObjectSchema), updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdatedNotificationEventsInputObjectSchema), product: z.lazy(() => ProductCreateNestedOneWithoutNotificationEventsInputObjectSchema)
}).strict() as SchemaType;
