/* eslint-disable */
import { z } from 'zod';
import { NotificationEventConfigContentTypeSchema } from '../enums/NotificationEventConfigContentType.schema';
import { UserCreateNestedOneWithoutUpdatedNotificationEventConfigsInputObjectSchema } from './UserCreateNestedOneWithoutUpdatedNotificationEventConfigsInput.schema';
import { ProductNotificationConfigCreateNestedOneWithoutEventConfigsInputObjectSchema } from './ProductNotificationConfigCreateNestedOneWithoutEventConfigsInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.NotificationEventConfigCreateWithoutCreatedByInput>;
export const NotificationEventConfigCreateWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]), contentType: z.lazy(() => NotificationEventConfigContentTypeSchema), updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdatedNotificationEventConfigsInputObjectSchema), productNotificationConfig: z.lazy(() => ProductNotificationConfigCreateNestedOneWithoutEventConfigsInputObjectSchema)
}).strict() as SchemaType;
