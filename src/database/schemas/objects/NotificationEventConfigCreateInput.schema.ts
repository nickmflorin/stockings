/* eslint-disable */
import { z } from 'zod';
import { NotificationEventConfigContentTypeSchema } from '../enums/NotificationEventConfigContentType.schema';
import { UserCreateNestedOneWithoutCreatedNotificationEventConfigsInputObjectSchema } from './UserCreateNestedOneWithoutCreatedNotificationEventConfigsInput.schema';
import { UserCreateNestedOneWithoutUpdatedNotificationEventConfigsInputObjectSchema } from './UserCreateNestedOneWithoutUpdatedNotificationEventConfigsInput.schema';
import { ProductNotificationConfigCreateNestedOneWithoutEventConfigsInputObjectSchema } from './ProductNotificationConfigCreateNestedOneWithoutEventConfigsInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.NotificationEventConfigCreateInput>;
export const NotificationEventConfigCreateInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]), contentType: z.lazy(() => NotificationEventConfigContentTypeSchema), createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatedNotificationEventConfigsInputObjectSchema), updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdatedNotificationEventConfigsInputObjectSchema), productNotificationConfig: z.lazy(() => ProductNotificationConfigCreateNestedOneWithoutEventConfigsInputObjectSchema)
}).strict() as SchemaType;
